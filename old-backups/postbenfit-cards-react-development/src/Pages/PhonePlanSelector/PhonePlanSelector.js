import React from 'react'
import { East} from "@mui/icons-material";

const PhonePlanSelector = () =>{

    return(
        <>
           <section className='py-4 border-t border-b border-gray-300 shadow-lg sm:py-4 md:py-4
            bg-gray-100 lg:py-8'>
             <article className=' container px-4 mx-auto lg:px-4 sm:px-4 md:px-4'>
                  <div className="flex items-center gap-2">
                               <p className="text-sm font-semibold text-left text-gray-600">
                                 Need a phone with a plan?
                               </p>
                               <p>
                                 <a href="#" className="text-sm font-medium transition-all ease-in-out text-fuchsia-500 hover:text-cyan-600">
                                   Choose a phone to get started
                                   <span className="ms-2"><East /></span>
                                 </a>
                               </p>
                             </div>
             </article>
           </section>
        </>
    )
}

export default PhonePlanSelector