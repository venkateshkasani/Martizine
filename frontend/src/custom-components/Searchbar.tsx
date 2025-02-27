
const Searchbar = () => {
  return (
    <div className="searchbar flex justify-center py-5 w-full">
      <span className="p-2 bg-slate-200 rounded-l border border-teal-600">Filters</span>
      <input className="w-2/3 p-2 rounded-r border border-teal-600 focus:outline-none" type="text" placeholder="Search resources eg., Electromagnetic waves theory" />
    </div>
  )
}

export default Searchbar