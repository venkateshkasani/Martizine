import fileObjectType from "@/types/fileObject.type";
import axiosInstance from "@/utils/instance";

const uploadEceFile = async ({data}:{data:fileObjectType}) => {
     try {
         const res = await axiosInstance.post('/ece-files',data)
         return res;
     } catch (e) {
        throw new Error("Failed to upload File")
     }
}

export default uploadEceFile;