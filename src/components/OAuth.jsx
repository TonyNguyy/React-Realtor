import React from 'react'
import {FcGoogle}from "react-icons/fc"
export default function OAuth() {
  return (
    <button className='flex
    items-center justify-center w-full
    bg-red-700 text-white
    px-7 py-3 uppercase 
    text-sm font-medium
    hover:bg-red-900 active:bg-red-1000
    shadow-md hover:shadow-lg active:shadow-lg
    transition duration-300 ease-in
    rounded
    '>
        <FcGoogle className='text-2xl
        bg-white rounded-full mr-2'/>
    Continue with Google</button>
  )
}
