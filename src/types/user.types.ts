export type UserDataType = {
  avatar: string;
}

export type UserType = Array<{
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}>