import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/practice areas/Hero";
import CorePractice from "../components/practice areas/CorePractice";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Practice Areas | Habeeb Salawu Chambers",
  description:
    "A full-service practice before the courts, at the negotiating table, and in the advisory work that keeps disputes from arising.",
};

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePath="/practice-areas" />
      <main className="flex-1">
        <Hero />
        <CorePractice />
      </main>
      <Footer />
    </div>
  );
}
