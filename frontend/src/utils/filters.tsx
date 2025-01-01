export const getCourseData = (data:any[]|undefined,courseName:string) => {
    const arr = data?.map((courseObj) => courseObj.course == courseName)
    return arr?arr[0]:[];
}