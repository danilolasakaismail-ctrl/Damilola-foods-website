// import React from 'react'

import food from "../../assets/IMG/bgfood.png"

const About = () => {
  return (
    <div id="about" className=" w-full h-170 lg:min-h-100 flex items-center justify-center  bg-white">
        <div className=" w-[90%] h-[90%] flex  flex-col  lg:flex-row items-center justify-center  gap-4 lg:gap-6">
        <div className=" lg:w-200  "><img src={food} className=" w-140 lg:w-180 rounded-3xl lg:h-100" alt="" /></div>
        <div className=" lg:w-230 text-center lg:text-left flex flex-col items-left gap-3 lg:gap-10">
            <div className=" text-[#2e4b2e] font-medium text-4xl">Our Story</div>
            <div className=" text-[16px]">At Damilola Foods, we believe great food brings people together. We started with one simple mission: to serve delicious, freshly prepared meals that make every moment special.<br/>

Our kitchen combines quality ingredients, creativity and a passion for cooking to give every customer a wonderful dining experience.
<br/>
Whether you're stopping by for lunch, ordering dinner or celebrating with friends, we're always happy to serve you.
</div>
        </div>
        </div>
    </div>
  )
}

export default About