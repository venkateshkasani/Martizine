'use client'
import { Undo, View } from "lucide-react";
import {Page, Document} from "react-pdf";
import { pdfjs } from 'react-pdf';
import React from "react";
import clsx from "clsx";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {saveFiles , unsaveFiles } from "@/controllers/mutations/saved.mutations";
import { getSaved } from "@/controllers/queries/auth";
import { useToast } from "@/hooks/use-toast";
import { TooltipProvider,TooltipContent,TooltipTrigger,Tooltip } from "@/components/ui/tooltip";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const PDFViewer = ({name,date,src,author,saved,_id,handleSave,fileData,email}:{name:string,date:string,src:string,author:string,saved:boolean,_id:string,handleSave:() => void,fileData:any,email:string}) => {
  const queryClient = useQueryClient();
  const {toast} = useToast();
  const save = useMutation({
    mutationKey:['save-file'],
    mutationFn:(data:{email:string,obj:any}) => saveFiles(data),
    onSuccess:() => {
      queryClient.invalidateQueries({queryKey:['saved']})
      console.log("Successfully saved file")
    },
    onError:() => console.error("Error while saving")
  })
  const unsave = useMutation({
    mutationKey:['save-file'],
    mutationFn:(data:{email:string,obj:any}) => unsaveFiles(data),
    onSuccess:() => {
      queryClient.invalidateQueries({queryKey:['saved']})
      console.log("Successfully saved file")
      handleSave();
    },
    onError:() => console.error("Error while unsaving")
  })
  React.useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('userData') ?? "{}")
    console.log("session storage from PDF VIEWER",data)
  },[])
  return (
    <div className="relative w-fit h-fit">
          <Document file={src} className='bg-white w-fit px-5 rounded' > 
            <Page className={""} 
            height={90} scale={3}
             renderTextLayer={false} pageNumber={1} renderAnnotationLayer={false} />
          </Document>
          <div className="absolute top-2 right-2 flex items-center">
          <div 
          onClick={async () => {
            try {
              if (saved) {
                await unsave.mutateAsync({ email: email, obj:fileData });
                toast({
                  title:"File Unsaved",
                  description: "This file no longer exists in your saved files",
                })
              } else {
                await save.mutateAsync({ email: email,obj:fileData });
                toast({
                  title:'File Saved',
                  description: "The file is saved successfully",
                })
              }
              handleSave(); // This will now only runs after mutation completes
            } catch (error) {
              console.error("Mutation failed:", error);
            }
          }}
           className="hover:cursor-pointer transition-all duration-300" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx(
              "icon icon-tabler h-4",
              "icon-tabler-heart-filled" 
            )}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="red"
            fill={saved ? 'red' : 'white'}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
            ></path>
          </svg>
          </div>
            <a href={src} download >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                <View className="hover:cursor-pointer text-teal-600 hover:bg-teal-700 hover:text-white rounded p-1" />
                </TooltipTrigger>
                <TooltipContent>
                  View file
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </a>
          </div>
          <div className="absolute bottom-0 h-[40%] px-2 flex flex-col bg-neutral-500 bg-opacity-90 w-full rounded-b">
            <p className="text-gray-900 font-sans break-words max-w-full">{name??'venkatesh kasani'}</p>
            <span className="text-gray-900 max-w-full "><span className="font-semibold">Uploaded: </span>{date??"Not-specified"}</span>
            <span className="text-gray-900"><span className="font-semibold">Author:</span>{author}</span>
          </div>
        </div>
  )
}

export default PDFViewer