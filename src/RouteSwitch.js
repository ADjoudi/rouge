import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./page/landing/landing";
import SignUp from "./page/signup/signup";
import Login from "./page/login/login";
import Home from "./page/home/home";
import React from "react";

const RouteSwitch = () => {
  let homePage;
  if (true) {
    homePage = <Home />;
  } else {
    homePage = <Landing />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={homePage} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
