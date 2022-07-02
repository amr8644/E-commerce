import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/connectDB";
import Users from "../../../model/userSchema";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await Users.findOne({ email });
        if (!user) {
          throw new Error("Email not found");
        }
        if (user) {
          return signInUser({ password, user });
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
  ],
  jwt: {
    encryption: true,
  },

  adapter: MongoDBAdapter(clientPromise),

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt(token, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    redirect: async (url, _baseUrl) => {
      if (url === "/sign" || url === "/login") {
        return Promise.resolve("/");
      }
      return Promise.resolve("/");
    },
  },
});

const signInUser = async ({ password, user }) => {
  if (!user.password) {
    throw new Error("Please enter password");
  }
  const isMatch = await bcrypt.compare(password, user);
  if (!isMatch) {
    throw new Error("Password not much");
  }
  
  return user;
};
