import axiosInstance from "@/utils/instance";

export const eeeFiles = async (query:{subject:string|undefined,type:string|undefined,search:string|undefined}) => {
   try {
      // console.log("triggered EEE-Files call")
      const res = await axiosInstance.get('/api/get-eee',{
         params:{subject:query.subject,type:query.type,search:query.search}
      });
      // console.log("here is the response",res.data)
      return res.data;
   } catch (e) {
    console.error("Error while fetching resources",e)
   }
}