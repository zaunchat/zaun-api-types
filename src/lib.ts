export type APIBot = {
  id: number;
  owner_id: number;
  username: string;
  verified: boolean;
};

export type APIChannel = {
  id: number;
  name?: string | null;
  overwrites?: APIOverwrite[] | null;
  owner_id?: number | null;
  parent_id?: number | null;
  permissions?: number | null;
  recipients?: number[] | null;
  server_id?: number | null;
  topic?: string | null;
  type: APIChannelTypes;
};

export type APIChannelTypes =
  | 'Direct'
  | 'Group'
  | 'Text'
  | 'Voice'
  | 'Category'
  | 'Unknown';

export type APICreateGroupOptions = { name: string };

export type APICreateInviteOptions = { channel_id: number };

export type APICreateMessageOptions = { content: string };

export type APICreateRoleOptions = {
  color: number;
  hoist: boolean;
  name: string;
  permissions: number;
};

export type APICreateServerChannelOptions = {
  name: string;
  type: APIChannelTypes;
};

export type APICreateServerOptions = { name: string };

export type APICreateSessionOptions = { email: string; password: string };

export type APIEditMemberOptions = {
  nickname: string | null;
  roles: number[] | null;
};

export type APIEditMessageOptions = { content: string };

export type APIEditServerChannelOptions = { name: string | null };

export type APIEditServerOptions = { name: string | null };

export type APIInvite = {
  channel_id: number;
  code: string;
  id: number;
  inviter_id: number;
  server_id?: number | null;
  uses: number;
};

export type APIMember = {
  id: number;
  joined_at: number;
  nickname?: string | null;
  roles: number[];
  server_id: number;
};

export type APIMessage = {
  author_id: number;
  channel_id: number;
  content?: string | null;
  edited_at?: number | null;
  id: number;
};

export type APIOverwrite = {
  allow: number;
  deny: number;
  id: number;
  type: APIOverwriteTypes;
};

export type APIOverwriteTypes = 'Role' | 'Member';

export type APIRegisterAccountOptions = {
  email: string;
  invite_code: string | null;
  password: string;
  username: string;
};

export type APIRole = {
  color: number;
  hoist: boolean;
  id: number;
  name: string;
  permissions: number;
  server_id: number;
};

export type APIServer = {
  banner?: string | null;
  description?: string | null;
  icon?: string | null;
  id: number;
  name: string;
  owner_id: number;
  permissions: number;
};

export type APISession = { id: number; token: string; user_id: number };

export type APIUser = {
  avatar?: string | null;
  badges: number;
  email: string;
  id: number;
  password: string;
  username: string;
  verified: boolean;
};

export type Routes = {
  path: `/auth/accounts/login`;
  parts: 3;
  method: 'POST';
  response: APISession;
} | {
  path: `/auth/accounts/verify/${string}/${string}`;
  parts: 5;
  method: 'GET';
  response: undefined;
} | {
  path: `/auth/accounts/verify/${string}/${string}`;
  parts: 5;
  method: 'PARAMETERS';
  response: undefined;
} | {
  path: `/auth/accounts/register`;
  parts: 3;
  method: 'POST';
  response: APIUser;
} | {
  path: `/auth/sessions`;
  parts: 2;
  method: 'POST';
  response: APISession;
} | {
  path: `/auth/sessions/${string}`;
  parts: 3;
  method: 'GET';
  response: APISession;
} | {
  path: `/auth/sessions/${string}`;
  parts: 3;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/auth/sessions/${string}`;
  parts: 3;
  method: 'PARAMETERS';
  response: undefined;
} | {
  path: `/users/@me`;
  parts: 2;
  method: 'GET';
  response: APIUser;
} | {
  path: `/users/${string}`;
  parts: 2;
  method: 'GET';
  response: APIUser;
} | {
  path: `/users/${string}`;
  parts: 2;
  method: 'PARAMETERS';
  response: undefined;
} | {
  path: `/channels`;
  parts: 1;
  method: 'GET';
  response: APIChannel[];
} | {
  path: `/channels`;
  parts: 1;
  method: 'POST';
  response: APIChannel;
} | {
  path: `/channels/${string}`;
  parts: 2;
  method: 'GET';
  response: APIChannel;
} | {
  path: `/channels/${string}`;
  parts: 2;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/channels/${string}`;
  parts: 2;
  method: 'PARAMETERS';
  response: undefined;
} | {
  path: `/channels/${string}/${string}`;
  parts: 3;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/channels/${string}/${string}`;
  parts: 3;
  method: 'PARAMETERS';
  response: undefined;
} | {
  path: `/channels/${string}/messages`;
  parts: 3;
  method: 'POST';
  response: APIMessage;
} | {
  path: `/channels/${string}/messages`;
  parts: 3;
  method: 'PARAMETERS';
  response: undefined;
} | {
  path: `/channels/${string}/messages/${string}`;
  parts: 4;
  method: 'GET';
  response: APIMessage;
} | {
  path: `/channels/${string}/messages/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/channels/${string}/messages/${string}`;
  parts: 4;
  method: 'PATCH';
  response: APIMessage;
} | {
  path: `/channels/${string}/messages/${string}`;
  parts: 4;
  method: 'PARAMETERS';
  response: undefined;
} | {
  path: `/bots`;
  parts: 1;
  method: 'GET';
  response: APIBot[];
} | {
  path: `/bots`;
  parts: 1;
  method: 'POST';
  response: APIBot;
} | {
  path: `/bots/${string}`;
  parts: 2;
  method: 'GET';
  response: APIBot;
} | {
  path: `/bots/${string}`;
  parts: 2;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/bots/${string}`;
  parts: 2;
  method: 'PARAMETERS';
  response: undefined;
} | {
  path: `/invites`;
  parts: 1;
  method: 'POST';
  response: APIInvite;
} | {
  path: `/invites/${string}`;
  parts: 2;
  method: 'GET';
  response: APIInvite;
} | {
  path: `/invites/${string}`;
  parts: 2;
  method: 'POST';
  response: APIInvite;
} | {
  path: `/invites/${string}`;
  parts: 2;
  method: 'PARAMETERS';
  response: undefined;
} | {
  path: `/servers`;
  parts: 1;
  method: 'GET';
  response: APIServer[];
} | {
  path: `/servers`;
  parts: 1;
  method: 'POST';
  response: APIServer;
} | {
  path: `/servers/${string}`;
  parts: 2;
  method: 'GET';
  response: APIServer;
} | {
  path: `/servers/${string}`;
  parts: 2;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}`;
  parts: 2;
  method: 'PATCH';
  response: APIServer;
} | {
  path: `/servers/${string}`;
  parts: 2;
  method: 'PARAMETERS';
  response: undefined;
} | {
  path: `/servers/${string}/members`;
  parts: 3;
  method: 'GET';
  response: APIMember[];
} | {
  path: `/servers/${string}/members`;
  parts: 3;
  method: 'DELETE';
  response: APIMember;
} | {
  path: `/servers/${string}/members`;
  parts: 3;
  method: 'PARAMETERS';
  response: undefined;
} | {
  path: `/servers/${string}/members/${string}`;
  parts: 4;
  method: 'GET';
  response: APIMember;
} | {
  path: `/servers/${string}/members/${string}`;
  parts: 4;
  method: 'PATCH';
  response: APIMember;
} | {
  path: `/servers/${string}/members/${string}`;
  parts: 4;
  method: 'PARAMETERS';
  response: undefined;
} | {
  path: `/servers/${string}/roles`;
  parts: 3;
  method: 'GET';
  response: APIRole[];
} | {
  path: `/servers/${string}/roles`;
  parts: 3;
  method: 'POST';
  response: APIRole;
} | {
  path: `/servers/${string}/roles`;
  parts: 3;
  method: 'PARAMETERS';
  response: undefined;
} | {
  path: `/servers/${string}/roles/${string}`;
  parts: 4;
  method: 'GET';
  response: APIRole;
} | {
  path: `/servers/${string}/roles/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}/roles/${string}`;
  parts: 4;
  method: 'PATCH';
  response: APIRole;
} | {
  path: `/servers/${string}/roles/${string}`;
  parts: 4;
  method: 'PARAMETERS';
  response: undefined;
} | {
  path: `/servers/${string}/invites`;
  parts: 3;
  method: 'GET';
  response: APIInvite[];
} | {
  path: `/servers/${string}/invites`;
  parts: 3;
  method: 'PARAMETERS';
  response: undefined;
} | {
  path: `/servers/${string}/invites/${string}`;
  parts: 4;
  method: 'GET';
  response: APIInvite;
} | {
  path: `/servers/${string}/invites/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}/invites/${string}`;
  parts: 4;
  method: 'PARAMETERS';
  response: undefined;
} | {
  path: `/servers/${string}/channels`;
  parts: 3;
  method: 'GET';
  response: APIChannel[];
} | {
  path: `/servers/${string}/channels`;
  parts: 3;
  method: 'POST';
  response: APIChannel;
} | {
  path: `/servers/${string}/channels`;
  parts: 3;
  method: 'PARAMETERS';
  response: undefined;
} | {
  path: `/servers/${string}/channels/${string}`;
  parts: 4;
  method: 'GET';
  response: APIChannel;
} | {
  path: `/servers/${string}/channels/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}/channels/${string}`;
  parts: 4;
  method: 'PATCH';
  response: APIChannel;
} | {
  path: `/servers/${string}/channels/${string}`;
  parts: 4;
  method: 'PARAMETERS';
  response: undefined;
};
export type GetRoutes = Extract<Routes, { method: 'GET' }>;
export type DeleteRoutes = Extract<Routes, { method: 'DELETE' }>;
export type PostRoutes = Extract<Routes, { method: 'POST' }>;
export type PatchRoutes = Extract<Routes, { method: 'PATCH' }>;
export type PutRoutes = Extract<Routes, { method: 'PUT' }>;
