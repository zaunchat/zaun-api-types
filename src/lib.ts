export type APIRateLimitInfo = {
  retry_after: number;
  remaining: number;
  limit: number;
};

export type APIRegisterAccountOptions = {
  username: string;
  password: string;
  invite_code?: string;
  email: string;
};

export type APISession = { user_id: number; token: string; id: number };

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

export type APIMember = {
  roles: number[];
  nickname?: string;
  id: number;
  joined_at: number;
  server_id: number;
};

export type APICreateInviteOptions = { channel_id: number };

export type APICreateRoleOptions = {
  permissions: APIPermissions;
  name: string;
  hoist: boolean;
  color: number;
};

export type APIOverwriteTypes = 'Role' | 'Member';

export type APIChannel = {
  name?: string;
  permissions?: APIPermissions;
  overwrites?: APIOverwrite[];
  parent_id?: number;
  recipients?: number[];
  id: number;
  type: APIChannelTypes;
  owner_id?: number;
  topic?: string;
  server_id?: number;
};

export type APIBadges = number;

export type APIServer = {
  banner?: string;
  description?: string;
  owner_id: number;
  permissions: APIPermissions;
  id: number;
  icon?: string;
  name: string;
};

export type APICreateSessionOptions = { password: string; email: string };

export type APICreateMessageOptions = { channel_id: number; content: string };

export type APIUpdateRoleOptions = {
  name?: string;
  permissions?: APIPermissions;
  color?: number;
  hoist?: boolean;
};

export type APIPermissions = number;

export type APIRole = {
  id: number;
  permissions: APIPermissions;
  hoist: boolean;
  name: string;
  color: number;
  server_id: number;
};

export type APICreateServerChannelOptions = {
  type: APIChannelTypes;
  name: string;
};

export type APIBot = {
  username: string;
  owner_id: number;
  verified: boolean;
  id: number;
};

export type APIUser = {
  avatar?: string;
  username: string;
  id: number;
  password: string;
  email: string;
  badges: APIBadges;
  verified: boolean;
};

export type APICreateServerOptions = { name: string };

export type APIMessage = {
  channel_id: number;
  author_id: number;
  content?: string;
  edited_at?: number;
  id: number;
};

export type APIUpdateMemberOptions = { nickname?: string; roles?: number[] };

export type APIChannelTypes =
  | 'Direct'
  | 'Group'
  | 'Text'
  | 'Voice'
  | 'Category'
  | 'Unknown';

export type APIInvite = {
  channel_id: number;
  server_id?: number;
  id: number;
  uses: number;
  inviter_id: number;
  code: string;
};

export type APICreateServerInviteOptions = { channel_id: number };

export type APIOverwrite = {
  type: APIOverwriteTypes;
  allow: APIPermissions;
  id: number;
  deny: APIPermissions;
};

export type APIEditMessageOptions = { content: string };

export type APICreateGroupOptions = { name: string };

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
