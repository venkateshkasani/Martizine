import { Suspense } from "react"
import AimlContent from "@/utils/pageComponents/AimlContent"

const Page = () => {
  return (
    <div>
      <Suspense>
      <AimlContent />
      </Suspense>
    </div>
  )
}

export default Page