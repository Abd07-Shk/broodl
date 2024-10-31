'use client'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { useAuth } from '@/context/AuthContext'

export default function CallToAction() {
    const { currentUser } = useAuth()

    if (currentUser) {
        return (
            <div className='max-w-[600px] mx-auto w-full'>
                <Link href={'/dashboard'}>
                    <Button dark full text="Go to dashboard" className="text-teal-600 border-teal-500" />
                </Link>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-2 gap-4 w-fit mx-auto'>
            <Link href={'/dashboard'}>
                <Button text="Sign Up" className="text-teal-600 border-teal-500" />
            </Link>
            <Link href={'/dashboard'}>
                <Button text="Login" dark className="text-teal-600 border-teal-500" />
            </Link>
        </div>
    )
}