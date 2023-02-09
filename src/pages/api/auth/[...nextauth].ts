import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../../lib/prisma";

const {
   FACEBOOK_CLIENT_ID = "",
   FACEBOOK_CLIENT_SECRET = "",
   GOOGLE_CLIENT_ID = "",
   GOOGLE_CLIENT_SECRET = "",
   JWT_SECRET = "",
} = process.env;

export default NextAuth({
   adapter: PrismaAdapter(prisma),
   providers: [
      GoogleProvider({
         clientId: GOOGLE_CLIENT_ID,
         clientSecret: GOOGLE_CLIENT_SECRET,
         checks: ["pkce", "state"],
      }),
   ],
   secret: JWT_SECRET,
});
