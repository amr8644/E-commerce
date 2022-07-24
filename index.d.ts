declare module "next-auth/client";
declare module "react-file-base64";

export type UserSelect = {
  id?: boolean;
  name?: boolean;
  email?: boolean;
  password?: boolean;
  image?: boolean;
};
