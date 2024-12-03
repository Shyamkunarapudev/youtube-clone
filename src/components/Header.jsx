import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/navSlice";


function Header () {
  const dispatch = useDispatch()
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col my-1 items-center ">
      <div className="flex items-center">
        <img 
        onClick={()=>toggleMenuHandler()}
        className="w-5 mr-5" src="https://static.thenounproject.com/png/462023-200.png" alt="" />
        <a href="/">
        <img className="h-5 w-24" src="https://www.pngkey.com/png/full/505-5052878_youtube-chanel-youtube-logo-jpg.png" alt="" />
        </a>
      </div>
      <div className="w-[500px]">
        <input className="border border-gray-400 p-1 px-4 w-10/12 rounded-l-full" type="text" placeholder="Search" />
        <button className="border border-gray-400 p-1 px-4 ml-[-1px] rounded-r-full bg-gray-100">🔍</button>
      </div>
      <div className="flex justify-end">
        <img className="w-9" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="" />
      </div>
    </div>
  )
}

export default Header;