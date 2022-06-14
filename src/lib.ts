export type Overwrite = {
  id: number;
  deny: Permissions;
  allow: Permissions;
  type: OverwriteTypes;
};

export type Role = {
  server_id: number;
  name: string;
  color: number;
  permissions: Permissions;
  id: number;
  hoist: boolean;
};

export type CreateGroupOptions = { name: string };

export type CreateServerOptions = { name: string };

export type Message = {
  id: number;
  channel_id: number;
  author_id: number;
  edited_at?: number;
  content?: string;
};

export type Badges = number;

export type CreateServerInviteOptions = { channel_id: number };

export type RateLimitInfo = {
  limit: number;
  remaining: number;
  retry_after: number;
};

export type Channel = {
  server_id?: number;
  parent_id?: number;
  id: number;
  recipients?: number[];
  overwrites?: Overwrite[];
  name?: string;
  owner_id?: number;
  type: ChannelTypes;
  permissions?: Permissions;
  topic?: string;
};

export type Bot = {
  id: number;
  username: string;
  verified: boolean;
  owner_id: number;
};

export type ChannelTypes =
  | 'Direct'
  | 'Group'
  | 'Text'
  | 'Voice'
  | 'Category'
  | 'Unknown';

export type Session = { token: string; id: number; user_id: number };

export type CreateRoleOptions = {
  hoist: boolean;
  color: number;
  permissions: Permissions;
  name: string;
};

export type CreateSessionOptions = { password: string; email: string };

export type UpdateMemberOptions = { roles?: number[]; nickname?: string };

export type Invite = {
  id: number;
  inviter_id: number;
  channel_id: number;
  server_id?: number;
  uses: number;
  code: string;
};

export type CreateInviteOptions = { channel_id: number };

export type UpdateRoleOptions = {
  permissions?: Permissions;
  name?: string;
  hoist?: boolean;
  color?: number;
};

export type Error = (
  | { ValidationFailed?: { error: ValidationError } }
  | { RateLimited?: RateLimitInfo }
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

export type Member = {
  nickname?: string;
  id: number;
  joined_at: number;
  server_id: number;
  roles: number[];
};

export type CreateServerChannelOptions = { name: string; type: ChannelTypes };

export type ValidationError = object;

export type RegisterAccountOptions = {
  username: string;
  password: string;
  email: string;
  invite_code?: string;
};

export type Permissions = number;

export type User = {
  avatar?: string;
  password: string;
  email: string;
  id: number;
  badges: Badges;
  verified: boolean;
  username: string;
};

export type OverwriteTypes = 'Role' | 'Member';

export type Server = {
  permissions: Permissions;
  id: number;
  description?: string;
  banner?: string;
  name: string;
  icon?: string;
  owner_id: number;
};

export type EditMessageOptions = { content: string };

export type CreateMessageOptions = { channel_id: number; content: string };

export type Routes = {
  path: `/auth/accounts/register`;
  parts: 3;
  method: 'POST';
  response: User;
} | {
  path: `/auth/accounts/verify/${string}/${string}`;
  parts: 5;
  method: 'GET';
  response: undefined;
} | {
  path: `/auth/sessions`;
  parts: 2;
  method: 'GET';
  response: Session[];
} | {
  path: `/auth/sessions`;
  parts: 2;
  method: 'POST';
  response: Session;
} | {
  path: `/auth/sessions/${string}`;
  parts: 3;
  method: 'GET';
  response: Session;
} | {
  path: `/auth/sessions/${string}`;
  parts: 3;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/bots`;
  parts: 1;
  method: 'GET';
  response: Bot[];
} | {
  path: `/bots`;
  parts: 1;
  method: 'POST';
  response: undefined;
} | {
  path: `/bots/${string}`;
  parts: 2;
  method: 'GET';
  response: Bot;
} | {
  path: `/bots/${string}`;
  parts: 2;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/channels`;
  parts: 1;
  method: 'GET';
  response: Channel[];
} | {
  path: `/channels`;
  parts: 1;
  method: 'POST';
  response: Channel;
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
  response: Channel;
} | {
  path: `/channels/${string}`;
  parts: 2;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/invites`;
  parts: 1;
  method: 'POST';
  response: Invite;
} | {
  path: `/invites/${string}`;
  parts: 2;
  method: 'GET';
  response: Invite;
} | {
  path: `/invites/${string}`;
  parts: 2;
  method: 'POST';
  response: undefined;
} | {
  path: `/messages`;
  parts: 1;
  method: 'POST';
  response: Message;
} | {
  path: `/messages/${string}`;
  parts: 2;
  method: 'GET';
  response: Message;
} | {
  path: `/messages/${string}`;
  parts: 2;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/messages/${string}`;
  parts: 2;
  method: 'PATCH';
  response: Message;
} | {
  path: `/servers`;
  parts: 1;
  method: 'GET';
  response: Server[];
} | {
  path: `/servers`;
  parts: 1;
  method: 'POST';
  response: Server;
} | {
  path: `/servers/${string}`;
  parts: 2;
  method: 'GET';
  response: Server[];
} | {
  path: `/servers/${string}`;
  parts: 2;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}/channels`;
  parts: 3;
  method: 'POST';
  response: Channel;
} | {
  path: `/servers/${string}/channels/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}/channels/${string}`;
  parts: 4;
  method: 'PATCH';
  response: Channel;
} | {
  path: `/servers/${string}/invites`;
  parts: 3;
  method: 'GET';
  response: Invite[];
} | {
  path: `/servers/${string}/invites`;
  parts: 3;
  method: 'POST';
  response: Invite;
} | {
  path: `/servers/${string}/invites/${string}`;
  parts: 4;
  method: 'GET';
  response: Invite;
} | {
  path: `/servers/${string}/invites/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}/members`;
  parts: 3;
  method: 'GET';
  response: Member[];
} | {
  path: `/servers/${string}/members/${string}`;
  parts: 4;
  method: 'GET';
  response: Member;
} | {
  path: `/servers/${string}/members/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}/members/${string}`;
  parts: 4;
  method: 'PATCH';
  response: Member;
} | {
  path: `/servers/${string}/roles`;
  parts: 3;
  method: 'GET';
  response: Role[];
} | {
  path: `/servers/${string}/roles`;
  parts: 3;
  method: 'POST';
  response: Role[];
} | {
  path: `/servers/${string}/roles/${string}`;
  parts: 4;
  method: 'GET';
  response: Role;
} | {
  path: `/servers/${string}/roles/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}/roles/${string}`;
  parts: 4;
  method: 'PATCH';
  response: Role[];
} | {
  path: `/users/@me`;
  parts: 2;
  method: 'GET';
  response: User;
} | {
  path: `/users/${string}`;
  parts: 2;
  method: 'GET';
  response: User;
};

export type GetRoutes = Extract<Routes, { method: 'GET' }>;
export type DeleteRoutes = Extract<Routes, { method: 'DELETE' }>;
export type PostRoutes = Extract<Routes, { method: 'POST' }>;
export type PatchRoutes = Extract<Routes, { method: 'PATCH' }>;
export type PutRoutes = Extract<Routes, { method: 'PUT' }>;
