"use client";
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react'
import { useSelector } from 'react-redux';

export default function UserData() {
    const user = useSelector((state: user) => state.User);
    return (
        <Tabs className='flex h-full' defaultValue='profile'>
            <div className='flex flex-col w-56 gap-4 border-r-2 px-2'>
                <div className='grid gap-2'>
                    <span className='text-2xl font-semibold'>Account</span>
                    <p>Manage your account Info</p>
                </div>
                <TabsList className='max-w-96 flex-col gap-2 p-0'>
                    <TabsTrigger value='profile' className='w-full justify-start gap-3'>
                        <svg width="24" height="24" className='size-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3C9.56586 3 7.59259 4.95716 7.59259 7.37143C7.59259 9.7857 9.56586 11.7429 12 11.7429C14.4341 11.7429 16.4074 9.7857 16.4074 7.37143C16.4074 4.95716 14.4341 3 12 3Z" fill="#363853" />
                            <path d="M14.601 13.6877C12.8779 13.4149 11.1221 13.4149 9.39904 13.6877L9.21435 13.7169C6.78647 14.1012 5 16.1783 5 18.6168C5 19.933 6.07576 21 7.40278 21H16.5972C17.9242 21 19 19.933 19 18.6168C19 16.1783 17.2135 14.1012 14.7857 13.7169L14.601 13.6877Z" fill="#363853" />
                        </svg>

                        Profile
                    </TabsTrigger>
                    <TabsTrigger value='manage' className='w-full justify-start gap-3'>
                        <svg width="24" height="24" className='size-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5653 4.06392C13.6855 2.64536 10.3146 2.64536 7.43472 4.06392C5.58677 4.97418 4.33441 6.77786 4.12365 8.83784L4.0907 9.15985C3.97981 10.2438 3.97058 11.3358 4.06314 12.4214L4.09407 12.7842C4.14474 13.3786 4.17396 13.7215 4.23084 14.0492C4.53972 15.8288 5.46762 17.4397 6.84819 18.5949C7.10241 18.8076 7.38356 19.0039 7.87138 19.3445L8.12226 19.5196C8.77167 19.9731 9.16436 20.2472 9.56572 20.4415C11.104 21.1862 12.896 21.1862 14.4343 20.4415C14.8357 20.2472 15.2283 19.9731 15.8778 19.5196L16.1285 19.3445C16.6164 19.0039 16.8976 18.8076 17.1518 18.5949C18.5324 17.4397 19.4603 15.8288 19.7692 14.0492C19.826 13.7215 19.8553 13.3786 19.9059 12.7842L19.9369 12.4214C20.0294 11.3358 20.0202 10.2438 19.9093 9.15985L19.8764 8.83784C19.6656 6.77786 18.4132 4.97418 16.5653 4.06392ZM14.9705 9.66041C15.2404 9.91477 15.255 10.3419 15.003 10.6144L11.803 14.076C11.6793 14.2098 11.5071 14.2872 11.3258 14.2903C11.1445 14.2935 10.9697 14.2221 10.8415 14.0927L9.01296 12.2466C8.75186 11.9829 8.75186 11.5556 9.01296 11.292C9.27405 11.0284 9.69737 11.0284 9.95846 11.292L11.2977 12.6441L14.0255 9.69331C14.2775 9.42077 14.7005 9.40605 14.9705 9.66041Z" fill="#363853" />
                        </svg>
                        Manage
                    </TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value='profile' className='w-full'>
                <div className='px-4'>
                    <span className='text-lg font-semibold'>Profile details</span>
                </div>
                <div className='px-4 flex justify-between items-center'>
                    <span className='text-base font-bold'>Profile</span>
                    <Avatar>
                        <AvatarImage src={user.image} />
                    </Avatar>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </TabsContent>
            <TabsContent value='manage'>
                Manage
            </TabsContent>
        </Tabs>
    )
}
