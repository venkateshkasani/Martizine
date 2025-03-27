import axiosInstance from "@/utils/instance";

export const eeeFiles = async (query:string|null) => {
   try {
      console.log("triggered cseaimlFiles call")
      const res = await axiosInstance.get('/api/get-ee',{
        params:{subject:query}
      });
      console.log("here is the response",res.data)
      return res.data;
   } catch (e) {
    console.log("Error while fetching resources",e)
   }
}