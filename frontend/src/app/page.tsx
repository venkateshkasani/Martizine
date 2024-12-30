
'use client'
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Streams from "@/custom-components/Streams";
import StandardHeading from "@/helper-components/StandardHeading";
import { getCourses } from "@/calls/queries/subjects.queries";

export default function Home() {
  const client = useQueryClient();
  const streams = useQuery({
        queryKey:['getAllCourses'],
        queryFn:() => getCourses()
    })
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL
  console.log('baseurl',baseurl)
  return (
    <div className="h-[100vh] mainDiv">
      <StandardHeading title="Select your stream!" />
      <Streams />
      <div>
        {streams.data?.map((obj,index) => <p key={index} className="text-black">{obj.course}</p>)}
      </div>
    </div>
  );
}