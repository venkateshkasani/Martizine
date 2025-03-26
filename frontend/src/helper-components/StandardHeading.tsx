

const StandardHeading = ({title}:{title:string}) => {
  return (
    <div style={{letterSpacing:'7px'}} className="standard-heading font-sans text-teal-600 text-2xl sm:text-2xl md:text-4xl text-center mt-10 font-bold mb-8 w-[97vw]">{title}</div>
  )
}

export default StandardHeading