import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import PlanCards from './Pages/PlanCards/PlanCards'
// import MainPage from './MainPage/MainPage'

const MainPage = lazy(() => import('./MainPage/MainPage'))
const PlanCards = lazy(() => import('./Pages/PlanCards/PlanCards'))
const ApiPages = lazy(() => import('./Components/APIS/ApiPages'))
const FormsUi = lazy(()=>import('./Components/Forms/FormUi'))

function Approutes() {

  const router = createBrowserRouter([

    {
      path: '/', element: (<Suspense fallback={<div>...Loading</div>}><MainPage /></Suspense>),

      children: [

        { index: true, element: (<Suspense fallback={<div>...Loading</div>}><PlanCards /></Suspense>) },
        { path: 'plancards', element: (<Suspense fallback={<div>...Loading</div>}><PlanCards /></Suspense>) },
        { path: 'apipages', element: (<Suspense fallback={<div>...Loading</div>}><ApiPages /></Suspense>) },
        {path:'forms', element:(<Suspense fallback={<div>...Loading</div>}><FormsUi/></Suspense>)}

      ]

    },
  ])
  return (<Suspense fallback={<div>...Loading</div>}> 
  <RouterProvider router={router}></RouterProvider></Suspense>)
}

export default Approutes