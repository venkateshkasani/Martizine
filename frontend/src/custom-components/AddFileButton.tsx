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
import { useForm } from 'react-hook-form'
import { useMutation } from "@tanstack/react-query"
import {uploadAidsFile, uploadAimlFile, uploadCseAimlFile, uploadCseFile, uploadCsgFile, uploadEceFile, uploadEeeFile, uploadItFile} from "@/controllers/mutations/file-uploads"
import useStore from "@/state-management/Store"

const AddFileButton = () => {
  const currentBranch = useStore((state) => state.branch);
  const {register, handleSubmit, watch, formState:{errors}} = useForm();
  const mutation = useMutation({
    mutationKey:['pdfFile'],
    mutationFn: (data: FormData) => {
      switch (currentBranch.toLowerCase()) {
        case 'ece': return uploadEceFile(data);
        case 'cse': return uploadCseFile(data);
        case 'aiml': return uploadAimlFile(data);
        case 'cseAiml': return uploadCseAimlFile(data);
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
      file:data.file[0] ?? null
    }
    dataClone.course = currentBranch;
    dataClone.subjectName = data.subjectName;
    dataClone.semester = data.semester;
    dataClone.chapters = data.chapters;
    dataClone.regulation = data.regulation;
    dataClone.file = data.file[0];
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
    <Sheet>
  <SheetTrigger>
    <span style={{whiteSpace:'nowrap'}} className="h-fit p-3 text-white text-sm bg-teal-600 w-fit rounded flex items-center hover:cursor-pointer">
       Add Notes +
    </span>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Fill all the details</SheetTitle>
      <SheetDescription>
        Filling all the detailed helps us to make the search functionality more convienient to users.
      </SheetDescription>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Subject name" className="border border-teal-600 focus:outline-none rounded p-2" {...register('subjectName')} />
        <input placeholder="Semster" className="border border-teal-600 focus:outline-none rounded p-2" {...register('semester')} />
        <input placeholder="Chapter numbers" className="border border-teal-600 focus:outline-none rounded p-2" {...register('chapters')} />
        <input placeholder="Regulation" className="border border-teal-600 focus:outline-none rounded p-2" {...register('regulation')} />
        <input placeholder="Related tags" className="border border-teal-600 focus:outline-none rounded p-2" {...register('topics')} />
        <input placeholder="PDF File" className="border border-teal-600 focus:outline-none rounded p-2" type="file" accept="pdf" {...register('file')} />
        <SheetClose>
        <button type='submit' className="bg-primary rounded text-white p-2 ">Submit</button>
        </SheetClose>
      </form>
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}

export default AddFileButton