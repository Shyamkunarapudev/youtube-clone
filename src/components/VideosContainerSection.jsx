import { useEffect, useState } from "react";
import YOUTUBE_VIDEOS_API from "../utils/constants";
import VideoCard from "./VideoCard";

function VideosContainerSection () {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async () =>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json()
    setVideos(json.items)
  }
  if(videos.length === 0) return;
  return (
    <div className="flex flex-wrap">
      {videos.map(video => <VideoCard key={video.id} info={video}/>)}
    </div>
  )
}

export default VideosContainerSection;