import {z} from 'zod'

export const uploadSchema = z.object({
    branch:z.string({message:"Select a branch name"}),
    type:z.string({message:"Select a branch"}),
    semester:z.string({message:"Select a semester"}),
    subject:z.string({message:"Select a subject"}),
    chapters:z.array(z.string()).optional(),
    tags:z.array(z.string()).optional(),
    authorName:z.string({message:"Enter author name"}),
    file: z
    .instanceof(File, { message: "Please upload a valid file" })
    .refine((file) => file?.size > 0, { message: "File is required" }) 
});

export const contributeSchema = z.object({
    fullname:z.string().min(2,{message:"Enter your name"}),
    email:z.string().email({message:"Enter a valid email"}),
    message:z.string().min(3, {message:"A note is required"})
})