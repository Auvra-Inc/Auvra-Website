import React from 'react';
import LegalLayout from './LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout currentPage="privacy">
      <div className="prose prose-gray max-w-none">
        
        {/* Document Title & Subtitle */}
        <h2 className="text-3xl font-clash font-medium text-gray-900 mb-2">Privacy Policy {/* */}</h2>
        <p className="text-gray-600 mb-2">Your privacy matters. Learn how we collect, use, and protect your information. {/* */}</p>
        <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          Last Updated: April 2026 {/* */}
        </p>

        {/* FUNCTIONAL TABLE OF CONTENTS */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-10">
          <h3 className="font-clash font-medium text-lg text-gray-900 mb-4">Table of Contents {/* */}</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
            <li><a href="#section-1" className="text-blue-600 hover:underline">1. Introduction {/* */}</a></li>
            <li><a href="#section-2" className="text-blue-600 hover:underline">2. Information We Collect {/* */}</a></li>
            <li><a href="#section-3" className="text-blue-600 hover:underline">3. How We Use Your Information {/* */}</a></li>
            <li><a href="#section-4" className="text-blue-600 hover:underline">4. Legal Basis for Processing (EEA/UK users) {/* */}</a></li>
            <li><a href="#section-5" className="text-blue-600 hover:underline">5. Sharing Your Information {/* */}</a></li>
            <li><a href="#section-6" className="text-blue-600 hover:underline">6. Data Security {/* */}</a></li>
            <li><a href="#section-7" className="text-blue-600 hover:underline">7. Your Rights {/* */}</a></li>
            <li><a href="#section-8" className="text-blue-600 hover:underline">8. Data Retention {/* */}</a></li>
            <li><a href="#section-9" className="text-blue-600 hover:underline">9. International Data Transfers {/* */}</a></li>
            <li><a href="#section-10" className="text-blue-600 hover:underline">10. Children's Privacy {/* */}</a></li>
            <li><a href="#section-11" className="text-blue-600 hover:underline">11. Blockchain & Permanence {/* */}</a></li>
            <li><a href="#section-12" className="text-blue-600 hover:underline">12. AI Services (Lens) {/* */}</a></li>
            <li><a href="#section-13" className="text-blue-600 hover:underline">13. Changes to This Policy {/* */}</a></li>
            <li><a href="#section-14" className="text-blue-600 hover:underline">14. Contact Us</a></li>
          </ul>
        </div>

        {/* Document Content */}
        <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">
          
          <section id="section-1" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">1. Introduction {/* */}</h3>
            <p className="mb-4">
              At Auvra Tech Ltd, we are committed to protecting and respecting your privacy. {/* */} This Privacy Policy outlines the types of information we collect, use, disclose, and safeguard your personal information when you access or use our website, mobile applications, and services. {/* */} Including cultural preservation tools, badge systems (Collectible and Contribution Badges), collaboration features, AI services (Lens), private vaults (My Vault), and community systems (collectively, the "Platform"). {/* */}
            </p>
            <p className="mb-4">
              This Policy applies to all users of Auvra: creators, collectors, community participants, families using private vaults, and any individual interacting with our services. {/* */}
            </p>
            <p>
              By using the Platform, you agree to the collection and use of information in accordance with this Policy. {/* */}
            </p>
          </section>

          <section id="section-2" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">2. Information We Collect {/* */}</h3>
            <p className="mb-4">We collect information to provide, improve, and secure our services. {/* */}</p>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">A. Personal Information You Provide {/* */}</h4>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>Full name {/* */}</li>
              <li>Email address {/* */}</li>
              <li>Phone number {/* */}</li>
              <li>Date of birth (where required for legal compliance) {/* */}</li>
              <li>Government-issued identification (for KYC/AML verification, where required) {/* */}</li>
              <li>Profile information (username, bio, profile image, cultural affiliations)</li>
              <li>Payment and billing information (for subscriptions or badge sales)</li>
            </ul>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">B. Cultural and Content Data {/* */}</h4>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>Content you upload (audio, video, text, images) for preservation as badges or in private vaults {/* */}</li>
              <li>Cultural metadata (language tags, traditions, categories, geographic origin)</li>
              <li>Community verification data (approvals, flags, corrections) {/* */}</li>
              <li>AI-processed outputs from Lens (transcriptions, translations, summaries, enhancements) {/* */}</li>
            </ul>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">C. Automatically Collected Information {/* */}</h4>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>Device type and operating system {/* */}</li>
              <li>IP address and general location {/* */}</li>
              <li>Browser type and version {/* */}</li>
              <li>Usage data (pages visited, features used, session duration) {/* */}</li>
            </ul>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">D. Cookies and Similar Technologies {/* */}</h4>
            <p>
              We use cookies and similar technologies to enhance user experience, store preferences, and analyze platform performance. {/* */} You may disable cookies through your browser settings, though some features may be limited. {/* */}
            </p>
          </section>

          <section id="section-3" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">3. How We Use Your Information {/* */}</h3>
            <p className="mb-4">We use your information to: {/* */}</p>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>Provide access to Auvra services {/* */}</li>
              <li>Enable creation and ownership of cultural badges (Collectible and Contribution Badges) {/* */}</li>
              <li>Support collaboration, community features, and private vaults</li>
              <li>Process transactions and subscriptions {/* */}</li>
              <li>Power Lens AI for transcription, translation, tagging, and enhancement {/* */}</li>
              <li>Improve cultural discovery and recommendations {/* */}</li>
              <li>Respond to inquiries and provide support {/* */}</li>
              <li>Send service updates and notifications (required for using the Platform) {/* */}</li>
              <li>Detect fraud and abuse {/* */}</li>
              <li>Enforce our Terms of Service {/* */}</li>
              <li>Comply with legal and regulatory obligations (including AML/CFT requirements) {/* */}</li>
            </ul>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">Marketing Communications {/* */}</h4>
            <p>
              We will only send you marketing communications with your explicit consent. {/* */} You may withdraw consent at any time via your account settings or the unsubscribe link in emails. {/* */}
            </p>
          </section>

          <section id="section-4" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">4. Legal Basis for Processing (EEA/UK Users) {/* */}</h3>
            <p className="mb-4">
              If you are located in the European Economic Area (EEA) or the United Kingdom, we process your personal information only where we have a lawful basis to do so. {/* */} Our lawful bases are: {/* */}
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><strong>Contract performance</strong> - to provide the services you request (e.g., preserving a badge, enabling collaboration) {/* */}</li>
              <li><strong>Legal obligation</strong> - to comply with anti-money laundering, tax, and other legal requirements {/* */}</li>
              <li><strong>Legitimate interests</strong> - to improve and secure our Platform, prevent fraud, and understand how users interact with our services (where your interests and rights do not override those interests)</li>
              <li><strong>Consent</strong> - for certain activities such as marketing communications and optional AI training participation.</li>
            </ul>
            <p>
              You may withdraw consent at any time without affecting the lawfulness of processing based on consent before its withdrawal. {/* */}
            </p>
          </section>

          <section id="section-5" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">5. Sharing Your Information {/* */}</h3>
            <p className="mb-4">We do not sell your personal information. {/* */} We may share your information with the following categories of recipients for the purposes described: {/* */}</p>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>Payment processors - to process subscriptions and badge transactions {/* */}</li>
              <li>Cloud hosting and storage providers - to store your content and badge metadata securely {/* */}</li>
              <li>AI service providers - to provide Lens features such as transcription, translation, and enhancement. {/* */} These providers process data only on our instructions and are contractually prohibited from using it for their own purposes.</li>
              <li>Security and analytics providers - to detect fraud and improve user experience {/* */}</li>
              <li>Legal and regulatory authorities - where required by law or to protect our rights</li>
            </ul>
            <h4 className="font-medium text-gray-900 mt-6 mb-2">Public Content {/* */}</h4>
            <p className="mb-4">Content you choose to make public (including cultural badges, contributions, and profile information) may be visible to other users of the Platform. {/* */} Private vault content is never shared without your explicit permission. {/* */}</p>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">Business Transfers {/* */}</h4>
            <p>In the event of a merger, acquisition, or asset sale, your information may be transferred as part of that transaction. {/* */} We will notify you before your information becomes subject to a different privacy policy. {/* */}</p>
          </section>

          <section id="section-6" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">6. Data Security {/* */}</h3>
            <p className="mb-4">We implement appropriate technical and organisational measures to protect your information, including: {/* */}</p>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>Encryption of sensitive data (including private vault content) {/* */}</li>
              <li>Secure servers and infrastructure</li>
              <li>Access control and authentication protocols (including biometrics for vault access, where you choose to enable it) {/* */}</li>
              <li>Continuous monitoring for security threats {/* */}</li>
            </ul>
            <p className="text-sm bg-gray-50 p-4 rounded-xl border border-gray-100">
              <strong>Important:</strong> No method of transmission over the internet is completely secure. {/* */} You play a role in protecting your information by keeping your credentials and authentication settings confidential. {/* */}
            </p>
          </section>

          <section id="section-7" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">7. Your Rights {/* */}</h3>
            <p className="mb-4">Depending on your jurisdiction, you may have the right to: {/* */}</p>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>Access your personal data {/* */}</li>
              <li>Correct inaccurate or incomplete information {/* */}</li>
              <li>Request deletion of your data (subject to legal exceptions and blockchain immutability) {/* */}</li>
              <li>Object to certain processing activities</li>
              <li>Restrict processing in certain circumstances {/* */}</li>
              <li>Withdraw consent at any time (where processing is based on consent) {/* */}</li>
              <li>Data portability (receive a copy of your data in a structured, commonly used format) {/* */}</li>
            </ul>
            <h4 className="font-medium text-gray-900 mt-6 mb-2">How to Exercise Your Rights {/* */}</h4>
            <p className="mb-4">To exercise your rights, contact us at info@goauvra.com. We will respond within 30 days (extendable by 60 days for complex requests, with notice). {/* */}</p>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">Deletion & Blockchain Records {/* */}</h4>
            <p className="mb-4">Because blockchain records are immutable, on-chain badge data cannot be deleted. {/* */} If you request deletion, we will remove off-chain content and personal information where possible, but on-chain badge records will remain as part of the public cultural archive. {/* */} We will not associate them with your identity after deletion. {/* */} Private vault content can be deleted by you at any time. {/* */}</p>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">Escalation {/* */}</h4>
            <p>If you are not satisfied with our response, you may escalate to your local supervisory authority (e.g., Nigeria Data Protection Commission, UK ICO, or your country's data protection authority). {/* */}</p>
          </section>

          <section id="section-8" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">8. Data Retention {/* */}</h3>
            <p className="mb-4">We retain your personal information for different periods depending on the category: {/* */}</p>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>Account information (name, email, profile) - for as long as your account is active, plus a limited period (e.g., 30 days) after deletion to allow for recovery {/* */}</li>
              <li>KYC and AML records - minimum of 5 years after account closure, as required by law {/* */}</li>
              <li>Transaction history (badge sales, subscription payments) - 7 years for tax and legal compliance</li>
              <li>Private vault content - until you delete it, or 30 days after account deletion (to allow for recovery) {/* */}</li>
              <li>AI processing logs - 30 days, used only for debugging and improvement (without personal identifiers after that period) {/* */}</li>
              <li>Blockchain badge records - permanently, as part of the public cultural archive {/* */}</li>
            </ul>
            <p>After the applicable retention period, data is securely deleted or anonymised. {/* */}</p>
          </section>

          <section id="section-9" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">9. International Data Transfers {/* */}</h3>
            <p className="mb-4">Auvra operates globally. Your information may be transferred to and processed in countries outside your country of residence, including the United States (cloud providers), the European Union (AI processing), and other jurisdictions where our service providers operate. {/* */}</p>
            <p>Where we transfer personal information from the European Economic Area (EEA) or the United Kingdom, we take steps to ensure an adequate level of protection, such as using provider agreements that include data protection commitments. {/* */} If you would like more information about these safeguards, please contact us at info@goauvra.com. {/* */}</p>
          </section>

          <section id="section-10" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">10. Children's Privacy {/* */}</h3>
            <p className="mb-4">Auvra does not knowingly collect personal information from individuals under the age of 13 (or the applicable age of consent in your jurisdiction) without parental consent. {/* */}</p>
            <p>If we become aware that we have inadvertently collected information from a child without parental consent, we will delete that information as soon as possible. {/* */} If you believe a child has provided us with personal information, please contact us at info@goauvra.com. {/* */}</p>
          </section>

          <section id="section-11" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">11. Blockchain & Permanence {/* */}</h3>
            <h4 className="font-medium text-gray-900 mt-6 mb-2">On-Chain Records {/* */}</h4>
            <p className="mb-4">Collectible and Contribution Badges are recorded on a public blockchain. {/* */} The following data becomes immutable and cannot be deleted or altered: badge ID, creator wallet address, timestamp, and metadata hash. {/* */} Full media content is stored off-chain using decentralised storage networks. {/* */}</p>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">Private Vault Content {/* */}</h4>
            <p className="mb-4">Content stored in My Vault is not recorded on the public blockchain. It is encrypted and stored off-chain. {/* */} You control access and may delete it at any time. {/* */}</p>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">Deletion Limitations {/* */}</h4>
            <p>As noted above, on-chain badge records cannot be deleted. We will disassociate them from your identity upon account deletion, but the records themselves will remain as part of the public cultural archive. {/* */}</p>
          </section>

          <section id="section-12" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">12. AI Services (Lens) {/* */}</h3>
            <h4 className="font-medium text-gray-900 mt-6 mb-2">AI Processing {/* */}</h4>
            <p className="mb-4">Lens AI processes your content to generate transcriptions, translations, enhancements, tags, and Q&A responses. {/* */} These outputs are stored as part of your cultural record. {/* */}</p>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">AI Training {/* */}</h4>
            <p className="mb-4">By default, we do not use your personal content (including private vault content, badge media, or your prompts) to train or improve our AI models. {/* */} If we offer an optional program to improve Lens AI, participation will be opt-in only through a separate consent flow. {/* */} Private vault content will never be used for training unless you explicitly move it to a public badge or give separate, informed consent. {/* */} You may withdraw consent at any time, but content already incorporated into a trained model cannot be retroactively removed. {/* */}</p>
          </section>

          <section id="section-13" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">13. Changes to This Policy {/* */}</h3>
            <p className="mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. {/* */} Updates will be posted on the Platform with a revised effective date. {/* */} For material changes, we will notify you via email or prominent notice on the Platform. {/* */} Your continued use of the Platform after such changes constitutes your acceptance of the updated Policy. {/* */}</p>
          </section>

          {/* Section 14 / Contact */}
          <section id="section-14" className="pt-8 mt-8 border-t border-gray-100 scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">14. Contact Us {/* */}</h3>
            <p className="mb-4">If you have any questions, requests, or concerns regarding this Privacy Policy, please contact: {/* */}</p>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <p className="font-medium text-gray-900">Auvra Tech Ltd {/* */}</p>
              <p>Email: <a href="mailto:info@goauvra.com" className="text-blue-600 hover:underline">info@goauvra.com</a> {/* */}</p>
              <p>Website: <a href="https://www.goauvra.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.goauvra.com</a> {/* */}</p>
            </div>
            <p className="mt-4 text-sm text-gray-500">For urgent security matters, please use the same email with "Urgent Security Matter" in the subject line. {/* */}</p>
          </section>

        </div>
      </div>
    </LegalLayout>
  );
}