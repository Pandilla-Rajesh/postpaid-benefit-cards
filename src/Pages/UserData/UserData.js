import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

const UserData=()=>{

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json())
        .then((data)=>{
            setPosts(data)
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })

    }, [])

    const getUser=async()=>{

        setLoading(true)

        try{

            const useRes = await fetch('https://jsonplaceholder.typicode.com/posts')
            const response = await useRes.json()
            setPosts(response)
            console.log(response)
            
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getUser()
    }, [])

    return(
        <section>
            <article className=' container mx-auto'>
                <div>
                    <h2 className=' text-3xl text-slate-700 text-center font-bold mb-5'>
                        Welcome To The TodoList Details
                    </h2>
                </div>

                {loading?(
                    <p>...Loading</p>
                ):(
                    <>
                    {posts?.length>0?(
                        <div className='grid grid-cols-3 gap-2 mb-5'>
                            {posts?.slice(0,10)?.map((post, index)=>(
                                <div className='bg-white p-4 border border-gray-300' key={index}>
                                   <div className=' flex items-start gap-2'>
                                       <p className='text-fuchsia-500 font-bold text-xl'>{post.userId}</p>
                                        <div>
                                        <p className='text-2xl leading-5 mb-3 font-bold text-cyan-600'>{post.title}</p>
                                       <p>{post.body}</p>
                                        </div>
                                   </div>
                                </div>
                            ))}
                        </div>
                    ):(
                        <></>
                    )}
                    </>
                )}

            </article>
        </section>
    )
}
export default UserData