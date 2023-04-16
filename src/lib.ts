
export type APIAttachment = { content_type: string, filename: string, height?: number | null, id: APISnowflake, size: number, width?: number | null, }

export type APIBot = { id: APISnowflake, owner_id: APISnowflake, username: string, verified: boolean, }

export type APIChannel = { id: APISnowflake, name?: string | null, owner_id?: APISnowflake, permissions?: string | null, recipients?: APISnowflake[] | null, type: APIChannelTypes, }

export type APIChannelTypes = ( 0 | 1 | 2 )

export type APICreateGroupOptions = { name: string, }

export type APICreateMessageOptions = { attachments: APIAttachment[] | null, content: string | null, }

export type APICreateSessionOptions = { email: string, password: string, }

export type APIEditGroupOptions = { name: string | null, }

export type APIEditMessageOptions = { content: string, }

export type APIMessage = { attachments: APIAttachment[], author_id: APISnowflake, channel_id: APISnowflake, content: string | null, edited_at: string | null, id: APISnowflake, }

export type APIPresence = { status: APIPresenceStatus, text: string | null, }

export type APIPresenceStatus = ( 0 | 1 | 2 | 3 )

export type APIRegisterAccountOptions = { email: string, invite_code: string | null, password: string, username: string, }

export type APIRegisterResponse = { pending_verification: boolean, }

export type APIRelationshipStatus = ( 0 | 1 | 2 | 3 | 4 )

export type APISession = { id: APISnowflake, }

export type APISnowflake = string

export type APIUser = { avatar: string | null, badges: string, email?: string, id: APISnowflake, password?: string, presence: APIPresence, relations?: { [key: string]: APIRelationshipStatus }, relationship: APIRelationshipStatus, username: string, verified?: boolean, }


export type Routes = {
      path: `/auth/accounts/login`
      parts: 3
      method: 'POST'
      response: APISession
    } | {
      path: `/auth/accounts/verify`
      parts: 3
      method: 'GET'
      response: undefined
    } | {
      path: `/auth/accounts/register`
      parts: 3
      method: 'POST'
      response: APIRegisterResponse
    } | {
      path: `/auth/sessions`
      parts: 2
      method: 'POST'
      response: string
    } | {
      path: `/auth/sessions/${string}`
      parts: 3
      method: 'GET'
      response: APISession
    } | {
      path: `/auth/sessions/${string}`
      parts: 3
      method: 'DELETE'
      response: undefined
    } | {
      path: `/users`
      parts: 1
      method: 'GET'
      response: APIUser[]
    } | {
      path: `/users/@me`
      parts: 2
      method: 'GET'
      response: APIUser
    } | {
      path: `/users/${string}`
      parts: 2
      method: 'GET'
      response: APIUser
    } | {
      path: `/users/${string}/dm`
      parts: 3
      method: 'GET'
      response: APIChannel
    } | {
      path: `/users/@me/relationships/${string}`
      parts: 4
      method: 'PUT'
      response: undefined
    } | {
      path: `/users/@me/relationships/${string}`
      parts: 4
      method: 'POST'
      response: undefined
    } | {
      path: `/users/@me/relationships/${string}`
      parts: 4
      method: 'DELETE'
      response: undefined
    } | {
      path: `/channels`
      parts: 1
      method: 'GET'
      response: APIChannel[]
    } | {
      path: `/channels`
      parts: 1
      method: 'POST'
      response: APIChannel
    } | {
      path: `/channels/${string}`
      parts: 2
      method: 'GET'
      response: APIChannel
    } | {
      path: `/channels/${string}`
      parts: 2
      method: 'DELETE'
      response: undefined
    } | {
      path: `/channels/${string}`
      parts: 2
      method: 'PATCH'
      response: APIChannel
    } | {
      path: `/channels/${string}/${string}`
      parts: 3
      method: 'DELETE'
      response: undefined
    } | {
      path: `/messages/${string}`
      parts: 2
      method: 'GET'
      response: APIMessage[]
    } | {
      path: `/messages/${string}`
      parts: 2
      method: 'POST'
      response: APIMessage
    } | {
      path: `/messages/${string}/${string}`
      parts: 3
      method: 'GET'
      response: APIMessage
    } | {
      path: `/messages/${string}/${string}`
      parts: 3
      method: 'DELETE'
      response: undefined
    } | {
      path: `/messages/${string}/${string}`
      parts: 3
      method: 'PATCH'
      response: APIMessage
    } | {
      path: `/bots`
      parts: 1
      method: 'GET'
      response: APIBot[]
    } | {
      path: `/bots`
      parts: 1
      method: 'POST'
      response: APIBot
    } | {
      path: `/bots/${string}`
      parts: 2
      method: 'GET'
      response: APIBot
    } | {
      path: `/bots/${string}`
      parts: 2
      method: 'DELETE'
      response: undefined
    }
export type GetRoutes = Extract<Routes, { method: 'GET' }>
export type DeleteRoutes = Extract<Routes, { method: 'DELETE' }>
export type PostRoutes = Extract<Routes, { method: 'POST' }>
export type PatchRoutes = Extract<Routes, { method: 'PATCH' }>
export type PutRoutes = Extract<Routes, { method: 'PUT' }>