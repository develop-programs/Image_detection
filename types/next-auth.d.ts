import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      accessToken: string;
      id: string;
      name: string;
      email: string;
      image?: string;
      isEmailVerified: boolean;
      credits: number;
      isSubscribed: boolean;
    } & DefaultSession["user"];
  }
  interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
    isEmailVerified: boolean;
    credits: number;
    isSubscribed: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      accessToken: string;
      name: string;
      email: string;
      image?: string;
      isEmailVerified: boolean;
      credits: number;
      isSubscribed: boolean;
    }
  }
}