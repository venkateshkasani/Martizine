import axiosInstance from "@/utils/instance";

export const eceFiles = async (query:string|null) => {
   try {
      console.log("triggered eceFiles call")
      const res = await axiosInstance.get('/api/get-ece',{
        params:{subject:query}
      });
      console.log("here is teh response",res.data)
      return res.data;
   } catch (e) {
    console.log("Error while fetching resources",e)
   }
}