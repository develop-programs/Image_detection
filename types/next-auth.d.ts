// next-auth.d.ts

import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken: string;
      id: string;
      name: string;
      email: string;
      image?: string;
      isEmailVerified: boolean;
      createdAt: Date;
      updatedAt: Date;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
    isEmailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    id: string;
    name: string;
    email: string;
    image?: string;
    isEmailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
}