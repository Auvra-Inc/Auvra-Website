import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';

// 1. Group all your landing page sections together into a "Home" view
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

function App() {
  return (
    <BrowserRouter>
      {/* 2. The Routes map out exactly what component to show for each URL */}
      <Routes>
        
        {/* The Main Landing Page */}
        <Route path="/" element={<Home />} />

        {/* The Legal Pages (These MUST match the "to" links in your Footer) */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/aml" element={<AMLPolicy />} />
        <Route path="/collab" element={<CollaborationHubTerms />} />
        <Route path="/ai-policy" element={<AIPolicy />} />
        <Route path="/community" element={<CommunityGuidelines />} />
        <Route path="/copyright" element={<CopyrightPolicy />} />
        
      </Routes>

      {/* 3. The Footer is placed OUTSIDE the Routes so it always appears at the bottom of every page! */}
      <FooterSection />
    </BrowserRouter>
  )
}

export default App