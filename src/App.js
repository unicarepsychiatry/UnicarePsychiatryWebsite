import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./Components/Navbar";
import { AboutUs } from "./Pages/AboutUs";
import { ContactUs } from "./Pages/ContactUs";
import { Services } from "./Pages/Services";
import { OurServices } from "./Components/OurServices";

function App() {
  return (
    <Router>
      <Navbar />
      <Helmet>
        <title>PharmaCare billing Solution</title>
        <meta
          name="description"
          content="PharmaCare billing Solution is medical billing company in US."
        />
      </Helmet>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          exact
          path="/about-us"
          element={<AboutUs />}
        />
        <Route
          exact
          path="/contact-us"
          element={<ContactUs />}
        />
        <Route
          exact
          path="/"
          element={<Services />}
        />
        <Route
          exact
          path="/"
          element={<OurServices/>}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
