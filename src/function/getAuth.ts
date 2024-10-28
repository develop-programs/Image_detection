import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export async function getAuth() {
  const session = await getServerSession(options);
  if (session) {
    return session;
  }
  return null;
}
