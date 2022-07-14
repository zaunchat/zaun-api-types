export type APIAttachment = {
  content_type: string;
  filename: string;
  height?: number | null;
  id: string;
  size: number;
  width?: number | null;
};

export type APIBot = {
  id: string;
  owner_id: string;
  username: string;
  verified: boolean;
};

export type APIChannel = {
  id: string;
  name?: string | null;
  overwrites?: APIChannelOverwrites;
  owner_id?: string | null;
  parent_id?: string | null;
  permissions?: string | null;
  recipients?: APIChannelRecipients;
  server_id?: string | null;
  topic?: string | null;
  type: APIChannelTypes;
};

export type APIChannelOverwrites = APIOverwrite[] | null;

export type APIChannelRecipients = string[] | null;

export type APIChannelTypes = 0 | 1 | 2 | 3 | 4 | 5;

export type APICreateGroupOptions = { name: string };

export type APICreateInviteOptions = { channel_id: number };

export type APICreateMessageOptions = {
  attachments: APIAttachment[] | null;
  content: string | null;
};

export type APICreateRoleOptions = {
  color: number;
  hoist: boolean;
  name: string;
  permissions: string;
};

export type APICreateServerChannelOptions = {
  name: string;
  type: APIChannelTypes;
};

export type APICreateServerOptions = { name: string };

export type APICreateSessionOptions = { email: string; password: string };

export type APIEditGroupOptions = { name: string | null };

export type APIEditMemberOptions = {
  nickname: string | null;
  roles: number[] | null;
};

export type APIEditMessageOptions = { content: string };

export type APIEditServerChannelOptions = { name: string | null };

export type APIEditServerOptions = { name: string | null };

export type APIInvite = {
  channel_id: string;
  code: string;
  id: string;
  inviter_id: string;
  server_id: string | null;
  uses: number;
};

export type APIMember = {
  id: string;
  joined_at: string;
  nickname: string | null;
  roles: APIMemberRoles;
  server_id: string;
};

export type APIMemberRoles = string[];

export type APIMessage = {
  attachments: APIMessageAttachments;
  author_id: string;
  channel_id: string;
  content: string | null;
  edited_at: string | null;
  id: string;
};

export type APIMessageAttachments = APIAttachment[];

export type APIOverwrite = {
  allow: string;
  deny: string;
  id: string;
  type: APIOverwriteTypes;
};

export type APIOverwriteTypes = 0 | 1;

export type APIRegisterAccountOptions = {
  email: string;
  invite_code: string | null;
  password: string;
  username: string;
};

export type APIRegisterResponse = { pending_verification: boolean };

export type APIRelationshipStatus = 0 | 1 | 2 | 3 | 4;

export type APIRole = {
  color: number;
  hoist: boolean;
  id: string;
  name: string;
  permissions: string;
  server_id: string;
};

export type APIServer = {
  banner: string | null;
  description: string | null;
  icon: string | null;
  id: string;
  name: string;
  owner_id: string;
  permissions: string;
};

export type APISession = { id: string };

export type APIUser = {
  avatar: string | null;
  badges: string;
  id: string;
  relationship: APIRelationshipStatus;
  username: string;
};

export type Routes = {
  path: `/auth/accounts/login`;
  parts: 3;
  method: 'POST';
  response: APISession;
} | {
  path: `/auth/accounts/verify`;
  parts: 3;
  method: 'GET';
  response: undefined;
} | {
  path: `/auth/accounts/register`;
  parts: 3;
  method: 'POST';
  response: APIRegisterResponse;
} | {
  path: `/auth/sessions`;
  parts: 2;
  method: 'POST';
  response: string;
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
  path: `/users`;
  parts: 1;
  method: 'GET';
  response: APIUser[];
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
  path: `/users/${string}/dm`;
  parts: 3;
  method: 'GET';
  response: APIChannel;
} | {
  path: `/users/@me/relationships/${string}`;
  parts: 4;
  method: 'PUT';
  response: undefined;
} | {
  path: `/users/@me/relationships/${string}`;
  parts: 4;
  method: 'POST';
  response: undefined;
} | {
  path: `/users/@me/relationships/${string}`;
  parts: 4;
  method: 'DELETE';
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
  method: 'PATCH';
  response: APIChannel;
} | {
  path: `/channels/${string}/${string}`;
  parts: 3;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/channels/${string}/messages`;
  parts: 3;
  method: 'POST';
  response: APIMessage;
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
  path: `/servers/${string}/invites`;
  parts: 3;
  method: 'GET';
  response: APIInvite[];
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
};
export type GetRoutes = Extract<Routes, { method: 'GET' }>;
export type DeleteRoutes = Extract<Routes, { method: 'DELETE' }>;
export type PostRoutes = Extract<Routes, { method: 'POST' }>;
export type PatchRoutes = Extract<Routes, { method: 'PATCH' }>;
export type PutRoutes = Extract<Routes, { method: 'PUT' }>;
