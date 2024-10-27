import React from 'react'
import { getServerSession } from 'next-auth'
import { options } from './api/auth/[...nextauth]/options'
import SignInButton from '@/components/custom/auth/signIn-btn'
import SignOutButton from '@/components/custom/auth/signOut-btn'
export default async function page() {
  const session = await getServerSession(options)
  if (session) {
    console.log(session);
    return (
      <div>
        <h1>Welcome {session.user.name}</h1>
        <SignOutButton>Sign Out</SignOutButton>
      </div>
    )
  }
  return (
    <div>
      <h1>Sign In</h1>
      <SignInButton>Sign In</SignInButton>
    </div>
  )
}
