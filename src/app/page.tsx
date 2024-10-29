
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import User from "@/components/custom/auth/User";

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
      <User />
    </div>
  )
}
