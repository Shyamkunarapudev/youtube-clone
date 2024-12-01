import CategoriesButtonsSection from "./CategoriesButtonsSection";
import VideosContainerSection from "./VideosContainerSection";

function MainContainer () {
  return (
    <div className="w-[86%]">
      <CategoriesButtonsSection />
      <VideosContainerSection />
    </div>
  )
}

export default MainContainer;