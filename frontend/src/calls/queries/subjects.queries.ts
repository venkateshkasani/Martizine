import axiosInstance from "@/utils/instance";

// api calling functions

interface responseType {
    course:string,
    uploadedAt:string,
    sem_subjects:any,
    _id:string
}

export const getCourses = async () => {
    try {
        const response = await axiosInstance.get('/streams')
        return response;
    } catch (e) {
        console.error("Error fetching stream resources")
        throw new Error("Failed to fetch stream resources")
    }
}