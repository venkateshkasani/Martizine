'use client'
import { Filter, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react"
import useStore from "@/state-management/Store"
import { useSearchParams } from "next/navigation"
import AddFileButton from "./AddFileButton"

const Searchbar = ({callBackFunction}:{callBackFunction:(a:string) => void}) => {
  const [chapters,setChapters] = React.useState([]);
  const [fil,setFil] = React.useState<string>('');
  const [role,setRole] = React.useState<string>();
  const filter = useStore((state) => state.filter)
  const searchParams = useSearchParams();
  const updateFilter = useStore((state) => state.updateFilter)
  const handleChapters = (data:any) => {
    setChapters(data);
  }
  React.useEffect(() => {
    const userRole = sessionStorage.getItem('userRole');
    setRole(userRole!);
  },[])

  React.useEffect(() => {
    console.log("Filter update",filter)
    setFil(filter)
  },[filter])
  
  return (
    <div className="w-full flex gap-2">
      {role == 'admin' && <div className="py-5">
      <AddFileButton />
      </div>}
      <div className="flex-col justify-center py-5 w-full">
      <div className="flex justfify-center w-full searchbar">
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="p-2 bg-teal-700 rounded-l border border-teal-600 hover:cursor-pointer relative">
          <Filter color="white" />
          </span>        
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sort by: </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        <DropdownMenuItem>
            <span onClick={() => updateFilter('question_paper')}>Question papers</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <span onClick={() => updateFilter('assignment')}>Assignments</span>
            </DropdownMenuItem>
          <DropdownMenuItem>
            <span onClick={() => updateFilter('class_notes')}>Class notes</span>
            </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
            </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
      <input onChange={(e) => callBackFunction(e.target.value)} className="w-full sm:w-2/3 p-2 rounded-r border border-teal-600 focus:outline-none" type="text" placeholder="Search resources eg., Electromagnetic waves theory" />
      </div>
      {fil !== '' && <div className="bg-slate-300 rounded-lg text-black px-3 py-1 flex items-center text-sm w-fit my-1">{fil}<X color="red" size={18} onClick={() => updateFilter('')} /></div>    }
    </div>
    </div>
  )
}

export default Searchbar