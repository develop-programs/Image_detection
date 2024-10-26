
import React from 'react'

import Back from '@/components/custom/Back'
import PricingCards from '@/components/custom/PricingCards'


export default function page() {
    return (
        <div className='h-screen'>
            <Back />
            <div className='py-6 flex flex-col items-center gap-6'>
                <span className='font-black text-4xl'>Simple, transparent pricing</span>
                <span className='font-medium text-lg'>Choose a plan that works for you</span>
            </div>
            <PricingCards />
        </div>
    )
}