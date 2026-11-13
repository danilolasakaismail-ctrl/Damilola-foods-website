// import React from 'react'
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs"
import logo from "../../assets/IMG2/Screenshot_2026-11-10_115151-removebg-preview.png"

const Footer = () => {
  return (
    <div className=" w-full pt-3 pb-4 lg:p-0  min-h-100 flex  justify-center text-white items-center bg-green-800">
        <div className="w-[90%] h-[80%] flex flex-col  gap-7 lg:gap-3 justify-between ">

        <div className=" flex flex-col gap-7 lg:flex-row items-start justify-between">
            <div className="flex flex-col gap-4 lg:gap-7 ">
                <div><img src={logo} className="w-40 lg:w-70" alt="" /></div>
                <div className=" text-[16px] text-white  font-medium text-left lg:text-[18px] w-90 lg:w-140">Fresh ingredients, delicious meals, and unforgettable experiences. Bringing people together through the love of good food.</div>
            </div>
            <div className="flex flex-col gap-2 lg:gap-3 ">
                <div className="text-2xl"><b>Quick Links</b></div>
                <div className="text-[16px] font-medium lg:text-[20px] hover:text-green-400 cursor-pointer">Home</div>
                <div className="text-[16px] font-medium lg:text-[20px] hover:text-green-400 cursor-pointer">About Us</div>
                <div className="text-[16px] font-medium lg:text-[20px] hover:text-green-400 cursor-pointer">Our Menu</div>
                <div className="text-[16px] font-medium lg:text-[20px] hover:text-green-400 cursor-pointer">Contact</div>

            </div>
            <div className="flex flex-col gap-2 lg:gap-3 ">
                <div className="text-2xl"><b>Contact Us</b></div>
                <div className="text-[16px] font-medium lg:text-[20px]">Lagos, Nigeria</div>
                <div className="text-[16px] font-medium lg:text-[20px] ">+234 807 129 0812</div>
                <div className="text-[16px] font-medium lg:text-[20px] ">damilolasakaismail@gmail.com</div>
            </div>
            <div className="flex flex-col gap-2 lg:gap-3 ">
                <div className="text-2xl"><b>Follow Us</b></div>
                <div className="text-[16px] flex items-center gap-2 font-medium lg:text-[20px] hover:text-green-400 cursor-pointer"><div><BsInstagram/></div><div>Instagram</div></div>
                <div className="text-[16px]  flex items-center gap-2  font-medium lg:text-[20px] hover:text-green-400 cursor-pointer"><div><BsFacebook/></div><div>Facebook</div></div>
                <div className="text-[16px] flex items-center gap-2  font-medium lg:text-[20px] hover:text-green-400 cursor-pointer"><div><BsTiktok/></div><div>TikTok</div></div>
            </div>
        </div>
        <hr />
         <div className=" w-full h-20 flex  flex-col lg:flex-row justify-center lg:justify-between items-center ">
        <div className="text-[16px] font-medium lg:text-[20px]">© 2026 Damilola Foods. All rights reserved.</div>
        <div className=" text-[16px] font-medium lg:text-[20px]">Freshness in Every Bite.</div>
        </div>
        </div>
       
        
    </div>
  )
}

export default Footer