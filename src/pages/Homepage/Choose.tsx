// import React from 'react'

import { useEffect } from "react"
import { GrStatusGood } from "react-icons/gr"
import { MdPriceCheck } from "react-icons/md"
import { RiCustomerService2Line } from "react-icons/ri"
import { SiNicehash } from "react-icons/si"
import AOS from "aos"
import "aos/dist/aos.css"

// import { SiFresh } from "react-icons/si"

const Choose = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        })
    })
  return (
    <div className=" w-full  pt-3 pb-4 lg:p-0 min-h-100 flex  gap-8 justify-center items-center bg-green-900">
        <div className=" w-[90%] h-[90%] flex flex-col items-center justify-center gap-6">
        <div className=" text-center font-medium text-4xl text-white ">Why customers should choose us</div>
        <div className=" flex lg:flex-row flex-col items-center justify-center gap-6">
        <div data-aos="zoom-in" className=" bg-white text-black w-80 rounded-2xl flex flex-col justify-center items-center h-40">
            <GrStatusGood className=" text-3xl text-[green]" />
            <h2 className=" text-3xl font-bold">Fresh Ingredients</h2>
            <p className=" text-center">We use carefully selected ingredients for delicious meals</p>
        </div>
         <div data-aos="zoom-in" data-aos-delay="1000" className=" bg-white text-black w-80 rounded-2xl flex flex-col justify-center items-center h-40">
            <SiNicehash className=" text-3xl text-[green]" />
            <h2 className=" text-3xl font-bold">Amazing Taste</h2>
            <p className=" text-center">Every dish is prepared with care and attention.</p>
        </div>
         <div data-aos="zoom-in" data-aos-delay="2000" className=" bg-white text-black w-80 rounded-2xl flex flex-col justify-center items-center h-40">
            <RiCustomerService2Line className=" text-3xl text-[green]" />
            <h2 className=" text-3xl font-bold">Fast Service</h2>
            <p className=" text-center">We value your time and make ordering easy</p>
        </div>
         <div data-aos="zoom-in" data-aos-delay="3000" className=" bg-white text-black w-80 rounded-2xl flex flex-col justify-center items-center h-40">
            <MdPriceCheck className=" text-3xl text-[green]" />
            <h2 className=" text-3xl font-bold">Affordable Prices</h2>
            <p className=" text-center"> Enjoy satisfying meals at reasonable prices</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Choose