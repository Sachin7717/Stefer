import { useState } from 'react'

import Navbar from './components/Navbar'

import './App.css'
import Hero from './components/Hero'
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <>
     <Navbar />
      <Outlet/>

    </>
  )
}

export default App
