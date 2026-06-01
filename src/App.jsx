import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// --- YOUR COMPONENT IMPORTS ---
import FadeSection from './components/fadeSection'
import ProblemSection from './components/problemSection'
import FeaturesSection from './components/featuresSection'
import AppDownloadSection from './components/appDownloadSection'
import LivingRecordsSection from './components/recordsSection'
import PhotoStack from './components/photoStack'
import VaultSection from './components/vaultSection'
import Design from './components/design'
import AudienceSection from './components/audienceSection'
import ImpactSection from './components/impactSection'
import FaqAndCardsSection from './components/faqSection'
import PartnersSection from './components/partnerSection'
import Newsletter from './components/newsletter' 
import FooterSection from './reuseables/footerSection' 
import Navbar from './reuseables/navbar'

// --- YOUR LEGAL PAGE IMPORTS ---
import PrivacyPolicy from './legals/privacyPolicy'
import TermsOfService from './legals/terms'
import AMLPolicy from './legals/amlPolicy'
import AIPolicy from './legals/aiPolicy'
import CommunityGuidelines from './legals/community'
import CollaborationHubTerms from './legals/collaborationTerms'
import CopyrightPolicy from './legals/copyrightPolicy'
import ContentGovernance from './legals/contentGovernance'

// --- PAGES IMPORT --- //
import About from './pages/about'
import Blog from './pages/blog'
import BlogPost from './pages/blogPost'
import Hero from './pages/hero'
import InstitutionalAccess from './pages/institutionalAccess'  
import Institutions from './pages/institutions'  // ADDED: New institutions page

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
    <FadeSection><PartnersSection /></FadeSection>
    <FadeSection><LivingRecordsSection /></FadeSection>
    <FadeSection><AppDownloadSection /></FadeSection>
    <FadeSection><ProblemSection /></FadeSection>
    <FadeSection><PhotoStack /></FadeSection>
    <FadeSection><FeaturesSection /></FadeSection>
    <FadeSection><VaultSection /></FadeSection>
    <FadeSection><Design /></FadeSection>
    <FadeSection><AudienceSection /></FadeSection>
    <FadeSection><ImpactSection /></FadeSection>
    <FadeSection><FaqAndCardsSection /></FadeSection>
    <FadeSection><Newsletter /></FadeSection>
  </>
);

// 3. THE MASTER MAP
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

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
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/instituional-access" element={<InstitutionalAccess />} />  {/* ADDED: New route */} 
        <Route path="/institutions" element={<Institutions />} />  {/* ADDED: New route */}
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      <FooterSection />
    </BrowserRouter>
  )
}

export default App
