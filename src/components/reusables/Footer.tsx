import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='w-full h-[94px] bg-transparent flex justify-between px-32'>
        {/* EMPTY */}
        <div>Logo</div>

        <div className='text-2xl'>
            Title Here
        </div>
        {/* LINKS */}
        <div className='flex flex-row gap-5'>
            <Image
                src='/fb.png'
                alt='fb'
                width={20}
                height={10}
                className='h-8 w-8 filter invert brightness-0'
            />
            <Image
                src='/ig.png'
                alt='ig'
                width={20}
                height={10}
                className='h-8 w-8 filter invert brightness-0'
            />
            <Image
                src='/x.png'
                alt='x'
                width={20}
                height={10}
                className='h-8 w-8 filter invert brightness-0'
            />
        </div>
        
    </div>
  )
}
