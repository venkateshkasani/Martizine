import axiosInstance from "@/utils/instance";

export const itFiles = async (query:{subject:string|undefined,type:string|undefined,search:string|undefined}) => {
   try {
      // console.log("triggered itFiles call")
      const res = await axiosInstance.get('/api/get-it',{
        params:{subject:query.subject,type:query.type,search:query.search}
      //   params:{subject:query}
      });
      // console.log("here is the response",res.data)
      return res.data;
   } catch (e) {
    console.error("Error while fetching resources", e )
   }
}