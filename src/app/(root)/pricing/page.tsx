import React from 'react'
import PricingCards from '@/components/custom/PricingCards'
import TopUp from '@/components/custom/TopUp'


export default function page() {
    return (
        <div className='h-screen bg-white'>
            <div className='mt-24 py-6 flex flex-col items-center gap-6'>
                <span className='font-black text-4xl'>Simple, transparent pricing</span>
                <span className='font-medium text-lg'>Choose a plan that works for you</span>
            </div>
            <PricingCards />
            <TopUp />
        </div>
    )
}
