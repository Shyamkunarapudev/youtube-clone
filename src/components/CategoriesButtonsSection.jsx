import CategoriesButton from "./CategoriesButton";
const buttons = ["All", "Music", "Tamil Cinema", "Batter", "Wickets", "News", "Mixes", "Algorithms", "AI", "Actions", "Computers"]
function CategoriesButtonsSection () {
  return (
    <div>
      <CategoriesButton buttons={buttons} />
    </div>
  )
}

export default CategoriesButtonsSection;