'use client'
import MainHeader from "@/helper-components/MainHeader"
import { GoogleLogin } from "@react-oauth/google"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import {jwtDecode, JwtPayload} from 'jwt-decode'
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { userDataType } from "@/types/login"
import auth from "@/controllers/mutations/auth"

const page = () => {
  interface CustomJwtPayload extends JwtPayload {
    name?: string;
    email?: string;
    picture?: string;
  }
  const router = useRouter();
  const userData = useState("");
  const mutation = useMutation({
    mutationKey: ["auth"],
    mutationFn: (userData: userDataType) => auth(userData),
    onSuccess:() => console.log("mutation success"),
    onError:() => console.error("Mutatin failed")
  });
  const handleLogin = (creds: any) => {
    Cookies.set("artk", creds.credential, {
      expires: 7,
      path: "/",
      sameSite: "strict",
      secure: true,
    });
    if (creds) {
      const decoded = jwtDecode<CustomJwtPayload>(creds.credential);
      console.log("creds", decoded)
      const { name, email, picture } = decoded
      mutation.mutate({ name:name??"", email:email??"", picture:picture??"", role: "admin", savedFiles: [] });
      router.push("/");
      sessionStorage.setItem("userData", JSON.stringify(decoded));
    }
  };
  return (
    <div className="bg-gradient-to-br from-teal-50 to-slate-200 h-[100vh] w-[100vw] px-5 flex flex-col items-center">
       <p className="text-center text-4xl w-2/3 sm:w-full sm:text-4xl md:text-6xl lg:text-7xl font-extrabold pt-8">Simplify Your Exam Prep - <br /> Get Notes & Previous Papers!</p>
       <div className="flex flex-col items-center gap-5 w-full">
       <div className="flex justify-center w-full">
       <div className="text-center w-2/3">
        <p className="text-sm sm:text-md lg:text-lg my-2 text-gray-500">Get instant access to running notes and SMEC question papers to prepare.</p>
       </div>
       </div>

        <div className='w-full sm:w-2/3 md:w-1/2 flex flex-col gap-4 justify-center'>
        <GoogleLogin onSuccess={(creds)=> handleLogin(creds)} onError={() => console.log("Errors loggin in ")} />     
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="text-center font-bold text-3xl my-5">You know what we've got ?</p>
        <div className="flex flex-col md:flex-row gap-5 items-center">
        <span className="bg-gray-900 rounded-xl relative w-full sm:w-2/3 md:w-1/2">
        <img src="/books.jpg" className="h-full w-full rounded-xl opacity-20" />
        <p className="absolute top-[30%] text-gray-400 px-2 text-lg">A treasure trove of past question papers, handwritten notes, and faculty-approved study materials—all in one place! Whether you're preparing for semester exams or mid-semester tests, we’ve got the resources to make your revision easier and more effective.</p>
        </span>
        <span className="bg-slate-900 relative rounded-xl w-full sm:w-2/3 md:w-1/2">
        <img src="/books2.jpg" className="h-full w-full rounded-xl opacity-20" />
        <p className="absolute top-[30%] text-gray-400 px-2 text-lg">We’ve gathered years of valuable study materials, from Autonomous SMEC and JNTU question papers to high-quality handwritten notes. No more last-minute panic—access everything you need to study smart and ace your exams with confidence! </p>
        </span>
        </div>
        </div>
       </div>
    </div>
  )
}

export default page