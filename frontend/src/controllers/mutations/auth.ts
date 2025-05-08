import axiosInstance from "@/utils/instance";
import { userDataType } from "@/types/login";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie'

const auth = async (userData:userDataType) => {
    try {
        const res = await axiosInstance.post('/api/auth',userData);
        return res.data;
    } catch (e) {
        console.error("Server authentication failed",e);
    }
}

export const getTokenData = () => {
   try {
    const token = Cookies.get('artk');
   if(!token) return null;
   const userData = jwtDecode(token);
   return userData;
   } catch (e) {
    console.error("Error while reading auth token",e)
   }
}

export default auth;

