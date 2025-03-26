'use client'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {useForm, Controller} from 'react-hook-form'
import { Button } from "@/components/ui/button";
import sendMail from "@/controllers/mutations/email";
import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import { Loader } from "lucide-react";

const page = () => {
  const {handleSubmit, control} = useForm();
  const mutation = useMutation({
    mutationFn:({name,message}:{name:string,message:string}) => sendMail({name,message})
  })
  const onSubmit = (data) => {
    console.log("formdata",data)
    mutation.mutate(data.fullname,data.opinion)
  }
    return(
        <section className="px-5 flex flex-col justify-center w-[100vw]">
          <div className="flex justify-center w-full">
            <div className="flex flex-col gap-4 items-center my-4 w-full">
            <p id="mainHeading" className="font-semibold text-2xl sm:text-4xl text-center text-primary">Want to Join and Contribute to the Community ?</p>
            <p className="text-gray-400 text-sm">Please fill this form to get in touch with us.</p>
            <form className="flex items-center flex-col gap-2 w-full sm:w-1/2" onSubmit={handleSubmit(onSubmit)}>
            <Controller
            name="fullname"
            control={control}
            render={({field}) => <Input className="w-full sm:w-1/2"  {...field} placeholder="Full name" />}
             />
            <Controller
            name="email"
            control={control} 
            render={({field}) => <Input className="w-full sm:w-1/2" {...field} placeholder="Email" />}
             />
             <Controller
            name="opinion"
            control={control}
            render={({field}) => <Textarea className="w-full sm:w-1/2" {...field} placeholder="Why do you want to contribute..." />}
             />
             <Button type="submit" className="w-full sm:w-1/2">{mutation.isPending ? <Loader className="animate-spin" color="white" size={25} /> : 'Submit'}</Button>
            </form>
            </div>
          </div>
        </section>
    )
}

export default page;