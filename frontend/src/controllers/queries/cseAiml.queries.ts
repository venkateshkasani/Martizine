import axiosInstance from "@/utils/instance";

export const cseAimlFiles = async (query:{subject:string|undefined,type:string|undefined,search:string|undefined}) => {
   try {
      console.log("triggered cseaimlFiles call")
      const res = await axiosInstance.get('/api/get-cseAiml',{
         params:{subject:query.subject,type:query.type,search:query.search}
      });
      console.log("here is the response",res.data)
      return res.data;
   } catch (e) {
    console.log("Error while fetching resources",e)
   }
}