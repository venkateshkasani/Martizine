import axiosInstance from "@/utils/instance";

export const aidsFiles = async (query:{subject:string|undefined,type:string|undefined,search:string|undefined}) => {
   try {
      const res = await axiosInstance.get('/api/get-aids',{
         params:{subject:query.subject,type:query.type,search:query.search}
      });
      // console.log("here is the response aids",res.data)
      return res.data;
   } catch (e) {
    console.error("Error while fetching resources",e)
   }
}