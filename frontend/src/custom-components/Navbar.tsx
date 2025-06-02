'use client'
import { useState } from "react"
import { Menu } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { DiGithubBadge } from "react-icons/di";
import { usePathname } from "next/navigation";
import { googleLogout } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { DialogHeader,DialogContent, DialogTitle, DialogTrigger, Dialog,DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useStore from "@/state-management/Store";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const loading = useStore((state) => state.loading);
  const pathname = usePathname();
  const router = useRouter();

  const logout = () => {
    console.log("logout triggered")
    googleLogout();
    sessionStorage.clear();
    Cookies.remove('artk');
    router.push('/signin');
    setIsCollapsed(false)
  }

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
          <Link href={'/'}  className={clsx(pathname=='/signin' && 'hidden')}>
          <div className={clsx('hover:cursor-pointer',pathname=='/' && 'font-bold text-whitesmoke')}>Home</div>
          </Link> 
          <Link href={'/saved'}  className={clsx(pathname=='/signin' && 'hidden')}>
          <div className={clsx('hover:cursor-pointer',pathname=='/saved' && 'font-bold text-whitesmoke')}>Saved Files</div>
          </Link>
          <Link href={'/about'} >
          <div className={clsx('hover:cursor-pointer',pathname=='/about' && 'font-bold text-whitesmoke')}>About Us</div>
          </Link>
          <Link href={'/contribute'} >
          <div className={clsx('hover:cursor-pointer',pathname=='/contribute' && 'font-bold text-whitesmoke')}>
            <span className="flex gap-1 items-center pb-5 sm:pb-0">
              <DiGithubBadge className="text-white" size={20} />
              Contribute
            </span>
          </div>
          </Link>
          <div className={clsx("",pathname=='/signin' && 'hidden')}>
          <Dialog>
            <DialogTrigger>
            <ShimmerButton shimmerDuration="4" className="text-center rounded py-2 px-4 text-white text-xs hover:cursor-pointer mb-5 sm:mb-0">Logout</ShimmerButton>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center">Are you sure want to Logout ?</DialogTitle>
              </DialogHeader>
              <div className="flex gap-3 items-center justify-center">
              <DialogClose>
              <Button className="w-fit px-5 py-1 bg-slate-200 text-black">No</Button>
              </DialogClose>
              <DialogClose>
              <Button className="w-fit px-5 py-1 bg-primary" onClick={logout}>Yes</Button>
              </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
          </div>
          </div>
        </div>
      </div>
        <div onClick={() => setIsCollapsed(!isCollapsed)}>
          <Menu size={26} className="text-white md:hidden" />
        </div>
      </div>
      
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}

export default Navbar
