import { ArrowRight, CloseOutlined, MenuOutlined } from '@mui/icons-material'
import React, { useCallback, useState } from 'react'

const SideBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    // const handleToggle = () => {
    //     setIsOpen(!isOpen)
    // }

    // const scrollToSection = useCallback((id) => {
    //     const element = document.getElementById(id)
    //     if(element) {
    //         element.scrollIntoView({ top: 0, behavior: 'smooth' })
    //     }
    // }, [])

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if(section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <>
            <section className=''>
                <div className='me-0'>
                    <button
                        onClick={ () => setIsOpen(true) }
                        className="p-4 bg-blue-900
                         text-white"
                    >
                        <MenuOutlined />
                    </button>


                    {/* Overlay */ }
                    { isOpen && (
                        <div onClick={ () => setIsOpen(false) }
                            className="fixed inset-0 bg-black/40 z-0"
                        ></div>
                    ) }


                    {/* Sidebar */ }
                    <div
                        className={ `fixed top-0 right-0 h-full w-3/12 bg-white shadow-lg 
                            z-50 transform transition-transform duration-300 
                            ${isOpen ? 'translate-x-0' : 'translate-x-full'
                            }` }
                    >
                        <div className="p-4 border-b flex justify-between items-center">
                            <h2 className="text-4xl font-semibold info-ab-ex">Tstourism</h2>
                            <button onClick={ () => setIsOpen(false) } className="text-green-700">
                                <CloseOutlined />
                            </button>
                        </div>


                        <nav className="p-4 space-y-2">
                            <div className='mb-5'>
                                <button className="text-gray-800 text-xl block transition duration-300 ease-in-out 
                            hover:text-white p-2 rounded hover:bg-green-700 border-b"
                                    onClick={ () => handleScroll('home') }>
                                    <ArrowRight /> Home</button>

                                <button className="text-gray-800 block transition duration-300 ease-in-out 
                            hover:text-white p-2 rounded hover:bg-green-700 text-xl border-b"
                                    onClick={ () => handleScroll('about') }>
                                    <ArrowRight /> About Tstourism </button>

                                <button className="text-gray-800 block transition duration-300 ease-in-out 
                            hover:text-white p-2 rounded hover:bg-green-700 text-xl border-b"
                                    onClick={ () => handleScroll('packages') }>
                                    <ArrowRight /> Packages </button>
                                <button className="text-gray-800 block transition duration-300 ease-in-out 
                            hover:text-white p-2 rounded hover:bg-green-700 text-xl border-b"
                                    onClick={ () => handleScroll('nine-jewels') }>
                                    <ArrowRight /> 9 Jewels</button>

                                <button className="text-gray-800 block transition duration-300 ease-in-out 
                            hover:text-white p-2 rounded hover:bg-green-700 text-xl border-b"
                                    onClick={ () => handleScroll('faqs') }>
                                    <ArrowRight /> Faq's  </button>
                                <button className="text-gray-800 block transition duration-300 ease-in-out 
                            hover:text-white p-2 rounded hover:bg-green-700 text-xl border-b"
                                    onClick={ () => handleScroll('contact') }>
                                    <ArrowRight /> Contact </button>
                            </div>
                            <div>
                                <h2 className='text-3xl mb-2'>Welcome Tstourism</h2>
                                <p className='mb-2 font-normal text-sm text-gray-500'>
                                    Available, But The Majority Have Suffered Alteration In Some Form By Injected Humour, Or
                                </p>
                                <img src={ require('../../assets/images/nine-one.jpg') } loading='lazy'
                                    className='rounded' alt="ts-image" />
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SideBar