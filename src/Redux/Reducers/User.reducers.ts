import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "@/Redux/store"

// Define a type for the slice state
interface UserData {
    id: string;
    name: string;
    email: string;
    image: string;
    isEmailVerified: boolean;
    credits: number;
    isSubscribed: boolean;
    plan: string;
    createdAt: Date;
    updatedAt: Date;
}

// Define the initial state using that type
const initialState: UserData = {
    id: "",
    name: "",
    email: "",
    isEmailVerified: false,
    image: "",
    credits: 0,
    isSubscribed: false,
    plan: "",
    createdAt: new Date(),
    updatedAt: new Date()
}

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        insertData: (state, action: PayloadAction<UserData>) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.email = action.payload.email
            state.isEmailVerified = action.payload.isEmailVerified
            state.image = action.payload.image
            state.credits = action.payload.credits
            state.isSubscribed = action.payload.isSubscribed
            state.plan = action.payload.plan
            state.createdAt = action.payload.createdAt
            state.updatedAt = action.payload.updatedAt
        },
        removeData: (state) => {
            state.id = ""
            state.name = ""
            state.email = ""
            state.isEmailVerified = false
            state.image = ""
            state.credits = 0
            state.isSubscribed = false
            state.plan = ""
            state.createdAt = new Date()
            state.updatedAt = new Date()
        },
    },
})

export const { insertData, removeData } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.User

export default counterSlice.reducer