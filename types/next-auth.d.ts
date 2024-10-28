import NextAuth, { DefaultSession } from "next-auth";

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
    } & DefaultSession["user"];
  }
  interface token {
    accessToken: string;
    name: string;
    email: string;
    image?: string;
  }
}
