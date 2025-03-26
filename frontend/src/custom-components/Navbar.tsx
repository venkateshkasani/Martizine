'use client'
import { useEffect, useRef, useState } from "react"
import { Menu } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { DiGithubBadge } from "react-icons/di";
import { Avatar,AvatarFallback,AvatarImage } from "@radix-ui/react-avatar";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [userData, setuserData] = useState<any>({});
  const [display,setDisplay] = useState(false)
  const pathname = usePathname();
  const profileRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
      setDisplay(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   const parsedData = JSON.parse(sessionStorage?.getItem('userData') || '{}')
  //  if(parsedData) {
  //   setuserData(parsedData);
  //  }
  // },[])

  console.log("session storage",userData)
  return (
    <div className="bg-teal-700 w-full px-5">
      <div className="flex justify-between items-center py-4 transition-all duration-100 z-10">
        <div className="text-white font-bold text-2xl">
          <img src="/martizine.svg" className="w-[150px] h-[50px]"/>
        </div>
        <div
        className={clsx('transition-all duration-500 md:opacity-100',{'opacity-100':isCollapsed,'opacity-0':!isCollapsed})}
      >
        <div style={{letterSpacing:'3px'}} className="text-white flex flex-col gap-2 absolute md:relative md:flex-row md:gap-8 left-0 top-[4em] md:top-0 w-full px-2 py-4">
        <div className="flex gap-10">
          <Link href={'/'}>
          <div className={clsx('hover:cursor-pointer',pathname=='/' && 'font-bold text-whitesmoke')}>Home</div>
          </Link> 
          <Link href={'/saved'}>
          <div className={clsx('hover:cursor-pointer',pathname=='/saved' && 'font-bold text-whitesmoke')}>Saved Files</div>
          </Link>
          <Link href={'/about'}>
          <div className={clsx('hover:cursor-pointer',pathname=='/about' && 'font-bold text-whitesmoke')}>About Us</div>
          </Link>
          <Link href={'/contribute'}>
          <div className={clsx('hover:cursor-pointer',pathname=='/contribute' && 'font-bold text-whitesmoke')}>
            <span className="flex gap-1 items-center">
              <DiGithubBadge className="text-white" size={20} />
              Contribute
            </span>
          </div>
          </Link>
          </div>
          <div ref={profileRef}  className="relative" onClick={() => setDisplay(!display)}>
          <div className="flex items-center gap-1 hover:cursor-pointer" >
          <Avatar>
           <AvatarImage  src={userData?.picture ?? 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png'} className="rounded-full h-[25px] w-[25px] hover:cursor-pointer" />
           <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <ChevronDown size={15} className={clsx('transition-transform duration-300',display ? 'rotate-180' : 'rotate-0')} />
          </div>
          <div className={clsx("flex flex-col gap-2 bg-gray-200 hover:bg-slate-200 py-3 px-5 rounded-sm mt-1 absolute",display ? 'block' : 'hidden')}>
            {/* <span className="bg-gray-50 text-center hover:bg-gray-200 rounded p-1 text-black text-xs hover:cursor-pointer">Login</span> */}
            <span className="text-center rounded p-1 text-black text-xs hover:cursor-pointer">Logout</span>
          </div>
          </div>
        </div>
      </div>
        <div onClick={() => setIsCollapsed(!isCollapsed)}>
          <Menu size={26} className="text-white md:hidden" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
