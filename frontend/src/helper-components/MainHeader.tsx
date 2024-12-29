
const MainHeader = ({heading}:{heading:string}) => {
  return (
    <div className="w-full text-center py-9">
      <p className="font-mono text-teal-700 font-semibold text-5xl">{heading}</p>
    </div>
  )
}

export default MainHeader;