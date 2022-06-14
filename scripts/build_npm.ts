import { build, emptyDir } from 'https://deno.land/x/dnt@0.25.3/mod.ts';

if (!Deno.args[0]) {
  console.log('Missing version');
  Deno.exit();
}

await emptyDir('./npm');

await build({
  packageManager: 'pnpm',
  scriptModule: false,
  entryPoints: ['./mod.ts'],
  outDir: './npm',
  shims: {},
  package: {
    name: '@itchatapp/types',
    version: Deno.args[0].replace(/[A-Z]+/gi, ''),
    description: 'ItChat API Types',
    license: 'MIT',
    repository: {
      type: 'git',
      url: 'git+https://github.com/itchatapp/itchat-api-types.git',
    },
    bugs: {
      url: 'https://github.com/itchatapp/itchat-api-types/issues',
    },
    engines: {
      node: '>=16.6.0',
    },
    files: [
      'esm/*',
      'types/*',
    ],
  },
});

Deno.copyFileSync('LICENSE', 'npm/LICENSE');
Deno.copyFileSync('README.md', 'npm/README.md');
