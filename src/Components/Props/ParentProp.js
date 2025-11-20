import React from 'react'
import Child from './Child'

const ParentProp = () => {

    const students = [

        { id: 1, name: 'Rajesh', age: 39, grade: 'A' },
        { id: 2, name: 'Suresh', age: 40, grade: 'B' },
        { id: 3, name: 'Mahesh', age: 41, grade: 'C' },
        { id: 4, name: 'Ramesh', age: 42, grade: 'D' },
        { id: 5, name: 'Ganesh', age: 43, grade: 'E' },
        { id: 6, name: 'Harish', age: 44, grade: 'F' },
        { id: 1, name: 'Rajesh', age: 39, grade: 'A' },
    ]

    const courses = [
        { id: 1, course: 'React js', duration: '3 months' },
        { id: 2, course: 'Node js', duration: '2 months' },
        { id: 3, course: 'Angular', duration: '4 months' },

    ]

    return (
        <section >
            <article className=' container mx-auto' >
                <h2 > Welcome to the Parent props Component </h2>
                <Child students={ students } courses={ courses } />
            </article>
        </section>
    )
}

export default ParentProp