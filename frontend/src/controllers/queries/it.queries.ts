import axiosInstance from "@/utils/instance";

export const itFiles = async (query:string|null) => {
   try {
      console.log("triggered itFiles call")
      const res = await axiosInstance.get('/api/get-it',{
        params:{subject:query}
      });
      console.log("here is the response",res.data)
      return res.data;
   } catch (e) {
    console.log("Error while fetching resources",e)
   }
}