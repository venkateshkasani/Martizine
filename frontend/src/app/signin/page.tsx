'use client'
import MainHeader from "@/helper-components/MainHeader"
import { GoogleLogin } from "@react-oauth/google"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
const page = () => {
  const router = useRouter();
  const handleLogin = (creds:any) => {
     Cookies.set("artk",creds.credential,{expires:7,path:"/",sameSite:"strict",secure:true});
     router.push('/');
  }
  return (
    <div className="bg-gradient-to-br from-teal-200 to-slate-200 h-[100vh] w-[100vw]">
       <MainHeader heading={'The Martizine'} />
       <div className="flex flex-col items-center gap-5">
       <div className="flex justify-center w-2/3">
       <div className="text-center w-full">
        <p className="text-4xl text-start my-2">Are you in exam mode ?</p>
        <p className="text-sm text-start my-2">Find out some subject treasures that your topper friends wrote..</p>
       </div>
       </div>
        <div className='w-2/3 flex flex-col gap-4 justify-center'>
        <GoogleLogin onSuccess={(creds)=> handleLogin(creds)} onError={() => console.log("Errors loggin in ")} />
        <div>
        <input type="checkbox" id="examMode" />
        <label htmlFor="examMode" className="text-sm my-2"> Yes, I am in exam mode and accept all terms and conditions of fucking management here.</label>
        </div>      
        </div>
       </div>
    </div>
  )
}

export default page