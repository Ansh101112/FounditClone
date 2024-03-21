import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const[username,setusername]=useState('');
const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        try {
            const user = e.target.value();
            const pass = e.target.value();
            if (username === 'user' && password === 'pass') {
                // Login successful
                alert('Login successful!');
                navigate('/')
            } else {
                alert('Invalid username or password!');
            }
        } catch (error) {
            alert('PLease fill all required fields correctly!!');
            console.log(error);
        }
    };
    


  return (
    <>
    <Navbar></Navbar>
        <section class="text-gray-600 body-font">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="w-54 lg:h-144 h-54 object-cover flex justify-center items-center" src="https://www.foundit.in/rio/public/images/login-illustration.png"/>

    {/* form start here */}

    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Email</label>
        <input required type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Password</label>
        <input required type="password" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button type='submit' onClick={handleLogin} class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
    </div>
  </div>
</section>
    </>
  )
}

export default Login