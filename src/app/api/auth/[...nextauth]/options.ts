import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { verifyPassword } from "@/function/encryption";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const options: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const user = await prisma.users.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        if (user) {
          const isVerified = verifyPassword(credentials?.password, user.password);
          if (isVerified) {
            return user
          }
        }
        return null;
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  jwt: {
    maxAge: 60 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/api/auth/signIn",
    newUser: "/api/auth/signUp",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user.accessToken = token.accessToken as string;
      session.user.id = token.id as string;

      return session;
    },
    async jwt({ token, account }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        console.log(account);
        token.accessToken = account.access_token;
        token.id = account.id;
      }
      return token;
    },
  },
};
