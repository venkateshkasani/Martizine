'use client'
import PDFViewer from "@/custom-components/PDFViewer";
import { pdfjs } from 'react-pdf';
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { eceFiles } from "@/controllers/queries/ece.queries";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const page = () => {
  const searchParams = useSearchParams();
  const subject = searchParams.get('subject');
  const {data, isLoading} = useQuery({
     queryKey:['eceData',subject],
     queryFn: () => eceFiles(subject)
  })
    return (
      <div className="h-full px-8">
      {/* <div className="flex w-full items-center">
      <AddFileButton />
      <Searchbar />
      </div> */}
      <div className="grid grid-cols-4 gap-10 py-5">
        {/* {Array.from({length:8}).map((_,index) => (
          <PDFSkeleton />
        ))} */}
        {data?.map((obj:any,index:number) => {
           const fileName = obj.file.split('-').slice(1).join('-');
           return (
            <PDFViewer key={index} src={process.env.NEXT_PUBLIC_BASE_URL + `/public/uploads/${obj.file}`} name={fileName} date={'12-13-31'} />
           )
        })}
      </div>
      </div>
    )
  }

  export default page