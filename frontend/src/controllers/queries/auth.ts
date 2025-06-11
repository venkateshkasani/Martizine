import axiosInstance from "@/utils/instance"

export const getSaved = async (email:string) => {
   // console.log("fe got email",email)
     try {
        const res = await axiosInstance.get('/api/saved',{
         params:{email}
        });
        return res.data;
     } catch (e) {
        console.error("Error while fetching response from the server",e)
        throw new Error("Error while fetching saved files")
     }
}

export const getFilterSaved = async ({email,type,search}:{email:string,type:string,search:string}) => {
     try {
        const res = await axiosInstance.get('/api/filteredSaved',{
         params:{email,type,search}
        });
        return res.data;
     } catch (e) {
        console.error("Error while fetching filtered saved response from the server",e)
        throw new Error("Error while fetching saved files")
     }
}

export const getUserData = async (email:string) => {
  try {
    const res = await axiosInstance.post('/api/getTokenData',{email});
    return res.data;
  }  catch (e) {
     console.error("Error while fetching user details",e);
  }
}