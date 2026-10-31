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
import TermsConditions from "./pages/TermsConditions";

// BLOG ARTICLE PAGES
import InvestInCaregiver from "./pages/InvestInCaregiver";
import ElderHomeHealth from "./pages/ElderHomeHealth";
import CertifiedCaregiver from "./pages/CertifiedCaregiver";

// WANDERLUST DIARIES
import WanderlustDiaries from "./pages/WanderlustDiaries";
import TripuraShaktipeeth from "./pages/TripuraShaktipeeth";
import KolkataFaithHistory from "./pages/KolkataFaithHistory";
import JagadhatriPujo from "./pages/JagadhatriPujo";
import DurgaPujoWithCare from "./pages/DurgaPujoWithCare";
import Mahakumbh from "./pages/Mahakumbh";
import Mizoram from "./pages/MizoramJourney";
import Assam from "./pages/AssamTravelDiary";
import HornbillFestival from "./pages/HornbillFestival";
import NeoraValleySilkRoute from "./pages/SilkRoute";
import Meghalaya from "./pages/Meghalaya";
import SharedAdventureIndia from "./pages/SharedAdventureIndia";
import FindingMyRhythmSundarbans from "./pages/FindingMyRhythmSundarbans";
import WhiteRannMoon from "./pages/WhiteRannMoon";
import TajMahal from "./pages/TajMahal";
import Kerala from "./pages/MyKeralaDiary";
import ItalySwitzerland from "./pages/ItalySwitzerland";
import Bhutan from "./pages/BhutanComfortOfCare";
import Japan from "./pages/JapanBlossoms";
import Egypt from "./pages/EgyptStories";
import VietnamCambodia from "./pages/VietnamCambodia";

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
      <section className="not-found-page">
        <h1>404 — Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="not-found-page__link">
          Back to Home
        </Link>
      </section>
    </PageLayout>
  );
}

/*
 * Har story ke multiple URLs yahan point kar sakte hain.
 * Isse purane short URLs aur WordPress ke original article slugs dono work karte hain.
 */
const wanderlustStoryRoutes = [
  {
    Component: TripuraShaktipeeth,
    paths: ["tripura-shaktipeeth", "wanderlust/tripura-shaktipeeth"],
  },
  {
    Component: KolkataFaithHistory,
    paths: [
      "kolkata-faith-history",
      "wanderlust/kolkata-faith-history",
      "a-journey-through-faith-history-and-kolkatas-essence",
    ],
  },
  {
    Component: JagadhatriPujo,
    paths: [
      "jagadhatri-pujo",
      "wanderlust/jagadhatri-pujo",
      "from-spirit-to-celebration-our-jagadhatri-pujo-experience",
    ],
  },
  {
    Component: DurgaPujoWithCare,
    paths: [
      "durga-pujo-with-care",
      "wanderlust/durga-pujo-with-care",
      "from-devotion-to-delight-our-durgapujowithcare-experience",
    ],
  },
  {
    Component: Mahakumbh,
    paths: [
      "mahakumbh",
      "wanderlust/mahakumbh",
      "through-the-crowds-experiencing-the-mahakumbh",
    ],
  },
  {
    Component: Mizoram,
    paths: [
      "mizoram",
      "wanderlust/mizoram",
      "mizoram-through-my-eyes-a-journey-i-will-remember",
    ],
  },
  {
    Component: Assam,
    paths: [
      "assam",
      "wanderlust/assam",
      "a-doctors-travel-diary-discovering-the-quiet-grace-of-assam",
    ],
  },
  {
    Component: HornbillFestival,
    paths: [
      "hornbill-festival",
      "wanderlust/hornbill-festival",
      "hornbill-festival-diaries-colours-of-nagaland",
    ],
  },
  {
    Component: NeoraValleySilkRoute,
    paths: [
      "neora-valley-silk-route",
      "wanderlust/neora-valley-silk-route",
      "trip-to-neora-valley-and-east-sikkim-via-the-silk-route",
    ],
  },
  {
    Component: Meghalaya,
    paths: [
      "meghalaya",
      "wanderlust/meghalaya",
      "meghalaya-the-abode-of-clouds",
    ],
  },
  {
    Component: SharedAdventureIndia,
    paths: [
      "shared-adventure-india",
      "wanderlust/shared-adventure-india",
      "a-shared-adventure-slow-exploration-and-friendship-in-india",
    ],
  },
  {
    Component: FindingMyRhythmSundarbans,
    paths: [
      "sundarbans",
      "wanderlust/sundarbans",
      "finding-my-rhythm-in-the-sundarbans",
    ],
  },
  {
    Component: WhiteRannMoon,
    paths: [
      "white-rann-moon",
      "wanderlust/white-rann-moon",
      "white-rann-senior-travel-experience-silvergenie",
    ],
  },
  {
    Component: TajMahal,
    paths: [
      "taj-mahal",
      "wanderlust/taj-mahal",
      "no-wonder-its-a-wonder-my-solo-travel-story-at-the-taj-mahal",
    ],
  },
  {
    Component: Kerala,
    paths: ["kerala", "wanderlust/kerala"],
  },
  {
    Component: ItalySwitzerland,
    paths: ["italy-switzerland", "wanderlust/italy-switzerland"],
  },
  {
    Component: Bhutan,
    paths: ["bhutan", "wanderlust/bhutan"],
  },
  {
    Component: Japan,
    paths: ["japan", "wanderlust/japan"],
  },
  {
    Component: Egypt,
    paths: ["egypt", "wanderlust/egypt"],
  },
  {
    Component: VietnamCambodia,
    paths: ["vietnam-cambodia", "wanderlust/vietnam-cambodia"],
  },
];

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

        {/* POLICIES */}
        <Route
          path="/privacy-policy"
          element={
            <PageLayout>
              <PrivacyPolicy />
            </PageLayout>
          }
        />

        <Route
          path="/refund-policy"
          element={
            <PageLayout>
              <RefundPolicy />
            </PageLayout>
          }
        />

        <Route
          path="/terms-conditions"
          element={
            <PageLayout>
              <TermsConditions />
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

        {wanderlustStoryRoutes.flatMap(({ paths, Component }) =>
          paths.map((path) => (
            <Route
              key={path}
              path={`/${path}`}
              element={
                <PageLayout>
                  <Component />
                </PageLayout>
              }
            />
          )),
        )}

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
