// import React from 'react'

import { Outlet } from "react-router-dom"
import Footer from "../component/block/Footer"
import Header from "../component/block/Header"

const HomePageLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomePageLayout