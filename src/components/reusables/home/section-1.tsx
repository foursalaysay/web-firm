import React from 'react'
import VideoPlayer from './VideoPlayer'

export default function Section1() {

  const source : string = '-h_yBTriuaY'

  return (
    <div className='w-[350px] lg:w-full h-[420px] lg:h-[800px] backdrop-blur-sm rounded-md p-2 lg:p-5 flex flex-col lg:justify-center lg:items-center gap-2 lg:gap-5'>
        <h1 className='text-2xl lg:text-7xl text-center font-bold text-yellow-400 '>Empowering Authors</h1>
        <h1 className='text-2xl lg:text-7xl text-center font-bold'>to Achieve Their Dreams</h1>
        <div className='flex items-center justify-center mt-5 lg:mt-10'>
          <VideoPlayer videoId={source}/>
        </div>
    </div>
  )
}
