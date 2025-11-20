import React, { useState } from 'react'

const Child = ({ students, courses }) => {

    const [loading, setLoading] = useState(false)

    return (
        <>
            <section>
                <article className=' container mx-auto'>
                    <div className='grid grid-cols-1'>
                        <h2>Welcome to the Child Component</h2>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 gap-3'>
                        { loading ? (
                            <p>...Loading</p>
                        ) : (
                            students?.length > 0 ? (
                                students.slice(0, 10)?.map((student, index) => (
                                    <div className='bg-cyan-700 rounded-lg p-3' key={ index }>
                                        { student.name }
                                    </div>

                                ))
                            ) : (
                                <>
                                </>
                            )
                        ) }

                    </div>
                </article>
            </section>
        </>
    )
}

export default Child
