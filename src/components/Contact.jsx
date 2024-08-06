

function Contact() {
  return (
    <main>
    <div className='w-screen flex justify-center'>
      <div className=' h-80 w-96 flex flex-col'>
      <h1 className='text-5xl text-center font-semibold text-white p-4'>Contact us</h1>
        <label htmlFor="email" className=' text-xl'>Enter your email</label>
        <input type="text"  placeholder='Enter your email' className='p-2' />
        <label htmlFor="problem">Enter your problem</label>
        <textarea name="" id="" rows={5} placeholder='Enter Your problem'></textarea>
      </div>
        
      
    </div>
    </main>
  )
}

export default Contact
