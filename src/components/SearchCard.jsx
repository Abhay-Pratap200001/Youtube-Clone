import React from 'react';
import { Link } from 'react-router-dom';
import Time from '../loder/Time';
import { abbreviateNumber } from 'js-abbreviation-number';
import { BsFillCheckCircleFill } from 'react-icons/bs';

function SearchCard({ video }) {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col md:flex-row mb-6 md:mb-3 md:p-4">

          {/* Thumbnail */}
          <div className="relative w-full h-48 md:w-64 md:h-36">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={video?.thumbnails[0]?.url}
              alt={video?.title}/>
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>


          {/* Video Details */}
          <div className="flex flex-col mt-3 md:mt-0 md:ml-4 overflow-hidden">
            <span className="text-base md:text-xl font-semibold line-clamp-2">
              {video?.title}
            </span>

            <span className="hidden md:block text-sm text-gray-700 md:my-2 md:pr-24 line-clamp-2">
              {video?.descriptionSnippet}
            </span>



            {/* Channel Info (Mobile Simplified) */}
            <div className="flex items-center mt-2 md:hidden text-sm text-gray-600">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="mx-1">•</span>
              <span className="truncate">{video?.publishedTimeText}</span>
            </div>



            {/* Channel Info (Desktop Detailed) */}
            <div className="hidden md:flex items-center mt-2">
              <div className="flex items-start mr-3">
                <div className="h-9 w-9 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url}
                    alt={video?.author?.title}/>
                </div>
              </div>


              <div className="flex flex-col">
                <span className="text-sm font-semibold flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                    <BsFillCheckCircleFill className="text-[12px] ml-1" />
                  )}
                </span>

                <div className="flex text-sm font-semibold truncate overflow-hidden">
                  <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
                  <span className="mx-1">•</span>
                  <span className="truncate">{video?.publishedTimeText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchCard;
