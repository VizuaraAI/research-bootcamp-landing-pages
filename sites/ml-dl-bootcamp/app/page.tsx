"use client";

import {
  Navbar,
  Hero,
  VideoSection,
  WhySection,
  DiagramsSection,
  AudienceSection,
  CurriculumSection,
  DeliverablesSection,
  InstructorSection,
  ResearchPapersSection,

  CertificateSection,
  PricingSection,
  FAQSection,
  CTABanner,
  Footer,
} from "@vizuara/ui";
import NeuralNetViz from "@vizuara/ui/components/visualizations/NeuralNetViz";
import { bootcampConfig, showcaseConfig, certificateConfig } from "@/data/bootcamp";

export default function Home() {
  return (
    <main>
      <Navbar config={bootcampConfig.navbar} />
      <Hero config={bootcampConfig.hero} visualization={<NeuralNetViz />} />
      {bootcampConfig.video && (
        <VideoSection config={bootcampConfig.video} />
      )}

      <WhySection config={bootcampConfig.why} />
      {bootcampConfig.diagrams && (
        <DiagramsSection config={bootcampConfig.diagrams} />
      )}
      <AudienceSection config={bootcampConfig.audience} />
      <CurriculumSection config={bootcampConfig.curriculum} />
      {bootcampConfig.deliverables && (
        <DeliverablesSection config={bootcampConfig.deliverables} />
      )}
      <InstructorSection config={bootcampConfig.instructors} />
      <CertificateSection config={certificateConfig} />
      {bootcampConfig.researchPapers && (
        <ResearchPapersSection
          config={bootcampConfig.researchPapers}
          viewAllHref="https://research.vizuara.ai/publications"
          viewAllLabel="View All Publications"
        />
      )}
      <PricingSection config={bootcampConfig.pricing} />
      <FAQSection config={bootcampConfig.faq} />
      <CTABanner config={bootcampConfig.cta} />
      <Footer config={bootcampConfig.footer} />
    </main>
  );
}
