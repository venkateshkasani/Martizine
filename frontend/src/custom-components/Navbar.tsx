// 'use client'
// import { useState } from "react"
// import { Menu } from "lucide-react";
// import clsx from "clsx";

// const Navbar = () => {
//   const [isCollapsed,setIsCollapsed] = useState<boolean>(true);
//   return (
//     <div className="bg-primary">
//      <div className="flex justify-between px-2 py-4 transition-all duration-100 z-10">
//      <div className="text-white font-bold text-2xl relative">Logo</div>
//      <div onClick={() => setIsCollapsed(!isCollapsed)}>
//         <Menu size={26} className="text-white" />
//      </div>
//      </div>
//      <div
//         className={clsx(
//           'transition-all ease-in-out duration-500', 
//           {
//             'opacity-100 max-h-[500px]': isCollapsed, 
//             'opacity-0 max-h-0': !isCollapsed
//           }
//         )}
//       >
//       <ul className="text-white bg-primary flex flex-col static md:relative left-0 top-18 gap-3 px-2 pb-4 w-full md:fit">
//         <li>Home</li>
//         <li>About</li>
//         <li>Saved Files</li>
//         <li>Give feedback</li>
//         <li>Contribute</li>
//       </ul>
//      </div>
//     </div>
//   )
// }

// export default Navbar

'use client'
import { useState } from "react"
import { Menu } from "lucide-react";
import clsx from "clsx";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <div className="bg-primary">
      <div className="flex justify-between items-center px-2 py-4 transition-all duration-100 z-10">
        <div className="text-white font-bold text-2xl">
          <img src="/martizine.png" className="w-[40px] h-[40px]"/>
        </div>
        <div
        className={clsx('transition-all duration-500 md:opacity-100',{'opacity-100':isCollapsed,'opacity-0':!isCollapsed})}
      >
        <ul className="text-white flex flex-col gap-2 absolute md:relative md:flex-row md:gap-8 left-0 top-[4em] md:top-0 w-full px-2 py-4 bg-primary">
          <li>Home</li> 
          <li>About</li>
          <li>Saved Files</li>
          <li>Give feedback</li>
          <li>Contribute</li>
        </ul>
      </div>
        <div onClick={() => setIsCollapsed(!isCollapsed)}>
          <Menu size={26} className="text-white" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
