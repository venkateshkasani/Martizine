'use client'
import PDFViewer from "@/custom-components/PDFViewer";
import { pdfjs } from 'react-pdf';
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { eeeFiles } from "@/controllers/queries/eee.queries";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
import Searchbar from "@/custom-components/Searchbar";
import React from "react";
import { useDebounce } from "@uidotdev/usehooks";
import useStore from "@/state-management/Store";
import { useRouter } from "next/navigation";
import { LoaderCircleIcon } from "lucide-react";
import { getSaved } from "@/controllers/queries/auth";
import { getSubjectsArray } from "@/types/Course.type";

const Page = () => {
  const searchParams = useSearchParams();
  const [search, setSearch] = React.useState<string>('')
  const [mail, setMail] = React.useState<string>('');
  const filter = useStore((state) => state.filter)
  const subject = searchParams.get('subject');
  const debounce = useDebounce(search,300);
  const router = useRouter();
  
  const {data,isLoading, refetch} = useQuery({
     queryKey:['eceData',subject,filter,search],
     queryFn: () => eeeFiles(({subject:subject!,type:filter,search}))
  })
  const savedFiles = useQuery({
    queryKey:['saved'],
    queryFn:() => getSaved(mail??''),
    enabled:!!mail,
    staleTime:0,
  })
  const handleSearchInput = (value:string) => {
    setSearch(value);
  }
  React.useEffect(() => {
    const url = new URLSearchParams(searchParams.toString())
    url.set('search',search??"")
    router.replace(`?search=${url}`,{scroll:false})
  },[debounce,router])
  refetch();
  const handleSave = () => {
    console.log("handlesave triggered")
  }
  React.useEffect(() => {
    const usermail = sessionStorage.getItem('userEmail')
    setMail(usermail!);
  },[])
  React.useEffect(() => {
  refetch();
  },[filter])
    return (
      <div className="h-full px-2 sm:px-8">
        <div className="h-full px-2 sm:px-6 md:px-8">
      <div className="flex gap-2 w-full items-center hover:cursor-pointer">
       <Searchbar callBackFunction={handleSearchInput} />
      </div>
        </div>
      <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5">
          {isLoading ?
          <div className="flex justify-center items-center w-[90vw] h-[60vh]">
          <LoaderCircleIcon size={50} color="green" className="animate-spin" />
          </div>
           :
           (
             data.length > 0 ? data?.map((obj:getSubjectsArray,index:number) => {
              const fileName = obj.file.split('-').slice(1).join('-');
              const date = obj.uploadedAt;
              const dateObj = new Date(date);
              const dateString = dateObj.toUTCString().split(' ').slice(0,4).join(' ');
              const arr = savedFiles?.data?.map((obj:getSubjectsArray) => {
                return obj._id;
              })
              const saved:boolean = arr?.includes(obj._id);
             return (
              <PDFViewer email={mail} fileData={obj} handleSave={handleSave} saved={saved} key={index} src={process.env.NEXT_PUBLIC_BASE_URL + `/public/uploads/${obj.file}`} name={fileName} date={dateString} author={obj.authorName} />
             )
          }
           ) : <div className="text-md sm:text-lg text-gray-400 col-span-full">No data found.</div>
      )
        }
      </div>
      </div>
      </div>
    )
  }

  export default Page