import { Suspense } from "react"
import CsgContent from "@/utils/pageComponents/CsgContent"

const Page = () => {
  return (
    <div>
      <Suspense>
        <CsgContent />
      </Suspense>
    </div>
  )
}

  export default Page