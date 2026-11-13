// import React from 'react'

import { BsStarFill } from "react-icons/bs"
import male from "../../assets/IMG2/firstgirl.png"
import female from "../../assets/IMG2/christina-wocintechchat-com-m-SJvDxw0azqw-unsplash.jpg"
import female2 from "../../assets/IMG2/pexels-bakarii_photography-2159420192-36322504.jpg"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Reviews = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  })
  return (
    <div id="review" className="w-full pt-3 pb-4 lg:p-0  min-h-screen flex justify-center items-center">
        <div className=" w-[90%] h-[90%]  flex flex-col items-center justify-center gap-10">
          <div className="text-center font-medium text-4xl  text-[#2e4b2e]">Customer reviews</div>
          <div className=" flex lg:flex-row flex-col items-center justify-center gap-17">
    <div data-aos="fade-right" className=" w-80 h-110 [box-shadow:0_0_10px_10px_green] rounded-2xl flex flex-col gap-4 justify-center items-center">
    <div className=" w-27 h-27 flex justify-center items-center rounded-full bg-amber ">
    <img src={female} className="rounded-full w-27 h-27" alt="" />
    </div>
    <div>
      -- Sarah A.
    </div>
  
    <div className=" flex items-center gap-2 text-yellow-500">
   <BsStarFill/>
   <BsStarFill/>
   <BsStarFill/>
   <BsStarFill/>
   <BsStarFill/>
    </div>
      <div className=" w-60 text-[20px] text-black text-medium text-center">
       The jollof rice was absolutely delicious! The taste was amazing, and the portion was generous. 
    </div>
    </div>
     <div data-aos="fade-right" data-aos-delay="1000" className=" w-80 h-110 [box-shadow:0_0_10px_10px_green] rounded-2xl flex flex-col gap-4 justify-center items-center">
    <div className=" w-27 h-27 rounded-full bg-amber-700 ">
    <img src={male} className="rounded-full" alt="" />
    </div>
    <div>
      -- David O.
    </div>
  
    <div  className=" flex items-center gap-2 text-yellow-500">
   <BsStarFill/>
   <BsStarFill/>
   <BsStarFill/>
   <BsStarFill/>
   <BsStarFill/>
    </div>
      <div className=" w-60 text-[20px] text-black text-medium text-center">
      I love their customer service. The food arrived fresh and was still hot. Definitely ordering again!
    </div>
    </div>
     <div data-aos="fade-right" data-aos-delay="2000" className=" w-80 h-110 [box-shadow:0_0_10px_10px_green] rounded-2xl flex flex-col gap-4 justify-center items-center">
    <div className=" w-27 h-27 rounded-full bg-amber-700 ">
    <img src={female2} className="rounded-full w-27 h-27" alt="" />
    </div>
    <div>
      -- Garce M.
    </div>
  
    <div className=" flex items-center gap-2 text-yellow-500">
   <BsStarFill/>
   <BsStarFill/>
   <BsStarFill/>
   <BsStarFill/>
   <BsStarFill/>
    </div>
      <div className=" w-60 text-[20px] text-black text-medium text-center">
       Their grilled chicken is one of the best i've tasted, Highly recommended!
    </div>
    </div>
    </div>

        </div>
    </div>
  )
}

export default Reviews