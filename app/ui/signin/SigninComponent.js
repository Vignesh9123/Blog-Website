"use client"
import React from 'react'
import { useRef,useState,useEffect } from 'react';

import signinSubmit from '@/app/actions/signinSubmit';
import Link from 'next/link';
import SuccessAlert from './SuccessAlert';
import InvalidCreds from './InvalidCreds';
import SignInError from './SignInError';
import NotExists from './NotExists';
import Loading from '../Loading';
const SigninComponent = () => {
    const [invalidcreds, setInvalidcreds] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false)
    const [notExists, setNotExists] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const awaitDelay = ()=>{
        return new Promise(resolve=>{
          setTimeout(() => {
            resolve()
          }, 5000);
        })
      }
    
    const emailRef = useRef();
    const passwordRef = useRef();
    
    useEffect(() => {
        if(success == true){
         (async()=>{await awaitDelay()
           setSuccess(false)
         })()
        }
       }, [success])
    useEffect(() => {
        if(notExists == true){
         (async()=>{await awaitDelay()
           setNotExists(false)
         })()
        }
       }, [notExists])
    useEffect(() => {
        if(invalidcreds == true){
         (async()=>{await awaitDelay()
           setInvalidcreds(false)
         })()
        }
       }, [invalidcreds])
    useEffect(() => {
        if(error == true){
         (async()=>{await awaitDelay()
           setError(false)
         })()
        }
       }, [error])

    const handleSubmit = async(event) => {
        setLoading(true)
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        let body = { email, password }
        let res = await signinSubmit(body)
        setLoading(false)
        if(res == "Success"){
            setInvalidcreds(false)
            setSuccess(true)
            setError(false)
            setNotExists(false)
        }
        else if(res == "Invalid credentials"){
            setInvalidcreds(true)
            setSuccess(false)
            setError(false)
            setNotExists(false)
        }
        else if(res == "User does not exist"){
            setInvalidcreds(false)
            setSuccess(false)
            setError(false)
            setNotExists(true)
        }
        else{
            setInvalidcreds(false)
            setSuccess(false)
            setError(true)
            setNotExists(false)

        }
    };

    return (<>
            {invalidcreds && <InvalidCreds/> }
          {
            success && <SuccessAlert/>
          }
          {
            error &&  <SignInError/>
          }
          {
            notExists && <NotExists/>
          }
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        ref={emailRef}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        ref={passwordRef}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                        required
                    />
                </div>
        {loading?<Loading/>:<div className="flex items-center justify-between">
            <button
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Sign In
            </button>
        </div>}
            </form>
        </div>
        </>
    );
};

export default SigninComponent
