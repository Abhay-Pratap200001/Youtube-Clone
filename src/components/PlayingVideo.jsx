import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";

function PlayingVideo() {
  const [video, setVideo] = useState();
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    loadDummyComments();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      setVideo(res);
    });
  };

  const loadDummyComments = () => {
    setComments([
      { user: "John Doe", text: "This video is awesome! Loved the editing." },
      { user: "Jane Smith", text: "Great content, keep uploading more like this!" },
      { user: "Alex Brown", text: "Can you make a tutorial on React performance?" },
      { user: "Chris Evans", text: "Very helpful video, thanks for sharing." },
      { user: "Mary Johnson", text: "This is exactly what I was looking for!" },
    ]);
  };

  const getTruncatedDescription = (desc) => {
    if (!desc) return "";
    return desc.length > 200 && !showFullDesc
      ? desc.substring(0, 200) + "..."
      : desc;
  };


  return (
    <div className="w-full min-h-screen bg-gray-50 text-black flex flex-col pt-14 sm:pt-13">
      {/* ===================== VIDEO PLAYER ===================== */}
      <div className="w-full bg-black">
        <iframe
          className="w-full aspect-video max-h-[70vh] sm:max-h-[75vh]"
          src={`https://www.youtube.com/embed/${id}?autoplay=true&mute=true`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>



      {/* ===================== VIDEO TITLE ===================== */}
      <div className="px-3 mt-3 text-base sm:text-xl font-semibold leading-snug">
        {video?.title}
      </div>



      {/* ===================== CHANNEL & STATS ===================== */}
      <div className="flex flex-col sm:flex-row justify-between px-3 mt-3 pb-3 border-b border-gray-300">
        {/* Channel Info */}
        <div className="flex items-center space-x-3">
          <div className="h-9 w-9 sm:h-12 sm:w-12 rounded-full overflow-hidden bg-gray-300">
            <img
              src={video?.author?.avatar[0]?.url}
              className="w-full h-full object-cover"
              alt="channel"/>
          </div>


          <div className="flex-1">
            <div className="font-semibold flex items-center text-sm sm:text-base">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="ml-1 text-gray-500 text-xs sm:text-sm" />
              )}
            </div>
            <div className="text-xs text-gray-600">
              {video?.author?.stats?.subscribersText}
            </div>
          </div>
          <button className="px-3 py-1 bg-red-500 text-white text-xs sm:text-sm rounded-full hover:bg-red-600">
            Subscribe
          </button>
        </div>



        {/* Likes & Views */}
        <div className="flex mt-3 sm:mt-0 space-x-2 sm:space-x-4">
          <div className="px-2 py-1 sm:px-4 sm:py-2 bg-gray-100 rounded-full flex items-center text-xs sm:text-base">
            <AiOutlineLike className="text-base sm:text-xl mr-1 text-gray-700" />
            {abbreviateNumber(video?.stats?.likes, 2)} Likes
          </div>
          <div className="px-2 py-1 sm:px-4 sm:py-2 bg-gray-100 rounded-full flex items-center text-xs sm:text-base">
            {abbreviateNumber(video?.stats?.views, 2)} Views
          </div>
        </div>
      </div>


      {/* ===================== DESCRIPTION ===================== */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 mt-4 rounded-lg text-sm sm:text-base">
        <p>{getTruncatedDescription(video?.description)}</p>
        {video?.description?.length > 200 && (
          <button
            className="text-blue-600 font-semibold mt-2"
            onClick={() => setShowFullDesc(!showFullDesc)}>
            {showFullDesc ? "Show Less" : "Show More"}
          </button>
        )}
      </div>


      {/* ===================== COMMENTS ===================== */}
      <div className="px-4 sm:px-6 mt-6 mb-10">
        <div className="text-base sm:text-lg font-semibold mb-4">
          {video?.stats?.comments || comments.length} Comments
        </div>

        {comments.slice(0, showAllComments ? comments.length : 3).map((c, i) => (
          <div key={i} className="flex space-x-3 mb-4">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-300"></div>
            <div>
              <p className="font-semibold text-xs sm:text-sm">{c.user}</p>
              <p className="text-gray-700 text-xs sm:text-sm">{c.text}</p>
            </div>
          </div>
        ))}
        

        {comments.length > 3 && (
          <button
            className="text-blue-600 font-semibold mt-2"
            onClick={() => setShowAllComments(!showAllComments)}>
            {showAllComments ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
}

export { PlayingVideo };
