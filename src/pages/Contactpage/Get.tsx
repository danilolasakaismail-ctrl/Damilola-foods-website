// import React from 'react'

import { CiLocationOn } from "react-icons/ci"
import { FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { PiPhoneBold } from "react-icons/pi"

const Get = () => {
  return (
    <div className="w-full pt-3 pb-4 lg:pt-10 min-h-100 flex flex-col gap-7  justify-center items-center">
       <div className=" w-[90%] h-[90%]  flex flex-col items-center justify-center gap-10">
        <div className=" flex flex-col font-medium text-center gap-8">
            <div className="text-center font-bold text-5xl  text-[#2e4b2e]">Get in Touch</div>
            <div>We're always happy to hear from you. Contact us for orders, enquiries or any questions</div>
        </div>
        <div className=" flex flex-wrap items-center justify-center gap-6">
        <div className="w-90 rounded-2xl flex flex-col justify-center gap-4 text-white items-center h-40 bg-green-900 ">
            <FaWhatsapp className="text-3xl text-[#56eb56] "/>
            <div className=" text-3xl font-bold">WhatsApp</div>
            <div className="text-center ">09043926612</div>
        </div>
         <div className="w-90 rounded-2xl flex flex-col justify-center gap-4 text-white items-center h-40 bg-green-900 ">
            <PiPhoneBold className="text-3xl text-[#56eb56] "/>
            <div className=" text-3xl font-bold">Phone</div>
            <div className="text-center ">09043926612</div>
        </div>
         <div className="w-90 rounded-2xl flex flex-col justify-center gap-4 text-white items-center h-40 bg-green-900 ">
            <MdEmail className="text-3xl text-[#56eb56] "/>
            <div className=" text-3xl font-bold">Email</div>
            <div className="text-center ">damilolasakaismail@gmail.com</div>
        </div>
         <div className="w-90 rounded-2xl flex flex-col justify-center gap-4 text-white items-center h-40 bg-green-900 ">
            <CiLocationOn className="text-3xl text-[#56eb56] "/>
            <div className=" text-3xl font-bold">Address</div>
            <div className="text-center ">ikigisin No 46 phase 3</div>
        </div>
        </div>
        </div>  
    </div>
  )
}

export default Get