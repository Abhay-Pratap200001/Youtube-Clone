import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import Listitems from './Listitems';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if ((event?.key === "Enter" || event === "searchButton") && searchQuery.trim().length > 0) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md h-18">

      {/* =============== TOP NAVBAR =============== */}
      <div className="flex justify-between items-center px-3 sm:px-6 py-2 h-14 sm:h-16">
        {/* Hamburger + Logo */}

        <div className="flex items-center space-x-3">
          <GiHamburgerMenu className="text-xl cursor-pointer hover:text-gray-700" />
          <Link to={'/'}>
            <img src={logo} alt="yt-logo" className="w-20 sm:w-24 cursor-pointer" />
          </Link>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex items-center w-[40%] max-w-md">
          <div className="w-full px-4 py-2 border border-gray-400 rounded-l-full">
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-full text-sm sm:text-base"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}/>
          </div>

          <button
            className="px-4 py-2 border border-gray-400 bg-slate-100 rounded-r-full hover:bg-gray-200"
            onClick={() => searchQueryHandler("searchButton")}>
            <CiSearch size={22} />
          </button>
          <IoMdMic
            size={38}
            className="ml-2 border border-gray-400 rounded-full p-2 cursor-pointer hover:bg-gray-100 duration-200"/>
        </div>


        {/* Icons Section */}
        <div className="flex items-center space-x-4 sm:space-x-5">
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            onClick={() => setShowSearch(!showSearch)}>
            <CiSearch size={24} />
          </button>
          <RiVideoAddLine className="text-xl sm:text-2xl cursor-pointer hover:text-gray-700" />
          <AiOutlineBell className="text-xl sm:text-2xl cursor-pointer hover:text-gray-700" />
          <img
            className="w-8 sm:w-9 h-8 sm:h-9 rounded-full object-cover cursor-pointer border"
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
            alt="profile"/>
        </div>
      </div>


      {/* =============== MOBILE SEARCH =============== */}
      {showSearch && (
        <div className="flex md:hidden px-4 py-2 border-t border-gray-300 bg-white">
          <div className="flex w-full border border-gray-400 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-2 outline-none w-full text-sm"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}/>

            <button
              className="px-4 bg-slate-100 hover:bg-gray-200"
              onClick={() => searchQueryHandler("searchButton")}>
              <CiSearch size={22} />
            </button>
          </div>
        </div>
      )}


      {/* =============== LIST ITEMS (CATEGORIES) =============== */}
      <div className="border-t border-gray-300 bg-white px-2 sm:px-4 py-2 overflow-x-auto scrollbar-hide">
        <Listitems />
      </div>
    </div>
  );
}

export default Navbar;
