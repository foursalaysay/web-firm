import React from 'react'

export default function VideoPlayer({videoId } : {videoId : string}) {
  return (
    <div className='w-5/6 h-96'>
       <iframe
       className='rounded-md'
        width="600"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
