import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedClients from "./components/SelectedClients";
import TheFirm from "./components/TheFirm";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SelectedClients />
        <TheFirm />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
