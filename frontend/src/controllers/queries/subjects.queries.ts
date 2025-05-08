'use client'
import { semSubjects } from "@/types/Course.type";
import axiosInstance from "@/utils/instance";

// api calling functions

interface responseType {
    course:string,
    uploadedAt:string,
    sem_subjects:semSubjects,
    _id:string
}

export const getCourses = async ()  => {
    try {
        const response = await axiosInstance.get<responseType[]>('/api/streams')
        return response.data;
    } catch (e) {
        console.error("Error fetching stream resources",e)
        throw new Error("Failed to fetch stream resources")
    }
}