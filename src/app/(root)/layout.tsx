import MobileNav from '@/components/custom/MobileNav'
import Navbar from '@/components/custom/Navbar'
import React from 'react'
export default function Userlayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <main style={{
            position: "relative",
            backgroundImage: "url('./Designer.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-[1px]" />
            <div className="absolute inset-0 w-full z-50">
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
