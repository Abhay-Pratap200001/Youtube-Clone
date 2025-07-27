import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Video from "./Video.jsx";
import { useAuth } from "../context/AuthProvider.jsx";
import Listitems from "./Listitems.jsx";
function Home() {
  const { data,loading } = useAuth(); //accepting data and loading from auth

  return (
    
    <div className="flex mt-34">
      <Sidebar/> 
      <div className="h-[calc(100vh-4.625rem)] overflow-y-scroll  overflow-x-hidden"> {/*sidebar component ui classes*/}

      {/* <Listitems/> */}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-4 p-5">{/*listing component ui classes**/}
        {!loading && data.map((item) => {
          if (item.type !== "video") return false;
         return <Video key={item.id} video={item?.video}/>; //sending data to video component
        })}
        </div>
      </div>
    </div>
  );
}

export default Home;
