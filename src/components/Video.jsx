import React from "react";
import { Link } from "react-router-dom";
import Time from "../loder/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function Video({ video }) {
  //accepting data from home as a prop
  // console.log(video);
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>

        <div className="flex flex-col">

          {/* thumbnail*/}
          <div className="relative h-48 md:h-56 md: rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full"
              src={video?.thumbnails[0]?.url}
              alt=""/>


            {/* send vide duration a prop */}
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>


          {/* vide author profile img*/}
           <div className="flex mt-3 space-x-2 ">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={video?.author?.avatar[0].url}
                  alt=""/>
              </div>
            </div>


            {/* video title and vide author name */}
            <div>
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              

              {/* video views */}
              <div className="flex text-gray-500 text-[12px]">
                <span>
                  {/* extracting views from video.stats */}
                {`${abbreviateNumber(video?.stats?.views,2)} views`}
                </span>

                <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                  .
                </span>

                {/* video uploading time */}
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;


// import React from "react";
// import { Link } from "react-router-dom";
// import Time from "../loder/Time"; // Component to show video duration
// import { BsFillCheckCircleFill } from "react-icons/bs"; // Verified channel icon
// import { abbreviateNumber } from "js-abbreviation-number"; // Helper to format views (e.g., 1,200 → 1.2K)

// function Video({ video }) {
//   return (
//     <div className="w-full p-2 sm:p-3">
//       {/* When clicked, navigate to the video details page */}
//       <Link to={`/video/${video?.videoId}`}>
//         <div className="flex flex-col cursor-pointer hover:scale-[1.02] transition-transform duration-200">
          
//           {/* =============== VIDEO THUMBNAIL =============== */}
//           <div className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden">
//             <img
//               className="h-full w-full object-cover"
//               src={video?.thumbnails[0]?.url}
//               alt={video?.title || "Video Thumbnail"}
//             />
//             {/* Display video duration (bottom-right corner) */}
//             {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
//           </div>

//           {/* =============== VIDEO INFO =============== */}
//           <div className="flex mt-3 space-x-3">
            
//             {/* Author Avatar */}
//             <div className="flex-shrink-0">
//               <div className="h-9 w-9 md:h-10 md:w-10 rounded-full overflow-hidden border">
//                 <img
//                   className="h-full w-full object-cover"
//                   src={video?.author?.avatar[0]?.url}
//                   alt={video?.author?.title || "Author Avatar"}
//                 />
//               </div>
//             </div>

//             {/* Title and Author Details */}
//             <div className="flex flex-col">
              
//               {/* Video Title */}
//               <span className="text-sm md:text-base font-semibold line-clamp-2">
//                 {video?.title}
//               </span>

//               {/* Author Name and Verified Badge */}
//               <span className="flex items-center text-xs md:text-sm text-gray-600 mt-1">
//                 {video?.author?.title}
//                 {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
//                   <BsFillCheckCircleFill className="ml-1 text-gray-600 text-[12px]" />
//                 )}
//               </span>

//               {/* Views and Published Time */}
//               <div className="flex text-gray-500 text-xs md:text-sm mt-1 space-x-2">
//                 <span>
//                   {`${abbreviateNumber(video?.stats?.views || 0, 2)} views`}
//                 </span>
//                 <span>•</span>
//                 <span>{video?.publishedTimeText}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// }

// export default Video;
