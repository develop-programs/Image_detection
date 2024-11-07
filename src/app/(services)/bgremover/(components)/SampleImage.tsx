import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

export default function SampleImage() {
    return (
        <Tabs defaultValue=''>
            <TabsList>
                <TabsTrigger value=''>Original</TabsTrigger>
            </TabsList>
            <TabsContent value=''></TabsContent>
        </Tabs>
    )
}
