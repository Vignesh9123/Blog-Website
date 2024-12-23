"use client"

import { useEffect, useState } from "react"
import { FaChevronCircleUp } from "react-icons/fa";


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility)

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
  }

  return (
    <button
      className={`fixed bottom-4 right-4 rounded-full p-2 outline-none transition-opacity duration-100 ${
        isVisible ? "opacity-100 block" : "opacity-0 cursor-default"
      }`}
      onClick={scrollToTop}
    >
    <FaChevronCircleUp size={40}/>
    </button>
  )
}

export default ScrollToTopButton