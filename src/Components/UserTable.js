import React from 'react'

const UserTable=({users, onEdit, onDelete})=>{
    return(
        <>
        <section className=''>
            <article className='container mx-auto'>
                <div className=' overflow-x-auto my-5 bg-white'>
                    <table className='min-w-full border border-gray-300'>
                        <thead className='bg-transparent border-b border-gray-200 text-left'>
                            <tr>
                                <th className='px-4 py-2 text-sm font-semibold border border-gray-200 text-fuchsia-500'>#</th>
                                <th className='px-4 py-2 text-sm font-semibold border border-gray-200 text-fuchsia-500'>Name</th>
                                <th className='px-4 py-2 text-sm font-semibold border border-gray-200 text-fuchsia-500'>Email</th>
                                <th className='px-4 py-2 text-sm font-semibold border border-gray-200 text-fuchsia-500'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.length>0?(
                                users?.map((user, index)=>(
                                    <>
                                     <tr key={user.id || index}>
                                        <td className='border border-gray-200 px-4 py-2'>{index+1}</td>
                                        <td className='border border-gray-200 px-4 py-2'>{user.name}</td>
                                        <td className='border border-gray-200 px-4 py-2'>{user.email}</td>
                                        <td className='border border-gray-200 px-4 py-2'>{user.file ?(
                                            <img src={URL.createObjectURL(user.file)}
                                            alt='preview' width="50" height="50" />
                                        ) : (
                                            <>no data</>
                                        )}
                                        </td>
                                        <td className='flex items-center gap-3 m-2'>
                                            <button onClick={()=> onEdit(user)}
                                                className='w-full px-4 py-4 bg-blue-500 text-slate-50 text-sm font-semibold p-2 mb-2 mt-2'>Edit</button>
                                            <button onClick={()=> onDelete(user.id)}
                                             className='w-full px-4 py-4 bg-cyan-500 text-sm font-semibold text-slate-50'>Delete</button>
                                        </td>
                                     </tr>
                                    </>
                                ))
                            ) : (
                                <>
                                    <tr>
                                        <td colSpan="5" className='text-center'>
                                            <p>No Data Found</p>
                                        </td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
            </article>
        </section>
        </>
    )
}

export default UserTable