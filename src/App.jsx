import { BrowserRouter, Routes, Route } from "react-router-dom";

// =========================================================
// COMPONENTS
// =========================================================
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";

// =========================================================
// HOME SECTIONS
// =========================================================
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

// =========================================================
// MAIN PAGES
// =========================================================
import About from "./pages/About";
import Blog from "./pages/Blog";

// =========================================================
// BLOG ARTICLE PAGES
// =========================================================
import InvestInCaregiver from "./pages/InvestInCaregiver";
import ElderHomeHealth from "./pages/ElderHomeHealth";
import CertifiedCaregiver from "./pages/CertifiedCaregiver";

// =========================================================
// WANDERLUST DIARIES
// =========================================================
import WanderlustDiaries from "./pages/WanderlustDiaries";

// =========================================================
// SERVICE PAGES
// =========================================================
import ElderCare from "./pages/ElderCare";
import HomeCarePage from "./pages/HomeCarePage";
import EmergencyCare from "./pages/EmergencyCare";
import DiabetesManagement from "./pages/DiabetesManagement";
import WellnessCare from "./pages/WellnessCare";
import HealthcareManpower from "./pages/HealthcareManpower";
import HealthcareConvenience from "./pages/HealthcareConvenience";
import CareManagement from "./pages/CareManagement";

// =========================================================
// OTHER PAGES
// =========================================================
import SubscriptionPlans from "./pages/SubscriptionPlans";
import TravelWithCare from "./pages/TravelWithCare";

// =========================================================
// HOME PAGE
// =========================================================

function Home() {
  return (
    <>
      <Navbar />

      <main>

        {/* HERO */}
        <Hero />

        {/* RECOGNITION */}
        <Recognition />

        {/* SERVICES */}
        <Services />

        {/* WHY SILVERGENIE */}
        <WhySilverGenie />

        {/* MAKE A DIFFERENCE */}
        <MakeDifference />

        {/* STATS */}
        <Stats />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* HOME CARE */}
        <HomeCare />

        {/* RESOURCES */}
        <Resources />

        {/* FAQ */}
        <FAQ />

        {/* CONTACT */}
        <ContactSection />

      </main>

      <Footer />

      <Chatbot />
    </>
  );
}

// =========================================================
// APP
// =========================================================

function App() {
  return (
    <BrowserRouter basename="/silvergenie-website-original">

      {/* Scroll to top whenever route changes */}
      <ScrollToTop />

      <Routes>

        {/* =================================================
            HOME
        ================================================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* =================================================
            ABOUT
        ================================================= */}

        <Route
          path="/about"
          element={<About />}
        />


        {/* =================================================
            BLOG / SENIOR CARE DIARIES
        ================================================= */}

        <Route
          path="/blog"
          element={<Blog />}
        />


        {/* =================================================
            BLOG ARTICLE 1
            INVEST IN A CAREGIVER
        ================================================= */}

        <Route
          path="/blog/invest-in-a-caregiver"
          element={<InvestInCaregiver />}
        />


        {/* =================================================
            BLOG ARTICLE 2
            ELDER CARE & HOME HEALTH CARE
        ================================================= */}

        <Route
          path="/blog/elder-care-and-home-health-care"
          element={<ElderHomeHealth />}
        />


        {/* =================================================
            BLOG ARTICLE 3
            CERTIFIED CAREGIVERS VS DOMESTIC MAIDS
        ================================================= */}

        <Route
          path="/blog/certified-caregivers-vs-domestic-maids"
          element={<CertifiedCaregiver />}
        />


        {/* =================================================
            WANDERLUST DIARIES
        ================================================= */}

        <Route
          path="/wanderlust-diaries"
          element={<WanderlustDiaries />}
        />


        {/* =================================================
            ELDER CARE
        ================================================= */}

        <Route
          path="/elder-care"
          element={<ElderCare />}
        />


        {/* =================================================
            HOME CARE
        ================================================= */}

        <Route
          path="/home-care"
          element={<HomeCarePage />}
        />


        {/* =================================================
            EMERGENCY CARE
        ================================================= */}

        <Route
          path="/emergency-care"
          element={<EmergencyCare />}
        />


        {/* =================================================
            NCD / DIABETES MANAGEMENT
        ================================================= */}

        <Route
          path="/diabetes-management"
          element={<DiabetesManagement />}
        />


        {/* =================================================
            WELLNESS CARE
        ================================================= */}

        <Route
          path="/wellness-care"
          element={<WellnessCare />}
        />


        {/* =================================================
            HEALTHCARE MANPOWER
        ================================================= */}

        <Route
          path="/healthcare-manpower"
          element={<HealthcareManpower />}
        />


        {/* =================================================
            HEALTHCARE CONVENIENCE
        ================================================= */}

        <Route
          path="/healthcare-convenience"
          element={<HealthcareConvenience />}
        />


        {/* =================================================
            CARE MANAGEMENT
        ================================================= */}

        <Route
          path="/care-management"
          element={<CareManagement />}
        />


        {/* =================================================
            CARE PLANS
        ================================================= */}

        <Route
          path="/subscription-plans"
          element={<SubscriptionPlans />}
        />


        {/* =================================================
            TRAVEL WITH CARE
        ================================================= */}

        <Route
          path="/travel-with-care"
          element={<TravelWithCare />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;