import React from 'react'

const Slider = () => {

    return (
        <>
            <section className=' relative overflow-hidden h-screen w-full' id='home'>
                <img src={ require('../../assets/images/info-hero-banner.png') }
                    alt="banner-image" loading='lazy' datatype='async'
                    className=' h-full w-full object-cover absolute top-0' />
                <div className="absolute inset-0 bg-black/5"></div>

                {/* Content on Top */ }
                <div className="relative z-10 flex flex-col items-center justify-center 
                h-full text-center text-white px-4 w-full">
                    <div className=' absolute left-0 right-0 top-36'>
                        <h1 className="text-4xl md:text-5xl mb-4 font-medium uppercase">
                            <span className=' font-bold text-5xl'
                                style={ { textShadow: '2px 2px 8px rgba(0,0,0,0.3)' } }>
                                Telanagana Tourism</span>
                        </h1>
                    </div>
                    <div className=' absolute bottom-36 info-welcome'>
                        <h2 className='text-5xl' style={ { textShadow: '2px 2px 8px rgba(0,0,0,0.3)' } }>
                            Welcome to the land of Happiness
                        </h2>
                    </div>
                    {/* <p className='mb-4 text-xl w-2/5 font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */ }
                    {/* <p className=" text-sm mb-3">
                        Building modern web experiences with React & Tailwind CSS
                    </p> */}
                    {/* <button type='button'
                        className='bg-green-700 hover:bg-blue-900 duration-300 ease-in-out transition-all
                         py-4 px-7 rounded-full text-md font-bold uppercase animate-pulse'>
                        Book a Tour</button> */}
                </div>


            </section>
        </>
    )
}
export default Slider