import React from 'react'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import SignInButton from './signIn-btn'
import SignOutButton from './signOut-btn'

export default async function User() {
    const session = await getServerSession(options)
    if (session) {
        return (
            <SignOutButton>
                Sign Out
            </SignOutButton>
        )
    }
    return (
        <SignInButton>
            Sign In
        </SignInButton>
    )
}
