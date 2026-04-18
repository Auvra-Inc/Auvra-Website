import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

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
import FooterSection from './footerSection' // <-- THIS WAS MISSING!

// --- YOUR LEGAL PAGE IMPORTS ---
import PrivacyPolicy from './privacyPolicy'
import TermsOfService from './terms'
import AMLPolicy from './amlPolicy'
import AIPolicy from './aiPolicy'
import CommunityGuidelines from './community'
import CollaborationHubTerms from './collaborationTerms'
import CopyrightPolicy from './copyrightPolicy'
import ContentGovernance from './contentGovernance'

// 1. SCROLL HELPER
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// 2. THE HOMEPAGE BUNDLE
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
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/aml" element={<AMLPolicy />} />
        <Route path="/collab" element={<CollaborationHubTerms />} />
        <Route path="/ai-policy" element={<AIPolicy />} />
        <Route path="/community" element={<CommunityGuidelines />} />
        <Route path="/copyright" element={<CopyrightPolicy />} />
        <Route path="/governance" element={<ContentGovernance />} />

      </Routes>

      {/* Footer stays outside the Routes so it always shows up at the bottom */}
      <FooterSection />
    </BrowserRouter>
  )
}

export default App