'use client'
import AddFileButton from "@/custom-components/AddFileButton";
import PDFViewer from "@/custom-components/PDFViewer";
import Searchbar from "@/custom-components/Searchbar";
import { useSearchParams } from "next/navigation"
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const page = () => {
  const searchParams = useSearchParams();
    return (
      <div className="h-full px-8">
      
      <div className="grid grid-cols-4 gap-10 py-5">
        {/* {Array.from({length:8}).map((_,index) => (
          <PDFSkeleton />
        ))} */}
        <PDFViewer name={'venkaat'} date={'12-13-31'} />
      </div>
      </div>
    )
  }

export default page