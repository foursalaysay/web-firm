'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust the value as needed
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pathname = usePathname();

  return (
    <div className={`fixed top-0 left-0 flex flex-row px-32 pt-14 w-screen h-[98px] ${scrolled ? 'backdrop-blur-xl  ' : 'bg-transparent'} items-center justify-between transition-colors duration-300 z-50`}>
      <h1 className='text-xl'>Book <span className='text-yellow-400 font-black'>Pub</span></h1>
      <div className='flex flex-row gap-10 text-xl'>
        <Link href='/' className={`${pathname === '/' ? 'underline decoration-yellow-500 underline-offset-8 text-yellow-400 ' : ''}hover:underline hover:text-yellow-400 hover:decoration-yellow-400 hover:underline-offset-8`}>Home</Link>
        <Link href='/about' className={`${pathname.includes('about') ? 'underline decoration-yellow-500 underline-offset-8 text-yellow-400 ' : ''}hover:underline hover:text-yellow-400 hover:decoration-yellow-400 hover:underline-offset-8`}>About</Link>
        <Link href='/authors' className={`${pathname.includes('authors') ? 'underline decoration-yellow-500 underline-offset-8 text-yellow-400 ' : ''}hover:underline hover:text-yellow-400 hover:decoration-yellow-400 hover:underline-offset-8`}>Authors</Link>
        <Link href='/services' className={`${pathname.includes('services') ? 'underline decoration-yellow-500 underline-offset-8 text-yellow-400 ' : ''}hover:underline hover:text-yellow-400 hover:decoration-yellow-400 hover:underline-offset-8`}>Services</Link>
        <Link href='/contacts' className={`${pathname.includes('contacts') ? 'underline decoration-yellow-500 underline-offset-8 text-yellow-400 ' : ''}hover:underline hover:text-yellow-400 hover:decoration-yellow-400 hover:underline-offset-8`}>Contacts</Link>
      </div>
    </div>
  )
}
