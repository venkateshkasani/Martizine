import axiosInstance from "@/utils/instance"

export const getSaved = async (email:string) => {
        console.log("triggering svaed call")
     try {
        const res = await axiosInstance.post('/api/saved',{email});
        return res.data;
     } catch (e) {
        console.error("Error while fetching response from the server",e)
        throw new Error("Error while fetching saved files")
     }
}