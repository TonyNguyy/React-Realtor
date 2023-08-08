import React from 'react'
import { useState } from 'react'
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Profile() {

  const auth = getAuth()
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayname,
    email:auth.curentUser.email
  });
  const {name,email}= formData;

  function onLogout(){
    auth.signOut();
    navigate('/');
  }

  return (
    <>
      <section className='flex justify-center items-center flex-col max-w-6xl mx-auto'>
        <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
        <div className='w-full md: w-[50%] mt-6 px-3'>
          <form>
            {/* Name Input */}
            <input type="text" id="name" value={name} disabled
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white 
            border-gray-300 rounded transition ease-in-out mb-6' />
          
            {/* Email Input */}
            <input type="text" id="email" value={email} disabled
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white 
            border-gray-300 rounded transition ease-in-out mb-6' />

            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
              <p className='flex items-center'>Do you want to change your name?
                <span className='text-red-600 hover:text-red-800 transition ease-in-out
                duration-300 ml-1 cursor-pointer'>Edit</span>
              </p>
              <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition ease-in-out duration-300 cursor-pointer'>Sign out</p>
            </div>
          
          
          </form>
        </div>

      </section>

    </>
  )
}
