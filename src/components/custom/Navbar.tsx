import React from 'react'
import UserProfile from './auth/User-profile'
import NavigationTabs from './NavigationTabs';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className='flex justify-between p-4'>
            <div className='flex items-center gap-4'>
                <div>
                    <Link href="/">
                        <span className='text-xl font-black'>
                            Photocess
                        </span>
                    </Link>
                </div>
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
