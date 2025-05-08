import { Suspense } from "react";
import CseContent from "@/utils/pageComponents/CseContent";


const Page = () => {
  return (
    <div>
      <Suspense>
      <CseContent />
      </Suspense>
    </div>
  )
}

export default Page