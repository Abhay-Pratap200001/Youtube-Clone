import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory, MdVideoLibrary } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio, SiYoutubekids, SiYoutubemusic, SiTrendmicro, SiStylelint } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight, PiLightbulbLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { MdPodcasts, MdOutlineWatchLater, MdOutlineFeedback } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { IoFlagOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarItems = [
    { id: 1, name: "Home", icon: <GoHome /> },
    { id: 2, name: "Shorts", icon: <SiYoutubeshorts /> },
    { id: 3, name: "Subscriptions", icon: <MdOutlineSubscriptions /> },
  ];

  const sidebarItems2 = [
    { id: 1, name: "Your Channel", icon: <PiUserSquareThin /> },
    { id: 2, name: "History", icon: <MdHistory /> },
    { id: 3, name: "Playlists", icon: <MdOutlineSubscriptions /> },
    { id: 4, name: "Your Videos", icon: <BiVideo /> },
    { id: 5, name: "Watch later", icon: <MdOutlineWatchLater /> },
    { id: 6, name: "Liked videos", icon: <AiOutlineLike /> },
  ];

  const sidebarItems3 = [
    { id: 1, name: "Trending", icon: <SiTrendmicro /> },
    { id: 2, name: "Shopping", icon: <HiOutlineShoppingBag /> },
    { id: 3, name: "Music", icon: <SiYoutubemusic /> },
    { id: 4, name: "Films", icon: <PiFilmSlateLight /> },
    { id: 5, name: "Live", icon: <CgMediaLive /> },
    { id: 6, name: "Gaming", icon: <IoGameControllerOutline /> },
    { id: 7, name: "News", icon: <FaRegNewspaper /> },
    { id: 8, name: "Sport", icon: <TfiCup /> },
    { id: 9, name: "Courses", icon: <SiStylelint /> },
    { id: 10, name: "Fashion & beauty", icon: <PiLightbulbLight /> },
    { id: 11, name: "Padcasts", icon: <MdPodcasts /> },
  ];

  const sidebarItems4 = [
    { id: 1, name: "Youtube Premium", icon: <FaYoutube /> },
    { id: 2, name: "Youtube Studio", icon: <SiYoutubestudio /> },
    { id: 3, name: "Youtube Music", icon: <SiYoutubemusic /> },
    { id: 4, name: "Youtube Kids", icon: <SiYoutubekids /> },
  ];

  const sidebarItems5 = [
    { id: 1, name: "Settings", icon: <CiSettings /> },
    { id: 2, name: "Report history", icon: <IoIosHelpCircleOutline /> },
    { id: 3, name: "Help", icon: <IoFlagOutline /> },
    { id: 4, name: "Send feedback", icon: <MdOutlineFeedback /> },
  ];

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <div className="hidden md:block p-6 w-[25%] h-[calc(100vh-4rem)] overflow-y-scroll border-r border-gray-300">

        {/* Home Section */}
        <div className="space-y-3">
          {sidebarItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1 cursor-pointer">
              <div className="text-xl">{item.icon}</div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <hr className="my-4" />


        {/* You Section */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 p-1 rounded-xl hover:bg-gray-200">
            <h1 className="px-1 font-semibold">You</h1>
            <FaChevronRight />
          </div>
          {sidebarItems2.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1 duration-300 cursor-pointer">
              <div className="text-xl">{item.icon}</div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <hr className="my-4" />

        {/* Explore Section */}
        <div className="space-y-3">
          <h1 className="font-semibold px-1">Explore</h1>
          {sidebarItems3.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1 duration-300 cursor-pointer">
              <div className="text-xl">{item.icon}</div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <hr className="my-4" />



        {/* More From YouTube */}
        <div className="space-y-3">
          <h1 className="font-semibold px-1">More From YouTube</h1>
          {sidebarItems4.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1 duration-300 cursor-pointer">
              <div className="text-xl text-red-600">{item.icon}</div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <hr className="my-4" />


        {/* Settings Section */}
        <div className="space-y-3">
          <h1 className="font-semibold px-1">Settings</h1>
          {sidebarItems5.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-6 hover:bg-gray-300 rounded-xl p-1 duration-300 cursor-pointer">
              <div className="text-xl">{item.icon}</div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>



        {/* Footer */}
        <div className="my-3 text-xs text-gray-600 font-semibold">
          About Press Copyright <br /> Contact us Creators <br /> Advertise
          Developers <br />
          <p className="mt-3">Terms Privacy Policy & Safety</p> How YouTube works{" "}
          <br /> Test new features
          <p className="text-xs text-gray-800 mt-3">{new Date().toLocaleString()}</p>
        </div>
      </div>



      {/* ================= MOBILE BOTTOM NAVBAR ================= */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around items-center py-2 border-t border-gray-300 z-50">
        <Link to="/" className="flex flex-col items-center text-gray-700 hover:text-black">
          <GoHome className="text-2xl" />
          <span className="text-[10px]">Home</span>
        </Link>
        <Link to="/" className="flex flex-col items-center text-gray-700 hover:text-black">
          <SiYoutubeshorts className="text-2xl" />
          <span className="text-[10px]">Shorts</span>
        </Link>
        <Link to="/" className="flex flex-col items-center text-gray-700 hover:text-black">
          <MdOutlineSubscriptions className="text-2xl" />
          <span className="text-[10px]">Subs</span>
        </Link>
        <Link to="/" className="flex flex-col items-center text-gray-700 hover:text-black">
          <MdVideoLibrary className="text-2xl" />
          <span className="text-[10px]">Library</span>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
