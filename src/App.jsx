import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// --- YOUR COMPONENT IMPORTS ---
import Hero from './hero'
import ProblemSection from './problemSection'
import FeaturesSection from './featuresSection'
import AppDownloadSection from './appDownloadSection'
import LivingRecordsSection from './recordsSection'
import PhotoStack from './photoStack'
import VaultSection from './vaultSection'
import Design from './design'
import AudienceSection from './audienceSection'
import ImpactSection from './impactSection'
import FaqAndCardsSection from './faqSection'
import FooterSection from './footerSection'

// --- YOUR LEGAL PAGE IMPORTS ---
import PrivacyPolicy from './privacyPolicy'
import TermsOfService from './terms'
import AMLPolicy from './amlPolicy'
import AIPolicy from './aiPolicy'
import CommunityGuidelines from './community'
import CollaborationHubTerms from './collaborationTerms'
import CopyrightPolicy from './copyrightPolicy'

// 1. SCROLL HELPER (Added directly here so you don't need a separate file!)
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// 2. THE HOMEPAGE BUNDLE
// This groups all your landing page sections together so they only show on the main page.
const Home = () => (
  <>
    <Hero />
    <LivingRecordsSection />
    <AppDownloadSection />
    <ProblemSection />
    <PhotoStack />
    <FeaturesSection />
    <VaultSection />
    <Design />
    <AudienceSection />
    <ImpactSection />
    <FaqAndCardsSection />
  </>
);

// 3. THE MASTER MAP
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Instantly scrolls to top when you click a link */}

      <Routes>
        {/* If the URL is exactly "/", show the Home bundle */}
        <Route path="/" element={<Home />} />

        {/* If the URL matches these, hide the Home bundle and show the legal page! */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/aml" element={<AMLPolicy />} />
        <Route path="/collab" element={<CollaborationHubTerms />} />
        <Route path="/ai-policy" element={<AIPolicy />} />
        <Route path="/community" element={<CommunityGuidelines />} />
        <Route path="/copyright" element={<CopyrightPolicy />} />
      </Routes>

      {/* Footer stays outside the Routes so it always shows up at the bottom */}
      <FooterSection />
    </BrowserRouter>
  )
}

export default App