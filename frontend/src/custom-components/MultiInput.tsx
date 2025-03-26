'use client'
import { multiInputProps } from "@/utils/MultiInputProps";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
const MultiInput = ({placeholder,callbackFunction,initialData}:multiInputProps) => {
    const [value, setValue] = useState<string>('');
    const [arr, setArr] = useState<string[]>([]);
    const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            if(value.trim() !== '') {
                setArr((prev) => [...prev,value])
                setValue('');
            }
        }
        if(e.key === 'Backspace' && value == '') {
            const tempArr = [...arr];
            tempArr.splice(tempArr.length-1,1);
            setArr(tempArr)
        }
    }

    useEffect(() => {
      if(initialData) {
        callbackFunction(initialData)
        setArr(initialData)
      }
    },[])

    const handleRemove = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
        e.preventDefault();
        const tempArr = [...arr];
        tempArr.splice(index,1)
        setArr(tempArr)
    }
    
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();  
        setValue(e.target.value) 
    }

    useEffect(() => {
        callbackFunction(arr);
    },[arr])
    return (
        // imp: specify the component's parent div width and max width to maintain a specific width
        <div className="relative w-full">
            <div className="border-2 rounded p-2">
                <div className="flex flex-wrap gap-2">
                    {arr.map((val, index) => (
                        <span key={index} className="bg-gray-300 px-2 text-slate-700 rounded-2xl flex justify-row items-start">
                            <span>{val}</span> 
                            <span className="pl-1 hover:cursor-pointer" onClick={(e) => handleRemove(e,index)}><X className="inline" size={15} color="red" /></span>
                        </span>
                    ))}
                </div>
                <textarea
                    onChange={(e) => handleInputChange(e)}
                    onKeyDown={(e) => handleEnter(e)}
                    className="w-full border-none focus:outline-none mt-2 bg-gray-100"
                    value={value}
                    rows={1}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default MultiInput;