import { configureStore } from '@reduxjs/toolkit'
import User from "@/Redux/Reducers/User.reducers"
// ...

export const store = configureStore({
    reducer: {
        User: User,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch