import React from 'react'
import{getAuth, signInWithPopup} from "firebase/auth"
import {FcGoogle} from "react-icons/fc"
import {toast} from "react-toastify"
import { GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const navigate = useNavigate()

  async function onGoogleClick(){
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth,provider)
      const user = result.user 

      // Check if user already exist

      const docRef = doc(db, "user", user.uid)
      const docSnap = await getDoc(docRef)
      if(!docSnap.exists()){
        await setDoc(docRef, {
          name:user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }
      navigate('/');

    } catch (error) {
      toast.error("Not authorized with Google")
   
    }

  }

  return (
    <button type="button" onClick={onGoogleClick}
    className='flex
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
