import React from 'react'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import SignInButton from './signIn-btn'
import SignOutButton from './signOut-btn'

async function FetchSession() {
    const session = await getServerSession(options)
    return session
}

export default async function User() {
    const session = await FetchSession()
    return (
        <div>
            {
                session ? <SignOutButton>SignOut</SignOutButton> : <SignInButton>Sign In</SignInButton>
            }
        </div>
    )
}
