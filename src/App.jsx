import {useId} from "react"

import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

const App = () => {
  const baseId = useId()

  const form = useForm({
    defaultValues: {
      userName: "",
      email: "",
      channelName: ""
    }
  })
  const { register , control , handleSubmit , formState} = form
  const {errors} = formState

  const onSubmit = (data) =>{
    console.log(data)
  }

  return(
    <div className="min-h-screen p-5 bg-indigo-500 flex flex-row justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg bg-white rounded-lg py-6 px-6 flex flex-col w-[550px]" noValidate>
        <h1 className="text-center text-indigo-600 font-sans text-3xl font-bold">React-Hook-Form</h1>
        <label className="mt-3 text-md text-slate-600 font-semibold" htmlFor={`${baseId}-name`}>Username</label>
        <input {...register("userName",{
          required: "Username Required"
        })} type="text" className="mt-2 border p-3 border-slate-400 rounded-sm placeholder-slate-400 focus:ring-2 text-md font-semibold outline-none focus-ring-offset-1 focus:ring-indigo-500 focus:border-none focus:text-indigo-500" id={`${baseId}-name`} placeholder="Enter your username..."/>
        <p className="mt-2 text-red-500">{errors.userName?.message}</p>
        <label className="mt-3 text-md text-slate-600 font-semibold" htmlFor={`${baseId}-email`}>Email Address</label>
        <input {...register("email",{
          required: { value: true, message: "Email is required" },
          validate: {
            notAdmin: (fieldValue)=>{
              return !fieldValue?.startsWith("admin") || "Change Email"
            },
            badDoamin: (fieldValue)=> {
              return !fieldValue?.endsWith("baddomain.com") || "Domain Not Allowed"
            }
        }})} type="text" className="mt-2 border p-3 border-slate-400 rounded-sm placeholder-slate-400 focus:ring-2 text-md font-semibold outline-none focus-ring-offset-1 focus:ring-indigo-500 focus:border-none focus:text-indigo-500" id={`${baseId}-email`} placeholder="Enter your email..."/>
        <p className="mt-2 text-red-500">{errors.email?.message}</p>
        <label className="mt-3 text-md text-slate-600 font-semibold" htmlFor={`${baseId}-name`}>Channel Name</label>
        <input {...register("channelName",{
          required: {
            value: true,
            message: "Channel Name is required"
          }
        })} type="text" className="mt-2 border p-3 border-slate-400 rounded-sm placeholder-slate-400 focus:ring-2 text-md font-semibold outline-none focus-ring-offset-1 focus:ring-indigo-500 focus:border-none focus:text-indigo-500" id={`${baseId}-channel`} placeholder="Enter your channel name..."/>
        <p className="mt-2 text-red-500">{errors.channelName?.message}</p>
        <button type="submit" className="bg-indigo-500 mt-3 rounded-sm py-3 text-white font-bold">Submit</button>
      </form>
      <DevTool control={control}/>
    </div>
  )
}

export default App