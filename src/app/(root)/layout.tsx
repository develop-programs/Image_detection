import Navbar from '@/components/custom/Navbar'
import React from 'react'
export default function Userlayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
