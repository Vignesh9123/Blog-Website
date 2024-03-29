import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center h-screen items-center'>
      <h2 className='text-xl font-bold text-center'>Not Found</h2>
      <p>Could not find requested resource</p>
      <a href="/">Return Home</a>
    </div>
  )
}