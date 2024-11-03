"use client";
import { store } from '@/Redux/store';
import { Provider } from 'react-redux';
import React from 'react'

export default function ReduxSessionProvider(
    { children }: { children: React.ReactNode }
) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
