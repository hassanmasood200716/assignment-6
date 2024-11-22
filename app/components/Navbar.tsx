import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="" >
      <div className=" hidden sm:flex items-center justify-around h-[5vh] border border-black">
        <div>Phone Number: 956 742 455 678 | Email:info@ddsgnr.com</div>
        <div className="flex items-center w-6 gap-5">
          <img src="/images/facebook.png" alt="Facebook" />
          <img src="/images/instagram.png" alt="instagram" />
          <img src="/images/twitwer.png" alt="twitter" />
          <img src="/images/linked.png" alt="linkedn" />
        </div>
      </div>
      <div className="bg-gray-100 h-[10vh] flex justify-around sm:justify-between items-center border border-black ">
        <div className="flex items-center justify-center sm:w-1/6">
          <span>
            <img className="w-8" src="/images/logo2.png" />
          </span>
          <span className="font-bold text-3xl">Ddsgnr</span>
        </div>
        <div className="block sm:hidden ">
          <span><img src="/images/alternate.png " className="w-10"></img></span>
        </div>
        <div className="hidden sm:flex items-center justify-center gap-8 w-4/6  text-lg  bg-gray-50">
          <div className="hover:font-bold p-3">Home</div>
          <div className="hover:font-bold p-3">Courses</div>
          <div className="hover:font-bold p-3">Services</div>
          <div className="hover:font-bold p-3">Achievement</div>
          <div className="hover:font-bold p-3">About Us</div>
          <div className="hover:font-bold p-3">Testimonial</div>
          <button className="hover:bg-black hover:text-white border-2 px-3 py-2 border-black rounded-lg bg-white ">
            login
          </button>
          <button className="hover:bg-white hover:text-black border-2 px-3 py-2 border-black rounded-lg bg-black text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );};

export default Navbar;


