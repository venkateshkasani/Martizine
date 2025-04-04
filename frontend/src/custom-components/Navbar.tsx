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
  const [userData, setuserData] = useState<any>(() => {
    if(typeof window != "undefined") {
      return JSON.parse(sessionStorage.getItem('userData') || '{}')
    } else return null;
  });
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

  useEffect(() => {
    if(typeof window != 'undefined') {
      const parsedData = JSON.parse(sessionStorage.getItem('userData') || '{}')
      if(parsedData) {
       setuserData(parsedData);
      }
    }
  },[])

  return (
    <div className="bg-teal-700 w-full px-5">
      <div className="flex justify-between items-center py-4 transition-all duration-100 z-10">
        <div className="text-white font-bold text-2xl">
          <img src="/martizine.svg" className="w-[150px] h-[50px]"/>
        </div>
        <div
        className={clsx('transition-all duration-100 md:opacity-100',{'opacity-100':isCollapsed,'opacity-0 hidden min-[400px]:block':!isCollapsed})}
      >
        <div style={{letterSpacing:'3px'}} className="text-white flex flex-col gap-2 absolute md:relative md:flex-row md:gap-8 left-0 top-[4em] md:top-0 w-full sm:px-2 py-4">
        <div className="flex flex-col items-center sm:flex-row z-50 w-[100vw] sm:w-fit gap-10 bg-teal-700"> 
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
            <span className="flex gap-1 items-center pb-5 sm:pb-0">
              <DiGithubBadge className="text-white" size={20} />
              Contribute
            </span>
          </div>
          </Link>
          </div>
          <div>
            {/* <img src={'/'}  width={'300px'} height={'300px'} /> */}
          </div>
          <div ref={profileRef}  className="relative" onClick={() => setDisplay(!display)}>
          <div className="flex items-center gap-1 hover:cursor-pointer" >
          <Avatar>
           <AvatarImage src={userData?.picture} className="w-1/4 h-1/4" />
           {/* <AvatarFallback>{userData?.picture}</AvatarFallback> */}
           <AvatarFallback>{userData?.name?.slice(0,1)}</AvatarFallback>
          </Avatar>
          <ChevronDown size={15} className={clsx('transition-transform duration-300',display ? 'rotate-180' : 'rotate-0')} />
          </div>
          <div className={clsx("flex flex-col gap-2 bg-gray-200 hover:bg-slate-200 py-3 px-5 rounded-sm mt-1 absolute",display ? 'block' : 'hidden')}>
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
