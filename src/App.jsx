import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import CostCallout from "./components/CostCallout";
import SolutionSection from "./components/SolutionSection";
import ModulesSection from "./components/ModulesSection";
import ComparisonSection from "./components/ComparisonSection";
import DayInLifeSection from "./components/DayInLifeSection";
import VsSection from "./components/VsSection";
import WhySection from "./components/WhySection";
import RoadmapSection from "./components/RoadmapSection";
import CtaSection from "./components/CtaSection";
import NotesSection from "./components/NotesSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <CostCallout />
      <SolutionSection />
      <ModulesSection />
      <ComparisonSection />
      <DayInLifeSection />
      <VsSection />
      <WhySection />
      <RoadmapSection />
      <CtaSection />
      <NotesSection />
    </>
  );
}

export default App;
