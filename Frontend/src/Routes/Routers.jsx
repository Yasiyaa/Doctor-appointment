
import React from "react";
import Home from "../Pages/Home"
import Services from "../Pages/Services"
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"
import Contact from "../Pages/Contact"
import Doctor from "../Pages/Doctors/Doctors"
import DoctorDetails from "../Pages/Doctors/DoctorDetails"


import {Routes,Route} from 'react-router-dom'

const Router = () =>{

    return (
        <Route>
            <Route path = "/"  element={<Home/>}/>
            <Route path = "/home"  element={<Home/>}/>
            <Route path = "/doctors"  element={<Doctor/>}/>
            <Route path = "/doctors/:id"  element={<DoctorDetails/>}/>
            <Route path = "/login"  element={<Login/>}/>
            <Route path = "/register"  element={<Signup/>}/>
            <Route path = "/contact"  element={<Contact/>}/>
            <Route path = "/service"  element={<Services/>}/>
         
        </Route>
    )
};

export default Router;