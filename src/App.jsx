import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

import Hero from "./sections/Hero";
import Recognition from "./sections/Recognition";
import Services from "./sections/Services";
import WhySilverGenie from "./sections/WhySilverGenie";
import MakeDifference from "./sections/MakeDifference";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";
import HomeCare from "./sections/HomeCare";
import Resources from "./sections/Resources";
import ContactSection from "./sections/ContactSection";
import FAQ from "./sections/FAQ";

import About from "./pages/About";
import HealthcareConvenience from "./pages/HealthcareConvenience";
import CareManagement from "./pages/CareManagement";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import TravelWithCare from "./pages/TravelWithCare";


/* =========================================================
   HOME PAGE
========================================================= */

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Recognition />

        <Services />

        <WhySilverGenie />

        <MakeDifference />

        <Stats />

        <Testimonials />

        <HomeCare />

        <Resources />

        <FAQ />

        <ContactSection />
      </main>

      <Footer />

      {/* SilverGenie Chatbot */}
      <Chatbot />
    </>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />


        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />


        {/* HEALTHCARE CONVENIENCE */}
        <Route
          path="/healthcare-convenience"
          element={<HealthcareConvenience />}
        />


        {/* CARE MANAGEMENT */}
        <Route
          path="/care-management"
          element={<CareManagement />}
        />


        {/* SUBSCRIPTION PLANS */}
        <Route
          path="/subscription-plans"
          element={<SubscriptionPlans />}
        />


        {/* TRAVEL WITH CARE */}
        <Route
          path="/travel-with-care"
          element={<TravelWithCare />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;