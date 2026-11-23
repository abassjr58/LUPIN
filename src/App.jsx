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


      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
