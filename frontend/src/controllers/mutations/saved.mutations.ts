import axiosInstance from "@/utils/instance"

export const saveFiles = async (data:{email:string,_id:string}) => {
    try {
        const res = await axiosInstance.post('/api/save-files',data);
        return res.data;
    } catch (e) {
        console.error("Server Error: Failed while saving data",e);
    }
}

export const unsaveFiles = async (data:{email:string,_id:string}) => {
    try {
        const res = await axiosInstance.post('/api/unsave-files',data);
        return res.data;
    } catch (e) {
        console.error("Server Error: Failed while mutating data",e);
    }
}

