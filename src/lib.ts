export type APIOverwrite = {
  id: number;
  deny: APIPermissions;
  allow: APIPermissions;
  type: APIOverwriteTypes;
};

export type APIRole = {
  server_id: number;
  name: string;
  color: number;
  permissions: APIPermissions;
  id: number;
  hoist: boolean;
};

export type APICreateGroupOptions = { name: string };

export type APICreateServerOptions = { name: string };

export type APIMessage = {
  id: number;
  channel_id: number;
  author_id: number;
  edited_at?: number;
  content?: string;
};

export type APIBadges = number;

export type APICreateServerInviteOptions = { channel_id: number };

export type APIRateLimitInfo = {
  limit: number;
  remaining: number;
  retry_after: number;
};

export type APIChannel = {
  server_id?: number;
  parent_id?: number;
  id: number;
  recipients?: number[];
  overwrites?: APIOverwrite[];
  name?: string;
  owner_id?: number;
  type: APIChannelTypes;
  permissions?: APIPermissions;
  topic?: string;
};

export type APIBot = {
  id: number;
  username: string;
  verified: boolean;
  owner_id: number;
};

export type APIChannelTypes =
  | 'Direct'
  | 'Group'
  | 'Text'
  | 'Voice'
  | 'Category'
  | 'Unknown';

export type APISession = { token: string; id: number; user_id: number };

export type APICreateRoleOptions = {
  hoist: boolean;
  color: number;
  permissions: APIPermissions;
  name: string;
};

export type APICreateSessionOptions = { password: string; email: string };

export type APIUpdateMemberOptions = { roles?: number[]; nickname?: string };

export type APIInvite = {
  id: number;
  inviter_id: number;
  channel_id: number;
  server_id?: number;
  uses: number;
  code: string;
};

export type APICreateInviteOptions = { channel_id: number };

export type APIUpdateRoleOptions = {
  permissions?: APIPermissions;
  name?: string;
  hoist?: boolean;
  color?: number;
};

export type APIError = (
  | { ValidationFailed?: { error: APIValidationError } }
  | { RateLimited?: APIRateLimitInfo }
  | 'ParseFailed'
  | 'AccountVerificationRequired'
  | 'InvalidToken'
  | 'MissingHeader'
  | 'EmailAlreadyInUse'
  | 'UsernameTaken'
  | 'FailedCaptcha'
  | 'MissingPermissions'
  | 'MissingAccess'
  | 'EmptyMessage'
  | 'RequireInviteCode'
  | 'InviteAlreadyTaken'
  | 'UnknownAccount'
  | 'UnknownSession'
  | 'UnknownUser'
  | 'UnknownMessage'
  | 'UnknownServer'
  | 'UnknownMember'
  | 'UnknownRole'
  | 'UnknownBot'
  | 'UnknownChannel'
  | 'UnknownInvite'
  | 'Unknown'
);

export type APIMember = {
  nickname?: string;
  id: number;
  joined_at: number;
  server_id: number;
  roles: number[];
};

export type APICreateServerChannelOptions = {
  name: string;
  type: APIChannelTypes;
};

export type APIValidationError = object;

export type APIRegisterAccountOptions = {
  username: string;
  password: string;
  email: string;
  invite_code?: string;
};

export type APIPermissions = number;

export type APIUser = {
  avatar?: string;
  password: string;
  email: string;
  id: number;
  badges: APIBadges;
  verified: boolean;
  username: string;
};

export type APIOverwriteTypes = 'Role' | 'Member';

export type APIServer = {
  permissions: APIPermissions;
  id: number;
  description?: string;
  banner?: string;
  name: string;
  icon?: string;
  owner_id: number;
};

export type APIEditMessageOptions = { content: string };

export type APICreateMessageOptions = { channel_id: number; content: string };

export type Routes = {
  path: `/auth/accounts/register`;
  parts: 3;
  method: 'POST';
  response: APIUser;
} | {
  path: `/auth/accounts/verify/${string}/${string}`;
  parts: 5;
  method: 'GET';
  response: undefined;
} | {
  path: `/auth/sessions`;
  parts: 2;
  method: 'GET';
  response: APISession[];
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
  path: `/bots`;
  parts: 1;
  method: 'GET';
  response: APIBot[];
} | {
  path: `/bots`;
  parts: 1;
  method: 'POST';
  response: undefined;
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
  path: `/channels/join/${string}/${string}`;
  parts: 4;
  method: 'POST';
  response: undefined;
} | {
  path: `/channels/leave/${string}/${string}`;
  parts: 4;
  method: 'POST';
  response: undefined;
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
  response: undefined;
} | {
  path: `/messages`;
  parts: 1;
  method: 'POST';
  response: APIMessage;
} | {
  path: `/messages/${string}`;
  parts: 2;
  method: 'GET';
  response: APIMessage;
} | {
  path: `/messages/${string}`;
  parts: 2;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/messages/${string}`;
  parts: 2;
  method: 'PATCH';
  response: APIMessage;
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
  response: APIServer[];
} | {
  path: `/servers/${string}`;
  parts: 2;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}/channels`;
  parts: 3;
  method: 'POST';
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
  path: `/servers/${string}/invites`;
  parts: 3;
  method: 'GET';
  response: APIInvite[];
} | {
  path: `/servers/${string}/invites`;
  parts: 3;
  method: 'POST';
  response: APIInvite;
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
  path: `/servers/${string}/members`;
  parts: 3;
  method: 'GET';
  response: APIMember[];
} | {
  path: `/servers/${string}/members/${string}`;
  parts: 4;
  method: 'GET';
  response: APIMember;
} | {
  path: `/servers/${string}/members/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
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
  response: APIRole[];
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
  response: APIRole[];
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
};
export type GetRoutes = Extract<Routes, { method: 'GET' }>;
export type DeleteRoutes = Extract<Routes, { method: 'DELETE' }>;
export type PostRoutes = Extract<Routes, { method: 'POST' }>;
export type PatchRoutes = Extract<Routes, { method: 'PATCH' }>;
export type PutRoutes = Extract<Routes, { method: 'PUT' }>;
