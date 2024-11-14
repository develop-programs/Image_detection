import { Compare } from '@/components/ui/compare'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

export default function SampleImage() {
    return (
        <Tabs defaultValue=''>
            <TabsList>
                <TabsTrigger value=''>People</TabsTrigger>
                <TabsTrigger value=''>Product</TabsTrigger>
                <TabsTrigger value=''>Animals</TabsTrigger>
                <TabsTrigger value=''>Cars</TabsTrigger>
                <TabsTrigger value=''>Graphics</TabsTrigger>
            </TabsList>
            <TabsContent value=''>
                <Compare
                    firstImage="/senku_original.jpg"
                    secondImage="/senku_removebg.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
                    slideMode="hover"
                />
            </TabsContent>
            <TabsContent value=''>
                <Compare
                    firstImage="/senku_original.jpg"
                    secondImage="/senku_removebg.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
                    slideMode="hover"
                />
            </TabsContent>
            <TabsContent value=''>
                <Compare
                    firstImage="/senku_original.jpg"
                    secondImage="/senku_removebg.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
                    slideMode="hover"
                />
            </TabsContent>
            <TabsContent value=''>
                <Compare
                    firstImage="/senku_original.jpg"
                    secondImage="/senku_removebg.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
                    slideMode="hover"
                />
            </TabsContent>
            <TabsContent value=''>
                <Compare
                    firstImage="/senku_original.jpg"
                    secondImage="/senku_removebg.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
                    slideMode="hover"
                />
            </TabsContent>
        </Tabs>
    )
}
