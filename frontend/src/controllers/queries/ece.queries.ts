import axiosInstance from "@/utils/instance";

export const eceFiles = async (query:{subject:string|undefined,type:string|undefined,search:string|undefined}) => {
   try {
      // console.log("triggered eceFiles call")
      const res = await axiosInstance.get('/api/get-ece',{
         params:{subject:query.subject,type:query.type,search:query.search}
      });
      // console.log("here is teh response",res.data)
      return res.data;
   } catch (e) {
    console.error("Error while fetching resources",e)
   }
}