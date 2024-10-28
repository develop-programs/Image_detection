"use client";
import React from 'react'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button';

export default function SignInButton(
    { children }: { children: React.ReactNode }
) {
    return (
        <Button onClick={() => signIn()} variant="outline" size={'default'}>
            {children}
        </Button>
    )
}
