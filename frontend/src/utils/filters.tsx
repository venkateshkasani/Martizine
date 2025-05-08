import { courseDetails } from "@/types/Course.type";

export const getCourseData = (data:courseDetails[]|undefined,courseName:string) => {
    const arr = data?.map((courseObj) => courseObj.course == courseName)
    return arr?arr[0]:[];
}