
import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { element } from './routes/Router.tsx'
import AOS from "aos"
import "aos/dist/aos.css"

function Root () {

  const [isloading, setIsloading] =useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false)
    }, 3000)
    
  },[])
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  })

  if(isloading){
    return(
     <div className="w-full h-screen flex justify-center items-center bg-green-950">
        <div className="w-100 h-90 flex justify-center items-center">
          <div
  data-aos="zoom-in"
  data-aos-duration="2000"
  data-aos-easing="ease-in-out"
 className="text-4xl font-medium text-white">
            Welcome ....
          </div>
        </div>
      </div>
    )
  }
  return <RouterProvider router={element}/>

}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
