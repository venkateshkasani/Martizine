import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import CheckboxChunk from "./CheckboxChunk"
import React from "react"

const Searchbar = () => {
  const [chapters,setChapters] = React.useState([]);
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
            <span>Question papers</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <span>Assignments</span>
            </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Class notes</span>
            </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
            </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
      <input className="w-full sm:w-2/3 p-2 rounded-r border border-teal-600 focus:outline-none" type="text" placeholder="Search resources eg., Electromagnetic waves theory" />
    </div>
    
  )
}

export default Searchbar