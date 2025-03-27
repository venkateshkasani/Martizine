'use client'
import AddFileButton from "@/custom-components/AddFileButton";
import Searchbar from "@/custom-components/Searchbar";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSaved } from "@/controllers/queries/auth";
import PDFViewer from "@/custom-components/PDFViewer";

const page = () => {
    const [userData, setUserData] = React.useState<any>({});
    
    const mutation = useMutation({
      mutationKey:['getSaved'],
      mutationFn:(email:string) => getSaved(email),
    })

    React.useEffect(() => {
      const sessionData = sessionStorage.getItem('userData')
      if(sessionData) {
        setUserData(JSON.parse(sessionData));
      }
    },[])

    React.useEffect(() => {
      console.log("chandged",userData)
      if (userData.email) {
        mutation.mutate(userData.email);
        console.log("userdata exists now",userData)
      }
    }, [userData.email]);

    return (
        <section>
          <div className="p-5">
            {/* <p className="letterSpace text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold">Saved Files</p> */}
            <div className="h-full px-4 sm:px-6 md:px-8">
      <div className="flex gap-2 w-full items-center">
       <AddFileButton />
       <Searchbar />
      </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 py-5">
      {mutation.data?.map((obj:any,index:number) => {
            const fileName = obj.file.split('-').slice(1).join('-');
            const date = obj.uploadedAt;
            const dateObj = new Date(date);
            const dateString = dateObj.toUTCString().split(' ').slice(0,4).join(' ');
           return (
            <PDFViewer key={index} src={process.env.NEXT_PUBLIC_BASE_URL + `/public/uploads/${obj.file}`} name={fileName} date={dateString} author={obj.author} />
           )
        })}
      </div>
          </div>
        </section>
    )
}

export default page;