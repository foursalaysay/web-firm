'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {

    const pathname = usePathname();

  return (
    <div className='flex flex-row px-32 pt-14  w-screen h-[98px] bg-transparent items-center justify-between'>
        <h1 className='text-xl'>Title Here</h1>
        <div className='flex flex-row gap-10 text-xl'>
            <Link href='/' className={`${pathname === '/' ? 'underline decoration-yellow-500 underline-offset-8 text-yellow-400 hover:text-yellow-400 hover:decoration-yellow-400 hover:underline-offset-8' : ''}`}>Home</Link>
            <Link href='/about' className={`${pathname.includes('about') ? 'underline decoration-yellow-500 underline-offset-8 text-yellow-400 hover:text-yellow-400 hover:decoration-yellow-400 hover:underline-offset-8' : ''}`}>About</Link>
            <Link href='/authors' className={`${pathname.includes('authors') ? 'underline decoration-yellow-500 underline-offset-8 text-yellow-400 hover:text-yellow-400 hover:decoration-yellow-400 hover:underline-offset-8' : ''}`}>Authors</Link>
            <Link href='/services' className={`${pathname.includes('services') ? 'underline decoration-yellow-500 underline-offset-8 text-yellow-400 hover:text-yellow-400 hover:decoration-yellow-400 hover:underline-offset-8' : ''}`}>Services</Link>
            <Link href='/contacts' className={`${pathname.includes('contacts') ? 'underline decoration-yellow-500 underline-offset-8 text-yellow-400 hover:text-yellow-400 hover:decoration-yellow-400 hover:underline-offset-8' : ''}`}>Contacts</Link>
        </div>
    </div>
  )
}
