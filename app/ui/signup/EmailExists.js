import React from 'react'
import Link from 'next/link'
import { useEffect,useState } from 'react'
const EmailExists = () => {
  const [time, setTime] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setTime((prev) => Math.min(prev + 0.1, 100));
    }, 10);
  }, [])
  return (
    <div>
      <div className="h-[5px] bg-red-400 rounded-t-md" style={{width:`${time}%`}}></div>
<div id="alert-border-2" className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <div className="ms-3 text-sm font-medium">
      User already exists. Please <Link href="/user/signin" class="font-semibold underline hover:no-underline">Log In</Link>.
    </div>
    
</div>
    </div>
  )
}

export default EmailExists
