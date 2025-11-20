import { AccessTime, ArrowForward, Email, Facebook, KeyboardDoubleArrowRight, LinkedIn, LocalPhone, Twitter, WhatsApp, YouTube } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <section className='bg-gray-800 p-10 info-footer' id='contact'>
                <article className=' container-xl ms-auto'>
                    <div className='flex items-center justify-between pt-3 pb-8 flex-col md:flex-row lg:flex-row'>
                        <div className='flex items-center justify-start mb-5'>
                            <a href="#">
                                <img src={ require('../../assets/images/ts-oop-logo.png') }
                                    className='w-[250px]' loading='lazy' decoding='async'
                                    srcSet={ require('../../assets/images/ts-oop-logo.png') } alt="foot-log" />
                            </a>
                        </div>
                        <ul className='info-ul list-unstyled flex justify-start gap-20 flex-col md:flex-row lg:flex-row'>
                            <li>
                                <div className='w-11 h-11 text-green-600 rounded-full bg-white flex items-center justify-center'>
                                    <Email />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-white text-xl font-semibold mb-1'>send email</span>
                                    <a href="mailto:info@tstourism.com"
                                        className='text-green-500 text-sm font-semibold'>info@tstourism.com</a>
                                </div>
                            </li>

                            <li>
                                <div className='w-11 h-11 text-green-600 rounded-full
                                 bg-white flex items-center justify-center'>
                                    <LocalPhone />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-white text-xl font-semibold mb-1'>Tollfree</span>
                                    <a href="tel:180042546464"
                                        className='text-green-500 text-sm font-semibold'>180042546464</a>
                                </div>
                            </li>

                            <li>
                                <div className='w-11 h-11 text-green-600 rounded-full bg-white flex items-center justify-center'>
                                    <AccessTime fontSize='medium' />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-white text-xl font-semibold mb-1'>Opening Time</span>
                                    <a href="#" className='text-green-500 text-sm font-semibold'>
                                        8:00 AM - 8:00 PM</a>
                                </div>
                            </li>

                        </ul>

                    </div>
                    <hr className="h-[1px] bg-gray-600 border-0 mb-8" />

                    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10'>
                        <div className=''>
                            <h2 className='text-xl font-semibold text-white mb-3'>About Tstourism</h2>
                            <p className='text-gray-300 font-normal text-xl mb-5'>
                                Available, But The Majority Have Suffered Alteration
                                In Some Form By Injected Humour, Or</p>
                            <span>
                                <img src={ require('../../assets/images/haritha-logo.png') }
                                    alt="haritha-logo" loading='lazy' className='w-[180px]' />
                            </span>
                            <div>
                                <h2 className='text-white text-xl font-semibold mb-5'>
                                    Stay Connecte</h2>
                                <ul className='flex list-info gap-2'>

                                    <li className='flex'>
                                        <a href="#" className='text-green-700 text-2xl border border-slate-500 
                                    w-9 h-9 leading-6 bg-white text-center rounded-full'>
                                            <Facebook fontSize='medium text-green-700' />
                                        </a>
                                    </li>
                                    <li className='flex'>
                                        <a href="#" className='text-green-700 text-2xl border border-slate-500 
                                    w-9 h-9 leading-6 bg-white text-center rounded-full'>
                                            <Twitter fontSize='medium text-green-700' />
                                        </a>
                                    </li>

                                    <li className='flex'>
                                        <a href="#" className='text-green-700 text-2xl border border-slate-500 
                                    w-9 h-9 leading-6 bg-white text-center rounded-full'>
                                            <LinkedIn fontSize='medium text-green-700' />
                                        </a>
                                    </li>

                                    <li className='flex'>
                                        <a href="#" className='text-green-700 text-2xl border border-slate-500 
                                    w-9 h-9 leading-6 bg-white text-center rounded-full'>
                                            <YouTube fontSize='medium text-green-700' />
                                        </a>
                                    </li>

                                    <li className='flex'>
                                        <a href="#" className='text-green-700 text-2xl border border-slate-500 
                                    w-9 h-9 leading-6 bg-white text-center rounded-full'>
                                            <WhatsApp fontSize='medium text-green-700' />
                                        </a>
                                    </li>


                                </ul>
                            </div>

                        </div>

                        <div className=''>
                            <h2 className='text-xl font-semibold text-white mb-6'>Destinations</h2>
                            <div>
                                <ul className=' list-unstyled'>

                                    <li className='flex gap-2 items-center mb-5'>
                                        <div className='text-gray-400 w-6 h-6 border
                                         border-gray-400 rounded-full leading-5 text-center'>
                                            <KeyboardDoubleArrowRight fontSize='medium text-slate-400' />
                                        </div>
                                        <a href="#" className='text-gray-400 text-sm'>Hyderabad </a>
                                    </li>

                                    <li className='flex gap-2 items-center mb-5'>
                                        <div className='text-gray-400 w-6 h-6 border
                                         border-gray-400 rounded-full leading-5 text-center'>
                                            <KeyboardDoubleArrowRight fontSize='medium text-slate-400' />
                                        </div>
                                        <a href="#" className='text-gray-400 text-sm'>Bhadrachalam   </a>
                                    </li>
                                    <li className='flex gap-2 items-center mb-5'>
                                        <div className='text-gray-400 w-6 h-6 border
                                         border-gray-400 rounded-full leading-5 text-center'>
                                            <KeyboardDoubleArrowRight fontSize='medium text-slate-400' />
                                        </div>
                                        <a href="#" className='text-gray-400 text-sm'>Vicarabad </a>
                                    </li>

                                    <li className='flex gap-2 items-center mb-5'>
                                        <div className='text-gray-400 w-6 h-6 border
                                         border-gray-400 rounded-full leading-5 text-center'>
                                            <KeyboardDoubleArrowRight fontSize='medium text-slate-400' />
                                        </div>
                                        <a href="#" className='text-gray-400 text-sm'>Warrangal </a>
                                    </li>

                                    <li className='flex gap-2 items-center mb-5'>
                                        <div className='text-gray-400 w-6 h-6 border
                                         border-gray-400 rounded-full leading-5 text-center'>
                                            <KeyboardDoubleArrowRight fontSize='medium text-slate-400' />
                                        </div>
                                        <a href="#" className='text-gray-400 text-sm'>Yadgirigutta </a>
                                    </li>

                                    <li className='flex gap-2 items-center mb-5'>
                                        <div className='text-gray-400 w-6 h-6 border
                                         border-gray-400 rounded-full leading-5 text-center'>
                                            <KeyboardDoubleArrowRight fontSize='medium text-slate-400' />
                                        </div>
                                        <a href="#" className='text-gray-400 text-sm'>Nagarjuna Saga </a>
                                    </li>

                                    <li className='flex gap-2 items-center mb-5'>
                                        <div className='text-gray-400 w-6 h-6 border
                                         border-gray-400 rounded-full leading-5 text-center'>
                                            <KeyboardDoubleArrowRight fontSize='medium text-slate-400' />
                                        </div>
                                        <a href="#" className='text-gray-400 text-sm'>Somasila </a>
                                    </li>

                                    <li className='flex gap-2 items-center mb-5'>
                                        <div className='text-gray-400 w-6 h-6 border
                                         border-gray-400 rounded-full leading-5 text-center'>
                                            <KeyboardDoubleArrowRight fontSize='medium text-slate-400' />
                                        </div>
                                        <a href="#" className='text-gray-400 text-sm'>Tirbal Cluster </a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className=''>
                            <h2 className='text-xl font-semibold text-white mb-6'>Useful Links</h2>
                            <div>
                                <ul className=' list-unstyled'>

                                    <li className='flex gap-2 items-center mb-5'>
                                        <div className='text-gray-400 w-6 h-6 border
                                         border-gray-400 rounded-full leading-5 text-center'>
                                            <KeyboardDoubleArrowRight fontSize='medium text-slate-400' />
                                        </div>
                                        <a href="#" className='text-gray-400 text-sm'>Home </a>
                                    </li>

                                    <li className='flex gap-2 items-center mb-5'>
                                        <div className='text-gray-400 w-6 h-6 border
                                         border-gray-400 rounded-full leading-5 text-center'>
                                            <KeyboardDoubleArrowRight fontSize='medium text-slate-400' />
                                        </div>
                                        <a href="#" className='text-gray-400 text-sm'>9 Jewels</a>
                                    </li>
                                    <li className='flex gap-2 items-center mb-5'>
                                        <div className='text-gray-400 w-6 h-6 border
                                         border-gray-400 rounded-full leading-5 text-center'>
                                            <KeyboardDoubleArrowRight fontSize='medium text-slate-400' />
                                        </div>
                                        <a href="#" className='text-gray-400 text-sm'>About Tstourism </a>
                                    </li>

                                    <li className='flex gap-2 items-center mb-5'>
                                        <div className='text-gray-400 w-6 h-6 border
                                         border-gray-400 rounded-full leading-5 text-center'>
                                            <KeyboardDoubleArrowRight fontSize='medium text-slate-400' />
                                        </div>
                                        <a href="#" className='text-gray-400 text-sm'>Packages </a>
                                    </li>

                                    <li className='flex gap-2 items-center mb-5'>
                                        <div className='text-gray-400 w-6 h-6 border
                                         border-gray-400 rounded-full leading-5 text-center'>
                                            <KeyboardDoubleArrowRight fontSize='medium text-slate-400' />
                                        </div>
                                        <a href="#" className='text-gray-400 text-sm'>Faq's </a>
                                    </li>

                                    <li className='flex gap-2 items-center mb-5'>
                                        <div className='text-gray-400 w-6 h-6 border
                                         border-gray-400 rounded-full leading-5 text-center'>
                                            <KeyboardDoubleArrowRight fontSize='medium text-slate-400' />
                                        </div>
                                        <a href="#" className='text-gray-400 text-sm'>Contact</a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className=''>
                            <h2 className='text-xl font-semibold text-white mb-6'>Newsletter</h2>
                            <div className='mb-5'>
                                <p className='text-xl text-gray-300'>Sign up to searing weekly newsletter to get the latest updates.</p>
                            </div>
                            <div className='flex items-center justify-between bg-white rounded px-2 py-2'>
                                <input type="text" placeholder='Your email address'
                                    className='w-full px-2 py-3 focus:outline-none text-sm
                                    focus:ring-2 focus:ring-green-500 border border-slate-400 rounded-l' />
                                <button className='bg-blue-700 p-3 rounded-r'>
                                    <ArrowForward className='text-white' />
                                </button>
                            </div>
                        </div>

                    </div>

                </article>
            </section>

            <section className='bg-green-600 p-3'>
                <article className='container ms-auto'>
                    <h5 className='text-xl text-gray-100 text-center'>&copy; 2025 All Rights Reserved. Telangana Tourism</h5>
                </article>
            </section>
        </>
    )
}

export default Footer