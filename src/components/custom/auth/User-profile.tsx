import React from 'react'
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import SignOutButton from "@/components/custom/auth/signOut-btn";
import SignInButton from "@/components/custom/auth/signIn-btn";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import UserData from './user-data';


export default async function UserProfile() {
    const session = await getServerSession(options);
    return (
        <div>
            {
                !session ?
                    <div className='flex gap-3 items-center'>
                        <SignInButton>
                            Login
                        </SignInButton>
                    </div>
                    :
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="ghost" className="p-0 hover:bg-transparent" size="icon">
                                <Avatar className="size-8">
                                    <AvatarImage src={session.user.image} alt={session.user.name} />
                                    <AvatarFallback>{session.user.name}</AvatarFallback>
                                </Avatar>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[20rem] p-2" align="end" side="bottom">
                            <div className='flex items-center gap-4'>
                                <div>
                                    <Avatar className="size-8">
                                        <AvatarImage src={session.user.image} alt={session.user.name} />
                                        <AvatarFallback>{session.user.name}</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div>
                                    <span className='text-sm font-semibold'>{session.user.name}</span>
                                    <p className='text-xs'>{session.user.name.split(" ")[0]}</p>
                                </div>
                            </div>
                            <Separator className="my-2" />
                            <div className="space-y-2">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="ghost" className="w-full justify-start">
                                            Manage Account
                                        </Button>
                                    </DialogTrigger>
                                    <Separator className="my-2" />
                                    <DialogContent className="max-w-[50rem] h-[40rem] flex flex-wrap">
                                        <div className='w-full'>
                                            <UserData />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                                <SignOutButton>Sign Out</SignOutButton>
                            </div>
                        </PopoverContent>
                    </Popover>
            }
        </div>
    )
}
