import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="bg-primary h-screen w-full flex items-center justify-center">
      <div className="w-[500px] px-[70px] max-sm:scale-[0.8] max-sm:px-[10px]">
        <form className="w-full flex flex-col bg-accent2 p-4 rounded-[10px] p-6 border border-primary font-sans">
          <div className="text-primary font-bold w-full text-center text-3xl mb-6">
            Sign Up
          </div>
          <div className="mb-6">
            <input
              name="name"
              type="text"
              id="email"
              required
              className="bg-background border border-primary  placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Name"
            />
          </div>
          <div className="mb-6">
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-background border border-primary  placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <input
              name="Phone"
              type="text"
              id="subject"
              required
              className="bg-background border border-primary placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Phone number"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="password"
              id="message"
              className="bg-background border border-primary placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Create your password."
            />
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-transparent border border-primary hover:text-primary transition-all duration-500 font-bold text-white  py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          <div className="text-center mt-2  text-sm">
            Have an account?
            <span className="text-secondary hover:underline">
              {" "}
              <Link href={"/login"}> Click to Login</Link>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
};

export default page;
