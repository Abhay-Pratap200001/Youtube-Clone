import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Video from "./video.jsx";
import { useAuth } from "../context/AuthProvider.jsx";
function Home() {
  const { data } = useAuth(); //accepting data from auth
  console.log(data);
  
  return (
    <div className="flex mt-19">
      <Sidebar />
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
        {data.map((item) => {
          if (item.type !== "video") return false;
         return <Video key={item.id} video={item?.video} />; //sending data to video component
        })}
        </div>
      </div>
    </div>
  );
}

export default Home;
