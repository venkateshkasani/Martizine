import axiosInstance from "@/utils/instance";

export const csgFiles = async (query:string|null) => {
   try {
      console.log("triggered csgFiles call")
      const res = await axiosInstance.get('/api/get-csg',{
        params:{subject:query}
      });
      console.log("here is the response",res.data)
      return res.data;
   } catch (e) {
    console.log("Error while fetching resources",e)
   }
}