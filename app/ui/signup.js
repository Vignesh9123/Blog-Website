"use client"
import { useForm } from "react-hook-form"
import { signupSubmit } from "../actions/signupSubmit"
import { useState,useRef,useEffect } from "react"
import EmailExists from "./signup/EmailExists"
import LoggedIn from "./signup/LoggedIn"
import UsnExists from "./signup/UsnExists"
import ServerError from "./signup/ServerError"
import Loading from "./Loading"
const SignUp = () => {
   const {handleSubmit, register} = useForm()
  const [loggedIn, setLoggedIn] = useState(false)
  const [emailExists, setEmailExists] = useState(false)
  const [usnExists, setUsnExists] = useState(false)
  const [serverError, setServerError] = useState(false)
  const [loading, setLoading] = useState(false)

const awaitDelay = ()=>{
    return new Promise(resolve=>{
      setTimeout(() => {
        resolve()
      }, 5000);
    })
  }
  useEffect(() => {
    if(loggedIn == true){
     (async()=>{await awaitDelay()
       setLoggedIn(false)
     })()
    }
   }, [loggedIn])
  useEffect(() => {
    if(emailExists == true){
     (async()=>{await awaitDelay()
       setEmailExists(false)
     })()
    }
   }, [emailExists])
  useEffect(() => {
    if(usnExists == true){
     (async()=>{await awaitDelay()
       setUsnExists(false)
     })()
    }
   }, [usnExists])
  useEffect(() => {
    if(serverError == true){
     (async()=>{await awaitDelay()
       setServerError(false)
     })()
    }
   }, [serverError])
  const formRef = useRef(null)
  const createAccount = async(e)=>{
    setUsnExists(false)
    setEmailExists(false)
    setLoggedIn(false)
    setServerError(false)
    setLoading(true)
    let res  = await signupSubmit(e)
    formRef.current.reset()
    setLoading(false)
    if(res == "Success"){
      setUsnExists(false)
      setEmailExists(false)
      setLoggedIn(true)
      setServerError(false)
    }
    
    else if(res == "User already Exists"){
      setUsnExists(false)
      setEmailExists(true)
      setLoggedIn(false)
      setServerError(false)
    }
    else if(res == "Username exists"){
      setUsnExists(true)
      setEmailExists(false)
      setLoggedIn(false)
      setServerError(false)
    }
    else{
      setUsnExists(false)
      setEmailExists(false)
      setLoggedIn(false)
      setServerError(true)
    }
    
  }
  return (
   <>
      {loggedIn && <LoggedIn/>}
        {emailExists && <EmailExists/>}
        {usnExists && <UsnExists/>}
        {serverError && <ServerError/>}
      <form ref={formRef} action={(e)=>{createAccount(e)}}>
        <div className="flex flex-col justify-center items-center min-h-[80vh] gap-10">
        <div className="grid grid-cols-2 w-80 items-center">
            <label htmlFor="emailinput" className="text-lg w-fit">Email address:</label>
             <input id="emailinput" name="email" type="text" {...register("email")} className="w-fit p-3 border-2 outline-blue-300 outline-4" placeholder="Enter your email address" />
        </div> 
        <div className="grid grid-cols-2 w-80 items-center">
            <label htmlFor="usninput" className="text-lg w-fit">Username:</label>
             <input required={true} id="usninput" name="username" type="text" {...register("username",)} className="w-fit p-3 border-2 outline-blue-300 outline-4" placeholder="Enter a username" />
        </div> 
        <div className="grid grid-cols-2 w-80 items-center">
            <label htmlFor="passinput" className="text-lg w-fit">Password:</label>
             <input id="passinput" name="password" type="password" {...register("password")} className="w-fit p-3 border-2 text-md outline-blue-300 outline-4" placeholder="Enter your Password" />
        </div> 
        <div>
           {loading ? <Loading/>:<button type="submit" className="p-2 text-lg px-6 rounded-lg bg-gray-800 text-white">Sign Up</button>}
        </div>
        </div>
      </form>
   </>
  )
}

export default SignUp
