import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/contact/Hero";
import EnquirySection from "../components/contact/EnquirySection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact | Habeeb Salawu Chambers",
  description:
    "Representation, advice on a transaction or property matter, assistance with recovery, or institutional support — contact our office to discuss your requirements.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePath="/contact" />
      <main className="flex-1">
        <Hero />
        <EnquirySection />
      </main>
      <Footer />
    </div>
  );
}
