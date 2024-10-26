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
                                        item.features.map((feature, index) => (
                                            <div key={index}>
                                                {feature}
                                            </div>
                                        ))
                                    }
                                </div>
                                <Button className={`mt-44 rounded-2xl ${activeTab.index == index ? "bg-white hover:bg-white/90 text-black" : "bg-blue-700 hover:bg-blue-700/90 text-white"}`}>Choose Plan</Button>
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
                                        item.features.map((feature, index) => (
                                            <div key={index}>
                                                {feature}
                                            </div>
                                        ))
                                    }
                                </div>
                                <Button className={`mt-44 rounded-2xl ${activeTab.index == index ? "bg-white hover:bg-white/90 text-black" : "bg-blue-700 hover:bg-blue-700/90 text-white"}`}>Choose Plan</Button>
                            </div>
                        ))
                    }
                </TabsContent>
            </div>
        </Tabs>
    )
}
