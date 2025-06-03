'use client'
import { useQuery } from "@tanstack/react-query"
import { getCourses } from "@/controllers/queries/subjects.queries"
import Stream from "@/utils/Stream"
import { Loader2 } from "lucide-react"
import clsx from "clsx"


const Streams = () => {
    
  const streams = useQuery({
      queryKey:['getAllCourses'],
      queryFn: async() => getCourses()
  })

  // console.log("streams",streams.data)

  const streamsData = streams.data;
  const isLoading = streams.isLoading;
  const ece = streamsData?.filter((stream) => stream.course == 'ECE') || []
  const cse = streamsData?.filter((stream) => stream.course == 'CSE') || []
  const cse_aiml = streamsData?.filter((stream) => stream.course == 'CSE_AIML') || []
  const aiml = streamsData?.filter((stream) => stream.course == 'AIML') || []
  const it = streamsData?.filter((stream) => stream.course == 'IT') || []
  const aids = streamsData?.filter((stream) => stream.course == 'AIDS') || []
  const csg = streamsData?.filter((stream) => stream.course == 'CSG') || []
  const eee = streamsData?.filter((stream) => stream.course == 'EEE') || []
  return (
    <section className="w-full streams">
        {isLoading ? <div className="w-full flex justify-center items-center text-center"><Loader2 className={clsx(isLoading ? 'animate-spin' : 'hidden')} /></div> : 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[100vw] px-8">
        <Stream data={ece[0]} gradient="from-[#FEE101] to-gray-400" />
        <Stream data={cse[0]} gradient="from-blue-700 to-blue-200 " />
        <Stream data={cse_aiml[0]} gradient="from-slate-700 to-purple-500" />
        <Stream data={aiml[0]}  gradient="from-blue-800 to-red-500"/>
        <Stream data={aids[0]} gradient="from-orange-400 to-red-500" />
        <Stream data={it[0]} gradient="from-violet-600 to-violet-900 " />
        <Stream data={csg[0]} gradient="from-red-500 to-red-200" />
        <Stream data={eee[0]} gradient="from-blue-700 to-amber-600" /> 
        </div>
        }
    </section>
  )
}

export default Streams