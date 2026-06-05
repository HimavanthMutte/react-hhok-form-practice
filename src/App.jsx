import {useId} from "react"

import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { FaEye } from "react-icons/fa"

const App = () => {
  const baseId = useId()

  const form = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      channelName: "",
      phoneNumbers: ["",""]
    }
  })
  const { register , control , handleSubmit , formState , watch , getValues } = form
  const {errors , isValid , isDirty , submitCount } = formState
  
  const onSubmit = (data) =>{
    console.log(getValues())
    console.log(data)
  }

  const onError = (errors) => {
    alert("Form has errors. Please fix them before submitting.")
  }

  return(
    <div className="min-h-screen p-5 bg-indigo-500 flex flex-row justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit,onError)} className="shadow-lg bg-white rounded-lg py-6 px-6 flex flex-col w-[550px]" noValidate>
        <h1 className="text-center text-indigo-600 font-sans text-3xl font-bold">React-Hook-Form({submitCount})</h1>
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
        <label className="mt-3 text-md text-slate-600 font-semibold" htmlFor={`${baseId}-password`}>Password</label>
        <div className="relative">
          <input {...register("password",{
            required: { value: true, message: "Password is required" },
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            },
            maxLength: {
              value: 20,
              message: "Password must be less than 20 characters"
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
              message:
                "Must contain uppercase, lowercase and a number"
          }})} type="password" className="w-full mt-2 border p-3 border-slate-400 rounded-sm placeholder-slate-400 focus:ring-2 text-md font-semibold outline-none focus-ring-offset-1 focus:ring-indigo-500 focus:border-none focus:text-indigo-500" id={`${baseId}-password`} placeholder="Enter your password..."/>
          <FaEye onMouseEnter={() => { document.getElementById(`${baseId}-password`).type = "text"; }} onMouseLeave={() => { document.getElementById(`${baseId}-password`).type = "password"; }} className="absolute right-3 top-[45%] bottom-[75%] right-[20px] text-slate-500 text-lg"/>
        </div>
        <p className="mt-2 text-red-500">{errors.password?.message}</p>
        <label className="mt-3 text-md text-slate-600 font-semibold" htmlFor={`${baseId}-name`}>Channel Name</label>
        <input {...register("channelName",{
          required: {
            value: true,
            message: "Channel Name is required"
          }
        })} type="tel" className="mt-2 border p-3 border-slate-400 rounded-sm placeholder-slate-400 focus:ring-2 text-md font-semibold outline-none focus-ring-offset-1 focus:ring-indigo-500 focus:border-none focus:text-indigo-500" id={`${baseId}-channel`} placeholder="Enter your channel name..."/>
        <p className="mt-2 text-red-500">{errors.channelName?.message}</p>
        <label className="mt-3 text-md text-slate-600 font-semibold" htmlFor={`${baseId}-phoneNumber-1`}>Phone Number 1</label>
        <input {...register("phoneNumbers.0",{
          required: {
            value: true,
            message: "Phone Number 1 is required"
          },
          minLength: {
            value: 10,
            message: "Phone Number must be at least 10 digits"
          },
          maxLength: {
            value: 15,
            message: "Phone Number must be less than 15 digits"
          },
          pattern: {
            value: /^\d+$/,
            message: "Phone Number must contain only digits"
          }
        })} type="tel" className="mt-2 border p-3 border-slate-400 rounded-sm placeholder-slate-400 focus:ring-2 text-md font-semibold outline-none focus-ring-offset-1 focus:ring-indigo-500 focus:border-none focus:text-indigo-500" id={`${baseId}-phoneNumber-1`} placeholder="Enter your phone number..."/>
        <p className="mt-2 text-red-500">{errors.phoneNumbers?.[0]?.message}</p>
        <label className="mt-3 text-md text-slate-600 font-semibold" htmlFor={`${baseId}-phoneNumber-2`}>Phone Number 2</label>
        <input {...register("phoneNumbers.1",{
          required: {
            value: true,
            message: "Phone Number 2 is required"
          },
          minLength: {
            value: 10,
            message: "Phone Number must be at least 10 digits"
          },
          maxLength: {
            value: 15,
            message: "Phone Number must be less than 15 digits"
          },
          pattern: {
            value: /^\d+$/,
            message: "Phone Number must contain only digits"
          }
        })} type="text" className="mt-2 border p-3 border-slate-400 rounded-sm placeholder-slate-400 focus:ring-2 text-md font-semibold outline-none focus-ring-offset-1 focus:ring-indigo-500 focus:border-none focus:text-indigo-500" id={`${baseId}-phoneNumber-2`} placeholder="Enter your phone number..."/>
        <p className="mt-2 text-red-500">{errors.phoneNumbers?.[1]?.message}</p>
        <button disabled={!isValid || !isDirty} type="submit" className="disabled:bg-gray-400 cursor-pointer bg-indigo-500 mt-3 rounded-sm py-3 text-white font-bold">Submit</button>
      </form>
      <DevTool control={control}/>
    </div>
  )
}

export default App