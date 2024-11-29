function CategoriesButton ({buttons}) {
  let CategoriesButtonKey = 1;
  return (
    <div className="my-4">
        {buttons.map((button)=>{
          return <button key={CategoriesButtonKey++} className="p-2 bg-gray-100 rounded-lg mr-3 text-[11px] font-semibold hover:bg-gray-200">{button}</button>
        })}
    </div>
  )
}

export default CategoriesButton;