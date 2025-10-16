import { FacebookOutlined, ShareOutlined } from '@mui/icons-material'
import React from 'react'

const LoginAuth =()=>{

    return(

        <section className=''>
                <div className='w-full grid grid-cols-12 gap-0'>
                    {/* left-side-login-form */}
                      <div className=' col-span-12 lg:col-span-8 flex flex-col items-center justify-center relative px-8 py-10 bg-white min-h-dvh'>
                        <div className='absolute left-6 top-6 flex items-center gap-3'>
                            <div className='w-10 h-10'>
                                <img src={require('../../../src/assets/images/band-logo.webp')} alt="brand-logo"
                            loading='lazy' />
                            </div>
                            <h2 className='bg-gradient-to-tr bg-clip-text text-transparent from-fuchsia-800 to-cyan-400 
                            text-2xl font-extrabold text-gray-700'>Postpaid Plans</h2>
                        </div>

                        {/* login-title */}

                         <div className='mt-11 mb-3 text-center'>
                            <h2 className='text-xl mb-2 lg:text-4xl text-gray-800 font-bold'>Login to Your Account</h2>
                            <p className='text-gray-600 text-xl'>Login using social networks</p>
                         </div>

                        {/* end */}

                        {/* social-buttons */}

                         <div className='flex gap-2 mb-6'>
                            
                            <div>
                                <button className='flex items-center justify-center rounded-full bg-[#1877f2]
                                w-10 h-10 text-white hover:scale-110 transition duration-300'>
                                   <FacebookOutlined fontSize="medium"/>
                                </button>
                            </div>

                            <div>
                                <button className='flex items-center justify-center rounded-full bg-[#1877f2]
                                w-10 h-10 text-white hover:scale-110 transition duration-300'>
                                   <ShareOutlined fontSize='medium'/>
                                </button>
                            </div>

                         </div>

                        {/* end */}

                        {/* line-bar */}

                          <div className=' relative flex w-full items-center mb-6 max-w-sm'>
                             <div className='flex-grow border-t border-gray-300'></div>
                             <div className='text-sm text-gray-500 mx-3'>OR</div>
                             <div className='flex-grow border-t border-gray-300'></div>
                          </div>

                        {/* end */}

                        {/* login-form */}

                          <div className='w-full max-w-sm space-y-4'>
                             <div className=' relative'>
                                <input type="text" placeholder='Enter Email' name='email' autoComplete='off'
                               className='w-full px-4 py-4 bg-emerald-200 rounded-lg                                 border border-emerald-300' />
                             </div>
                             <div className=' relative'>
                                <input type="password" placeholder='Enter Password' name='password' autoComplete='off'
                                className='w-full px-4 py-4 bg-emerald-200
                                  border border-emerald-300 rounded-lg' />
                             </div>
                             <div className='flex items-center justify-center'>
                                <button type='submit' className='w-6/12 bg-emerald-600 text-white py-2 rounded-full
                                 transition font-semibold hover:bg-cyan-600'>
                                    Sign In
                                </button>
                             </div>
                          </div>

                        {/* end */}

                     </div>  
                    {/* end */}

                    {/* right-side-signup-section */}

                    <div className='col-span-12 lg:col-span-4 flex flex-col items-center justify-center bg-gradient-to-tr from-emerald-400
                    to-teal-400 p-8 relative'>
                        <h2 className='text-5xl font-sans font-semibold text-white mb-2'>New Here?</h2>
                        <p className='text-sm font-normal text-white text-center'> Sign up and discover a great amount of new opportunities!</p>
                        <div className=' absolute bottom-10 right-10 w-28 h-28 bg-white/10 rotate-45'></div>
                         <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rotate-45"></div>
                          <button className='px-4 py-2 w-4/12 rounded-full mt-2
                            font-bold text-white bg-slate-600'>Sign Up</button>
                    </div>

                    {/* end */}

                </div>
        </section>
    )
}

export default LoginAuth