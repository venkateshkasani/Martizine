'use client'
import { GoogleLogin } from "@react-oauth/google"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import {jwtDecode, JwtPayload} from 'jwt-decode'
import { useMutation } from "@tanstack/react-query"
import { loginCredentials, userDataType } from "@/types/login"
import auth from "@/controllers/mutations/auth"
import { AuroraText } from "@/components/magicui/aurora-text"
import Footer from "@/custom-components/Footer"
import LandingSection from "@/custom-components/LandingSection"
import { Quote } from "lucide-react"
import React from "react"

const Page = () => {
  const [loading, setLoading] = React.useState(false)
  interface CustomJwtPayload extends JwtPayload {
    name?: string;
    email?: string;
    picture?: string;
  }
  const router = useRouter();
  const mutation = useMutation({
    mutationKey: ["auth"],
    mutationFn: (userData: userDataType) => auth(userData),
    onSuccess:(data) => {
      console.log("user data is ",data)
      handleLogin(data)
      sessionStorage.setItem('userRole',data.role);
      sessionStorage.setItem('userEmail',data.email);
    },
    onError:() => console.error("Mutation failed")
  });
  const handleLogin = (creds: loginCredentials) => {
    console.log("handlelogin type",creds)
    if(creds.credential) {
      Cookies.set("artk", creds.credential, {
        expires: 7,
        path: "/",
        sameSite: "strict",
        secure: true,
      });
      setLoading(true);
      router.push('/');
    }
    if (creds) {
      const decoded = jwtDecode<CustomJwtPayload>(creds.credential!);
      console.log("decoded creds", decoded)
      const { name, email, picture } = decoded
      sessionStorage.setItem('userPicture',picture!)
      mutation.mutate({ name:name??"", email:email??"", picture:picture??"", savedFiles: [] });
    }
  };
  return (
     <section className="">
      {loading && <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>}
          <div className="bg-gradient-to-br from-teal-50 to-slate-200 h-fit min-h-[100vh] w-[100vw] px-5 flex flex-col items-center">
            <p className="text-4xl animate-aurora font-bold">ANimation text</p>
       <AuroraText className="text-center w-2/3 text-3xl sm:w-full sm:text-4xl md:text-6xl lg:text-7xl font-bold sm:font-extrabold pt-8">Simplify Your Exam Prep.</AuroraText>
       <AuroraText className="text-center w-2/3 text-3xl sm:w-full sm:text-4xl md:text-6xl lg:text-7xl font-bold sm:font-extrabold pt-8">Get Notes & Previous Papers!</AuroraText>
       <div className="flex flex-col items-center gap-5 w-full">
       <div className="flex justify-center w-full">
       <div className="text-center w-2/3">
        <p className="text-sm sm:text-md lg:text-lg my-2 text-gray-500">Get instant access to running notes and SMEC question papers to prepare.</p>
       </div>
       </div>
        <div className='w-full sm:w-2/3 md:w-1/2 flex flex-col gap-4 justify-center'>
        <GoogleLogin onSuccess={(creds)=> handleLogin(creds)} onError={() => console.log("Errors loggin in ")} />     
        </div>
        <LandingSection />
        {/* another section */}
        <div className="mt-10">
        <div className="w-[100vw]">
            <div className="bg-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-center w-full py-10 px-5 sm:px-0">
              <div className="px-5">
                <p className="font-semibold text-3xl sm:text-5xl">EASY</p>
              <p className="py-10 w-[95vw] sm:w-[60vw] text-lg sm:text-xl">Access well-organized, faculty-approved notes, previous question papers, and assignments—all in one unified platform designed to simplify your preparation process.</p>
              </div>
              <img src="/panda.png" className="h-[70%] w-[70%] sm:w-1/4 sm:h-1/4" />
            </div>
        </div>
        {/* two */}
        <div className="w-[100vw]">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full px-5 py-10 sm:px-0">
            <img src="/cow.png" className="h-[70%] w-[70%] sm:w-1/4 sm:h-1/4 hidden sm:block" />
              <div>
                <p className="font-semibold text-3xl sm:text-5xl">One Stop for Exam Prep.</p>
              <p className="py-10 w-[95vw] sm:w-[60vw] text-lg sm:text-xl">No more digging through endless messages or group chats. Get exactly what you need, when you need it, and focus entirely on acing your exams without distractions.</p>
              </div>
              <img src="/cow.png" className="h-[70%] w-[70%] sm:hidden mx-auto" />
            </div>
        </div>
        {/* three */}
        <div className="w-[100vw]">
            <div className="bg-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-center w-full py-10 px-5 sm:px-0">
              <div>
                <p className="font-semibold text-3xl sm:text-5xl">Everything You Need. Instantly.</p>
              <p className="py-10 w-[95vw] sm:w-[60vw] text-lg sm:text-xl">{"Download reliable, verified study materials in seconds—anytime, anywhere. Whether it's the night before or weeks ahead, your resources are always within reach."}</p>
              </div>
              <img src="/pikachu.png" className="h-[70%] w-[70%] sm:w-1/4 sm:h-1/4" />
            </div>
        </div>
        <div className="w-[100vw] px-10 my-10">
         <div className="bg-slate-300 flex flex-col items-center justify-center bg-opacity-65 w-full rounded-2xl p-5 sm:rounded-full min-h-[30vh]">
         <div className="font-bold text-4xl flex justify-center w-full min-w-full"><Quote /></div>
           <div className="flex justify-center">
           <p>{"This is a small effort from one of the students to help them get instant access to important notes and previous question papers." }</p><br/>
           </div>
           <span className="sm:text-center">Designed and Developed by <span className="text-black inline font-semibold">Venkatesh Kasani</span></span>
         </div>
        </div>
        <div className="w-[100vw]">
          <Footer />
        </div>
        </div>
       </div>
    </div>
     </section>
  )
}

export default Page