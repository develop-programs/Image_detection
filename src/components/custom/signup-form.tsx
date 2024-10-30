"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import axios from "axios"
import { toast } from "sonner"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import React from "react"
import Link from "next/link"
import { signIn } from "next-auth/react"

async function verifyEmail(email: string) {
    throw new Error("Function not implemented yet")
}

const formSchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 3 characters",
    }),
    email: z.string().email(),
    password: z.object({
        password: z.string().min(8, {}),
        confirmPassword: z.string().min(8, {}),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
    }),
})

export default function SignupForm() {
    const [isCodeSent, setIsCodeSent] = React.useState(false)
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: {
                password: "",
                confirmPassword: "",
            },
        },
    })
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        await axios.post(`${process.env.NEXTAUTH_URL}/api/auth`, {
            name: values.name,
            email: values.email,
            password: values.password.password,
        }).then((res) => {
            toast.success("Account created successfully")
        }).catch((err) => {
            toast.error("An error occurred while creating your account")
        })
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>Enter your email and password below to login to your account</CardDescription>
            </CardHeader>
            <CardContent className="w-[30rem] space-y-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full grid gap-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="jhon" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <div className="flex items-center gap-2">
                                            <Input placeholder="example@gmail.com" {...field} />
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button type="button" variant="outline">Verify</Button>
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>Verify Email</DialogTitle>
                                                        <DialogDescription>
                                                            We will send a verification email to your email address. Please check your inbox and spam folder.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    {
                                                        isCodeSent == true ?
                                                            <>
                                                                <InputOTP maxLength={6}>
                                                                    <InputOTPGroup>
                                                                        <InputOTPSlot index={0} />
                                                                        <InputOTPSlot index={1} />
                                                                        <InputOTPSlot index={2} />
                                                                    </InputOTPGroup>
                                                                    <InputOTPSeparator />
                                                                    <InputOTPGroup>
                                                                        <InputOTPSlot index={3} />
                                                                        <InputOTPSlot index={4} />
                                                                        <InputOTPSlot index={5} />
                                                                    </InputOTPGroup>
                                                                </InputOTP>
                                                            </>
                                                            :
                                                            <Button type="button" variant="default" onClick={() => {
                                                                setIsCodeSent(true)
                                                            }}>Send Code</Button>
                                                    }
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password.password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="*******" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password.confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="*******" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Create Account</Button>
                    </form>
                </Form>
                <div className="my-8 flex items-center">
                    <div className="flex-grow border-t border-zinc-700"></div>
                    <span className="px-4 text-sm text-gray-400">OR CONTINUE WITH</span>
                    <div className="flex-grow border-t border-zinc-700"></div>
                </div>
                <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                        Google
                    </Button>
                    <Button variant="outline" className="w-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="size-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1155 5.90131C20.0343 5.79352 19.9475 5.69005 19.8555 5.59131C19.9481 5.34475 20.0184 5.0904 20.0655 4.83131C20.2049 3.8835 20.0839 2.91565 19.7155 2.03131C19.7155 2.03131 18.5955 1.68131 16.0255 3.41131C14.9345 3.11004 13.8074 2.95865 12.6755 2.96131C11.5404 2.95932 10.4102 3.11069 9.31554 3.41131C6.74554 1.66131 5.62554 2.03131 5.62554 2.03131C5.26164 2.9063 5.14072 3.8633 5.27554 4.80131C5.32299 5.07117 5.39667 5.33576 5.49554 5.59131C5.40554 5.69131 5.31554 5.80131 5.23554 5.90131C4.4893 6.83731 4.09319 8.00444 4.11554 9.20131C4.11317 9.48516 4.12652 9.76893 4.15554 10.0513C4.47548 14.4813 7.42554 15.5113 10.2355 15.8313C9.8378 16.2011 9.56811 16.688 9.46554 17.2213C9.37259 17.577 9.32885 17.9437 9.33554 18.3113V19.6209C8.21732 19.7202 7.06906 19.5575 6.71335 18.5595C6.33095 17.6046 5.69701 16.771 4.87888 16.1474C4.81942 16.1149 4.76288 16.0773 4.70988 16.0351C4.63804 15.8462 4.51069 15.6834 4.34458 15.5682C4.17846 15.4529 3.98137 15.3907 3.77922 15.3896H3.77441C3.51001 15.3895 3.25634 15.4942 3.06892 15.6807C2.8815 15.8672 2.77561 16.1203 2.77441 16.3847C2.77051 17.1972 3.5835 17.7216 3.91699 17.9004C4.30592 18.2922 4.61882 18.7528 4.83984 19.2588C5.2041 20.2822 6.26904 21.8369 9.30566 21.6348C9.30666 21.6699 9.30766 21.7031 9.30811 21.7334L9.3125 22.001C9.31247 22.1323 9.33831 22.2623 9.38855 22.3837C9.43879 22.505 9.51245 22.6153 9.60532 22.7081C9.69818 22.801 9.80844 22.8747 9.92978 22.9249C10.0511 22.9752 10.1812 23.001 10.3125 23.001L10.3156 23.0004V23.001H15.0267C15.1581 23.001 15.2881 22.9752 15.4095 22.9249C15.5308 22.8747 15.641 22.801 15.7339 22.7082C15.8268 22.6153 15.9004 22.5051 15.9507 22.3837C16.0009 22.2624 16.0268 22.1323 16.0267 22.001C16.0267 22.001 16.0341 18.8413 16.0341 18.3114C16.0407 17.9438 15.997 17.577 15.9041 17.2214L15.9022 17.2153L15.9056 17.2214C15.897 17.1864 15.8839 17.1578 15.8745 17.1239C15.7628 16.6285 15.5048 16.1782 15.134 15.8313L15.1456 15.8522C15.1388 15.846 15.1324 15.8373 15.1255 15.8313C17.9355 15.5113 20.8655 14.4613 21.1855 10.0513C21.2145 9.76892 21.2279 9.48515 21.2255 9.2013C21.2432 8.00682 20.8515 6.84227 20.1155 5.90131V5.90131Z" fill="black" />
                        </svg>
                        Github
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Button type="button" variant="link" size="default" className="p-0" onClick={() => {
                        signIn()
                    }}>
                        Login
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
