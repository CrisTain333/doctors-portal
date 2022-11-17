import React, { useContext, useState } from "react";
import logo from "../../assets/30697801_9-removebg-preview.png";
import {toast ,Toaster} from 'react-hot-toast';
import AuthContext from "../../Context/Context";
import { Navigate, useNavigate } from "react-router-dom";

const PasswordReset = () => {
    const navigate = useNavigate()
    const [error,setError]=useState('')
const {resetPassword} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        resetPassword(email)
        .then(() => {
            setError('');
            toast.success('Password reset email sent');
            setTimeout(function(){
                navigate('/login')
              }, 3000); 
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          });
    
        
      };
  return (
    <div className=" w-full  dark:bg-gray-900 dark:text-gray-100">
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div className="flex  h-screen  justify-center items-center ">
        <div className="w-full  rounded shadow-lg dark:shadow-primary p-8 m-4 md:max-w-sm md:mx-auto">
        <span className="flex justify-center items-center  w-full text-xl uppercase font-bold mb-4 text-center">
              <img src={logo} alt="brandImage" className="w-8 mr-2" />
              Password Reset
            </span>
          <form className="mb-4"  onSubmit={handleSubmit}>
            <div className="mb-2 md:w-full">
              <label htmlFor="email" className="block text-xs mb-1">
                Email
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline text-black"
                type="email"
                name="email"
                id="email"
                placeholder="Your Email "
                required
              />
            </div>
            <p className="text-red-700">{error}</p>
            <input
              type="submit"
              className="bg-primary bg-gradient-to-r from-primary to-secondary text-white uppercase text-sm font-semibold px-4 py-2 rounded w-full"
              value="Send Reset Email"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
