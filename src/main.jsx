import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import './index.css'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Chats from './components/Chats.jsx'
import Community from './components/Community.jsx'
import Profile from './components/Profile.jsx'
import Hero from './components/Hero.jsx'
import Login from './components/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
   
    <Route path='/' element={< App/>} >

    <Route path='/' element={<Hero/>}/>
    <Route path='/home' element={<Hero/>}/>
    <Route path='/Contact' element= {<Contact/>}/>
    <Route path='/Chats' element= {<Chats/>}/>
    <Route path='/Community' element= {<Community/>}/>
    <Route path='/Profile' element= {<Profile/>}/>
    <Route path='/Login' element= {<Login/>}/>
   
    </Route>
    
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
