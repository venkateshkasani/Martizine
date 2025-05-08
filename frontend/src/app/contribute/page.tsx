'use client'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {useForm, Controller} from 'react-hook-form'
import { Button } from "@/components/ui/button";
import sendMail from "@/controllers/mutations/email";
import { useMutation } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contributeSchema } from "@/utils/ZodValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from 'zod'

const Page = () => {
  const {toast} = useToast();
  const {handleSubmit, control,reset, formState:{errors}} = useForm({
    resolver:zodResolver(contributeSchema),
    defaultValues:{
      fullname:'',
      email:'',
      message:'',
    }
  });
  const mutation = useMutation({
    mutationFn:({name,message}:{name:string,message:string}) => sendMail({name,message}),
    onSuccess:() => {
      reset();
      toast({
        title:"Mail sent!",
        description: "We will review your response and get back soon.",
      })
    },
    onError:() => {
      toast({
        title:"Mail sending failed!",
        description: "There was an issue with the server, please try after some time.",
      })
    }
  })
  type schemaType = z.infer<typeof contributeSchema>
  const onSubmit = (data:schemaType) => {
    console.log("formdata",data)
    mutation.mutate({name:data.fullname,message:data.message})
  }
    return(
        <section className="px-5 flex flex-col justify-center w-[100vw]">
          <div className="flex justify-center w-full">
            <div className="flex flex-col gap-4 items-center my-4 w-full">
            <p id="mainHeading" className="font-semibold text-2xl sm:text-4xl text-center text-primary">Want to Join and Contribute to the Community ?</p>
            <p className="text-gray-400 text-sm">Please fill this form to get in touch with us.</p>
            <form className="flex items-center flex-col gap-2 w-full sm:w-1/2" onSubmit={handleSubmit(onSubmit,() => console.log("errors",errors))}>
            <Controller
            name="fullname"
            control={control}
            render={({field}) => <Input className="w-full sm:w-1/2"  {...field} value={field.value} onChange={field.onChange} placeholder="Full name" />}
             />
            <p className="text-red-500 text-sm">{errors.fullname?.message}</p>
            <Controller
            name="email"
            control={control} 
            render={({field}) => <Input className="w-full sm:w-1/2" {...field} value={field.value} onChange={field.onChange}  placeholder="Email" />}
             />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
             <Controller
            name="message"
            control={control}
            render={({field}) => <Textarea className="w-full sm:w-1/2" {...field} value={field.value} onChange={field.onChange}  placeholder="Why do you want to contribute..." />}
             />
            <p className="text-red-500 text-sm">{errors.message?.message}</p>
             <Button type="submit" className="w-full sm:w-1/2">{mutation.isPending ? <Loader className="animate-spin" color="white" size={25} /> : 'Submit'}</Button>
            </form>
            </div>
          </div>
        </section>
    )
}

export default Page;