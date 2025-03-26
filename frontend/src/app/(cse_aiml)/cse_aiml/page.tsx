'use client'
import PDFViewer from "@/custom-components/PDFViewer";
import { pdfjs } from 'react-pdf';
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { cseAimlFiles } from "@/controllers/queries/cseAiml.queries";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const page = () => {
  const searchParams = useSearchParams();
  const subject = searchParams.get('subject');
  const {data, isLoading} = useQuery({
     queryKey:['cseAimlData',subject],
     queryFn: () => cseAimlFiles(subject)
  })
    return (
      <div className="h-full px-8">
      <div className="grid grid-cols-4 gap-10 py-5">
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