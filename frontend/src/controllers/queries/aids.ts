import axiosInstance from "@/utils/instance";

export const aidsFiles = async (query:string | null) => {
   
   try {
      console.log("triggered aidsFiles call")
      const res = await axiosInstance.get('/api/get-aids',{
        params:{subject:query}
      });
      console.log("here is the response",res.data)
      return res.data;
   } catch (e) {
    console.log("Error while fetching resources",e)
   }
}