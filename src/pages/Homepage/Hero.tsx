// import React from 'react'

import { useEffect, useState } from "react";

const hero = () => {
  const [isloading, setIsloading] =useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false)
    }, 3000);
  },[])

  if(isloading) {
    return(
      <div className="w-full h-screen flex justify-center items-center bg-blue-950">
        <div className="w-100 h-90 flex justify-center items-center">
          <div className="text-4xl font-medium text-white">
              Welcome ....
          </div>
        </div>
      </div>
    )
  }

  return <div  className=" w-full flex  flex-col gap-7  justify-center items-center h-screen bg-[url('bgfood2.png')] bg-cover bg-center  text-white">
    <div className=" w-full h-screen bg-[#00000073]   flex flex-col gap-7  justify-center items-center">
    <div className=" text-[14px] lg:text-2xl font-bold bg-[#2f5e2fbe] p-3 rounded-4xl">Taste the Goodness. Experience the Difference.</div>
    <div className=" text-[20px] lg:text-3xl font-medium lg:w-300 text-center">Welcome to Damilola Foods, where every meal is prepared with love, fresh ingredients and unforgettable flavours. From delicious Nigerian favourites to mouthwatering grills, there's something for everyone.</div>
    <div className=" flex flex-col gap-10 lg:flex-row-reverse">
      <a href="/#showcase">
    <button className=" text-[green]  bg-white  hover:[box-shadow:0_0_10px_white]  w-90 h-14 font-medium text-[20px] rounded-2xl">Explore Our Menu</button>
    </a>
    <a href="#order">
    <button className=" text-[white] hover:bg-green-900 [box-shadow:0_0_10px_green] shadow-amber-200 shadow-solid w-90 h-14 font-medium text-[20px] rounded-2xl">Order Now</button>
    </a>
    </div>
    </div>
  </div>;
};

export default hero;
