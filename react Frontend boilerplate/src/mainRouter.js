import React from "react";
import{Routes,Route} from 'react-router-dom'
import About from "./core/about";
import Home from "./core/home";
import Navbar from "./core/navbar";
import SignIn from "./user/signIn";
import SignUp from "./user/signUp";
import Profile from "./user/profile";
import User from "./user/User";
import UpdateUser from "./user/profileUpdate";
import ResetPassword from "./user/ResetPassword";
import ForgetPassword from "./user/ForgetPassword";


const MainRouter=()=>{
return(<div>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/signup" element={<SignUp/>}></Route>
        <Route exact path="/signin" element={<SignIn/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/profile/:userId" element={<Profile/>}></Route>
        <Route exact path="/user/profile/:userId" element={<Profile/>}></Route>
        <Route exact path="/users" element={<User/>}></Route>
        <Route exact path="/user/:userId/edit" element={<UpdateUser/>}></Route>
        <Route exact path="/forgetpassword" element={<ForgetPassword/>}></Route>
        <Route exact path="/resetpassword/:resetToken" element={<ResetPassword/>}></Route>
    </Routes>
</div>)
};
 export default MainRouter;