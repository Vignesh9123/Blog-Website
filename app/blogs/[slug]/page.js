'use client'
import { FaUser } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaCircleArrowUp } from "react-icons/fa6";
import React, { useState,useEffect } from "react";
import { FormEvent } from 'react'
import { useForm } from "react-hook-form";
import { onSubmit } from "@/app/actions/commentSubmit";
import Loading from "@/app/ui/Loading";
const posts = [
  {
    "id": 1,
    "title": "Getting Started with Next.js",
    "author": "John Doe",
    "publicationDate": "2023-01-15",
    "content": "Next.js is a powerful React framework that allows you to build server-side rendered React applications...",
    "excerpt": "Learn how to get started with Next.js and build powerful server-side rendered React applications."
  },
  {
    "id": 2,
    "title": "CSS Tricks for Modern Web Development",
    "author": "Jane Smith",
    "publicationDate": "2023-02-20",
    "content": "CSS is an essential part of modern web development. In this article, we'll explore some useful CSS tricks...",
    "excerpt": "Explore some useful CSS tricks to enhance your web development skills and create stunning designs."
  },
  {
    "id": 3,
    "title": "10 JavaScript Tips Every Developer Should Know",
    "author": "Alex Johnson",
    "publicationDate": "2023-03-10",
    "content": "JavaScript is a powerful programming language used in web development. Here are 10 tips to help you improve your JavaScript skills...",
    "excerpt": "Improve your JavaScript skills with these 10 valuable tips and tricks for better coding practices."
  },
  {
    "id": 4,
    "title": "Introduction to React Hooks",
    "author": "Sarah Williams",
    "publicationDate": "2023-04-05",
    "content": "React Hooks provide a way to use stateful logic in functional components. They offer a more elegant solution compared to class components...",
    "excerpt": "Discover the power of React Hooks and how they can simplify your React applications."
  },
  {
    "id": 5,
    "title": "Responsive Web Design Best Practices",
    "author": "Michael Johnson",
    "publicationDate": "2023-05-20",
    "content": "Responsive web design is crucial for ensuring your website looks great on all devices. Follow these best practices to create a responsive and user-friendly website...",
    "excerpt": "Learn the essential techniques and principles of responsive web design to make your website accessible on any device."
  },
  {
    "id": 6,
    "title": "Node.js Fundamentals for Beginners",
    "author": "Emma Thompson",
    "publicationDate": "2023-06-08",
    "content": "Node.js is a powerful runtime environment for building server-side applications with JavaScript. In this beginner-friendly guide, you'll learn the fundamentals of Node.js...",
    "excerpt": "Get started with Node.js and learn how to build scalable and efficient server-side applications using JavaScript."
  },
  {
    "id": 7,
    "title": "Understanding RESTful APIs",
    "author": "David Brown",
    "publicationDate": "2023-07-15",
    "content": "RESTful APIs are a fundamental part of modern web development. They provide a standard way to communicate between client and server...",
    "excerpt": "Learn the key concepts of RESTful APIs and how to design and implement them in your web applications."
  },
  {
    "id": 8,
    "title": "Introduction to GraphQL",
    "author": "Sophia Garcia",
    "publicationDate": "2023-08-20",
    "content": "GraphQL is a query language for APIs that allows clients to request only the data they need. It provides a more efficient and flexible alternative to traditional RESTful APIs...",
    "excerpt": "Explore the basics of GraphQL and learn how to use it to fetch and manipulate data in your web applications."
  },
  {
    "id": 9,
    "title": "Advanced CSS Techniques",
    "author": "Ethan Lee",
    "publicationDate": "2023-09-10",
    "content": "Take your CSS skills to the next level with these advanced techniques. From flexbox to grid layout, discover how to create complex and responsive designs...",
    "excerpt": "Master advanced CSS techniques and create stunning layouts for your web projects."
  },
  {
    "id": 10,
    "title": "JavaScript ES6 Features You Should Know",
    "author": "Olivia Taylor",
    "publicationDate": "2023-10-05",
    "content": "ES6 introduced many new features and syntax improvements to JavaScript. From arrow functions to template literals, here are the ES6 features you need to know...",
    "excerpt": "Discover the powerful features introduced in ES6 and how they can improve your JavaScript code."
  },
  {
    "id": 11,
    "title": "React Component Lifecycle Methods",
    "author": "Noah Martinez",
    "publicationDate": "2023-11-20",
    "content": "Understanding the lifecycle of React components is essential for building robust and efficient applications. Learn about the various lifecycle methods and when to use them...",
    "excerpt": "Explore the lifecycle of React components and how to utilize lifecycle methods to manage state and perform side effects."
  },
  {
    "id": 12,
    "title": "MongoDB Basics for Beginners",
    "author": "Isabella Scott",
    "publicationDate": "2023-12-15",
    "content": "MongoDB is a popular NoSQL database used in many modern web applications. In this beginner's guide, you'll learn the basics of MongoDB...",
    "excerpt": "Get started with MongoDB and learn how to store and retrieve data in this flexible and scalable NoSQL database."
  },
  {
    "id": 13,
    "title": "SASS vs. LESS: A Comparison",
    "author": "William Johnson",
    "publicationDate": "2024-01-10",
    "content": "SASS and LESS are two popular CSS preprocessors that offer similar functionality. In this article, we'll compare the features and syntax of SASS and LESS...",
    "excerpt": "Discover the differences between SASS and LESS and choose the right CSS preprocessor for your next project."
  },
  {
    "id": 14,
    "title": "Creating Custom React Hooks",
    "author": "Sophie Thompson",
    "publicationDate": "2024-02-05",
    "content": "Custom React Hooks allow you to encapsulate and reuse stateful logic across components. Learn how to create and use custom hooks in your React applications...",
    "excerpt": "Harness the power of custom React Hooks to build reusable and composable stateful logic in your applications."
  },
  {
    "id": 15,
    "title": "Optimizing Performance in React Applications",
    "author": "Nathan Lee",
    "publicationDate": "2024-03-01",
    "content": "Performance is critical for delivering a fast and responsive user experience in React applications. Explore various techniques for optimizing performance in React...",
    "excerpt": "Learn how to improve the performance of your React applications and deliver a better user experience to your users."
  },
  {
    "id": 16,
    "title": "Vue.js Essentials: Getting Started",
    "author": "Ava Garcia",
    "publicationDate":"2024-03-15",
    "content": "Vue.js is a progressive JavaScript framework used for building user interfaces. In this guide, you'll learn the basics of Vue.js and how to get started with building Vue applications...",
    "excerpt": "Discover the essentials of Vue.js and start building interactive and reactive web applications with ease."
  },
  {
    "id": 17,
    "title": "Diving Into Docker: A Beginner's Guide",
    "author": "Lucas Miller",
    "publicationDate": "2024-04-10",
    "content": "Docker is a popular containerization platform used to build, deploy, and manage applications. This beginner's guide will introduce you to the basics of Docker and containerization...",
    "excerpt": "Learn the fundamentals of Docker and containerization and how to use Docker to streamline your development workflow."
  },
  {
    "id": 18,
    "title": "Web Accessibility Best Practices",
    "author": "Chloe Wilson",
    "publicationDate": "2024-05-05",
    "content": "Web accessibility is crucial for ensuring that your website is usable by all users, including those with disabilities. In this article, we'll explore best practices for creating accessible web content...",
    "excerpt": "Discover best practices for making your website accessible to all users and ensuring a positive user experience for everyone."
  },
  {
    "id": 19,
    "title": "Firebase Authentication with React",
    "author": "Liam Brown",
    "publicationDate": "2024-06-01",
    "content": "Firebase provides a powerful authentication service that allows you to easily add user authentication to your React applications. Learn how to integrate Firebase authentication with React...",
    "excerpt": "Add user authentication to your React applications using Firebase Authentication and provide secure access to your users."
  },
  {
    "id": 20,
    "title": "Redux State Management in React Applications",
    "author": "Zoe Taylor",
    "publicationDate": "2024-07-05",
    "content": "Redux is a predictable state container for JavaScript applications, commonly used with React. Explore how to manage state with Redux in your React applications...",
    "excerpt": "Learn the principles of Redux and how to implement Redux state management in your React applications for better organization and scalability."
  },
  {
    "id": 21,
    "title": "GraphQL Server with Apollo Server",
    "author": "Max Roberts",
    "publicationDate": "2024-08-01",
    "content": "Apollo Server is a GraphQL server implementation that allows you to easily create GraphQL APIs. Learn how to build a GraphQL server with Apollo Server...",
    "excerpt": "Build a GraphQL server using Apollo Server and create flexible and efficient APIs for your web applications."
  },
  {
    "id": 22,
    "title": "Advanced JavaScript Concepts",
    "author": "Ella Clark",
    "publicationDate": "2024-09-05",
    "content": "Take your JavaScript skills to the next level with these advanced concepts. From closures to prototypal inheritance, explore the depths of JavaScript...",
    "excerpt": "Master advanced JavaScript concepts and become a more proficient JavaScript developer."
  },
  {
    "id": 23,
    "title": "Modern Frontend Development Tools",
    "author": "Leo Turner",
    "publicationDate": "2024-10-01",
    "content": "Frontend development has evolved significantly with the introduction of modern tools and technologies. Explore the latest frontend development tools and how to use them effectively...",
    "excerpt": "Stay up-to-date with the latest frontend development tools and streamline your development workflow for better productivity."
  },
  {
    "id": 24,
    "title": "CI CD Pipelines with Jenkins",
    "author": "Aiden Martinez",
    "publicationDate": "2024-11-05",
    "content": "Jenkins is a popular automation server used for building and deploying applications. Learn how to set up CI/CD pipelines with Jenkins to automate your development workflow...",
    "excerpt": "Automate your development workflow with Jenkins CI/CD pipelines and streamline the process of building, testing, and deploying your applications."
  },
  {
    "id": 25,
    "title": "Securing Your Web Applications",
    "author": "Mia White",
    "publicationDate": "2024-12-01",
    "content": "Security is a critical aspect of web development. Explore best practices for securing your web applications against common vulnerabilities and attacks...",
    "excerpt": "Learn how to protect your web applications from security threats and ensure the confidentiality, integrity, and availability of your data."
  },
  {
    "id": 26,
    "title": "Angular Essentials: Getting Started",
    "author": "Aiden Wilson",
    "publicationDate": "2025-01-05",
    "content": "Angular is a popular JavaScript framework used for building single-page applications. In this guide, you'll learn the basics of Angular and how to get started with building Angular applications...",
    "excerpt": "Discover the essentials of Angular and start building powerful and dynamic web applications with this comprehensive guide."
  },
  {
    "id": 27,
    "title": "Introduction to Python Programming",
    "author": "Oliver Smith",
    "publicationDate": "2025-02-01",
    "content": "Python is a versatile programming language known for its simplicity and readability. Learn the basics of Python programming and start writing your own Python scripts...",
    "excerpt": "Get started with Python programming and unlock the power of this versatile and beginner-friendly language."
  },
  {
    "id": 28,
    "title": "AWS Lambda Functions: A Comprehensive Guide",
    "author": "Isaac Jones",
    "publicationDate": "2025-03-05",
    "content": "AWS Lambda allows you to run code without provisioning or managing servers. Explore the capabilities of AWS Lambda and how to create and deploy Lambda functions...",
    "excerpt": "Learn how to leverage AWS Lambda to build scalable and cost-effective serverless applications that respond to events in real-time."
  },
  {
    "id": 29,
    "title": "Machine Learning Basics for Beginners",
    "author": "Hannah Miller",
    "publicationDate": "2025-04-01",
    "content": "Machine learning is a branch of artificial intelligence that enables computers to learn from data and make predictions. Discover the basics of machine learning and how to get started...",
    "excerpt": "Gain a foundational understanding of machine learning and embark on your journey to becoming a machine learning practitioner."
  },
  {
    "id": 30,
    "title": "Blockchain Technology Explained",
    "author": "Daniel Brown",
    "publicationDate": "2025-05-05",
    "content": "Blockchain technology is revolutionizing various industries by providing secure and transparent decentralized systems. Learn how blockchain works and its applications in different domains...",
    "excerpt": "Understand the fundamentals of blockchain technology and explore its potential to transform industries such as finance, supply chain, and healthcare."
  }
]

export default function page({params}){
  const {register,handleSubmit,setValue} = useForm()
  const [commentsforpost, setCommentsforpost] = useState()
  const [loading, setLoading] = useState(false)
  let title = decodeURI(params.slug)
  
  let searchedPost = posts.filter(post=>post.title == title)
  if(!searchedPost[0]) return<>No such Post</>
  setValue("postId", searchedPost[0].id);
  
  useEffect(()=>{
    setLoading(true)
    fetch(`https://node-backend-henna.vercel.app/comments/${searchedPost[0].id}`)
    .then((res) => res.json())
    .then((data) => {
      setLoading(false)
      setCommentsforpost(data.comments)})
  },[])
    
    return (<>
    <div>Post: {searchedPost[0].title}</div>
    <div>Author: {searchedPost[0].author}</div>
    <div className="m-5">    
    <div className="text-lg font-bold mt-10 mb-3">Comments:</div>
    {(commentsforpost==undefined)||(commentsforpost.length==0)?`${loading?<Loading/>:<div>No Comments</div>}`:""}
    {commentsforpost&&commentsforpost.map(comment=>{
      return(
        <div key={comment.id} className="flex border-2 justify-between w-full items-center px-5">
      <div key={comment.id} className="p-2">
      <div key={comment.id} className="text-xl underline font-bold">
        <div className="flex items-center gap-3">
        <FaUser/>
{comment.author}
        </div>
      </div>
      <div>{comment.content}</div>
      </div>
      <div className="flex gap-5 text-2xl">
        <BiLike cursor="pointer" className="hover:text-green-500 rounded-xl hover:bg-green-200"/>
        <BiDislike cursor="pointer" className="hover:text-red-500 rounded-xl hover:bg-red-200"/>
      </div>
      </div>)
    })}
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="commentinp rounded-lg my-3 p-3 flex items-center focus-within:outline-none focus-within:border-2 focus-within:border-black ">
      <input type="text"  {...register("content")} className="p-2 h-5 w-full outline-none" placeholder="What do you think about this post?..." />
      <button type="submit">
      <FaCircleArrowUp cursor="pointer" size={40} />
      </button>
    </div>
 
      </form>
    </div>
    </>)
}
