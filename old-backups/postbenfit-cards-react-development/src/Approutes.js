import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PlanCards from './Pages/PlanCards/PlanCards'
import MainPage from './MainPage/MainPage'

function Approutes(){

    const router = createBrowserRouter([
        
        {path:'/', element:(<Suspense fallback={<div>...Loading</div>}><MainPage/></Suspense>),
    
          children:[

            {index:true, element:(<Suspense fallback={<div>...Loading</div>}><PlanCards/></Suspense>)},
            {path:'plancards', element:(<Suspense fallback={<div>...Loading</div>}><PlanCards/></Suspense>)}
           
          ]

        },
    ])
    return(<Suspense fallback={<div>...Loading</div>}> <RouterProvider router={router}></RouterProvider></Suspense>)
}

export default Approutes