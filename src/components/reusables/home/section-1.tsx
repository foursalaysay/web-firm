import React from 'react'
import VideoPlayer from './VideoPlayer'

export default function Section1() {

  const source : string = '-h_yBTriuaY'

  return (
    <div className='w-full h-[800px] backdrop-blur-sm rounded-md p-5 flex flex-col items-center justify-center gap-5'>
        <h1 className='text-8xl text-center font-bold text-yellow-400'>Empowering Authors</h1>
        <h1 className='text-8xl text-center font-bold'>to Achieve Their Dreams</h1>
        <div className='flex items-center justify-center mt-10'>
          <VideoPlayer videoId={source}/>
        </div>
    </div>
  )
}
