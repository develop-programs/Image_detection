"use client"
import { insertData } from '@/Redux/Reducers/User.reducers'
import { AppDispatch } from '@/Redux/store'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'

export default function UserSession() {
    const dispatch = useDispatch<AppDispatch>()
    const { data: session } = useSession()
    if (session) {
        axios.get(`/api/auth?email=${session.user.email}`).then((res) => {
            const data = {
                id: res.data.data.id,
                name: res.data.data.name,
                email: res.data.data.email,
                isEmailVerified: res.data.data.isEmailVerified,
                image: res.data.data.image,
                credits: res.data.data.subscriptions[0].credit,
                plan: res.data.data.subscriptions[0].plan,
                createdAt: res.data.data.createdAt,
                updatedAt: res.data.data.updatedAt
            }
            dispatch(insertData(data))
        })
        return null
    }
}
