import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/navSlice";
import { useEffect } from "react";


function WatchPage () {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu())
  }, []);
  return (
    <div className="mt-5 w-[90%] mx-auto">
      <iframe className="rounded-xl" width="640" height="360" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage;