'use client'
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { RetroGrid } from '@/components/magicui/retro-grid';
import { AuroraText } from '@/components/magicui/aurora-text';
import { Input } from '@/components/ui/input';


const schema = z.object({
  username: z.string().min(1, { message: "This name is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

const Page = () => {
  const { handleSubmit, register,control, formState: { errors },reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues:{
      username:'',
      password:'',
    }
  });

  const onSubmit = (data: any) => {
    console.log("data", data);
    reset()
  };

  return (
    <div className='relative h-[100vh] w-[100vw]'>
      <RetroGrid className='animate absolute' />
      <AuroraText className='text-4xl font-bold'>Dummy page</AuroraText>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 items-center border border-black w-fit p-4"
      >
        <div className="flex flex-col items-start">
        <Controller
            name="username"
            control={control}
            render={({field}) => (
              <Input {...field} value={field.value} onChange={field.onChange} type="text" placeholder="Author name" /> 
            )}
             />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
        </div>

        <div className="flex flex-col items-start">
        <Controller
            name="password"
            control={control}
            render={({field}) => (
              <Input {...field} value={field.value} onChange={field.onChange} type="password" placeholder="Password" /> 
            )}
             />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <button type="submit" className="px-2 py-1 rounded bg-blue-400 text-white">Submit</button>
      </form>
    </div>
  );
};

export default Page;
