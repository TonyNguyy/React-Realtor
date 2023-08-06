import{ React, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      
      <div className='flex justify-center flex-wrap items-center px-5 py-12 max-w-6xl mx-auto'>
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6" >
          <img className="w-full rounded-2xl" src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1546&q=80" alt="key-logo" />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form action="">
          <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />

            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'>Don't have an account? 
                <Link className="text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-1" to="/sign-up"> Register</Link>
              </p>
              <p>
                <Link to="/sign-in" className="text-blue-600 hover:text-blue-900 transition duration-200 ease-in-out ml-1">Sign In</Link>
              </p>
            </div>
           
          <button type='submit'
          className='w-full bg-blue-600 text-white px-7 py-3 rounded text-sm font-medium uppercase shadow-md hover:bg-blue-800 transition duration-300 ease-in hover:shadow-lg active:bg-blue-900'
          >Send Reset Password</button>

          <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                      <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <OAuth /> 

          </form>
        </div>
      </div>
    </section>
  )
}
