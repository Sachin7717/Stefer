import React from 'react'
import heroImage from "/hero.jpg"

function Hero() {
  return (
    <div className='h-screen w-screen bg-[#4e54c8] bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] flex justify-center items-center p-12'>
      <h1 className='w-1/2 text-7xl p-6 font-extrabold text-center text-white font-["Inconsolata"] '>Welcome to <br/> India's First <br/> Student Community
      </h1>
      <img src={heroImage} className='h-96 rounded-3xl shadow-lg'/>
    </div>
  )
}

export default Hero
