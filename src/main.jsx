import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter}  from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutUs from './Compoents/AboutUs.jsx'
import TextForm from './Compoents/TextForm.jsx'

const router= createBrowserRouter([
  {path:'/', element:<App/>,
  children:[
    {path:'/about', element: <AboutUs/>},
    {path:'/text',element:<TextForm heading="Enter the Text to analyse" />}
  ],
},
 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  
  </React.StrictMode>,
)
