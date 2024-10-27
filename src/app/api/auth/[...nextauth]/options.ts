import { User } from "@/[Database]/models/users.model";
import { connectToDatabase } from "@/[Database]/connectTodatabase";
import CryptoJS from "crypto-js";
import { NextAuthOptions, token } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        await connectToDatabase().catch((error) => {
          return { error: (error as Error).message };
        });
        const user = await User.findOne({ email: credentials?.email });
        if (user) {
          const bytes = CryptoJS.AES.decrypt(
            user.password,
            process.env.SECRET_KEY as string
          );
          const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
          if (originalPassword === credentials?.password) return user;
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
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/api/auth/signIn",
    newUser: "/api/auth/signUp",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token }) {
      // Add property to session, like an access_token from a provider.
      session.user.accessToken = token.accessToken as string;
      return session;
    },
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        console.log(account);
        token.accessToken = account.accessToken as string;
      }
      if (profile) {
        console.log(profile);
      }
      return token;
    },
  },
};
