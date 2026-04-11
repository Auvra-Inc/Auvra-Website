import React from 'react';
import LegalLayout from './LegalLayout';

export default function TermsOfService() {
  return (
    <LegalLayout currentPage="terms">
      <div className="prose prose-gray max-w-none">
        
        <h2 className="text-3xl font-clash font-medium text-gray-900 mb-2">Terms of Service {/* [cite: 336] */}</h2>
        <p className="text-gray-600 mb-2">Please read these terms carefully before using our platform {/* [cite: 337] */}</p>
        <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          Effective immediately upon platform use {/* [cite: 338] */}
        </p>

        {/* FUNCTIONAL TABLE OF CONTENTS */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-10">
          <h3 className="font-clash font-medium text-lg text-gray-900 mb-4">Table of Contents {/* [cite: 339] */}</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
            <li><a href="#section-1" className="text-blue-600 hover:underline">1. Introduction {/* [cite: 340] */}</a></li>
            <li><a href="#section-2" className="text-blue-600 hover:underline">2. Acceptance of Terms {/* [cite: 341] */}</a></li>
            <li><a href="#section-3" className="text-blue-600 hover:underline">3. User Conduct {/* [cite: 342] */}</a></li>
            <li><a href="#section-4" className="text-blue-600 hover:underline">4. Intellectual Property & Cultural Ownership {/* [cite: 343] */}</a></li>
            <li><a href="#section-5" className="text-blue-600 hover:underline">5. Payment Terms {/* [cite: 344] */}</a></li>
            <li><a href="#section-6" className="text-blue-600 hover:underline">6. Blockchain & Permanence {/* [cite: 345] */}</a></li>
            <li><a href="#section-7" className="text-blue-600 hover:underline">7. AI Services (Lens) {/* [cite: 346] */}</a></li>
            <li><a href="#section-8" className="text-blue-600 hover:underline">8. Disclaimer of Warranties {/* [cite: 347] */}</a></li>
            <li><a href="#section-9" className="text-blue-600 hover:underline">9. Limitation of Liability {/* [cite: 348] */}</a></li>
            <li><a href="#section-10" className="text-blue-600 hover:underline">10. Governing Law & Dispute Resolution {/* [cite: 349] */}</a></li>
            <li><a href="#section-11" className="text-blue-600 hover:underline">11. Termination {/* [cite: 350] */}</a></li>
            <li><a href="#section-12" className="text-blue-600 hover:underline">12. Privacy {/* [cite: 351] */}</a></li>
            <li><a href="#section-13" className="text-blue-600 hover:underline">13. Changes to Terms {/* [cite: 352] */}</a></li>
            <li><a href="#section-14" className="text-blue-600 hover:underline">14. Miscellaneous {/* [cite: 353] */}</a></li>
            <li><a href="#section-15" className="text-blue-600 hover:underline">15. Contact Information {/* [cite: 354] */}</a></li>
          </ul>
        </div>

        <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">
          
          <section id="section-1" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">1. Introduction {/* [cite: 355] */}</h3>
            <p className="mb-4">
              Welcome to Auvra Tech Ltd ("Auvra", "we", "us", or "our"). {/* [cite: 356] */} These Terms and Conditions of Use (the "Agreement") govern your access to and use of Auvra's website, mobile applications, and services including cultural preservation tools, badge systems (Collectible and Contribution Badges), collaboration features, AI services (Lens), private vaults (My Vault), community systems, and any related digital platforms (collectively, the "Platform"). {/* [cite: 357] */}
            </p>
            <p>
              By accessing or using our Platform, you agree to comply with and be bound by this Agreement. {/* [cite: 358] */} If you do not agree to any part of these Terms, you must not use our services. {/* [cite: 359] */}
            </p>
          </section>

          <section id="section-2" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">2. Acceptance of Terms {/* [cite: 360] */}</h3>
            <p className="mb-4">
              By accessing or using the Auvra Platform, you confirm your acceptance of this Agreement, which constitutes a legally binding contract between you and Auvra Tech Ltd effective from your first use. {/* [cite: 361] */}
            </p>
            <p className="mb-4">
              If you are using the Platform on behalf of an organization (including a museum, community group, or institution), you represent and warrant that you have the authority to bind that organization to these Terms, and in such case, "you" shall refer to that organization. {/* [cite: 362] */}
            </p>
            <p className="mb-4">
              Auvra reserves the right to update, modify, or replace these Terms at any time. {/* [cite: 363] */} Continued use of the Platform following any changes constitutes your acceptance of such changes. {/* [cite: 364] */} We will notify you of material changes via email or prominent notice on the Platform. {/* [cite: 365] */}
            </p>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">Eligibility {/* [cite: 366] */}</h4>
            <p className="mb-4">
              You may not use the Platform if you are under the age of 13 (or the applicable age of digital consent in your country, which may be higher, e.g., 16 in some jurisdictions). {/* [cite: 367] */} If you are between the ages of 13 and the age of majority in your country, you may only use the Platform with the involvement and consent of a parent or legal guardian. {/* [cite: 368] */}
            </p>
            <p>
              Auvra does not knowingly collect personal information from children under 13 without parental consent. {/* [cite: 369] */} If we become aware that a child under 13 has provided us with personal information without parental consent, we will delete it as described in our Privacy Policy. {/* [cite: 370] */}
            </p>
          </section>

          <section id="section-3" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">3. User Conduct {/* [cite: 371] */}</h3>
            <p className="mb-4">You agree to use the Platform only for lawful purposes and in accordance with this Agreement. {/* [cite: 372] */} You shall not: {/* [cite: 373] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Use the Platform in any way that violates applicable local, national, or international laws or regulations {/* [cite: 374] */}</li>
              <li>Upload, share, or distribute content that is unlawful, harmful, fraudulent, misleading, or that infringes on the intellectual property or cultural rights of others {/* [cite: 375] */}</li>
              <li>Misrepresent the cultural authenticity, origin, or significance of any preserved content {/* [cite: 376] */}</li>
              <li>Use the Platform for any form of financial speculation, market manipulation, or wash trading involving badges {/* [cite: 377] */}</li>
              <li>Attempt to gain unauthorized access to any part of the Platform or its systems {/* [cite: 378] */}</li>
              <li>Interfere with or disrupt the integrity or performance of the Platform, including its blockchain or AI services {/* [cite: 379] */}</li>
              <li>Misuse any features of the Platform, including AI-powered tools (Lens), transactions, or community verification systems {/* [cite: 380] */}</li>
            </ul>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">Consequences of Violation {/* [cite: 381] */}</h4>
            <p className="mb-4">Auvra reserves the right to investigate and take appropriate action against any violation of this Agreement. {/* [cite: 382] */} Depending on the severity and nature of the violation, actions may include: {/* [cite: 383] */}</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Issuing a warning {/* [cite: 384] */}</li>
              <li>Suspending or terminating your access to the Platform {/* [cite: 385] */}</li>
              <li>Removing or restricting access to specific content {/* [cite: 386] */}</li>
              <li>Temporarily freezing transactions or account features pending investigation {/* [cite: 387] */}</li>
              <li>Reporting the activity to law enforcement or regulatory authorities {/* [cite: 388] */}</li>
            </ul>
            <p>
              Any suspension or termination will be preceded by notice and an opportunity to respond, except where prohibited by law or where delay would risk harm to others or destruction of evidence. {/* [cite: 389] */}
            </p>
          </section>

          <section id="section-4" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">4. Intellectual Property & Cultural Ownership {/* [cite: 390] */}</h3>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">A. Our IP {/* [cite: 391] */}</h4>
            <p className="mb-4">All content, features, and functionality on the Platform, including but not limited to text, graphics, software, and trademarks, are the property of Auvra Tech Ltd or its licensors and are protected by applicable intellectual property laws. {/* [cite: 392] */}</p>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">B. User Content & Cultural Badges {/* [cite: 393] */}</h4>
            <p className="mb-4">Users retain ownership of the original content they create or upload ("User Content"). {/* [cite: 394] */} By submitting content to the Platform, you grant Auvra a non-exclusive, worldwide, royalty-free license to use, display, reproduce, and distribute such content for the purpose of operating and improving the Platform. {/* [cite: 395] */}</p>
            <p className="mb-4">Collectible Badges represent original creative works (art, music, crafts) that can be owned and transferred according to Platform rules. {/* [cite: 396] */} The creator retains intellectual property ownership; the badge represents a verified copy or limited edition. {/* [cite: 397] */}</p>
            <p className="mb-4">Contribution Badges represent shared cultural knowledge (oral histories, languages, rituals) and are preserved as part of the cultural commons. {/* [cite: 398] */} They are not subject to individual ownership. By contributing, you agree that the knowledge is shared for public benefit, subject to community verification and any access restrictions you set. {/* [cite: 399] */}</p>
            <p className="mb-4">You represent and warrant that you have the necessary rights to grant this license and that your content does not violate any third-party rights. {/* [cite: 400] */}</p>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">C. AI-Generated Output {/* [cite: 401] */}</h4>
            <p className="mb-4">Content generated or enhanced by Lens AI is based on your inputs and existing cultural data. {/* [cite: 402] */} Auvra does not claim ownership of AI-assisted outputs. However, their accuracy, cultural appropriateness, and legal status are not guaranteed. {/* [cite: 403] */} You remain fully responsible for verifying and taking ownership of AI-generated content. {/* [cite: 404] */}</p>
          </section>

          <section id="section-5" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">5. Payment Terms {/* [cite: 405] */}</h3>
            <p className="mb-4">Auvra may charge fees for certain services, including subscription plans, transaction fees on Collectible Badge sales, and credit-based fees for Collaboration Hub usage. {/* [cite: 406] */} All fees are clearly disclosed at the point of purchase. {/* [cite: 407] */}</p>
            <p className="mb-4">Subscriptions renew automatically at the end of each billing period unless cancelled. {/* [cite: 408] */} You may cancel at any time through your account settings; {/* [cite: 409] */} cancellation will take effect at the end of the current billing period. {/* [cite: 410] */} Fees are non-refundable except as required by law or explicitly stated in a separate refund policy. {/* [cite: 411] */}</p>
            <p>You are responsible for any taxes, duties, or levies applicable to your transactions or subscriptions. {/* [cite: 412] */} Auvra is not responsible for any fees charged by your payment provider or financial institution. {/* [cite: 413] */}</p>
          </section>

          <section id="section-6" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">6. Blockchain & Permanence {/* [cite: 414] */}</h3>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">A. On-Chain Records {/* [cite: 415] */}</h4>
            <p className="mb-4">Collectible and Contribution Badges are recorded on a public blockchain. {/* [cite: 416] */} The following data becomes immutable and cannot be deleted or altered once preserved: badge ID, creator wallet address, timestamp, and metadata hash. {/* [cite: 417] */} Full media content (images, audio, video) is stored off-chain using decentralised storage networks. {/* [cite: 418] */}</p>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">B. Private Vault Content {/* [cite: 419] */}</h4>
            <p className="mb-4">Content stored in My Vault (private family memories, photos, voice recordings, documents) is not recorded on the public blockchain. {/* [cite: 420] */} It is encrypted and stored off-chain. You control access via sharing permissions and authentication. {/* [cite: 421] */} This content can be deleted by you at any time. {/* [cite: 422] */}</p>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">C. Deletion Limitations {/* [cite: 423] */}</h4>
            <p className="mb-4">Because blockchain records are immutable, we cannot delete or alter on-chain badge data once preserved. {/* [cite: 424] */} If you request deletion of your account, we will remove off-chain content and personal information where possible, but on-chain badge records will remain as part of the public cultural archive. {/* [cite: 425] */} We will not associate them with your identity after deletion. {/* [cite: 426] */}</p>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">D. Wallet & Authentication {/* [cite: 427] */}</h4>
            <p>Auvra provides wallet abstraction via passkeys (biometric authentication). You are responsible for safeguarding your device and authentication credentials. {/* [cite: 428] */} If you choose to export your private keys, you assume full responsibility for loss or theft. {/* [cite: 429] */}</p>
          </section>

          <section id="section-7" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">7. AI Services (Lens) {/* [cite: 430] */}</h3>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">A. Nature of AI {/* [cite: 431] */}</h4>
            <p className="mb-4">Lens AI provides automated transcription, translation, tagging, enhancement, and Q&A responses. {/* [cite: 432] */} AI outputs may contain errors, omissions, or culturally inappropriate suggestions. {/* [cite: 433] */} They are not a substitute for human judgment, especially for sacred, restricted, or historically sensitive content. {/* [cite: 434] */}</p>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">B. No Warranty of Accuracy {/* [cite: 435] */}</h4>
            <p className="mb-4">Auvra does not warrant that AI outputs are accurate, complete, reliable, or culturally authoritative. {/* [cite: 436] */} You are solely responsible for verifying and editing AI-generated content before publishing or relying on it. {/* [cite: 437] */}</p>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">C. AI Training {/* [cite: 438] */}</h4>
            <p className="mb-4">By default, we do not use your personal content (including private vault content, badge media, or your prompts) to train or improve our AI models. {/* [cite: 439] */} If we offer an optional program to improve Lens AI, participation will be opt-in only through a separate consent flow. {/* [cite: 440] */} Private vault content will never be used for training unless you explicitly move it to a public badge or give separate, informed consent. {/* [cite: 441] */} You may withdraw consent at any time, but content already incorporated into a trained model cannot be retroactively removed. {/* [cite: 442] */}</p>
          </section>

          <section id="section-8" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">8. Disclaimer of Warranties {/* [cite: 443] */}</h3>
            <p className="mb-4">The Platform is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. {/* [cite: 444] */} Auvra does not warrant that: {/* [cite: 445] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>The Platform will be uninterrupted or error-free {/* [cite: 446] */}</li>
              <li>The Platform will meet your specific requirements {/* [cite: 447] */}</li>
              <li>Any content, including AI-generated outputs, will be accurate, reliable, or culturally authoritative {/* [cite: 448] */}</li>
              <li>Blockchain records or stored media will be immune from technological failures beyond our reasonable control {/* [cite: 449] */}</li>
              <li>The Platform will be free from viruses or other harmful components {/* [cite: 450] */}</li>
            </ul>
            <p>Your use of the Platform is at your sole risk. {/* [cite: 451] */}</p>
          </section>

          <section id="section-9" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">9. Limitation of Liability {/* [cite: 452] */}</h3>
            <p className="mb-4">To the fullest extent permitted by applicable law, Auvra Tech Ltd and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or other intangible losses, arising out of or related to your use or inability to use the Platform, even if advised of the possibility of such damages. {/* [cite: 453] */}</p>
            <p className="mb-4">Our total aggregate liability arising out of or related to this Agreement shall not exceed the amount you paid Auvra in the twelve (12) months preceding the event giving rise to liability, or one hundred US dollars (USD $100), whichever is greater. {/* [cite: 454] */}</p>
            <p>Some jurisdictions do not allow the exclusion or limitation of certain damages, so this limitation may not apply to you to the extent prohibited by local law. {/* [cite: 455] */} In such cases, our liability shall be limited to the minimum extent permitted by law. {/* [cite: 456] */}</p>
          </section>

          <section id="section-10" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">10. Governing Law & Dispute Resolution {/* [cite: 457] */}</h3>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">A. Governing Law for Non-Consumer Users {/* [cite: 458] */}</h4>
            <p className="mb-4">For users who are not consumers (i.e., using the Platform on behalf of a business or organisation), this Agreement shall be governed by the laws of the Federal Republic of Nigeria, and any dispute shall be resolved through binding arbitration in Lagos, Nigeria, as described below. {/* [cite: 459] */}</p>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">B. Governing Law for Consumer Users in the EEA or UK {/* [cite: 460] */}</h4>
            <p className="mb-4">If you are a consumer resident in the European Economic Area (EEA) or the United Kingdom, you may bring any dispute arising out of this Agreement in the courts of your country of residence, and this Agreement shall be governed by the laws of that country (excluding its conflict of laws rules) where required by applicable consumer protection law. {/* [cite: 461] */} In all other respects, the arbitration provision below shall apply to the extent permitted by law. {/* [cite: 462] */}</p>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">C. Arbitration for Non-Consumer & Non-EEA/UK Users {/* [cite: 463] */}</h4>
            <p className="mb-4">Any dispute, claim, or controversy arising out of or relating to this Agreement that is not resolved through good faith negotiations within thirty (30) days shall be submitted to binding arbitration in Lagos, Nigeria, in accordance with the Arbitration and Conciliation Act of Nigeria. {/* [cite: 464] */} The arbitration shall be conducted by a single arbitrator mutually agreed upon by the parties. {/* [cite: 465] */} Judgment on the arbitral award may be entered in any court having jurisdiction. {/* [cite: 466] */}</p>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">D. Exceptions {/* [cite: 467] */}</h4>
            <p>Nothing in this section shall prevent either party from seeking injunctive or other equitable relief in a court of competent jurisdiction to protect its intellectual property or confidential information. {/* [cite: 468] */}</p>
          </section>

          <section id="section-11" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">11. Termination {/* [cite: 469] */}</h3>
            <p className="mb-4">Auvra reserves the right to suspend or terminate your access to the Platform at any time, without prior notice, if you violate these Terms or engage in conduct that may harm the Platform or its users. {/* [cite: 470] */}</p>
            <p className="mb-4">Where we suspend or terminate without prior notice, we will provide notice and an opportunity to respond promptly afterward, unless: {/* [cite: 471] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>We are prohibited by law from notifying you (e.g., "no-tipping-off" provisions under AML/CFT regulations), or {/* [cite: 472] */}</li>
              <li>Immediate suspension is necessary to prevent imminent harm to the Platform, its users, or an ongoing investigation. {/* [cite: 473] */}</li>
            </ul>
            <p>In such cases, we will provide notice as soon as legally permissible. {/* [cite: 474] */}</p>
          </section>

          <section id="section-12" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">12. Privacy {/* [cite: 475] */}</h3>
            <p>Your use of the Platform is also governed by our Privacy Policy, which explains how we collect, use, and protect your information. {/* [cite: 476] */} Including data processed by Lens AI, stored in encrypted vaults, and recorded on the blockchain. {/* [cite: 477] */}</p>
          </section>

          <section id="section-13" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">13. Changes to Terms {/* [cite: 478] */}</h3>
            <p className="mb-4">Auvra may revise these Terms at any time. Updated versions will be posted on the Platform with a revised effective date. {/* [cite: 479] */} For material changes, we will notify you via email or prominent notice on the Platform. {/* [cite: 480] */} Your continued use of the Platform after such changes constitutes your acceptance of the updated Terms. {/* [cite: 481] */}</p>
          </section>

          <section id="section-14" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">14. Miscellaneous {/* [cite: 482] */}</h3>
            <ul className="list-disc pl-5 space-y-4 mb-4">
              <li><strong>Severability:</strong> If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. {/* [cite: 483] */}</li>
              <li><strong>Waiver:</strong> Failure by Auvra to enforce any right or provision under these Terms shall not constitute a waiver of such right or provision. {/* [cite: 484] */}</li>
              <li><strong>Assignment:</strong> You may not assign your rights under this Agreement without our prior written consent. {/* [cite: 485] */} We may assign our rights freely. {/* [cite: 486] */}</li>
              <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Auvra regarding your use of the Platform. {/* [cite: 487] */}</li>
            </ul>
          </section>

          <section id="section-15" className="pt-8 mt-8 border-t border-gray-100 scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">15. Contact Information {/* [cite: 488] */}</h3>
            <p className="mb-4">If you have any questions, requests, or concerns regarding these Terms, please contact: {/* [cite: 489] */}</p>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <p className="font-medium text-gray-900">Auvra Tech Ltd {/* [cite: 490] */}</p>
              <p>Email: <a href="mailto:info@goauvra.com" className="text-blue-600 hover:underline">info@goauvra.com</a> {/* [cite: 491] */}</p>
              <p>Website: <a href="https://www.goauvra.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.goauvra.com</a> {/* [cite: 492] */}</p>
            </div>
          </section>

        </div>
      </div>
    </LegalLayout>
  );
}