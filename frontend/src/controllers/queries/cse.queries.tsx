import axiosInstance from "@/utils/instance";

export const cseFiles = async (query:string|null) => {
   try {
      console.log("triggered cseFiles call")
      const res = await axiosInstance.get('/api/get-cse',{
        params:{subject:query}
      });
      console.log("here is the response",res.data)
      return res.data;
   } catch (e) {
    console.log("Error while fetching resources",e)
   }
}