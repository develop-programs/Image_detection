"use client";
import React from 'react'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button';

export default function SignOutButton(
    { children }: { children: React.ReactNode }
) {
    return (
        <Button onClick={() => signOut()} variant="outline" size={'default'}>
            {children}
        </Button>
    )
}
