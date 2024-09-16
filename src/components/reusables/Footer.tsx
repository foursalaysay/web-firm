import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='w-screen h-[94px] bg-transparent'>
        {/* EMPTY */}
        <div></div>

        <div className='text-2xl'>
            Title Here
        </div>
        {/* LINKS */}
        <div className='flex flex-row gap-5'>
            <Image
                src='/fb.png'
                alt='fb'
                width={20}
                height={20}
            />
            <Image
                src='/ig.png'
                alt='ig'
                width={20}
                height={20}
            />
            <Image
                src='/x.png'
                alt='x'
                width={20}
                height={20}
            />
        </div>
        
    </div>
  )
}
