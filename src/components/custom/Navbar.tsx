import React from 'react'
import UserProfile from './auth/User-profile'
import NavigationTabs from './NavigationTabs';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div className='flex justify-between p-4'>
            <div className='flex items-center gap-12 z-50'>
                <Link href="/" className='flex items-center gap-3'>
                    <Image src='/icon.svg' width={100} height={100} className='size-8' alt='Photocess Logo' />
                    <span className='text-xl font-black z-auto'>
                        Photocess
                    </span>
                </Link>
                <div>
                    <NavigationTabs />
                </div>
            </div>
            <div className='me-6'>
                <UserProfile />
            </div>
        </div>
    )
}
