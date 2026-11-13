// import React from 'react'

const Whatapp = () => {
  return (
    <div id="order" className=" w-full h-100 flex flex-col gap-7  justify-center items-center bg-[url('whatapp.jpg')] bg-cover bg-center  text-white">
        <div className=" w-[97%] h-[90%]  flex flex-col items-center justify-center gap-10 bg-[#00000080]">
        <div className="text-center font-medium text-4xl  text-[#52be52]">Order Your Favourite Food on WhatsApp</div>
        <div className="text-[20px] lg:text-3xl font-medium lg:w-300 text-center">Freshly prepared, delicious meals made just for you. Browse our menu, choose your favourite dishes and place your order directly through WhatsApp.</div>
        <a href="http://wa.me/08061540653">
        <button className=" text-[white] hover:bg-green-900 [box-shadow:0_0_10px_green] shadow-amber-200 shadow-solid w-90 h-14 font-medium text-[20px] rounded-2xl">ORDER NOW ON WHATSAPP</button>
        </a>
        </div>
    </div>
  )
}

export default Whatapp