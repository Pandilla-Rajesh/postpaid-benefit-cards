import React, { useEffect, useState } from 'react'

const UserGets=()=>{

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    async function getUsers(){
        setLoading(true)
        try{

            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const res = await response.json()
            const formatUsers = res.map((user)=>({
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                city: user.address.city,
                company: user.company.name
            }))
            setUsers(formatUsers)
            console.log(formatUsers, 'get the user details formatusers')

        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getUsers()
    }, [])

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json())
        .then((data)=>{
            console.log(data, 'users data')
        }).catch((err)=>{
            console.log(err)
        })

    }, [])

    return(

        <>
          <section className=''>
             <article className='container mx-auto'>
                 <div className=' py-6 border border-gray-200 rounded-lg bg-gray-50 px-3 py-3 rounded-md'>
                    <h2 className='text-center text-3xl font-bold text-slate-900'>Welcome to the Users List</h2>
                    <div className=' overflow-x-auto my-5'>
                        {loading ? (
                            <p>...Loading</p>
                        ) : (
                        <table className='min-w-full border border-gray-400'>
                            <thead className=' bg-transparent border-b border-gray-200'>
                                <tr>
                                    <th className='px-4 py-2 text-xl border border-gray-300 text-cyan-600 font-semibold text'>Id</th>
                                    <th className='px-4 py-2 text-xl border border-gray-300 text-cyan-600 font-semibold'>Name</th>
                                    <th className='px-4 py-2 text-xl border border-gray-300 text-cyan-600 font-semibold'>Email</th>
                                    <th className='px-4 py-2 text-xl border border-gray-300 text-cyan-600 font-semibold'>Phone</th>
                                    <th className='px-4 py-2 text-xl border border-gray-300 text-cyan-600 font-semibold'>City</th>
                                    <th className='px-4 py-2 text-xl border border-gray-300 text-cyan-600 font-semibold'>Company</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {users?.length>0?(
                                   
                                        (users?.slice(0, 10)?.map((user, id)=>(
                                           
                                           <tr key={id} className='hover:bg-blue-100 transition-colors duration-200'>
                                              <td className='px-4 py-2 border border-gray-300 text-slate-600 text-sm text-center hover:text-white'>{user.id}</td>
                                              <td className='px-4 py-2 border border-gray-300 text-slate-600 text-sm text-center'>{user.name}</td>
                                              <td className='px-4 py-2 border border-gray-300 text-slate-600 text-sm text-center'>{user.email}</td>
                                              <td className='px-4 py-2 border border-gray-300 text-slate-600 text-sm text-center'>{user.phone}</td>
                                              <td className='px-4 py-2 border border-gray-300 text-slate-600 text-sm text-center'>{user.city}</td>
                                              <td className='px-4 py-2 border border-gray-300 text-slate-600 text-sm text-center'>{user.company}</td>
                                           </tr>
                                          
                                        )))
                                    
                                ): (
                                    <>
                                        <tr>
                                            <td colSpan="5" className='text-center'>
                                                <p>No Data Found?</p>
                                            </td>
                                        </tr>
                                    </>
                                )}
                            </tbody>
                        </table>
                        )}

                    </div>
                 </div>
             </article>
          </section>
        </>
    )
}

export default UserGets