import { Close } from '@mui/icons-material'
import React, { useState } from 'react'

const ModalPopup = () => {

    const [open, setOpen] = useState(false)
    const handOpen = () => {
        setOpen(true)
    }

    return ( <
        >
        <
        div className = 'flex flex-col items-center justify-center' >
        <
        button onClick = { handOpen } >
        Boo a Tour <
        /button>

        {
            open && ( <
                >
                <
                div className = 'fixed inset-0 flex items-center justify-center bg-block/50 z-50' > { /* close-btn */ } <
                div className = 'bg-white relative rounded-2xl shadow-xl w-11/12 md:w-1/3' >
                <
                button onClick = {
                    () => setOpen(false) }
                className = 'absolute top-3 right-3 text-gray-500 hover:text-gray-700' >
                <
                Close / >
                <
                /button> <
                h2 className = "text-2xl font-semibold mb-4" > Modal Title < /h2> <
                p className = "text-gray-600 mb-6" >
                This is a sample modal popup created using Tailwind CSS in React. <
                /p> <
                div className = "flex justify-end" >
                <
                button onClick = {
                    () => setOpen(false) }
                className = "px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition mr-2" >
                Close <
                /button> <
                button className = "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" >
                Save Changes <
                /button> <
                /div>

                <
                /div> { /* end */ } <
                /div> <
                />
            )
        }

        <
        /div> <
        />
    )
}

export default ModalPopup