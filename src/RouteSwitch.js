import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./page/landing/landing";
import React from "react";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
