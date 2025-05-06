'use client'
import { getTokenData } from "@/controllers/mutations/auth"
import AddFileButton from "./AddFileButton"
import Searchbar from "./Searchbar"
import React from "react";
import { getUserData } from "@/controllers/queries/auth";

type SearchBarRowProps = {
    handleSearchInput: (a: string) => void;
  };

const SearchBarRow:React.FC<SearchBarRowProps>  = async ({handleSearchInput}) => {
   const userData:any = getTokenData();
   const [role, setRole] = React.useState<string>('')
   if(userData) {
    const userRole = await getUserData(userData.email);
   }
    return (
        <div className="flex gap-2 w-full items-center hover:cursor-pointer">
       { role == 'admin' && <AddFileButton /> }
       <Searchbar callBackFunction={handleSearchInput} />
      </div>
    )
}

export default SearchBarRow;