// import React from 'react'
import Hero from "../src/pages/Homepage/Hero"
import Footer from "./component/block/Footer"
import Header from "./component/block/Header"
// import Get from "./pages/Contactpage/Get"
// import Hero1 from "./pages/Contactpage/Hero1"
import About from "./pages/Homepage/About"
import Choose from "./pages/Homepage/Choose"
import Reviews from "./pages/Homepage/Reviews"
import ShowCase from "./pages/Homepage/ShowCase"
import Whatapp from "./pages/Homepage/Whatapp"

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      {/* <Hero1/> */}
      {/* <Get/> */}
      <About/>
      <ShowCase/>
       <Reviews/>
      <Choose/>
      <Whatapp/>
      <Footer/>
    </div>
  )
}

export default App