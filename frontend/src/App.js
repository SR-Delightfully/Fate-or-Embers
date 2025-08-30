import React, { useContext, useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./GlobalStyles.css";
import NavBar from "./NavBar";
import Header from "./Header";
import Home from "./Home";
import Forums from "./Forums";
import Games from "./Games";
import Profile from "./Profile";
import Settings from "./Settings";
import Shops from "./Shops";



const App = () => {
  // const eyeball = (event) => {
  //   let eye = document.querySelector('#eye');
  //   let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
  //   let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
  //   let radian = Math.atan2(event.pageX - x, event.pageY - y);
  //   let rotate = radian * (190 / Math.PI) * -1 + 380;
  //   eye.style.transform = `rotate(${rotate}deg)`;
  // }
  // useEffect(()=>{
  //   document.querySelector('body').addEventListener('mousemove', eyeball);
  //   return () => {
  //     document.querySelector('body').addEventListener('mousemove', eyeball)
  //   };
  // }, []);

return (
  <BrowserRouter>
      <Header />
      <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/forums" element={<Forums />} />
      <Route path="/games" element={<Games />} />
      <Route path="/shops" element={<Shops />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
