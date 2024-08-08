import { useEffect, useState } from "react"


function Contact() {
  const [issue,setIssue]=useState("");
  const [rowsinIssue,setRows]=useState(1);

  useEffect(()=>{
    console.log(issue.length)
    setRows((issue.length/33)+1)
  },[issue])
  return (
    
    <main className="w-screen flex justify-center">

      <style>
      {
        `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'poppins',sans-serif;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(https://user-images.githubusercontent.com/13468728/233847739-219cb494-c265-4554-820a-bd3424c59065.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

section {
    position: relative;
    max-width: 400px;
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    backdrop-filter: blur(55px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 3rem;
}

h1 {
    font-size: 2rem;
    color: #fff;
    text-align: center;
}

.inputbox {
    position: relative;
    margin: 30px 0;
    max-width: 310px;
    border-bottom: 2px solid #fff;
}

.inputbox label ,  #issue-label{
    position: absolute;
    // top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: #fff;
    font-size: 1rem;
    pointer-events: none;
    transition: all 0.5s ease-in-out;
}

input:focus ~ label, 
input:valid ~ label {
    top: -5px;
}

.inputbox input {
    width: 100%;
    height: 60px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0 35px 0 5px;
    color: #fff;
}

.inputbox ion-icon {
    position: absolute;
    right: 8px;
    color: #fff;
    font-size: 1.2rem;
    top: 20px;
}

.forget {
    margin: 35px 0;
    font-size: 0.85rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
 
}

.forget label {
    display: flex;
    align-items: center;
}

.forget label input {
    margin-right: 3px;
}

.forget a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}

.forget a:hover {
    text-decoration: underline;
}

button {
    width: 100%;
    height: 40px;
    border-radius: 40px;
    background-color: rgb(255, 255,255, 1);
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.4s ease;
}

button:hover {
  background-color: rgb(255, 255,255, 0.5);
}

.register {
    font-size: 0.9rem;
    color: #fff;
    text-align: center;
    margin: 25px 0 10px;
}

.register p a {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
}

.register p a:hover {
    text-decoration: underline;
}
        `

      }
      </style>

<section>
  <form>
    <h1>Contact Us</h1>
    <div className="inputbox">
      <ion-icon name="mail-outline" />
      <input type="email" required="" />
      <label htmlFor="">Email</label>
    </div>
      <label htmlFor="" className="" id="issue-label" style={{left:"53px",marginBottom:"20px"}}>Enter Your Issue</label>   
    <div className="inputbox top-5 left-1">
      <ion-icon name="lock-closed-outline" />
      {/* <input type="text" required="" /> */}
      <textarea name="" id="" rows={rowsinIssue} cols={33} className=" bg-transparent border-none top-4  text-[#fff] focus:outline-none overflow-hidden" value={issue} onChange={(e)=>setIssue(e.target.value)}></textarea>
      
    </div>
    
    <button className="hover:text-white">Submit</button>

  </form>
</section>

    {/* <div className='w-screen flex justify-center'>
      <div className=' h-80 w-96 flex flex-col'>
      <h1 className='text-5xl text-center font-semibold text-white p-4'>Contact us</h1>
        <label htmlFor="email" className=' text-xl'>Enter your email</label>
        <input type="text"  placeholder='Enter your email' className='p-2' />
        <label htmlFor="problem">Enter your problem</label>
        <textarea name="" id="" rows={5} placeholder='Enter Your problem'></textarea>
      </div>
        
      
    </div> */}
    </main>
  )
}

export default Contact
