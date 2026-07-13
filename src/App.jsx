import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Above-the-fold: loaded eagerly
import Hero from './pages/hero'
import Navbar from './reuseables/navbar'
import FooterSection from './reuseables/footerSection'
import FadeSection from './components/fadeSection'

// Below-the-fold homepage sections: lazy loaded
const PartnersSection = lazy(() => import('./components/partnerSection'))
const LivingRecordsSection = lazy(() => import('./components/recordsSection'))
const AppDownloadSection = lazy(() => import('./components/appDownloadSection'))
const ProblemSection = lazy(() => import('./components/problemSection'))
const PhotoStack = lazy(() => import('./components/photoStack'))
const FeaturesSection = lazy(() => import('./components/featuresSection'))
const VaultSection = lazy(() => import('./components/vaultSection'))
const Design = lazy(() => import('./components/design'))
const AudienceSection = lazy(() => import('./components/audienceSection'))
const ImpactSection = lazy(() => import('./components/impactSection'))
const FaqAndCardsSection = lazy(() => import('./components/faqSection'))
const Newsletter = lazy(() => import('./components/newsletter'))

// --- LAZY LOADED LEGAL PAGES ---
const PrivacyPolicy = lazy(() => import('./legals/privacyPolicy'))
const TermsOfService = lazy(() => import('./legals/terms'))
const AMLPolicy = lazy(() => import('./legals/amlPolicy'))
const AIPolicy = lazy(() => import('./legals/aiPolicy'))
const CommunityGuidelines = lazy(() => import('./legals/community'))
const CollaborationHubTerms = lazy(() => import('./legals/collaborationTerms'))
const CopyrightPolicy = lazy(() => import('./legals/copyrightPolicy'))
const ContentGovernance = lazy(() => import('./legals/contentGovernance'))

// --- LAZY LOADED PAGES ---
const About = lazy(() => import('./pages/about'))
const Blog = lazy(() => import('./pages/blog'))
const BlogPost = lazy(() => import('./pages/blogPost'))
const InstitutionalAccess = lazy(() => import('./pages/institutionalAccess'))
const Institutions = lazy(() => import('./pages/institutions'))
const Waitlist = lazy(() => import('./pages/waitlist'))

// 1. SCROLL HELPER
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// LOADING FALLBACK COMPONENT
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
        <p className="text-gray-600 font-clash">Loading...</p>
      </div>
    </div>
  );
}

// Lightweight section placeholder shown while a lazy section loads
function SectionFallback() {
  return <div className="w-full py-20 bg-white" aria-hidden="true" />;
}

// 2. THE HOMEPAGE BUNDLE
const Home = () => (
  <>
    <Hero />
    <Suspense fallback={<SectionFallback />}><FadeSection><PartnersSection /></FadeSection></Suspense>
    <Suspense fallback={<SectionFallback />}><FadeSection><LivingRecordsSection /></FadeSection></Suspense>
    <Suspense fallback={<SectionFallback />}><FadeSection><AppDownloadSection /></FadeSection></Suspense>
    <Suspense fallback={<SectionFallback />}><FadeSection><ProblemSection /></FadeSection></Suspense>
    <Suspense fallback={<SectionFallback />}><FadeSection><PhotoStack /></FadeSection></Suspense>
    <Suspense fallback={<SectionFallback />}><FadeSection><FeaturesSection /></FadeSection></Suspense>
    <Suspense fallback={<SectionFallback />}><FadeSection><VaultSection /></FadeSection></Suspense>
    <Suspense fallback={<SectionFallback />}><FadeSection><Design /></FadeSection></Suspense>
    <Suspense fallback={<SectionFallback />}><FadeSection><AudienceSection /></FadeSection></Suspense>
    <Suspense fallback={<SectionFallback />}><FadeSection><ImpactSection /></FadeSection></Suspense>
    <Suspense fallback={<SectionFallback />}><FadeSection><FaqAndCardsSection /></FadeSection></Suspense>
    <Suspense fallback={<SectionFallback />}><FadeSection><Newsletter /></FadeSection></Suspense>
  </>
);

// 3. THE MASTER MAP
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense fallback={<LoadingFallback />}>
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
          <Route path="/institutional-access" element={<InstitutionalAccess />} />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>
      </Suspense>

      <FooterSection />
    </BrowserRouter>
  )
}

export default App
