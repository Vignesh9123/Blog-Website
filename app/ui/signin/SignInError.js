import React, { useState,useEffect } from "react";
const Alert = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [time, setTime] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setTime((prev) => Math.min(prev + 0.1, 100));
    }, 5);
  }, [])
  return (
    <>
      {showAlert ? (
        <div
          className={
            "text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500"
          }
        >
          <div className="h-[5px] bg-red-400 rounded-t-md" style={{width:`${time}%`}}></div>
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">Some error occured</b>Please <a href="/user/signin">try again</a>
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default function SignInError() {
  return (
    <>
       <Alert/>;
    </>
  );
}