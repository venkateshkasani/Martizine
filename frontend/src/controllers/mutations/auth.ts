import axiosInstance from "@/utils/instance";
import { userDataType } from "@/types/login";

const auth = async (userData:userDataType) => {
    try {
        const res = await axiosInstance.post('/api/auth',userData);
        return res.data;
    } catch (e) {
        console.error("Server authentication failed",e);
    }
}

export default auth;

