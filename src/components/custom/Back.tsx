"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export default function Back() {
    const router = useRouter();
    return (
        <Button onClick={() => router.back()} className='fixed top-12 left-12 bg-blue-600 hover:bg-blue-600/90'>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.67644 4.47522C2.00219 3.0865 3.0865 2.00219 4.47522 1.67644C5.47813 1.44119 6.52187 1.44119 7.52479 1.67644C8.9135 2.00219 9.99782 3.0865 10.3236 4.47522C10.5588 5.47813 10.5588 6.52187 10.3236 7.52478C9.99782 8.9135 8.9135 9.99782 7.52478 10.3236C6.52187 10.5588 5.47813 10.5588 4.47522 10.3236C3.08651 9.99782 2.00219 8.9135 1.67644 7.52479C1.44119 6.52187 1.44119 5.47813 1.67644 4.47522Z" stroke="white" />
                <path d="M7.75 6L4.25 6M4.25 6L5.5 7.25M4.25 6L5.5 4.75" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            Back</Button>
    )
}
