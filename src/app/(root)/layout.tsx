import MobileNav from '@/components/custom/MobileNav'
import Navbar from '@/components/custom/Navbar'
import React from 'react'
export default function Userlayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <main>
            <div className="absolute inset-0 w-full z-50 h-24">
                <div className="block lg:hidden">
                    <MobileNav />
                </div>
                <div className="hidden lg:block">
                    <Navbar />
                </div>
            </div>
            {children}
        </main>
    )
}
