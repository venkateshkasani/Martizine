'use client'
import { Filter } from "lucide-react"
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

const Searchbar = ({callBackFunction}:{callBackFunction:(a:string) => void}) => {
  const [chapters,setChapters] = React.useState([]);
  const filters = useStore((state) => state.filter)
  const searchParams = useSearchParams();
  const updateFilter = useStore((state) => state.updateFilter)
  const handleChapters = (data:any) => {
    setChapters(data);
  }
  
  return (
    <div className="searchbar flex justify-center py-5 w-full">
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="p-2 bg-teal-700 rounded-l border border-teal-600 hover:cursor-pointer">
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
    
  )
}

export default Searchbar