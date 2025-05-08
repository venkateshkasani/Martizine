import { Suspense } from "react";
import SavedContent from "@/utils/pageComponents/SavedContent";

  const Page = () => {
    return (
      <div>
        <Suspense>
        <SavedContent />
        </Suspense>
      </div>
    )
  }

  export default Page;
