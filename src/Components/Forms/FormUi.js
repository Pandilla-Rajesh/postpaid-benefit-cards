import React, { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const FormsUi=()=>{

const [name, setName] = useState({
    userName:''
})
const [loading, setLoading] = useState(false)
const [error, setError] = useState({})
const navigate = useNavigate()

const nhandChange=useCallback((e)=>{
    const {name:field, value} = e.target
   setName(prev => ({...prev, [field] : value}))
    console.log(name)
}, [name])

// const handleSubmit=useMemo(()=>{
//     return(e)=>{
//         e.preventDefault()
//         alert(JSON.stringify(name, null, 1))
//         setName("")
//         setLoading(false)
//     }
// }, [name])

// const handleSubmit=useCallback((e)=>{
//  e.preventDefault()
//  alert(JSON.stringify(name, null, 1))
//  setName("")
//  setLoading(false)   
// }, [name])

const handleSubmit=useCallback(async(e)=>{
    e.preventDefault()
    const errors = {}

    if(!name.userName || !name.userName.trim()){
        errors.userName = 'Please enter userName'
    }else if(!/^[a-zA-Z]+/.test(name.userName)){
        errors.userName='userName contains only letters'
    }

    if(Object.keys(errors).length === 0){
        // navigate('')
        setError({})
         setLoading(true)
         try{
       await new Promise((res)=>setTimeout(res, 300))
        // alert(JSON.stringify(name, null, 1))
        toast.success('Form Submitted Succesfully')
        setName('')
    }catch(err){
        console.error(err)
        toast.error('Submission Failed')
    }finally{
        setLoading(false)
    }
    }else{
        setError(errors)
    }
    
},[name, navigate])

    return(
        <>
           <section className='bg-white m-6'>
             <article className='container mx-auto'>
                <div className='border border-gray-200 bg-gray-50 p-6'>
                    <div>
                        <h2 className='text-3xl font-bold text-slate-700 text-center'>
                        Welcome To the Form UI Component
                    </h2>
                    </div>
                    <div>
                        <h3 className='mb-2 text-xl'>Enter the Name</h3>
                        <form onSubmit={handleSubmit} className='flex items-center justify-center'>
                          <div>
                             <input type="text" name='userName' value={name.userName}
                             onChange={nhandChange} placeholder='Enter Name' autoComplete='off'
                        className={`w-full border border-gray-200 rounded focus:outline-none 
                        ${name.userName ? 'p-2' : 'p-3'}`}  />
                        <p>{error.userName && <small className='text-red-700 text-sm'>{error.userName}</small>}</p>
                          </div>
                       <div>
                         <button type='submit' name='submit' disabled={loading}
                        className='ml-3 bg-cyan-700 rounded p-3 py-2 text-slate-50 
                        text-sm font-semibold'>
                            {loading ? (
                  <>
                    <span className='animate-spin inline-block w-4 h-4 mr-2 
                    border-2 border-current rounded-full border-t-transparent' />
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
                            
                        </button>
                       </div>
                        </form>
         <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} newestOnTop />

                    </div>
                </div>
             </article>
           </section>
        </>
    )
}

export default FormsUi