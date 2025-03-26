import { Download } from "lucide-react";
import {Page, Document} from "react-pdf";

const PDFViewer = ({name,date,src,author}:{name:string,date:string,src:string,author:string}) => {
  return (
    <div className="relative w-fit h-fit">
          <Document file={src} className='bg-white w-fit px-5 rounded' > 
            <Page className={''} 
            height={90} scale={3}
             renderTextLayer={false} pageNumber={1} renderAnnotationLayer={false} />
          </Document>
          <div className="absolute top-2 right-2">
            <a href={src} download={name||'document.pdf'} >
            <Download className="hover:cursor-pointer text-teal-600 hover:bg-teal-700 hover:text-white rounded p-1" />
            </a>
          </div>
          <div className="absolute bottom-0 h-[40%] px-2 flex flex-col bg-neutral-500 bg-opacity-90 w-full rounded-b">
            <p className="text-gray-900 font-sans break-words max-w-full">{name??'venkatesh kasani'}</p>
            <span className="text-gray-900 max-w-full "><span className="font-semibold">Uploaded: </span>{date??"Not-specified"}</span>
            <span className="text-gray-900"><span className="font-semibold">Author:</span> {author}</span>
          </div>
        </div>
  )
}

export default PDFViewer