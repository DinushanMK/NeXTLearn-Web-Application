"use client"
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function WelcomePart() {
    const {user}=useUser();
  return (
    <div className='p-12 bg-primary w-[80%] justify-self-center text-white rounded-lg'>
        <div>
            <h2 className='font-bold text-3xl'> Hello, {user?.fullName}</h2>  
            <p className=''>Welcome , Its time to get back and Start Learning New Course</p>
        </div>
        
    </div>
  )
}

export default WelcomePart
