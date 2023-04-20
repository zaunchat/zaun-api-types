import fetch from 'node-fetch'
import fs from 'node:fs/promises'

const OpenAPI = await fetch(
    'https://raw.githubusercontent.com/zaunchat/documentation/master/openapi.json',
)
    .then((r) => r.json());

const components = [];
const routes = [];

const isReference = (x) =>
    typeof x === 'object' && '$ref' in x;

for (let [name, schema] of Object.entries(OpenAPI.components?.schemas)) {
    if (isReference(schema)) {
        schema = OpenAPI.components.schemas[schema.$ref.split('/').pop()];
    }
    components.push(`export type API${name} = ${getType(schema)}`);
}

function getType(schema) {
    if (schema == null) return 'undefined';

    if (isReference(schema)) {
        return 'API' + schema.$ref.split('/').pop();
    }

    const nullable = (type) =>
        type + (schema.nullable ? ' | null' : '');

    const extractedTypes = {};

    if (schema.items) {
        if (Array.isArray(schema.items)) {
            return '[' + schema.items.map((t) => getType(t)).join(', ') + ']';
        }
        return nullable(getType(schema.items) + '[]');
    }

    if (schema.allOf) {
        return nullable(
            '( ' + (schema.allOf).map((x) =>
                getType(x)
            ).join(' & ') + ' )',
        );
    }

    if (schema.anyOf) {
        return '( ' + schema.anyOf.map((x) => getType(x)).join(' | ') + ' )';
    }

    if (schema.oneOf) {
        return '( ' + schema.oneOf.map((x) => getType(x)).join(' | ') + ' )';
    }

    if (schema.enum) return schema.enum.map((e) => `'${e}'`).join(' | ');

    if (
        schema.additionalProperties &&
        typeof schema.additionalProperties !== 'boolean'
    ) {
        return `{ [key: string]: ${getType(schema.additionalProperties)} }`;
    }

    if (schema.properties) {
        for (const [name, prop] of Object.entries(schema.properties)) {
            extractedTypes[schema.required?.includes(name) ? name : `${name}?`] =
                getType(prop);
        }
    }

    if (schema.type === 'integer') schema.type = 'number';
    if (schema.type === 'number' && schema.example != null) {
        schema.type = schema.example;
    }

    if (schema.type && Object.keys(extractedTypes).length === 0) {
        extractedTypes.type = schema.type;
        if (schema.nullable) extractedTypes.type = nullable(extractedTypes.type);
        return extractedTypes.type;
    }

    return '{ ' + Object.entries(extractedTypes).map(([key, value]) => {
        return `${key.replace('r#', '')}: ${value},`;
    }).join(' ') + ' }';
}

for (const [path, methods] of Object.entries(OpenAPI.paths)) {
    for (const [method, data] of Object.entries(methods)) {
        if (
            !['GET', 'POST', 'DELETE', 'PATCH', 'PUT'].includes(method.toUpperCase())
        ) {
            continue;
        }

        const schema = data.responses?.['200']?.content?.['application/json']
            ?.schema;
        const typedResponse = getType(schema);
        const typedPath = path.replace(
            /\{(target|id|user|code|role_id|member|msg|server|message|username|_target|bot|group|channel|invite|session)(_id)?\}/g,
            '${string}',
        );

        routes.push(`{
        path: \`${typedPath}\`
        parts: ${typedPath.split('/').length - 1}
        method: '${method.toUpperCase()}'
        response: ${typedResponse}
      }`);
    }
}


await fs.writeFile(
    'src/lib.d.ts',
    `
  ${components.join('\n\n')}
  
  
  export type Routes = ${routes.join(' | ')}
  export type GetRoutes = Extract<Routes, { method: 'GET' }>
  export type DeleteRoutes = Extract<Routes, { method: 'DELETE' }>
  export type PostRoutes = Extract<Routes, { method: 'POST' }>
  export type PatchRoutes = Extract<Routes, { method: 'PATCH' }>
  export type PutRoutes = Extract<Routes, { method: 'PUT' }>`,
);
