import { Skeleton } from "@/components/ui/skeleton"
const PDFSkeleton = () => {
  return (
    <div className="h-[180px] w-[220px] rounded flex flex-col gap-2">
        <Skeleton className="h-full bg-gray-200 w-full" />
        <div className="flex flex-col gap-2">
            <Skeleton className="h-[15px] bg-gray-200 w-1/4" />
            <Skeleton className="h-[15px] bg-gray-200 w-full" />
        </div>
    </div>
  )
}

export default PDFSkeleton