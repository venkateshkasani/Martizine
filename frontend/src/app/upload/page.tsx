"use client";
import React from "react";
import {zodResolver} from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { getCourses } from "@/controllers/queries/subjects.queries";
import { useMutation, useQuery } from "@tanstack/react-query";
import { courseDetails, subjectsType } from "@/types/Course.type";
import CheckboxChunk from "@/custom-components/CheckboxChunk";
import MultiInput from "@/custom-components/MultiInput";
import {useForm, Controller} from 'react-hook-form'
import { CheckBoxChunkCallback } from "@/types/ComponentProps";
import {uploadAidsFile, uploadAimlFile, uploadCseAimlFile, uploadCseFile, uploadCsgFile, uploadEceFile, uploadEeeFile, uploadItFile} from "@/controllers/mutations/file-uploads"
import { uploadSchema } from "@/utils/ZodValidations";
import { Loader2 } from "lucide-react";
import clsx from "clsx";
import { useToast } from "@/hooks/use-toast";
import {z} from 'zod'


const Page = () => {
  const streams = useQuery({
    queryKey: ["getAllCourses"],
    queryFn: async () => getCourses(),
  });
  const { handleSubmit, control, formState: { errors }, watch, reset } = useForm({
    resolver: zodResolver(uploadSchema),
    defaultValues:{
      branch:'',
      type:'',
      semester:'',
      subject:'',
      chapters:[],
      tags:[''],
      authorName:'',
      file:undefined
    }
  });
  
  
  const streamsData = streams.data;
  const [branchData, setBranchData] = React.useState<courseDetails>();
  const [semSubjects, setSemSubjects] = React.useState<string[]>();
  const [tags, setTags] = React.useState<string[]>(['']);
  const [chapters, setChapters] = React.useState<CheckBoxChunkCallback>();
  const {toast} = useToast();
  const authorname = watch('authorName');
  React.useEffect(() => {
    // console.log("data updated, branch data:", branchData);
  }, [branchData]);
  React.useEffect(() => {
    // console.log("updated sem subjects", semSubjects);
  }, [semSubjects]);
  const updateTags = (data:string[]) => {
     setTags(data);
  }
  const currentBranch = watch('branch')
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
    onSuccess: () => {
      // console.log("Upload success!");
      reset();
      window.location.reload();
      toast({
        title:"Details submitted successfully!",
        description:'The file will be live soon :)',
      });
    },
    onError: (error) => {
      console.error("Error while uploading files:", error)
      toast({
        title:"Details submitted successfully!",
        description:'The file will be live soon :)',
      })
    },
  });

  type docType = z.infer<typeof uploadSchema>

  const onSubmit = (data:docType) => {
    const formData = new FormData();
    formData.append('type',data.type)
    formData.append('semester',data.semester)
    formData.append('subjectName',data.subject);
    formData.append('chapters',JSON.stringify(chapters??[]));
    formData.append('tags',JSON.stringify(tags??[]));
    formData.append('author',data.authorName)
    if(data.file) {
      formData.append('file',data.file)
    }
    // console.log("triggered submit")
    mutation.mutate(formData);
    reset();
  }

  const handleChapters = (data:CheckBoxChunkCallback) => {
    setChapters(data);
  }
  
  return (
    <section className="h-fit bg-gray-100">
      <div className="flex flex-col justify-center items-center py-5">
        <p className="text-md text-gray-600">
          Please maintain PDF Format only.
        </p>
        <div className="py-5 w-full flex justify-center">
          <form className="flex flex-col gap-2 w-2/3 max-w-2/3 sm:w-1/2 sm:max-w-1/2 md:w-1/4 max-w-1/4 h-fit" onSubmit={handleSubmit(onSubmit)}>
          <Controller
        name="branch"
        control={control}
        render={({ field }) => (
          <Select
          {...field}
          onValueChange={(value) => {
            field.onChange(value)
            const current = streamsData?.filter((stream) => stream.course == value) || [];
            setBranchData(current[0]);
          }}
          value={field.value}
        >
          <SelectTrigger className="w-full outline outline-1 outline-gray-200 border border-none">
            <SelectValue placeholder="Branch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key={0} value="ECE">
              ECE
            </SelectItem>
            <SelectItem key={1} value="CSE">
              CSE
            </SelectItem>
            <SelectItem key={2} value="IT">
              IT
            </SelectItem>
            <SelectItem key={3} value="CSE_AIML">
              CSE AIML
            </SelectItem>
            <SelectItem key={4} value="AIML">
              AIML
            </SelectItem>
            <SelectItem key={5} value="AIDS">
              AIDS
            </SelectItem>
            <SelectItem key={6} value="CSG">
              CSG
            </SelectItem>
            <SelectItem key={7} value="EEE">
              EEE
            </SelectItem>
          </SelectContent>
        </Select>
        )}
      />
      <p className="text-red-500 text-sm">{errors.branch?.message}</p>
       <Controller
       name='type'
       control={control}
       render={({field}) => (
        <Select
        {...field}
        onValueChange={(value) => {
          field.onChange(value);
        }}
        value={field.value}
      >
        <SelectTrigger className="w-full outline outline-1 outline-gray-200 border border-none">
          <SelectValue placeholder="PDF Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="question_paper">Question Paper</SelectItem>
          <SelectItem value="assignment">Assigment</SelectItem>
          <SelectItem value="class_notes">Class Notes</SelectItem>
        </SelectContent>
      </Select>
       )}
        />
        <p className="text-red-500 text-sm">{errors.type?.message}</p>
       <Controller
       name='semester'
       control={control}
       render={({field}) => (
        <Select
        {...field}
        onValueChange={(value:string) => {
          field.onChange(value);
          const key = `sem${value}` as keyof subjectsType;
const subjects: string[] = branchData?.sem_subjects[key] || [];
          setSemSubjects(subjects);
        }}
        value={field.value}
      >
        <SelectTrigger className="w-full outline outline-1 outline-gray-200 border border-none">
          <SelectValue placeholder="Semester" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Sem-1</SelectItem>
          <SelectItem value="2">Sem-2</SelectItem>
          <SelectItem value="3">Sem-3</SelectItem>
          <SelectItem value="4">Sem-4</SelectItem>
          <SelectItem value="5">Sem-5</SelectItem>
          <SelectItem value="6">Sem-6</SelectItem>
          <SelectItem value="7">Sem-7</SelectItem>
          <SelectItem value="8">Sem-8</SelectItem>
        </SelectContent>
      </Select>
       )}
        />
          <p className="text-red-500 text-sm">{errors.semester?.message}</p>
          <Controller
          name="subject"
          control={control}
          render={({field}) => (
            <Select onValueChange={(value) => {
              field.onChange(value);
            }} value={field.value} >
              <SelectTrigger className="w-full outline outline-1 outline-gray-200 border border-none">
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                {semSubjects?.map((subject: string, index: number) => (
                  <SelectItem key={index} value={subject.toLowerCase()}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
           />
          <p className="text-red-500 text-sm">{errors.subject?.message}</p>
           <Controller
           name="chapters"
           control={control}
           render={({field}) => (
            <CheckboxChunk {...field} callBackFunction={handleChapters}  />
           )}
            />
            <Controller
            name="tags"
            control={control}
            render={({field}) => (
              <MultiInput {...field} initialData={[]} placeholder="Related tags" callbackFunction={updateTags} />  
            )}
             />
              <Controller
            name="authorName" 
            control={control}
            render={({field}) => (
              <Input {...field} type="text" placeholder="Author name" /> 
            )}
             />
                   <p className="text-red-500 text-sm">{errors.authorName?.message}</p>
               <Controller
            name="file"
            control={control}
            render={({field:{onChange,ref}}) => (
              <Input ref={ref} onChange={(e) => onChange(e.target.files?.[0])} type="file" placeholder="" /> 
            )}
             />
            <p className="text-red-500 text-sm">{errors.file?.message}</p>
            <Button type="submit">Submit <Loader2 className={clsx('text-white',mutation.isPending ? 'animate-spin' : 'opacity-0')} /></Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;

