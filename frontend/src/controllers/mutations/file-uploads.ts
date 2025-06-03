import axiosInstance from "@/utils/instance";

export const uploadEceFile = async (data:FormData) => {
     try {
     //    console.log("triggerd upload func")
         const res = await axiosInstance.post('/api/ece-pdf',data)
         return res;
     } catch (e) {
      console.error("Error:",e)
        throw new Error("Failed to upload File")
     }
}

export const uploadCseFile = async (data:FormData) => {
     try {
         const res = await axiosInstance.post('/api/cse-pdf',data)
         return res;
     } catch (e) {
      console.error("Error:",e)
        throw new Error("Failed to upload File")
     }
}

export const uploadAimlFile = async (data:FormData) => {
     try {
         const res = await axiosInstance.post('/api/aiml-pdf',data)
         return res;
     } catch (e) {
      console.error("Error:",e)
        throw new Error("Failed to upload File")        
     }
}

export const uploadCseAimlFile = async (data:FormData) => {
     try {
         const res = await axiosInstance.post('/api/cseAiml-pdf',data)
         return res;
     } catch (e) {
        console.error("Error:",e)
        throw new Error("Failed to upload File")
     }
}

export const uploadAidsFile = async (data:FormData) => {
     try {
         const res = await axiosInstance.post('/api/aids-pdf',data)
         return res;
     } catch (e) {
          console.error("Error:",e)
        throw new Error("Failed to upload File")
     }
}

export const uploadCsgFile = async (data:FormData) => {
     try {
         const res = await axiosInstance.post('/api/csg-pdf',data)
         return res;
     } catch (e) {
          console.error("Error:",e)
        throw new Error("Failed to upload File")
     }
}

export const uploadItFile = async (data:FormData) => {
     try {
         const res = await axiosInstance.post('/api/it-pdf',data)
         return res;
     } catch (e) {
          console.error("Error:",e)
        throw new Error("Failed to upload File")
     }
}

export const uploadEeeFile = async (data:FormData) => {
     try {
         const res = await axiosInstance.post('/api/eee-pdf',data)
         return res;
     } catch (e) {
          console.error("Error:",e)
        throw new Error("Failed to upload File")
     }
}