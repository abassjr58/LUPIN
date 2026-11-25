import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NowShowingpage from "./Pages/NowShowingpage";
import ComingSoonPage from "./Pages/ComingSoonPage";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Service from "./Pages/Service";
import About from "./Pages/About";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import HelpCenter from "./Pages/HelpCenter";
import FAQs from "./Pages/FAQs";
import BookingAssistance from "./Pages/BookingAssistance";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Reportproblem from "./Pages/Reportproblem";
import TvShows from "./Pages/TvShows";

import Movies from "./Pages/Movies";
import AboutUs from "./Pages/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nowshowing" element={<NowShowingpage />} />
        <Route path="/comingsoon" element={<ComingSoonPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
       <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
         <Route path="/faqs" element={<FAQs />} />
       <Route path="/bookingassistance" element={< BookingAssistance/>} />
       <Route path="/reportproblem" element={<Reportproblem />} />
      <Route path="/tvshows" element={<TvShows />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
