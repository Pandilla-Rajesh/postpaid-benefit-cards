import { FacebookOutlined, ShareOutlined, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FALSE } from 'sass'

const LoginAuth = () => {

   const [login, setLogin] = useState({
      userName: '',
      password: ''
   })


   const [loading, setLoading] = useState(false)
   const [error, setError] = useState({})

   const navigate = useNavigate()

   const [showPassword, setShowPassword] = useState(false)
   const toggleVisible = useCallback(() => {
      setLoading(true)
      setShowPassword(!showPassword)
   })

   const loginHandle = useCallback((event) => {
      setLoading(true)
      const { name, value } = event.target
      setLogin({ ...login, [name]: value })
      console.log(login, 'get the user login details')
   }, [login])

   const loginSubmit = useCallback(async (e) => {
      e.preventDefault()
      const errors = {}

      if(!login.userName || !login.userName.trim()) {
         errors.userName = 'Please enter username'
      } else if(!/^[a-zA-Z0-9@]+$/.test(login.userName)) {
         errors.userName = 'username contains numbers and letters'
      } else if(login.userName.length < 10) {
         errors.userName = 'user name should contain 10 letters'
      }

      if(!login.password || !login.password.trim()) {
         errors.password = 'please enter password'
      } else if(login.password.length < 10) {
         errors.password = 'Please enter password must 10 characters'
      }

      if(Object.keys(errors).length === 0) {
         setError({})
         setLoading(true)
         try {
            navigate('/plancards')
            await new Promise((res) => setTimeout(res, 300))
            toast.success('form submited Succesfully')
            setLogin('')

         } catch(err) {
            console.error(err)
            toast.error('Submission Failed')
         } finally {
            setLoading(false)
         }
      } else {
         setError(errors)
      }

   }, [login])


   return (

      <section className=''>
         <div className='w-full grid grid-cols-12 gap-0'>
            {/* left-side-login-form */ }
            <div className=' col-span-12 lg:col-span-9 flex flex-col items-center justify-center relative px-8 py-10 bg-white min-h-dvh'>
               <div className='absolute left-6 top-6 flex items-center gap-3'>
                  <div className='w-10 h-10'>
                     <img src={ require('../../../src/assets/images/band-logo.webp') } alt="brand-logo"
                        loading='lazy' />
                  </div>
                  <h2 className='bg-gradient-to-tr bg-clip-text text-transparent from-fuchsia-800 to-cyan-400 
                            text-2xl font-extrabold text-gray-700'>Postpaid Plans</h2>
               </div>

               {/* login-title */ }

               <div className='mt-11 mb-3 text-center'>
                  <h2 className='text-xl mb-2 lg:text-4xl text-gray-800 font-bold'>Login to Your Account</h2>
                  <p className='text-gray-600 text-sm'>Login using social networks</p>
               </div>

               {/* end */ }

               {/* social-buttons */ }

               <div className='flex gap-2 mb-6'>

                  <div>
                     <button className='flex items-center justify-center rounded-full 
                                bg-gradient-to-tr from-blue-700 to-cyan-400 hover:bg-gradient-to-tr hover:from-cyan-500 hover:to-blue-400
                                w-10 h-10 text-white hover:scale-110 transition duration-300'>
                        <FacebookOutlined fontSize="medium" />
                     </button>
                  </div>

                  <div>
                     <button className='flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-700 to-cyan-400
                                w-10 h-10 text-white hover:scale-110 transition duration-300
                                hover:bg-gradient-to-tr hover:from-cyan-500 hover:to-blue-400'>
                        <ShareOutlined fontSize='medium' />
                     </button>
                  </div>

               </div>

               {/* end */ }

               {/* line-bar */ }

               <div className=' relative flex w-full items-center mb-6 max-w-sm'>
                  <div className='flex-grow border-t border-gray-300'></div>
                  <div className='text-3xl text-fuchsia-500 font-bold mx-3'>OR</div>
                  <div className='flex-grow border-t border-gray-300'></div>
               </div>

               {/* end */ }

               {/* login-form */ }

               <form className='w-full max-w-sm space-y-4' onSubmit={ loginSubmit }>
                  <div className=' relative'>
                     <input type="text" placeholder='Enter Email' name='userName'
                        autoComplete='off' value={ login.userName } onChange={ loginHandle }
                        maxLength={ 10 } minLength={ 6 }
                        className={ `w-full px-4 py-4 bg-emerald-200 rounded-lg border border-emerald-300
                                  focus:outline-none
                               ${error ? '' : 'border-gray-700'}` } />
                     <p>{ error.userName && <small className='text-red-500'>{ error.userName }</small> }</p>
                  </div>
                  <div className=' group block'>
                     <div className=' relative w-full'>
                        <input type={ showPassword ? 'text' : 'password' } placeholder='Enter Password'
                           name='password' autoComplete='off' onChange={ loginHandle } value={ login.password }
                           className={ `w-full px-4 py-4 bg-emerald-200
                                  border border-emerald-300 rounded-lg focus:outline-none
                                  ${error ? '' : 'border-gray-600'}` } />
                        <p>{ error.password && <small className='text-red-500'>{ error.password }</small> }</p>
                        <span className=' absolute right-3 top-4' onClick={ toggleVisible }>
                           { showPassword ? <VisibilityOutlined fontSize='medium' /> :
                              <VisibilityOffOutlined fontSize='medium' /> }
                        </span>
                     </div>
                  </div>
                  <div className='flex items-center justify-center'>
                     <button type='submit' className='w-6/12 bg-emerald-600 text-white py-2 rounded-full
                                 transition font-semibold hover:bg-cyan-600'>
                        Sign In
                     </button>
                  </div>
               </form>

               {/* end */ }

            </div>
            {/* end */ }

            {/* right-side-signup-section */ }

            <div className='col-span-12 lg:col-span-3 flex flex-col items-center justify-center bg-gradient-to-tr from-emerald-400
                    to-teal-400 p-8 relative'>
               <h2 className='text-5xl font-sans font-semibold text-white mb-2'>New Here?</h2>
               <p className='text-sm font-normal text-white text-center'> Sign up and discover a great amount of new opportunities!</p>
               <div className=' absolute bottom-10 right-10 w-28 h-28 bg-white/10 rotate-45'></div>
               <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rotate-45"></div>
               <button className='px-4 py-2 w-4/12 rounded-full mt-2
                            font-bold text-white bg-slate-600'>Sign Up</button>
            </div>

            {/* end */ }

         </div>
      </section>
   )
}

export default LoginAuth