'use client'
import Link from "next/link";
import BlogCard from "./ui/blogcard";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ArrowUp from "./ui/ArrowUpScroll";
import dbConnect from "./actions/dbConnect";
  
const pst = fetchPosts();
export default function Home(context) {
  const [nofp, setnofp] = useState(4)
  const [posts, setposts] = useState(pst)
  const nref = useRef(null)
  const pageNumber = parseInt(context.searchParams.page) || 1
  const [page, setPage] = useState(pageNumber)
  let startIndex = (pageNumber-1)*nofp
  const searchref = useRef(null)
  const [searchTerm, setSearchTerm] = useState("")
  

  useEffect(() => {
    setposts(pst)
   
  }, [])

  useEffect(() => {
    const filteredResults = pst.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setposts(filteredResults);
  }, [searchTerm]);

  
  let pageCount = Math.floor(posts.length/nofp)
  pageCount += Math.ceil((posts.length%nofp)/nofp)
  
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
  
  const router = useRouter()
  
  return (
    <>
        <div className="w-full p-4">
          <input ref={searchref} type="search" placeholder="Search here" className="w-full p-3" value={searchTerm} onChange={handleChange} name="" id="" />
        </div>
       <div className="flex flex-col min-h-[80vh]">
        {posts.slice(startIndex,startIndex+nofp).map((post)=>{
         return(
          <div key={post.id} className="mt-5 border-4 cursor-pointer"> <BlogCard key={post.id} props={post}/>
          </div>)
        })}
       </div>
       <div className="flex justify-around m-5">
         <h1
        className={` ${pageNumber==1?"text-gray-400 cursor-not-allowed":"cursor-pointer"}`}
        onClick={()=>{
          pageNumber!=1 && router.push(`?page=${pageNumber-1}`,{scroll:false})
        }}>
          Prev</h1>
       <div>
        <input ref={nref} placeholder="No. of posts/page"type="number" className="border-2 px-2 border-black"/> <button onClick={()=>{
          if(nref.current.value!=""){
          router.push("/")
          setnofp(parseInt(nref.current.value))
        nref.current.value=""
        }}} >Click</button>
       </div>
        <h1 
        className={`${pageNumber==pageCount?"text-gray-400 cursor-not-allowed":"cursor-pointer"}`}
       onClick={()=>{
         pageNumber!=pageCount && router.push(`?page=${pageNumber+1}`,{scroll:false})
       }}>Next</h1>
       </div>
      <div className="flex m-10 justify-around">
        <div>
      Showing {`${startIndex+1}-${pageNumber==pageCount?posts.length:nofp*pageNumber}`} posts out of {posts.length} posts
        </div>
        <div>
          Page:{pageNumber}/{pageCount}
        </div>
          <ArrowUp/>
      </div>
    </>
  );
}
