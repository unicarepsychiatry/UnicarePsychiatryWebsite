import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./Components/Navbar";
import { AboutUs } from "./Pages/AboutUs";
import { ContactUs } from "./Pages/ContactUs";
import  AnxietyService  from "./Pages/AnxietyService";
import  BipolarDisorderService from "./Pages/BipolarDisorderService";
import  Phobiasservice from "./Pages/Phobiasservice";
import  ADHDService from "./Pages/ADHDService";
import  PTSDService from "./Pages/PTSDService";
import  OCDService from "./Pages/OCDService";
import  EarlyChildhoodTraumasService from "./Pages/EarlyChildhoodTraumasService";
import  AlcoholUseDisorder from "./Pages/AlcoholUseDisorder";
import AppointmentBooking from "./Pages/AppointmentBooking";
import SubstanceInducePsychiatric from "./Pages/SubstanceInducePsychiatric";
import OpioidUseDisorder from "./Pages/OpioidUseDisorder";
import MedicationManagement from "./Pages/MedicationManagement";
import Depression from "./Pages/Depression";
import Neurofeedbacktheraph from "./Pages/Neurofeedbacktheraph";
import Hypnotherapy from "./Pages/Hypnotherapy";
import GeriatricPopulation from "./Pages/geriatricPopulation";
import OurTeamMembers from "./Pages/OurTeamMembers";

function App() {
  return (
    <Router>
      <Navbar />
      <Helmet>
        <title>Unicare Psychiatry</title>
        <meta
          name="description"
          content="Unicare Psychiatry is medical company in US."
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
          path="contact-us"
          element={<ContactUs />}
        />
        <Route
          exact
          path="/our-team"
          element={<OurTeamMembers/>}
        />
        {/* <Route
          exact
          path="/"
          element={<Services />}
        />
        <Route
          exact
          path="/"
          element={<OurServices/>}
        /> */}
        <Route
          exact
          path="/book-an-appointment"
          element={<AppointmentBooking/>}
        />
        <Route
          exact
          path="/Depression-service"
          element={<Depression/>}
        />
        <Route
          exact
          path="/Anxiety-service"
          element={<AnxietyService/> }
        />
        <Route
          exact
          path="/Bipolar-Disorder-service"
          element={<BipolarDisorderService/>}
        />
        <Route
          exact
          path="/Phobias-service"
          element={<Phobiasservice/> }
        />
        <Route
          exact
          path="/ADHD-service"
          element={<ADHDService/>}
        />
        <Route
          exact
          path="/PTSD-service"
          element={<PTSDService/>}
        />
        <Route
          exact
          path="/OCD-service"
          element={<OCDService/>}
        />
        <Route
          exact
          path="/Early-Childhood-traumas-service"
          element={<EarlyChildhoodTraumasService/>}
        />
        <Route
          exact
          path="/Alcohol-Use-Disorder-service"
          element={<AlcoholUseDisorder/>}
        />
        <Route
          exact
          path="/Medication-Management"
          element={<MedicationManagement/>}
        />
        <Route
          exact
          path="/Opioid-Use-Disorder"
          element={<OpioidUseDisorder/>}
        />
        <Route
          exact
          path="/Substance-Induce-Psychiatric-problems"
          element={<SubstanceInducePsychiatric/>}
        />
        <Route
          exact
          path="/Neurofeedback-Therapy"
          element={<Neurofeedbacktheraph/>}
        />
        <Route
          exact
          path="/Hypnotherapy-service"
          element={<Hypnotherapy/>}
        />
        <Route
          exact
          path="/Psychiatric-services-for-geriatric-Population"
          element={<GeriatricPopulation/>}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
