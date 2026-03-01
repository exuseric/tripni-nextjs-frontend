export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string | null;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUser {
  userId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string | null;
}

export interface UpdateUser {
  userId: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string | null;
  emailVerified?: boolean;
}
