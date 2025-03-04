import {Page, Document} from "react-pdf";

const PDFViewer = ({name,date,src}:{name:string,date:string,src:string}) => {
  return (
    <div className="relative w-fit h-fit">
          <Document file={src} className='bg-white w-fit px-5 rounded' > 
            <Page className={''} height={50} scale={3} width={50} renderTextLayer={false} pageNumber={1} renderAnnotationLayer={false} />
          </Document>
          <div className="absolute bottom-0 h-[40%] flex flex-col items-center bg-stone-500 bg-opacity-70 w-full rounded-b">
            <p className="text-gray-800">{name??'venkatesh kasani'}</p>
            <p className="text-gray-800">Uploaded on:{date??"12-12-12"}</p>
            <p className="text-gray-800 ">Author:Venkatesh</p>
          </div>
        </div>
  )
}

export default PDFViewer