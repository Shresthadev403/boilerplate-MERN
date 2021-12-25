import React from "react";
import{Routes,Route} from 'react-router-dom'
import About from "./core/about";
import Home from "./core/home";
import Navbar from "./core/navbar";
import SignIn from "./user/signIn";
import SignUp from "./user/signUp";
import SignOut from "./user/signOut";


const MainRouter=()=>{
return(<div>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/signup" element={<SignUp/>}></Route>
        <Route exact path="/signin" element={<SignIn/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
    </Routes>
</div>)
};
 export default MainRouter;