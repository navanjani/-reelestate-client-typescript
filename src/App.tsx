import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import ScheduleViewing from "./pages/ScheduleViewing";
import AboutUs from "./pages/AboutUs";
import Navigation from "./components/Navigation";
import "./App.scss";

const App: FC = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/schedule-viewing" element={<ScheduleViewing />} />
        <Route path="/about-us/:language" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
