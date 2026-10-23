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
import RefundPolicy from "./pages/RefundPolicy";

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
import WanderlustStory from "./pages/WanderlustStory";

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
// ContactSection is rendered ONLY on the Home page.
// =========================================================
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

// =========================================================
// SHARED PAGE LAYOUT
// Navbar, Footer and Chatbot are shared by inner pages.
// ContactSection is NOT included here.
// =========================================================
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

// =========================================================
// 404 PAGE
// =========================================================
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

        <p>
          Sorry, the page you are looking for does not exist.
        </p>

        <a
          href="/"
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
        </a>
      </section>
    </PageLayout>
  );
}

// =========================================================
// APP ROUTES
// =========================================================
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* =========================================
            HOME PAGE
            URL: /
        ========================================= */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* =========================================
            ABOUT
            URL: /about
        ========================================= */}
        <Route
          path="/about"
          element={
            <PageLayout>
              <About />
            </PageLayout>
          }
        />

        {/* =========================================
            REFUND POLICY
            URL: /refund-policy
        ========================================= */}
        <Route
          path="/refund-policy"
          element={
            <PageLayout>
              <RefundPolicy />
            </PageLayout>
          }
        />

        {/* =========================================
            BLOG
            URL: /blog
        ========================================= */}
        <Route
          path="/blog"
          element={
            <PageLayout>
              <Blog />
            </PageLayout>
          }
        />

        {/* =========================================
            BLOG ARTICLES
        ========================================= */}
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

        {/* =========================================
            WANDERLUST DIARIES
            URL: /wanderlust-diaries
        ========================================= */}
        <Route
          path="/wanderlust-diaries"
          element={
            <PageLayout>
              <WanderlustDiaries />
            </PageLayout>
          }
        />

        {/* =========================================
            WANDERLUST STORIES
            Examples:
            /wanderlust/bhutan
            /wanderlust/assam
            /wanderlust/meghalaya
        ========================================= */}
        <Route
          path="/wanderlust/:slug"
          element={
            <PageLayout>
              <WanderlustStory />
            </PageLayout>
          }
        />

        {/* =========================================
            ELDER CARE
            URL: /elder-care
        ========================================= */}
        <Route
          path="/elder-care"
          element={
            <PageLayout>
              <ElderCare />
            </PageLayout>
          }
        />

        {/* =========================================
            HOME CARE
            URL: /home-care
        ========================================= */}
        <Route
          path="/home-care"
          element={
            <PageLayout>
              <HomeCarePage />
            </PageLayout>
          }
        />

        {/* =========================================
            EMERGENCY CARE
            URL: /emergency-care
        ========================================= */}
        <Route
          path="/emergency-care"
          element={
            <PageLayout>
              <EmergencyCare />
            </PageLayout>
          }
        />

        {/* =========================================
            DIABETES MANAGEMENT
            URL: /diabetes-management
        ========================================= */}
        <Route
          path="/diabetes-management"
          element={
            <PageLayout>
              <DiabetesManagement />
            </PageLayout>
          }
        />

        {/* =========================================
            WELLNESS CARE
            URL: /wellness-care
        ========================================= */}
        <Route
          path="/wellness-care"
          element={
            <PageLayout>
              <WellnessCare />
            </PageLayout>
          }
        />

        {/* =========================================
            HEALTHCARE MANPOWER
            URL: /healthcare-manpower
        ========================================= */}
        <Route
          path="/healthcare-manpower"
          element={
            <PageLayout>
              <HealthcareManpower />
            </PageLayout>
          }
        />

        {/* =========================================
            HEALTHCARE CONVENIENCE
            URL: /healthcare-convenience
        ========================================= */}
        <Route
          path="/healthcare-convenience"
          element={
            <PageLayout>
              <HealthcareConvenience />
            </PageLayout>
          }
        />

        {/* =========================================
            CARE MANAGEMENT
            URL: /care-management
        ========================================= */}
        <Route
          path="/care-management"
          element={
            <PageLayout>
              <CareManagement />
            </PageLayout>
          }
        />

        {/* =========================================
            SUBSCRIPTION PLANS
            URL: /subscription-plans
        ========================================= */}
        <Route
          path="/subscription-plans"
          element={
            <PageLayout>
              <SubscriptionPlans />
            </PageLayout>
          }
        />

        {/* =========================================
            TRAVEL WITH CARE
            URL: /travel-with-care

            TravelWithCare is rendered only here.
            ContactSection is not added to this page.
        ========================================= */}
        <Route
          path="/travel-with-care"
          element={
            <PageLayout>
              <TravelWithCare />
            </PageLayout>
          }
        />

        {/* =========================================
            404 — UNKNOWN ROUTES
        ========================================= */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;