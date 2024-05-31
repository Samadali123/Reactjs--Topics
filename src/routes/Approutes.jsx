
import React from 'react'
import { Outlet, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../components/home"
import Profile from "../components/profile"
import Contactus from "../components/contact"
import ServicePage from '../components/services';



const routes = () => {
  return (

         <Routes>
         <Route path="/" element={<Home/>} ></Route>
         <Route path="/profile/:username" element={<Profile/>} ></Route>
         <Route path="/contact" element={<Contactus/>} ></Route>
         <Route path="/service" element={<ServicePage />}>


          {/* <Route index element={<h1>Services</h1>} /> */}

          <Route path="/service/web-development" element={<h1>Web Development Service</h1>} />
          <Route path="/service/graphic-design" element={<h1>Graphic Design Service</h1>} />
          <Route path="/service/seo-service" element={<h1>SEO Service</h1>} />
          

        </Route>




        </Routes>
  )
}

export default routes