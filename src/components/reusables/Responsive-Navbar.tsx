'use client'

import React, { useEffect, useState } from 'react'
import MobileNavbar from './Mobile-Navbar';
import Navbar from './Navbar';

export default function ResNavbar() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // Mobile size threshold
      };
  
      // Check on mount
      handleResize();
  
      // Add event listener for window resize
      window.addEventListener("resize", handleResize);
  
      // Cleanup event listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    
  return (
    <>
        {isMobile ? <MobileNavbar /> : <Navbar />}
    </>
  )
}
