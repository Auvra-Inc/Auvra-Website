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
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';

function App() {
  

  return (
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
      <FooterSection />
    </>
  )
}

export default App
