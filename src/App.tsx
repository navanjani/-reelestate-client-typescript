import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import ScheduleViewing from "./pages/ScheduleViewing";
import AboutUs from "./pages/AboutUs";
import Navigation from "./components/Navigation";
import "./App.scss";
import {
  HOME_PAGE_ROUTE,
  LISTINGS_ROUTE,
  SCHEDULE_VIEWING_ROUTE,
  ABOUT_US_ROUTE,
} from "./config/routes";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={HOME_PAGE_ROUTE} element={<Home />} />
        <Route path={LISTINGS_ROUTE} element={<Listings />} />
        <Route path={SCHEDULE_VIEWING_ROUTE} element={<ScheduleViewing />} />
        <Route path={`${ABOUT_US_ROUTE}/:language`} element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
