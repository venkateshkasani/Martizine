import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { CheckBoxChunkCallback } from "@/types/ComponentProps";

const CheckboxChunk = ({callBackFunction}:{callBackFunction:(data:CheckBoxChunkCallback) => void}) => {
    const [state,setState] = React.useState({one:false,two:false,three:false,four:false,five:false})
    
    return (
        <div className="">
        <p className="text-md text-slate-600 my-2 pl-3">Chapters</p>
      <div className="flex space-x-4 pl-2">
      <div className="flex items-center space-x-1">
      <Checkbox id="1" className="" onCheckedChange={() => {
        setState((prev) => ({...prev,one:!prev.one}))
        callBackFunction(state)
      }} />
      <label htmlFor="1" className="text-sm leading-none">1</label>
      </div>
      <div className="flex items-center space-x-1">
      <Checkbox id="2" className="" onCheckedChange={() => {
        setState((prev) => ({...prev,two:!prev.two}))
        callBackFunction(state)
      }}  />
      <label htmlFor="2" className="text-sm leading-none">2</label>
      </div>
      <div className="flex items-center space-x-1">
      <Checkbox id="3" className="" onCheckedChange={() => {
        setState((prev) => ({...prev,three:!prev.three}))
        callBackFunction(state)
      }}  />
      <label htmlFor="3" className="text-sm leading-none">3</label>
      </div>
      <div className="flex items-center space-x-1">
      <Checkbox id="4" className="" onCheckedChange={() => {
        setState((prev) => ({...prev,four:!prev.four}))
        callBackFunction(state)
      }}  />
      <label htmlFor="4" className="text-sm leading-none">4</label>
      </div>
      <div className="flex items-center space-x-1">
      <Checkbox id="5" className="" onCheckedChange={() => {
        setState((prev) => ({...prev,five:!prev.five}))
        callBackFunction(state)
      }}  />
      <label htmlFor="5" className="text-sm leading-none">5</label>
      </div>
      </div>
      </div>
    )
}

export default CheckboxChunk;