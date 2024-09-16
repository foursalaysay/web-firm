import React from 'react'
import Image from 'next/image'

export default function Section3() {
  return (
    <div className="w-[350px] lg:w-full h-[710px] lg:h-[588px] backdrop-blur-sm rounded-md p-0 lg:p-5 flex flex-col lg:flex-row items-center justify-center gap-5">
    <div className='w-[300px] lg:w-full h-[400px] lg:h-[400px] p-2 lg:p-10 backdrop-blur-md rounded-md'>
        <h3 className='text-md lg:text-xl'>First of all</h3>
        <h1 className='text-2xl lg:text-5xl font-bold mt-5'>Empowering Authors <br /> <span className='text-yellow-400'>to Achieve Their</span> <br /> Dreams</h1>
        <p className='mt-5 text-sm lg:text-md'>Discover the power of West Harmony Productions in <br /> helping authors bring their stories to life. Our experienced <br />team combines marketing expertise with skilled writing to <br /> create compelling screenplays and successful marketing <br />campaigns. Join us on this journey of realizing your <br />dreams, one satisfied author at a time.</p>
    </div>
    <Image
            src='/section2/study-2.jpg'
            alt='study-1'
            width={600}
            height={400}
            className='rounded-lg w-[300px] lg:w-[600px] h-[250px] lg:h-[400px]'
      />
 </div>
  )
}
