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

const router = createBrowserRouter(
  createRoutesFromElements(
   
    <Route path='Home' element={< Home/>}>
    <Route path='Contact' element= {<Contact/>}/>
    <Route path='Chats' element= {<Chats/>}/>
    <Route path='Community' element= {<Community/>}/>
    <Route path='Profile' element= {<Profile/>}/>
    
    
    </Route> 
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
