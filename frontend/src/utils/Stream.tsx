'use client'
import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { courseType } from '@/types/Course.type'
import { subjectsType } from '@/types/Course.type'
import useStore from '@/state-management/Store'

const Stream = ({data,gradient}:{data:courseType,gradient:string}) => {

    const [semester, setSemester] = React.useState<{semesterNumber:number,subjects:string[]}>({
        semesterNumber:0,
        subjects:[]
       })
      const [subject, setSubject] = React.useState<string|number|boolean>();
      const updateSem = useStore((state) => state.updateSem)
      const updateSub = useStore((state) => state.updateSubject)
      const updateBranch = useStore((state:any) => state.updateBranch);
      const sem = useStore((state) => state.sem);
      const sub = useStore((state) => state.subject);
      let encodedSub = encodeURIComponent(sub);
      const branch = useStore((state) => state.branch);

      const updateStream = (val:string) => {
        console.log("curr branch is",val);
        updateBranch(val)
      }

      React.useEffect(() => {
        if(subject){
          encodedSub = encodeURIComponent(subject)
        }
      },[subject])

    const handleSemester = (val:string) => {
        const value = parseInt(val)
        const semesterSubjects:string[] = data?.sem_subjects[`sem${value}` as keyof subjectsType] || [];
        setSemester(() => ({semesterNumber: value, subjects: semesterSubjects }));
        updateSem(val);
        console.log("changed semester and subs",data?.sem_subjects)
    }

    const handleSubject = (sub:string) => {
       setSubject(sub);
       updateSub(sub);
       console.log("subject change",sub);
    }

  return (
    <Card className={`shadow-lg bg-gradient-to-br ${gradient} text-white my-4 w-[100%] sm:w-[45vw] md:w-[25vw] flex items-center justify-center`} onClick={() => updateStream(data.course)}>
           <Dialog>
      <DialogTrigger asChild onClick={() => console.log("clicked me")}>
      <div className="w-full h-full flex justify-center hover:cursor-pointer"><p className="p-8">{data?.course}</p></div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className='text-center mb-2'>Enter Semester details</DialogTitle>
          <DialogDescription>
            Please select a Semester first and choose a subject.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Semester
            </Label>
    <Select onValueChange={(val) => {handleSemester(val)}} >
        <SelectTrigger className="w-[180px]">
         <SelectValue placeholder="Select Semester" />
        </SelectTrigger>
       <SelectContent>
        <SelectGroup className="text-gray-600" >
          <SelectItem value="1">Sem-1</SelectItem>
          <SelectItem value="2">Sem-2</SelectItem>
          <SelectItem value="3">Sem-3</SelectItem>
          <SelectItem value="4">Sem-4</SelectItem>
          <SelectItem value="5">Sem-5</SelectItem>
          <SelectItem value="6">Sem-6</SelectItem>
          <SelectItem value="7">Sem-7</SelectItem>
          <SelectItem value="8">Sem-8</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Subject
            </Label>
    <Select onValueChange={(val) => handleSubject(val)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Subject" onSelect={(e) => console.log("selected",e.target)}/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="text-gray-700">
          {semester.subjects.map((sub,index) => <SelectItem key={index} value={sub}>{sub}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>
          </div>
        </div>
        <DialogFooter>
          <Link href={`${data.course.toLowerCase()}?sem=${semester.semesterNumber}&subject=${encodedSub?.toLowerCase()}`}>
          <Button type="submit" className="hover:bg-[#4094a7]" onClick={() => {
            console.log("store values",sem, sub, branch)
          }}>Find Resources</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
        </Card>
  )
}

export default Stream