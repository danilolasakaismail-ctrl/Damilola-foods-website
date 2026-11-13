// import React from 'react'
import double from "../../assets/IMG2/burger.png";
import cripsy from "../../assets/IMG2/crispy.png"
import panda from "../../assets/IMG2/foodpanda.png"
import pepper from "../../assets/IMG2/woudo.png"
import chick from '../../assets/IMG2/foodpanda2.png'
import cook from "../../assets/IMG2/mrcook.png"
import bufalo from "../../assets/IMG2/bufalo.jpg"
import fries from "../../assets/IMG2/french.png"
import stick from "../../assets/IMG2/sticks.png"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useEffect } from "react";

const ShowCase = () => {
 useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,

  });
}, []);
  return (
    <div id="showcase" className="w-full  pt-3 pb-4 lg:pt-20 lg:pb-20 min-h-screen flex  gap-8 justify-center items-center bg-green-900">
        <div className=" w-[90%] h-[90%] flex flex-col items-center justify-center gap-6">
             <div className="text-center font-medium text-4xl  text-[white]">Our Menu</div>
            <div className=" flex lg:flex-wrap lg:flex-row flex-col items-center justify-center gap-17">


            <div data-aos="fade-right"  data-aos-easing="ease-in" className="   w-80 h-90 rounded-2xl text-white [box-shadow:0_0_10px_10px_white]  flex flex-col gap-4 justify-start items-center">
            <img src={cripsy} className=" w-80 rounded-t-2xl h-56" alt="" />
            <div>
            <div className=" text-[22px] font-medium ">Crispy French Fries</div>
            <div className="">Golden, crispy and delicious.</div>
            <div className="text-3xl font-medium"><div>€4.00/<span className="text-[#ffffffb7] text-2xl"> ₦6,021.60</span></div>
            </div>
            </div>
            </div>
            
              <div data-aos="fade-right"  data-aos-delay="500" data-aos-easing="ease-in" className="  w-80 h-90 rounded-2xl text-white [box-shadow:0_0_10px_10px_white]  flex flex-col gap-4 justify-start items-center">
            <img src={double} className=" w-80 rounded-t-2xl h-56" alt="" />
            <div>
            <div className=" text-[22px] font-medium ">Double Cheese Burger</div>
            <div className="">Beef, cheese, lettuce and special sauce.</div>
            <div className="text-3xl font-medium"><div>€9.50/<span className="text-[#ffffffb7] text-2xl"> ₦14,301.30</span></div></div>
            </div>
            </div>

            <div data-aos="fade-right"  data-aos-delay="1000" data-aos-easing="ease-in" className="  w-80 h-90 rounded-2xl text-white [box-shadow:0_0_10px_10px_white]  flex flex-col gap-4 justify-start items-center">
            <img src={panda} className=" w-80 rounded-t-2xl h-56" alt="" />
            <div>
            <div className=" text-[22px] font-medium ">Chicken Burger</div>
            <div className="">Crispy chicken with creamy sauce.</div>
            <div className="text-3xl font-medium "><div>€7.50/<span className="text-[#ffffffb7] text-2xl"> ₦11,326.85</span></div></div>
            </div>
            </div>

            <div data-aos="slide-up" data-aos-easing="ease-in" className="  w-80 h-90 rounded-2xl text-white [box-shadow:0_0_10px_10px_white]  flex flex-col gap-4 justify-start items-center">
            <img src={pepper} className=" w-80 rounded-t-2xl h-56" alt="" />
            <div>
            <div className=" text-[22px] font-medium ">Pepperoni Pizza</div>
            <div className="">Pepperoni, mozzarella and tomato sauce</div>
            <div className="text-3xl font-medium "><div>€11.00/<span className="text-[#ffffffb7] text-2xl"> ₦16,512.43</span></div></div>
            </div>
            </div>

              <div data-aos="slide-up" data-aos-easing="ease-in" className="  w-80 h-90 rounded-2xl text-white [box-shadow:0_0_10px_10px_white]  flex flex-col gap-4 justify-start items-center">
            <img src={chick} className=" w-80 rounded-t-2xl h-56" alt="" />
            <div>
            <div className=" text-[22px] font-medium ">Chicken Wings</div>
            <div className="">Juicy wings with spicy sauce.</div>
            <div className="text-3xl font-medium "><div>€8.00/<span className="text-[#ffffffb7] text-2xl"> ₦12,029.36</span></div></div>
            </div>
            </div>

              <div data-aos="slide-up" data-aos-easing="ease-in" className="  w-80 h-90 rounded-2xl text-white [box-shadow:0_0_10px_10px_white]  flex flex-col gap-4 justify-start items-center">
            <img src={cook} className=" w-80 rounded-t-2xl h-56" alt="" />
            <div>
            <div className=" text-[22px] font-medium ">Chicken Wings</div>
            <div className="">Juicy wings with spicy sauce.</div>
            <div className="text-3xl font-medium "><div>€8.00/<span className="text-[#ffffffb7] text-2xl"> ₦12,029.36</span></div></div>
            </div>
            </div>

               <div data-aos="flip-left" data-aos-easing="ease-in" className="  w-80 h-90 rounded-2xl text-white [box-shadow:0_0_10px_10px_white]  flex flex-col gap-4 justify-start items-center">
            <img src={bufalo} className=" w-80 rounded-t-2xl h-56" alt="" />
            <div>
            <div className=" text-[22px] font-medium ">Buffalo Wings</div>
            <div className="">Spicy wings with special sauce.</div>
            <div className="text-3xl font-medium "><div>€8.00/<span className="text-[#ffffffb7] text-2xl"> ₦12,029.36</span></div></div>
            </div>
            </div>

                   <div data-aos="flip-left" data-aos-easing="ease-in" className="  w-80 h-90 rounded-2xl text-white [box-shadow:0_0_10px_10px_white]  flex flex-col gap-4 justify-start items-center">
            <img src={fries} className=" w-80 rounded-t-2xl h-56" alt="" />
            <div>
            <div className=" text-[22px] font-medium ">French Fries</div>
            {/* <div className="">Spicy wings with special sauce.</div> */}
            <div className="text-3xl font-medium "><div>€3.50/<span className="text-[#ffffffb7] text-2xl"> ₦5,243.85 </span></div></div>
            </div>
            </div>

                       <div data-aos="flip-left" data-aos-easing="ease-in" className="  w-80 h-90 rounded-2xl text-white [box-shadow:0_0_10px_10px_white]  flex flex-col gap-4 justify-start items-center">
            <img src={stick} className=" w-80 rounded-t-2xl h-56" alt="" />
            <div>
            <div className=" text-[22px] font-medium ">Mozzarella Sticks</div>
            {/* <div className="">Spicy wings with special sauce.</div> */}
            <div className="text-3xl font-medium "><div>€5.00/<span className="text-[#ffffffb7] text-2xl"> ₦7,527.00 </span></div></div>
            </div>
            </div>


            
            </div>
        </div>
    </div>
  )
}

export default ShowCase