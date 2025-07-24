import React from 'react'
// import {Avatar} from "react-avatar";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "/logo.png"
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";



function Navbar() {
  return (
    // main div
    <div className='flex justify-between px-6 py-2'> 

        <div className="flex items-center space-x-4 ">{/* yt logo and hamburger*/} 
        <GiHamburgerMenu className="text-xl cursor-pointer" />
        <img src={logo} alt="yt-logo" className="w-28 cursor-pointer" />
      </div>

        <div className="flex w-[35%] items-center "> {/*Search input*/}
        <div className="w-[100%] px-4 py-2 border-[1px] border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className=" outline-none"/>
        </div>

        {/*search icon*/}
        <button
          className="px-4 py-2 border-[1px] border-gray-400 bg-slate-100 rounded-r-full">
          <CiSearch size={"24px"} />
        </button>

        {/* mick icon */}
          <IoMdMic
          size={"42px"}
          className="ml-3 border w-14 border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"/>
        </div>

        {/* video and notification icons */}
        <div className="flex space-x-5 items-center ">
        <RiVideoAddLine className="text-2xl"/>
        <AiOutlineBell className="text-2xl"/>
        <img className='w-20' src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="profile" size="32" round={true}/>        
      </div>
    </div>
  )
}

export default Navbar