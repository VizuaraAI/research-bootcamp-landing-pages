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
  ShowcaseSection,
  CertificateSection,
  TestimonialsSection,
  PricingSection,
  FAQSection,
  CTABanner,
  Footer,
} from "@vizuara/ui";
import { bootcampConfig, showcaseConfig, certificateConfig } from "@/data/bootcamp";

export default function Home() {
  return (
    <main>
      <Navbar config={bootcampConfig.navbar} />
      {/* TODO: Add a GenAI-themed visualization component and pass it as the visualization prop */}
      <Hero config={bootcampConfig.hero} />
      {bootcampConfig.video && (
        <VideoSection config={bootcampConfig.video} />
      )}
      <ShowcaseSection config={showcaseConfig} />
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
      <TestimonialsSection config={bootcampConfig.testimonials} />
      <PricingSection config={bootcampConfig.pricing} />
      <FAQSection config={bootcampConfig.faq} />
      <CTABanner config={bootcampConfig.cta} />
      <Footer config={bootcampConfig.footer} />
    </main>
  );
}
