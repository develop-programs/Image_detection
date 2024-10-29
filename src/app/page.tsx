
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import SignOutButton from "@/components/custom/auth/signOut-btn";
import SignInButton from "@/components/custom/auth/signIn-btn";

export default async function page() {
  const session = await getServerSession(options)
  return (
    <div className="h-screen">
      {
        session ?
          <pre>
            <code>
              {JSON.stringify(session.expires, null, 2)}
              {JSON.stringify(session.user, null, 2)}
            </code>
          </pre> : null
      }
      {
        !session ?
          <SignInButton>
            Sign In
          </SignInButton>
          :
          <SignOutButton>
            Sign out
          </SignOutButton>
      }
    </div>
  )
}
