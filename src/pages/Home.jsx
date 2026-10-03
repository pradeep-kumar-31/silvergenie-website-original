import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

import Hero from "../sections/Hero";
import Recognition from "../sections/Recognition";
import Services from "../sections/Services";
import WhySilverGenie from "../sections/WhySilverGenie";
import MakeDifference from "../sections/MakeDifference";
import Stats from "../sections/Stats";
import Testimonials from "../sections/Testimonials";
import HomeCare from "../sections/HomeCare";
import Resources from "../sections/Resources";
import ContactSection from "../sections/ContactSection";

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

        <ContactSection />
      </main>

      <Footer />

      <Chatbot />
    </>
  );
}

export default Home;