import React from 'react'

export default function VideoPlayer({videoId } : {videoId : string}) {
  return (
    <>
       <iframe
       className='rounded-md w-[300px] lg:w-[600px] h-[250px] lg:h-[400px]'
        // width="600"
        // height="400"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  )
}
