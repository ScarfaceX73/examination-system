"use client";
import Link from "next/link";
import React, { useState } from "react";

const RegistrationForm = () => {
  const [userDetails, setUserDetails] = useState({});
  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnClick = () => {
    console.log(userDetails);
  };
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="items-self-start text-[26px]">Registration</h1>
      <div className="flex flex-col my-4">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          className="w-[200px] text-black"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          className="w-[200px] text-black"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button
        className="p-3 bg-white text-black hover:text-white hover:bg-slate-900 transition-all rounded-xl"
        onClick={() => handleOnClick()}
      >
        <Link href={`/questionnaire`}>Register</Link>
      </button>
    </section>
  );
};

export default RegistrationForm;
