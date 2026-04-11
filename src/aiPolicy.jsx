import React from 'react';
import LegalLayout from './LegalLayout';

export default function AIPolicy() {
  return (
    <LegalLayout currentPage="ai">
      <div className="prose prose-gray max-w-none">
        
        <h2 className="text-3xl font-clash font-medium text-gray-900 mb-2">AI Policy {/* */}</h2>
        <p className="text-gray-600 mb-2">Lens AI is a tool, not a judge of cultural truth. {/* */}</p>
        <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          Last Updated: April 2026 {/* */}
        </p>

        {/* FUNCTIONAL TABLE OF CONTENTS */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-10">
          <h3 className="font-clash font-medium text-lg text-gray-900 mb-4">Table of Contents</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
            <li><a href="#section-1" className="text-blue-600 hover:underline">1. Introduction</a></li>
            <li><a href="#section-2" className="text-blue-600 hover:underline">2. What Lens AI Does</a></li>
            <li><a href="#section-3" className="text-blue-600 hover:underline">3. AI Outputs Are Not Warranted</a></li>
            <li><a href="#section-4" className="text-blue-600 hover:underline">4. Human Review and Community Verification</a></li>
            <li><a href="#section-5" className="text-blue-600 hover:underline">5. AI Training and Your Data</a></li>
            <li><a href="#section-6" className="text-blue-600 hover:underline">6. No Legal or Professional Advice</a></li>
            <li><a href="#section-7" className="text-blue-600 hover:underline">7. Reporting AI Errors</a></li>
            <li><a href="#section-8" className="text-blue-600 hover:underline">8. Availability and Modifications</a></li>
            <li><a href="#section-9" className="text-blue-600 hover:underline">9. Auvra's Role and Limitations</a></li>
            <li><a href="#section-10" className="text-blue-600 hover:underline">10. Relationship to Other Policies</a></li>
            <li><a href="#section-11" className="text-blue-600 hover:underline">11. Contact Information</a></li>
          </ul>
        </div>

        <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">
          
          <section id="section-1" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">1. Introduction {/* */}</h3>
            <p className="mb-4">
              Lens AI is a set of optional, automated tools integrated into the Auvra Platform to assist users with cultural preservation and discovery. {/* */} This AI Policy explains how Lens works, its limitations, and your responsibilities when using it. {/* */}
            </p>
            <p>
              By using Lens AI, you agree to the terms of this policy. {/* */} If you do not agree, you may disable Lens AI features in your account settings or refrain from using them. {/* */}
            </p>
          </section>

          <section id="section-2" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">2. What Lens AI Does {/* */}</h3>
            <p className="mb-4">Lens AI can perform the following functions (where enabled): {/* */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Transcription</strong> - convert spoken content (e.g., oral histories, interviews) into written text {/* */}</li>
              <li><strong>Translation</strong> - translate text between supported languages {/* */}</li>
              <li><strong>Tagging</strong> - generate suggested metadata tags (e.g., culture, region, tradition) {/* */}</li>
              <li><strong>Enhancement</strong> - improve audio and video quality (e.g., noise reduction, upscaling) {/* */}</li>
              <li><strong>Q&A</strong> - answer user questions about preserved content or Auvra features {/* */}</li>
              <li><strong>Artifact recognition</strong> - identify cultural artifacts from uploaded images (where available) {/* */}</li>
            </ul>
            <p>
              Lens AI is integrated into the Platform but is not required for core preservation features. {/* */} You may choose to use Lens or ignore its suggestions. {/* */}
            </p>
          </section>

          <section id="section-3" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">3. AI Outputs Are Not Warranted {/* */}</h3>
            <p className="mb-4">
              AI outputs may contain errors, omissions, biases, or culturally inappropriate suggestions. {/* */} Lens is not a substitute for human judgment, especially for sacred, restricted, or historically sensitive content. {/* */}
            </p>
            <p>
              Auvra does not warrant that AI outputs are accurate, complete, reliable, or culturally authoritative. {/* */} You are solely responsible for verifying and editing AI-generated content before publishing or relying on it. {/* */}
            </p>
          </section>

          <section id="section-4" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">4. Human Review and Community Verification {/* */}</h3>
            <p className="mb-4">
              Community verification (by elders, experts, or designated community members) is the primary mechanism for establishing authenticity of Contribution Badges. {/* */} AI suggestions are only that - suggestions. They do not override human decisions. {/* */}
            </p>
            <p>
              You should not rely on Lens AI alone to determine cultural authenticity, origin, or significance. {/* */} Always seek verification from relevant community members or cultural authorities where appropriate. {/* */}
            </p>
          </section>

          <section id="section-5" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">5. AI Training and Your Data {/* */}</h3>
            <p className="mb-4">
              By default, Auvra does not use your personal content (including private vault content, badge media, or your prompts) to train or improve Lens AI models. {/* */}
            </p>
            <p className="mb-4">If we offer an optional program to improve Lens AI (e.g., to better transcribe a specific language or recognize a particular artifact type): {/* */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Participation will be opt-in only through a separate consent flow, not through this policy. {/* */}</li>
              <li>You may choose which types of content to contribute (e.g., only public badges, only specific languages, or nothing). {/* */}</li>
              <li>Private vault content will never be used for training unless you explicitly move it to a public badge or give separate, informed consent. {/* */}</li>
              <li>You may withdraw consent at any time, but content already incorporated into a trained model cannot be retroactively removed. {/* */}</li>
            </ul>
            <p>
              Identifiable personal information (e.g., your name, email, wallet address) will never be used in training data. {/* */} Aggregated, anonymized metadata (e.g., language tags, content categories) may be used for quality tuning but will not be linked to your identity. {/* */}
            </p>
          </section>

          <section id="section-6" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">6. No Legal or Professional Advice {/* */}</h3>
            <p className="mb-4">
              Lens AI does not provide legal, financial, medical, or professional advice. {/* */} Any information or suggestions generated by Lens should be independently verified by a qualified professional. {/* */}
            </p>
            <p>
              Do not rely on Lens AI for decisions that could affect your legal rights, financial status, health, or safety. {/* */}
            </p>
          </section>

          <section id="section-7" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">7. Reporting AI Errors {/* */}</h3>
            <p className="mb-4">
              If you encounter significant errors or culturally inappropriate outputs from Lens, please report them to info@goauvra.com with the subject line "AI Error Report". {/* */} Please include: {/* */}
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>The specific content or query that produced the error {/* */}</li>
              <li>A description of the error or concern {/* */}</li>
              <li>Any supporting evidence (e.g., screenshots) {/* */}</li>
            </ul>
            <p>
              Your feedback helps us improve Lens AI, but reporting an error does not create a warranty or guarantee of correction. {/* */}
            </p>
          </section>

          <section id="section-8" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">8. Availability and Modifications {/* */}</h3>
            <p>
              Lens AI is provided on an "as available" basis. We may modify, improve, or discontinue Lens AI features at any time, with reasonable notice where practicable. {/* */} Service availability is subject to the terms of our main Terms of Service (including any provisions regarding downtime, maintenance, or service changes). {/* */}
            </p>
          </section>

          <section id="section-9" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">9. Auvra's Role and Limitations {/* */}</h3>
            <p className="mb-4">Auvra provides Lens AI as an assistive tool, not as an expert system. We do not guarantee that: {/* */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Lens AI will be available without interruption {/* */}</li>
              <li>AI outputs will meet your specific requirements {/* */}</li>
              <li>Lens AI will be free from biases or errors {/* */}</li>
            </ul>
          </section>

          <section id="section-10" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">10. Relationship to Other Policies {/* */}</h3>
            <p className="mb-4">This AI Policy supplements, and does not replace: {/* */}</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Our main Terms of Service {/* */}</li>
              <li>Privacy Policy {/* */}</li>
              <li>Community Guidelines {/* */}</li>
              <li>Content Ownership Policy {/* */}</li>
              <li>Copyright Policy {/* */}</li>
              <li>Collaboration Hub Terms {/* */}</li>
            </ul>
            <p>In the event of a direct conflict, this AI Policy will govern for AI-related matters. {/* */}</p>
          </section>

          <section id="section-11" className="pt-8 mt-8 border-t border-gray-100 scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">11. Contact Information {/* */}</h3>
            <p className="mb-4">For questions about this AI Policy or to report AI errors: {/* */}</p>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <p className="font-medium text-gray-900">Auvra Tech Ltd {/* */}</p>
              <p>Email: <a href="mailto:info@goauvra.com" className="text-blue-600 hover:underline">info@goauvra.com</a> {/* */}</p>
              <p>Mailing address: No 13 God Time Estate, Igbe Ikorodu, Lagos State, Nigeria {/* */}</p>
            </div>
            <p className="text-sm text-gray-500 mt-4">Please include "AI Policy Question" or "AI Error Report" in the subject line, as applicable. {/* */}</p>
          </section>

        </div>
      </div>
    </LegalLayout>
  );
}