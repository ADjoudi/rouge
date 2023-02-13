import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./page/landing/landing";
import SignUp from "./page/signup/signup";
import Login from "./page/login/login";
import Home from "./page/home/home";
import Profile from "./page/profile/profile";
import Post from "./page/post/post";

import React from "react";

function hideMenu(e) {
  const menu = document.getElementById("menu");
  if (
    e.target.id !== "menu" &&
    e.target.id !== "profileImage" &&
    menu.style.visibility === "visible"
  ) {
    menu.style.visibility = "hidden";
  }
}

const RouteSwitch = () => {
  let homePage;
  if (true) {
    homePage = <Home hideMenu={hideMenu} />;
  } else {
    homePage = <Landing />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={homePage} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile hideMenu={hideMenu} />} />
        <Route path="/post" element={<Post hideMenu={hideMenu} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
