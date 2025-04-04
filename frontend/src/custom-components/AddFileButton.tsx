'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import React, { useEffect } from "react"
import { Controller, useForm } from 'react-hook-form'
import { useMutation } from "@tanstack/react-query"
import {uploadAidsFile, uploadAimlFile, uploadCseAimlFile, uploadCseFile, uploadCsgFile, uploadEceFile, uploadEeeFile, uploadItFile} from "@/controllers/mutations/file-uploads"
import { usePathname } from "next/navigation"
import { Plus } from "lucide-react"
import useStore from "@/state-management/Store"
import MultiInput from "./MultiInput"
import Link from "next/link"

const AddFileButton = () => {
  const {control} = useForm();
  const currentBranch = useStore((state) => state.branch)
  const {register, handleSubmit, watch, formState:{errors}} = useForm();
  const [windowWidth, setWindowWidth] = React.useState('')
  const [tags,setTags] = React.useState<string[]>([]);
  useEffect(() => {
    const handleResize = () => {
       setWindowWidth(window.innerWidth <= 450 ? 'small' : 'large')
    }
    handleResize();
    window.addEventListener('resize',handleResize);
    return () => window.removeEventListener('resize',handleResize);
  },[])

  const mutation = useMutation({
    mutationKey:['pdfFile'],
    mutationFn: (data: FormData) => {
      switch (currentBranch.toLowerCase()) {
        case 'ece': return uploadEceFile(data);
        case 'cse': return uploadCseFile(data);
        case 'aiml': return uploadAimlFile(data);
        case 'cse_aiml': return uploadCseAimlFile(data);
        case 'aids': return uploadAidsFile(data);
        case 'it': return uploadItFile(data);
        case 'csg': return uploadCsgFile(data);
        case 'eee': return uploadEeeFile(data);
        default: 
          console.warn(`Invalid branch: ${currentBranch}`);
          return Promise.reject(new Error("Invalid branch selected"));
      }
    },
    onSuccess: () => console.log("Upload success!"),
    onError: (error) => console.error("Error while uploading files:", error),
  });

  const onSubmit = (data:any) => {
    const dataClone = {
      course:'',
      subjectName:'',
      semester:'',
      chapters:'',
      regulation:'',
      author:'',
      tags:'',
      file:data.file[0] ?? null
    }
    dataClone.course = currentBranch;
    dataClone.subjectName = data.subjectName;
    dataClone.semester = data.semester;
    dataClone.chapters = data.chapters;
    dataClone.regulation = data.regulation;
    dataClone.tags = data.tags;
    dataClone.file = data.file[0];
    dataClone.author = data.author;
    const formData = new FormData();
    formData.append('file',dataClone.file)
    Object.entries(dataClone).forEach(([key,value]) => {
       if(key.toString() != 'file') {
        formData.append(key,value.toString())
       }
    })
    console.log("Data displayed",dataClone);
    mutation.mutate(formData);
  }

  return (
  <div>

<Link href={'/upload'}>
<span style={{whiteSpace:'nowrap'}} className="h-fit p-2 px-3 sm:px-2 sm:p-3 text-white text-xs sm:text-sm bg-teal-700 w-fit rounded flex items-center hover:cursor-pointer">
      {windowWidth == 'small' ? <Plus color="white" /> : 'Add Files + '}
    </span>
</Link>
  </div>


  )
}

export default AddFileButton