  "use client";
  import Searchbar from "@/custom-components/Searchbar";
  import React from "react";
  import { useQuery } from "@tanstack/react-query";
  import { getFilterSaved, getUserData } from "@/controllers/queries/auth";
  import PDFViewer from "@/custom-components/PDFViewer";
  import useStore from "@/state-management/Store";
  import { useSearchParams } from "next/navigation";
  import { useRouter } from "next/navigation";
  import { useDebounce } from "@uidotdev/usehooks";
  import { LoaderCircleIcon } from "lucide-react";
import { getSubjectsArray } from "@/types/Course.type";

  const Page = () => {
    const searchParams = useSearchParams();
    const [search, setSearch] = React.useState<string>('')
    const [mail, setMail] = React.useState<string>('');
    const filter = useStore((state) => state.filter)
    const subject = searchParams.get('subject');
    const debounce = useDebounce(search,300);
    const router = useRouter();
    const userCall = useQuery({
      queryKey:['userdata'],
      queryFn:() => getUserData(mail),
    })
    const setLoading = useStore((state) => state.updateLoading);
     React.useEffect(() => {
     setLoading(false);
    },[])
    
    const {data,isLoading, refetch } = useQuery({
      queryKey:['saved',subject,filter,search],
      queryFn: () => getFilterSaved(({email:mail!,type:filter,search}))
    })
    const handleSearchInput = (value:string) => {
      setSearch(value);
    }
    const handleSave = () => {
      console.log("handlesave triggered")
      refetch();
    }

    React.useEffect(() => {
      const url = new URLSearchParams(searchParams.toString())
      url.set('search',search??"")
      router.replace(`?search=${url}`,{scroll:false})
    },[debounce,router])
    React.useEffect(() => {
      const usermail = sessionStorage.getItem('userEmail')
      setMail(usermail!);
      console.log("usercall",userCall.data)
    },[])
    React.useEffect(() => {
      console.log("Filter updated")
    refetch();
    },[filter])
    return (
      <section>
        <div className="h-full px-2 sm:px-8">
        <div className="h-full px-2 sm:px-6 md:px-8">
      <div className="flex gap-2 w-full items-center hover:cursor-pointer">
      <Searchbar callBackFunction={handleSearchInput} />
      </div>
        </div>
          <div className="grid justify-items-center grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5">
            {isLoading ? <div className="w-[100%] flex justify-center items-center py-10 col-span-full">
      <LoaderCircleIcon className="text-5xl text-black animate-spin" />
    </div> :
            (
              data?.length > 0 ? data?.map((obj:getSubjectsArray,index:number) => {
                const fileName = obj.file.split('-').slice(1).join('-');
                const date = obj.uploadedAt;
                const dateObj = new Date(date);
                const dateString = dateObj.toUTCString().split(' ').slice(0,4).join(' ');
                const saved:boolean = true;
              return (
                <PDFViewer email={mail} fileData={obj} handleSave={handleSave}  saved={saved}  _id={obj._id} key={index} src={process.env.NEXT_PUBLIC_BASE_URL + `/public/uploads/${obj.file}`} name={fileName} date={dateString} author={obj.authorName} />
              )
            }) : <p className="text-slate-400 text-center w-full col-span-full">No results found</p>
            )
            }
          </div>
        </div>
      </section>
    );
  };

  export default Page;
