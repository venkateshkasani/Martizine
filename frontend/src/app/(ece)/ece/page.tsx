'use client'
import PDFViewer from "@/custom-components/PDFViewer";
import { pdfjs } from 'react-pdf';
import { useQuery } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation";
import { eceFiles } from "@/controllers/queries/ece.queries";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
import AddFileButton from "@/custom-components/AddFileButton";
import Searchbar from "@/custom-components/Searchbar";


const page = () => {
  const searchParams = useSearchParams();
  const subject = searchParams.get('subject');
  const {data, isLoading} = useQuery({
     queryKey:['eceData',subject],
     queryFn: () => eceFiles(subject)
  })
    return (
      <div className="h-full px-8 flex justify-center">
        <div className="h-full px-4 sm:px-6 md:px-8">
      <div className="flex gap-2 w-full items-center">
       <AddFileButton />
       <Searchbar />
      </div>
        </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 py-5">
      {data?.map((obj:any,index:number) => {
            const fileName = obj.file.split('-').slice(1).join('-');
            const date = obj.uploadedAt;
            const dateObj = new Date(date);
            const dateString = dateObj.toUTCString().split(' ').slice(0,4).join(' ');
           return (
            <PDFViewer key={index} src={process.env.NEXT_PUBLIC_BASE_URL + `/public/uploads/${obj.file}`} name={fileName} date={dateString} author={obj.author} />
           )
        })}
      </div>
      </div>
    )
  }

  export default page