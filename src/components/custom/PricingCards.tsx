"use client";
import React from 'react'
import formatPrice from '@/function/RupeeConvertor'
import pricingdata from "@/json/pricing.json"
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type activeTab = {
    type: string,
    index: number
}

export default function PricingCards() {
    const [activeTab, setActiveTab] = React.useState<activeTab>(
        {
            type: 'monthly',
            index: 1
        });
    return (
        <Tabs defaultValue='monthly' className='mt-12 space-y-24'>
            <div className='w-full flex justify-center'>
                <TabsList className='p-3 rounded-full'>
                    {
                        pricingdata.types.map((item, index) => (
                            <TabsTrigger key={index} value={item.value} onChange={() => {
                                setActiveTab({
                                    type: item.value,
                                    index: activeTab.index
                                })
                            }} className='rounded-full'>
                                <span className='font-medium'>{item.name}</span>
                            </TabsTrigger>
                        ))
                    }
                </TabsList>
            </div>
            <div className='flex justify-center'>
                <TabsContent value='monthly' className='flex items-center gap-12 select-none'>
                    {
                        pricingdata.plans.monthly.map((item, index) => (
                            <div key={index} className={`w-80 grid gap-4 px-6 py-4 rounded-2xl ${activeTab.index == index ? "bg-blue-600 text-white" : "text-black"}`} onClick={() => {
                                setActiveTab({
                                    type: 'monthly',
                                    index: index
                                })
                            }}>
                                <div className='flex items-end gap-2'>
                                    <span className='text-4xl font-black'>{formatPrice(item.price)}</span>
                                    <span className='text-lg font-medium'>/monthly</span>
                                </div>
                                <span className='font-medium text-xl'>{item.name}</span>
                                <div className='grid gap-3 mt-6'>
                                    {
                                        item.features.map((feature, findex) => (
                                            <div key={findex} className='flex items-center gap-2'>

                                                {
                                                    activeTab.index == index ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.95043 20.6471C6.17301 19.9956 4.00437 17.827 3.35287 15.0496C2.88237 13.0437 2.88237 10.9563 3.35287 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35287C17.827 4.00437 19.9956 6.173 20.6471 8.95043C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95043 20.6471Z" stroke="#0095FF" strokeWidth="1.5" />
                                                        <path d="M8.95043 20.6471C10.9563 21.1176 13.0437 21.1176 15.0496 20.6471C17.827 19.9956 19.9956 17.827 20.6471 15.0496C21.1176 13.0437 21.1176 10.9563 20.6471 8.95043C19.9956 6.173 17.827 4.00437 15.0496 3.35288C13.0437 2.88237 10.9563 2.88237 8.95043 3.35288C6.173 4.00437 4.00437 6.17301 3.35287 8.95043" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                                        <path d="M9.25 11.75L11.25 13.75L14.75 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg> :
                                                        <svg width="24" height="24" className='size-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.95043 20.6471C6.17301 19.9956 4.00437 17.827 3.35287 15.0496C2.88237 13.0437 2.88237 10.9563 3.35287 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35287C17.827 4.00437 19.9956 6.173 20.6471 8.95043C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95043 20.6471Z" stroke="#0095FF" strokeWidth="1.5" />
                                                            <path d="M8.95043 20.6471C10.9563 21.1176 13.0437 21.1176 15.0496 20.6471C17.827 19.9956 19.9956 17.827 20.6471 15.0496C21.1176 13.0437 21.1176 10.9563 20.6471 8.95043C19.9956 6.173 17.827 4.00437 15.0496 3.35288C13.0437 2.88237 10.9563 2.88237 8.95043 3.35288C6.173 4.00437 4.00437 6.17301 3.35287 8.95043" stroke="#363853" strokeWidth="1.5" strokeLinecap="round" />
                                                            <path d="M9.25 11.75L11.25 13.75L14.75 10" stroke="#0095FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                }
                                                {feature}
                                            </div>
                                        ))
                                    }
                                </div>
                                <Button className={`mt-44 rounded-2xl py-5 font-medium text-base ${activeTab.index == index ? "bg-white hover:bg-white/90 text-black" : "bg-blue-700 hover:bg-blue-700/90 text-white"}`}>Choose Plan</Button>
                            </div>
                        ))
                    }
                </TabsContent>
                <TabsContent value='yearly' className='flex items-center gap-12 select-none'>
                    {
                        pricingdata.plans.monthly.map((item, index) => (
                            <div key={index} className={`w-80 grid gap-4 px-6 py-4 rounded-2xl ${activeTab.index == index ? "bg-blue-600 text-white" : "text-black"}`} onClick={() => {
                                setActiveTab({
                                    type: 'yearly',
                                    index: index
                                })
                            }}>
                                <div className='flex items-end gap-2'>
                                    <span className='text-4xl font-black'>{formatPrice(item.price * 0.7)}</span>
                                    <span className='text-lg font-medium'>/yearly</span>
                                </div>
                                <span className='font-medium text-xl'>{item.name}</span>
                                <div className='grid gap-3 mt-6'>
                                    {
                                        item.features.map((feature, findex) => (
                                            <div key={findex} className='flex items-center gap-2'>

                                                {
                                                    activeTab.index == index ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.95043 20.6471C6.17301 19.9956 4.00437 17.827 3.35287 15.0496C2.88237 13.0437 2.88237 10.9563 3.35287 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35287C17.827 4.00437 19.9956 6.173 20.6471 8.95043C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95043 20.6471Z" stroke="#0095FF" strokeWidth="1.5" />
                                                        <path d="M8.95043 20.6471C10.9563 21.1176 13.0437 21.1176 15.0496 20.6471C17.827 19.9956 19.9956 17.827 20.6471 15.0496C21.1176 13.0437 21.1176 10.9563 20.6471 8.95043C19.9956 6.173 17.827 4.00437 15.0496 3.35288C13.0437 2.88237 10.9563 2.88237 8.95043 3.35288C6.173 4.00437 4.00437 6.17301 3.35287 8.95043" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                                        <path d="M9.25 11.75L11.25 13.75L14.75 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg> :
                                                        <svg width="24" height="24" className='size-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.95043 20.6471C6.17301 19.9956 4.00437 17.827 3.35287 15.0496C2.88237 13.0437 2.88237 10.9563 3.35287 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35287C17.827 4.00437 19.9956 6.173 20.6471 8.95043C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95043 20.6471Z" stroke="#0095FF" strokeWidth="1.5" />
                                                            <path d="M8.95043 20.6471C10.9563 21.1176 13.0437 21.1176 15.0496 20.6471C17.827 19.9956 19.9956 17.827 20.6471 15.0496C21.1176 13.0437 21.1176 10.9563 20.6471 8.95043C19.9956 6.173 17.827 4.00437 15.0496 3.35288C13.0437 2.88237 10.9563 2.88237 8.95043 3.35288C6.173 4.00437 4.00437 6.17301 3.35287 8.95043" stroke="#363853" strokeWidth="1.5" strokeLinecap="round" />
                                                            <path d="M9.25 11.75L11.25 13.75L14.75 10" stroke="#0095FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                }
                                                {feature}
                                            </div>
                                        ))
                                    }
                                </div>
                                <Button className={`mt-44 rounded-2xl py-5 font-medium text-base ${activeTab.index == index ? "bg-white hover:bg-white/90 text-black" : "bg-blue-700 hover:bg-blue-700/90 text-white"}`}>Choose Plan</Button>
                            </div>
                        ))
                    }
                </TabsContent>
            </div>
        </Tabs>
    )
}
