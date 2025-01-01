'use client'
import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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

const Stream = ({data,gradient}:{data:courseType,gradient:string}) => {

    const [semester, setSemester] = React.useState<{semesterNumber:number,subjects:string[]}>({
        semesterNumber:0,
        subjects:[]
       })

       console.log("data",data)

    const handleSemester = (val:string) => {
        const value = parseInt(val)
        const semesterSubjects:string[] = data?.sem_subjects[`sem${value}` as keyof subjectsType] || [];
        setSemester((prev) => ({semesterNumber: value, subjects: semesterSubjects }));
        console.log("changed semester and subs",data?.sem_subjects)
    }

  return (
    <Card className={`shadow-lg bg-gradient-to-br ${gradient} text-white my-4 w-[45vw] md:w-[25vw] flex items-center justify-center`}>
           <Dialog>
      <DialogTrigger asChild onClick={() => console.log("clicked me")}>
      <div className="w-full h-full flex justify-center hover:cursor-pointer"><p className="p-8">{data.course}</p></div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter Details</DialogTitle>
          <DialogDescription>
            Select semester and subject. Click continue when you're done.
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
        <SelectGroup className="text-gray-700">
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
            <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Subject" onSelect={(e) => console.log("selected",e.target)}/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="text-gray-700">
          {semester.subjects.map((sub,index) => <SelectItem key={index} value="1">{sub}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="hover:bg-[#4094a7]">Go</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
        </Card>
  )
}

export default Stream