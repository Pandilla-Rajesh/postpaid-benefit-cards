import _default from '@emotion/styled'
import React from 'react'

const VideoPage = () => {

    return (
        <>
            <section className='hero-video'>
                <div>
                    <video autoplay="true" loop="true"
                        className='bg-video absolute left-1/2 top-1/2 w-full h-full object-cover
                          translate-x-1/2 translate-y-1/2'>
                        <source src='https://www.tourism.telangana.gov.in/storage/app/media/Main-video.mp4' type='video/mp4' />
                    </video>
                </div>
            </section>
        </>
    )
}
export default VideoPage