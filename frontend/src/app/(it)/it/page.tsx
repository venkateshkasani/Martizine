'use client'
import PDFViewer from "@/custom-components/PDFViewer";
import { pdfjs } from 'react-pdf';
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { itFiles } from "@/controllers/queries/it.queries";
import AddFileButton from "@/custom-components/AddFileButton";
import Searchbar from "@/custom-components/Searchbar";
import React from "react";
import useStore from "@/state-management/Store";
import { useDebounce } from '@uidotdev/usehooks'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const page = () => {
  const searchParams = useSearchParams();
  const subject = searchParams.get('subject');
  const [userData, setUserData] = React.useState<any>({});
  const filter = useStore((state) => state.filter)
  const [search, setSearch] = React.useState<string>('');
  const debounce = useDebounce(search,300);
  const router = useRouter();
  const {data, isLoading, refetch} = useQuery({
     queryKey:['itData',subject,filter,search],
     queryFn: () => itFiles({subject:subject!,type:filter,search}),
     staleTime:0,
  })
  React.useEffect(() => {
    const url = new URLSearchParams(searchParams.toString())
    url.set('search',search??"")
    router.replace(`?search=${url}`,{scroll:false})
  },[debounce,router])
  const sessionData = JSON.parse(sessionStorage.getItem('userData')??'{}');
  const handleSave = () => {
    refetch();
    console.log("handlesave triggered")
  }
  React.useEffect(() => {
    setUserData(sessionData);
  },[])
  React.useEffect(() => {
  refetch();
  },[filter])
  const handleSearchInput = (data:string) => {
    setSearch(data);
  }
  
    return (
      <div className="h-full px-2 sm:px-8">
        <div className="h-full px-2 sm:px-6 md:px-8">
      <div className="flex gap-2 w-full items-center hover:cursor-pointer">
       <AddFileButton />
       <Searchbar callBackFunction={handleSearchInput} />
      </div>
        </div>
      <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5">
      {data?.map((obj:any,index:number) => {
            const fileName = obj.file.split('-').slice(1).join('-');
            const date = obj.uploadedAt;
            const dateObj = new Date(date);
            const dateString = dateObj.toUTCString().split(' ').slice(0,4).join(' ');
            const saved:boolean = userData.savedFiles?.includes(obj._id);
           return (
            <PDFViewer handleSave={handleSave} _id={obj._id} saved={saved} key={index} src={process.env.NEXT_PUBLIC_BASE_URL + `/public/uploads/${obj.file}`} name={fileName} date={dateString} author={obj.author} />
           )
        })}
      </div>
      </div>
      </div>
    )
  }

  export default page