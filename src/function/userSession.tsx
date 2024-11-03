"use client"
import { insertData } from '@/Redux/Reducers/User.reducers'
import { AppDispatch } from '@/Redux/store'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'

export default function UserSession() {
    const dispatch = useDispatch<AppDispatch>()
    const { data: session } = useSession()
    if (session) {
        const userData = {
            id: session.user.id,
            name: session.user.name,
            email: session.user.email,
            isEmailVerified: session.user.isEmailVerified,
            image: session.user.image || '',
            credits: session.user.credits,
            isSubscribed: session.user.isSubscribed,
            plan: session.user.plan,
            createdAt: session.user.createdAt,
            updatedAt: session.user.updatedAt,
            // map other properties as needed
        }
        dispatch(insertData(userData))
    }
    return null
}
