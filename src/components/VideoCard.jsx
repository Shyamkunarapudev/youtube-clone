

function VideoCard ({info}) {
  const {snippet, statistics} = info;
  const {channelTitle, thumbnails, title} = snippet;
  return (
    <div className="m-3 w-[31%] ">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
      {/* <div>
        <img src="" alt="" />
      </div> */}
    </div>
  )
}

export default VideoCard;