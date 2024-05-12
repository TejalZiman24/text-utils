

import Alert from './Compoents/Alert'
import { useState } from 'react'
import './App.css'

import Navbar from './Compoents/Navbar'
import TextForm from './Compoents/TextForm'
import React from "react";
import { Outlet } from 'react-router-dom'



function App() {
  let [alertMsg, setalertMsg] = useState(null)

  const showalertMsg = (message, type) => {
    setalertMsg({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalertMsg(null)
    }, 2000)
  }


  let [mode, setmode] = useState('dark')
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#222529'
      showalertMsg('dark mode has been enabled', 'success')
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showalertMsg('light mode has been enabled', 'success')
    }
  }


  return (
    <>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      
      <Alert alertMsg={alertMsg} />
      <Outlet/>
      <div className="container my-3">
        
      
       
      </div>
    </>
  )
}

export default App
