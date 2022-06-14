export type APIBadges = number;

export type APIChannelTypes =
  | 'Direct'
  | 'Group'
  | 'Text'
  | 'Voice'
  | 'Category'
  | 'Unknown';

export type APIBot = {
  owner_id: number;
  username: string;
  id: number;
  verified: boolean;
};

export type APIOverwriteTypes = 'Role' | 'Member';

export type APICreateSessionOptions = { password: string; email: string };

export type APICreateServerChannelOptions = {
  type: APIChannelTypes;
  name: string;
};

export type APIInvite = {
  id: number;
  inviter_id: number;
  code: string;
  channel_id: number;
  server_id?: number;
  uses: number;
};

export type APIUpdateMemberOptions = { nickname?: string; roles?: number[] };

export type APIRegisterAccountOptions = {
  email: string;
  invite_code?: string;
  username: string;
  password: string;
};

export type APIChannel = {
  overwrites?: APIOverwrite[];
  owner_id?: number;
  parent_id?: number;
  permissions?: APIPermissions;
  server_id?: number;
  type: APIChannelTypes;
  recipients?: number[];
  topic?: string;
  name?: string;
  id: number;
};

export type APIMessage = {
  id: number;
  content?: string;
  channel_id: number;
  author_id: number;
  edited_at?: number;
};

export type APIEditMessageOptions = { content: string };

export type APIServer = {
  name: string;
  icon?: string;
  description?: string;
  banner?: string;
  owner_id: number;
  permissions: APIPermissions;
  id: number;
};

export type APISession = { token: string; user_id: number; id: number };

export type APIOverwrite = {
  deny: APIPermissions;
  id: number;
  type: APIOverwriteTypes;
  allow: APIPermissions;
};

export type APICreateGroupOptions = { name: string };

export type APIRole = {
  server_id: number;
  id: number;
  hoist: boolean;
  name: string;
  permissions: APIPermissions;
  color: number;
};

export type APIError = (
  | { RateLimited?: APIRateLimitInfo }
  | 'InvalidBody'
  | 'MissingHeader'
  | 'AccountVerificationRequired'
  | 'InvalidToken'
  | 'EmailAlreadyInUse'
  | 'MissingPermissions'
  | 'EmptyMessage'
  | 'RequireInviteCode'
  | 'InviteAlreadyTaken'
  | 'FailedCaptcha'
  | 'MissingAccess'
  | 'UnknownAccount'
  | 'UnknownBot'
  | 'UnknownChannel'
  | 'UnknownInvite'
  | 'UnknownUser'
  | 'UnknownMessage'
  | 'UnknownServer'
  | 'UnknownSession'
  | 'UnknownRole'
  | 'UnknownMember'
  | 'Unknown'
  | 'MaximumFriends'
  | 'MaximumServers'
  | 'MaximumGroups'
  | 'MaximumRoles'
  | 'MaximumChannels'
  | 'MaximumGroupMembers'
  | 'MaximumBots'
);

export type APICreateMessageOptions = { channel_id: number; content: string };

export type APIMember = {
  nickname?: string;
  roles: number[];
  id: number;
  server_id: number;
  joined_at: number;
};

export type APICreateServerInviteOptions = { channel_id: number };

export type APICreateServerOptions = { name: string };

export type APICreateRoleOptions = {
  color: number;
  permissions: APIPermissions;
  name: string;
  hoist: boolean;
};

export type APIUpdateRoleOptions = {
  color?: number;
  permissions?: APIPermissions;
  hoist?: boolean;
  name?: string;
};

export type APIPermissions = number;

export type APIUser = {
  username: string;
  email: string;
  badges: APIBadges;
  avatar?: string;
  id: number;
  verified: boolean;
  password: string;
};

export type APIRateLimitInfo = {
  limit: number;
  remaining: number;
  retry_after: number;
};

export type APICreateInviteOptions = { channel_id: number };

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
  response: APIServer;
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
