import React, { useState } from "react";

const SignInPage = ({handleLogIn}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault()
    handleLogIn(email,password)  
  }
  
  
  return <div>
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-black p-20'>
        <h1 className='text-center text-2xl font-bold'>SignIn</h1>
        <form className='flex flex-col items-center justify-center' onSubmit={handleOnSubmit}>
          <input className='outline-none bg-transparent border-2 border-black text-lg py-3 px-5 rounded mt-5' 
          type="email" 
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }} />
          <input className='outline-none bg-transparent border-2 border-black text-lg py-3 px-5 rounded mt-5' 
          type="password" 
          placeholder='Enter Password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }} />
          <button className='text-white outline-none bg-green-500 border-2 border-none text-lg py-3 px-5 rounded-xl font-bold mt-5'> SignIn </button>
        </form>
      </div>
    </div>
  </div>;
};

export default SignInPage;
