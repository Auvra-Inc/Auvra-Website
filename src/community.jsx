import React from 'react';
import LegalLayout from './legalLayout';

export default function CommunityGuidelines() {
  return (
    <LegalLayout currentPage="community">
      <div className="prose prose-gray max-w-none font-clash">
        
        <h2 className="text-3xl font-clash font-medium text-gray-900 mb-2">Community Guidelines {/* */}</h2>
        <p className="text-gray-600 mb-2">Building a respectful, authentic, and inclusive cultural home. {/* */}</p>
        <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          Last Updated: April 2026 {/* */}
        </p>

        {/* FUNCTIONAL TABLE OF CONTENTS */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-10">
          <h3 className="font-clash font-medium text-lg text-gray-900 mb-4">Table of Contents {/* */}</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
            <li><a href="#section-1" className="text-blue-600 hover:underline">1. Our Shared Space {/* */}</a></li>
            <li><a href="#section-2" className="text-blue-600 hover:underline">2. Scope {/* */}</a></li>
            <li><a href="#section-3" className="text-blue-600 hover:underline">3. Respect Cultural Authenticity {/* */}</a></li>
            <li><a href="#section-4" className="text-blue-600 hover:underline">4. No Hateful or Harmful Content {/* */}</a></li>
            <li><a href="#section-5" className="text-blue-600 hover:underline">5. Protect Sacred and Restricted Knowledge {/* */}</a></li>
            <li><a href="#section-6" className="text-blue-600 hover:underline">6. No Spam, Scams, or Misuse {/* */}</a></li>
            <li><a href="#section-7" className="text-blue-600 hover:underline">7. Be Constructive {/* */}</a></li>
            <li><a href="#section-8" className="text-blue-600 hover:underline">8. False Reports Are Not Permitted {/* */}</a></li>
            <li><a href="#section-9" className="text-blue-600 hover:underline">9. Reporting Violations {/* */}</a></li>
            <li><a href="#section-10" className="text-blue-600 hover:underline">10. Consequences of Violation {/* */}</a></li>
            <li><a href="#section-11" className="text-blue-600 hover:underline">11. Appeals {/* */}</a></li>
            <li><a href="#section-12" className="text-blue-600 hover:underline">12. Relationship to Other Policies {/* */}</a></li>
            <li><a href="#section-13" className="text-blue-600 hover:underline">13. Contact Information {/* */}</a></li>
          </ul>
        </div>

        <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">
          
          <section id="section-1" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">1. Our Shared Space {/* */}</h3>
            <p className="mb-4">
              Auvra is a platform for preserving, celebrating, and sharing cultural heritage. {/* */} Our community includes creators, collectors, families, cultural custodians, and institutions from around the world. {/* */} These guidelines help keep Auvra respectful, safe, and focused on its mission. {/* */}
            </p>
            <p>
              By using Auvra, you agree to follow these guidelines. Violations may result in content removal, account suspension, or termination, as described in Section 10. {/* */}
            </p>
          </section>

          <section id="section-2" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">2. Scope {/* */}</h3>
            <p className="mb-4">These guidelines apply to all users of the Auvra Platform, including: {/* */}</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Creators {/* */}</li>
              <li>Collectors {/* */}</li>
              <li>Communities {/* */}</li>
              <li>Families using My Vault {/* */}</li>
              <li>Collaborators using the Collaboration Hub {/* */}</li>
              <li>Any individual interacting with Auvra's services {/* */}</li>
            </ul>
            <p>
              They apply to all content you upload, share, or preserve, as well as your interactions with other users (e.g., comments, verification feedback, messages). {/* */}
            </p>
          </section>

          <section id="section-3" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">3. Respect Cultural Authenticity {/* */}</h3>
            <p className="mb-4">Cultural heritage is deeply personal. Treat it with care. {/* */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Do not misrepresent the origin, significance, or ownership of cultural content. {/* */}</li>
              <li>Contribution Badges should reflect genuine cultural knowledge. Community verification helps maintain accuracy. {/* */}</li>
              <li>If you are not a member of a culture, be mindful when preserving or commenting on its heritage. {/* */} Acknowledge sources and seek permission where appropriate. {/* */}</li>
              <li>Do not use the Platform to falsely claim affiliation with a community, tribe, or cultural tradition. {/* */}</li>
            </ul>
          </section>

          <section id="section-4" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">4. No Hateful or Harmful Content {/* */}</h3>
            <p className="mb-4">Auvra is not a place for abuse. You may not upload or share content that: {/* */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Attacks or demeans individuals or groups based on race, ethnicity, nationality, religion, gender, sexual orientation, disability, or cultural identity {/* */}</li>
              <li>Glorifies violence, terrorism, or self-harm {/* */}</li>
              <li>Harasses, bullies, or threatens others {/* */}</li>
              <li>Incites hatred or violence against any person or group {/* */}</li>
            </ul>
            <p>We take hate speech and harassment seriously. Violations may be reported to law enforcement. {/* */}</p>
          </section>

          <section id="section-5" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">5. Protect Sacred and Restricted Knowledge {/* */}</h3>
            <p className="mb-4">Some cultural knowledge is not meant for everyone. {/* */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Respect access restrictions. If a badge is marked as sacred or restricted, do not share it outside the Platform or beyond the permitted audience. {/* */}</li>
              <li>Do not attempt to bypass privacy controls or view content you are not authorised to see. {/* */}</li>
              <li>If you are unsure whether content should be public, consider restricting access or, where appropriate, seeking guidance from knowledgeable members of the relevant community. {/* */} This is a recommendation, not a legal obligation. {/* */}</li>
            </ul>
          </section>

          <section id="section-6" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">6. No Spam, Scams, or Misuse {/* */}</h3>
            <p className="mb-4">Do not use Auvra for purposes inconsistent with its cultural mission. {/* */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Do not use Auvra for financial speculation, wash trading, or market manipulation involving badges. {/* */}</li>
              <li>Do not post repetitive, irrelevant, or misleading content. {/* */}</li>
              <li>Do not impersonate another person, community, or institution. {/* */}</li>
              <li>Do not phish, scam, or deceive other users. {/* */}</li>
              <li>Do not exploit the Platform's features for commercial advertising unless explicitly permitted (e.g., a creator selling their own Collectible Badges). {/* */}</li>
            </ul>
          </section>

          <section id="section-7" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">7. Be Constructive {/* */}</h3>
            <p className="mb-4">Community verification is an important responsibility that helps keep Auvra trustworthy. {/* */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>When verifying Contribution Badges, provide honest, respectful, and evidence-based feedback. {/* */}</li>
              <li>Honour others' contributions without belittling or dismissing their cultural perspective. {/* */}</li>
              <li>If you disagree with a verification decision, use the available appeal process or contact support. {/* */}</li>
            </ul>
          </section>

          <section id="section-8" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">8. False Reports Are Not Permitted {/* */}</h3>
            <p className="mb-4">
              Reporting is a serious tool. Do not submit false, frivolous, or retaliatory reports. {/* */} Users who abuse the reporting system may have their reporting privileges restricted or face account action. {/* */}
            </p>
            <p>
              If you are unsure whether content violates these guidelines, err on the side of not reporting or contact support for guidance. {/* */}
            </p>
          </section>

          <section id="section-9" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">9. Reporting Violations {/* */}</h3>
            <p className="mb-4">If you see content or behaviour that violates these guidelines, please report it using the in-app reporting tool or by emailing info@goauvra.com. {/* */}</p>
            <p className="mb-4">When reporting, please provide: {/* */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>The specific content or behaviour in question (including URLs or usernames) {/* */}</li>
              <li>A clear description of why you believe it violates these guidelines {/* */}</li>
              <li>Any supporting evidence (e.g., screenshots) {/* */}</li>
            </ul>
            <p>We will review reports promptly and take appropriate action. Reports may be kept confidential to protect the reporter and the integrity of the investigation. {/* */}</p>
          </section>

          <section id="section-10" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">10. Consequences of Violation {/* */}</h3>
            <p className="mb-4">Depending on the severity and frequency of violations, we may: {/* */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Remove or restrict access to specific content {/* */}</li>
              <li>Issue a warning {/* */}</li>
              <li>Temporarily restrict your account (e.g., limit posting, verification, or transaction capabilities) {/* */}</li>
              <li>Permanently suspend your account {/* */}</li>
              <li>Report illegal activity to law enforcement {/* */}</li>
            </ul>
            <p className="mb-4">Consistent with our Terms of Service and AML Policy: {/* */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>We may suspend or terminate access without prior notice if immediate action is necessary to prevent harm or comply with legal obligations (e.g., "no-tipping-off" provisions under AML/CFT regulations). {/* */}</li>
              <li>Where we suspend without prior notice, we will provide notice and an opportunity to respond promptly afterward, unless prohibited by law. {/* */}</li>
            </ul>
          </section>

          <section id="section-11" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">11. Appeals {/* */}</h3>
            <p className="mb-4">If you believe action taken against your account was in error, you may appeal by emailing info@goauvra.com with the subject line "Community Guidelines Appeal". {/* */} Please include: {/* */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Your username {/* */}</li>
              <li>A description of the action taken {/* */}</li>
              <li>Why you believe it should be reconsidered {/* */}</li>
            </ul>
            <p>We will review appeals within a reasonable time (typically 14 days) and inform you of the outcome. {/* */}</p>
          </section>

          <section id="section-12" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">12. Relationship to Other Policies {/* */}</h3>
            <p className="mb-4">These Community Guidelines supplement, and do not replace: {/* */}</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Our main Terms of Service {/* */}</li>
              <li>Privacy Policy {/* */}</li>
              <li>AML/CFT Policy {/* */}</li>
              <li>Content Ownership Policy {/* */}</li>
              <li>Copyright Policy {/* */}</li>
              <li>AI Policy {/* */}</li>
              <li>Collaboration Hub Terms {/* */}</li>
            </ul>
            <p>In the event of a direct conflict, these Community Guidelines will govern behavioural expectations, but other policies may govern specific features (e.g., AML/CFT for financial transactions). {/* */}</p>
          </section>

          <section id="section-13" className="pt-8 mt-8 border-t border-gray-100 scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">13. Contact Information {/* */}</h3>
            <p className="mb-4">For questions about these guidelines or to report a violation: {/* */}</p>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <p className="font-medium text-gray-900">Auvra Tech Ltd {/* */}</p>
              <p>Email: <a href="mailto:info@goauvra.com" className="text-blue-600 hover:underline">info@goauvra.com</a> {/* */}</p>
              <p>Website: <a href="https://www.goauvra.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.goauvra.com</a> {/* */}</p>
            </div>
          </section>

        </div>
      </div>
    </LegalLayout>
  );
}