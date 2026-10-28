import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";

// HOME SECTIONS
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

// MAIN PAGES
import About from "./pages/About";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";

// BLOG ARTICLE PAGES
import InvestInCaregiver from "./pages/InvestInCaregiver";
import ElderHomeHealth from "./pages/ElderHomeHealth";
import CertifiedCaregiver from "./pages/CertifiedCaregiver";

// WANDERLUST DIARIES
import WanderlustDiaries from "./pages/WanderlustDiaries";
import WanderlustStory from "./pages/WanderlustStory";

// SERVICE PAGES
import ElderCare from "./pages/ElderCare";
import HomeCarePage from "./pages/HomeCarePage";
import EmergencyCare from "./pages/EmergencyCare";
import DiabetesManagement from "./pages/DiabetesManagement";
import WellnessCare from "./pages/WellnessCare";
import HealthcareManpower from "./pages/HealthcareManpower";
import HealthcareConvenience from "./pages/HealthcareConvenience";
import CareManagement from "./pages/CareManagement";

// OTHER PAGES
import SubscriptionPlans from "./pages/SubscriptionPlans";
import TravelWithCare from "./pages/TravelWithCare";

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
      <Chatbot />
    </>
  );
}

function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Chatbot />
    </>
  );
}

function NotFound() {
  return (
    <PageLayout>
      <section
        style={{
          minHeight: "55vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <h1>404 — Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>

        <Link
          to="/"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 24px",
            background: "#20B69E",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: 600,
          }}
        >
          Back to Home
        </Link>
      </section>
    </PageLayout>
  );
}

function App() {
  return (
    <BrowserRouter basename="/silvergenie-website-original">
      <ScrollToTop />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route
          path="/about"
          element={
            <PageLayout>
              <About />
            </PageLayout>
          }
        />

        {/* PRIVACY POLICY */}
        <Route
          path="/privacy-policy"
          element={
            <PageLayout>
              <PrivacyPolicy />
            </PageLayout>
          }
        />

        {/* REFUND POLICY */}
        <Route
          path="/refund-policy"
          element={
            <PageLayout>
              <RefundPolicy />
            </PageLayout>
          }
        />

        {/* BLOG */}
        <Route
          path="/blog"
          element={
            <PageLayout>
              <Blog />
            </PageLayout>
          }
        />

        {/* BLOG ARTICLES */}
        <Route
          path="/blog/invest-in-a-caregiver"
          element={
            <PageLayout>
              <InvestInCaregiver />
            </PageLayout>
          }
        />

        <Route
          path="/blog/elder-care-and-home-health-care"
          element={
            <PageLayout>
              <ElderHomeHealth />
            </PageLayout>
          }
        />

        <Route
          path="/blog/certified-caregivers-vs-domestic-maids"
          element={
            <PageLayout>
              <CertifiedCaregiver />
            </PageLayout>
          }
        />

        {/* WANDERLUST DIARIES */}
        <Route
          path="/wanderlust-diaries"
          element={
            <PageLayout>
              <WanderlustDiaries />
            </PageLayout>
          }
        />

        {/* WANDERLUST STORIES */}
        <Route
          path="/wanderlust/:slug"
          element={
            <PageLayout>
              <WanderlustStory />
            </PageLayout>
          }
        />

        {/* ELDER CARE */}
        <Route
          path="/elder-care"
          element={
            <PageLayout>
              <ElderCare />
            </PageLayout>
          }
        />

        {/* HOME CARE */}
        <Route
          path="/home-care"
          element={
            <PageLayout>
              <HomeCarePage />
            </PageLayout>
          }
        />

        {/* EMERGENCY CARE */}
        <Route
          path="/emergency-care"
          element={
            <PageLayout>
              <EmergencyCare />
            </PageLayout>
          }
        />

        {/* DIABETES MANAGEMENT */}
        <Route
          path="/diabetes-management"
          element={
            <PageLayout>
              <DiabetesManagement />
            </PageLayout>
          }
        />

        {/* WELLNESS CARE */}
        <Route
          path="/wellness-care"
          element={
            <PageLayout>
              <WellnessCare />
            </PageLayout>
          }
        />

        {/* HEALTHCARE MANPOWER */}
        <Route
          path="/healthcare-manpower"
          element={
            <PageLayout>
              <HealthcareManpower />
            </PageLayout>
          }
        />

        {/* HEALTHCARE CONVENIENCE */}
        <Route
          path="/healthcare-convenience"
          element={
            <PageLayout>
              <HealthcareConvenience />
            </PageLayout>
          }
        />

        {/* CARE MANAGEMENT */}
        <Route
          path="/care-management"
          element={
            <PageLayout>
              <CareManagement />
            </PageLayout>
          }
        />

        {/* SUBSCRIPTION PLANS */}
        <Route
          path="/subscription-plans"
          element={
            <PageLayout>
              <SubscriptionPlans />
            </PageLayout>
          }
        />

        {/* TRAVEL WITH CARE */}
        <Route
          path="/travel-with-care"
          element={
            <PageLayout>
              <TravelWithCare />
            </PageLayout>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
