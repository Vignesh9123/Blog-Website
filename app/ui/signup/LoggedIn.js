import React from 'react'
import Link from "next/link"
import { useEffect, useRef, useState } from "react";


const LoggedIn = () => {
  const [time, setTime] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setTime((prev) => Math.min(prev + 1, 100));
    }, 10);
  }, [])
  return (
    <div>
      <div>
      <div className="h-[5px] bg-green-400 rounded-t-md" style={{width:`${time}%`}}></div>
        <div id="alert-border-3" className="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <div className="ms-3 text-sm font-medium">
      You have succesfully Signed up! Please <Link className="underline" href="/user/signin">Login</Link> to continue 
    </div>
    
</div>
        </div>
    </div>
  )
}

export default LoggedIn
