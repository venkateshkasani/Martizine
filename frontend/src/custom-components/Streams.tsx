import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
   SelectLabel,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useState } from "react"


const Streams = () => {
  const [semester, setSemester] = useState<{semesterNumber:string,subject:string}>({
   semesterNumber:'',
   subject:''
  })
  return (
    <section className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 w-[100vw] px-2">
        <Card className="shadow-lg bg-gradient-to-br from-[#FEE101] to-gray-400 text-white my-4 w-[45vw] md:w-[25vw] flex items-center justify-center">
           <Dialog>
      <DialogTrigger asChild>
      <p className="p-8">ECE</p>
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
            <Select onValueChange={(val) => {
               setSemester((prev) => ({...prev,semesterNumber:val}))
               console.log("changed",semester.semesterNumber)
            }} >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Semester" onSelect={(e) => console.log("selected",e.target)}/>
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
            <Select onValueChange={(val) => {
               setSemester((prev) => ({...prev,semesterNumber:val}))
               console.log("changed",semester.semesterNumber)
            }} >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Subject" onSelect={(e) => console.log("selected",e.target)}/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="text-gray-700">
          <SelectItem value="1">Probability Theory & Stochastic Processes</SelectItem>
          <SelectItem value="2">Electronic Devices & Circuits</SelectItem>
          <SelectItem value="3">Network Analysis and Transmission Lines</SelectItem>
          <SelectItem value="4">Signals & Systems</SelectItem>
          <SelectItem value="5">Digital signals & Devices</SelectItem>
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
        <Card className="shadow-lg my-4 w-[45vw] md:w-[25vw] flex items-center justify-center text-white bg-gradient-to-br from-blue-700 to-blue-200 ">
        <Link href='/cse'>
           <p className="p-8">CSE</p>
           </Link>
        </Card>
        <Card className="shadow-lg my-4 w-[45vw] md:w-[25vw] flex items-center justify-center text-white bg-gradient-to-br  from-slate-700 to-purple-500">
           <p className="p-8">CSE - AIML</p>
        </Card>
        <Card className="shadow-lg my-4 w-[45vw] md:w-[25vw] flex items-center justify-center text-white bg-gradient-to-br from-blue-800 to-red-500">
           <p className="p-8">CSG</p>
        </Card>
        <Card className="shadow-lg my-4 w-[45vw] md:w-[25vw] flex items-center justify-center text-white bg-gradient-to-br  from-orange-400 to-red-500">
           <p className="p-8">IT</p>
        </Card>
        <Card className="shadow-lg my-4 w-[45vw] md:w-[25vw] flex items-center justify-center text-white bg-gradient-to-br from-violet-600 to-violet-900 ">
           <p className="p-8">AI-DS</p>
        </Card>
        <Card className="shadow-lg my-4 w-[45vw] md:w-[25vw] flex items-center justify-center text-white bg-gradient-to-br from-red-500 to-red-200">
           <p className="p-8">AI-ML</p>
        </Card>
        <Card className="shadow-lg my-4 w-[45vw] md:w-[25vw] flex items-center justify-center text-white bg-gradient-to-br  from-blue-700 to-amber-600 ">
           <p className="p-8">EEE</p>
        </Card>
        </div>
    </section>
  )
}

export default Streams