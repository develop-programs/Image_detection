import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import SignInButton from './signIn-btn'

export default async function User() {
    const session = await getServerSession(options)

    if (session) {
        return (
            <div>
                <h1>Welcome {session.user.name}</h1>
            </div>
        )
    }

    return (
        <div>
            <SignInButton>
                Sign In
            </SignInButton>
        </div>
    )
}
