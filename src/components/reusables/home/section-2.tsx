import React from 'react'
import Image from 'next/image'

export default function Section2() {
  return (
    <div className="mb-20 w-full h-[588px] backdrop-blur-sm rounded-md p-5 flex flex-row items-center justify-center gap-5 bg-[url('/section2/new-2.jpg')] ">
       <Image
            src='/section2/study-2.jpg'
            alt='study-1'
            width={600}
            height={400}
            className='rounded-lg'
       />
       <div className='w-full p-10 backdrop-blur-md h-[410px]'>
        <h3 className='text-xl'>First of all</h3>
        <h1 className='text-5xl font-bold mt-5'>Empowering Authors <br /> to Achieve Their <br /> Dreams</h1>
        <p className='mt-5'>Discover the power of West Harmony Productions in <br /> helping authors bring their stories to life. Our experienced <br />team combines marketing expertise with skilled writing to <br /> create compelling screenplays and successful marketing <br />campaigns. Join us on this journey of realizing your <br />dreams, one satisfied author at a time.</p>
       </div>
    </div>
  )
}
