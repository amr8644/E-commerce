declare module "next-auth/client";

export type UserSelect = {
  id?: boolean;
  name?: boolean;
  email?: boolean;
  password?: boolean;
  image?: boolean;
};
