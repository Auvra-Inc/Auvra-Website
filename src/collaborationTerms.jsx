import React from 'react';
import LegalLayout from './LegalLayout';

export default function CollaborationTerms() {
  return (
    <LegalLayout currentPage="collab">
      <div className="prose prose-gray max-w-none">
        
        <h2 className="text-3xl font-clash font-medium text-gray-900 mb-2">Collaboration Hub Terms {/* [cite: 245] */}</h2>
        <p className="text-gray-600 mb-2">Clear rules for creating together wherever the work leads. {/* [cite: 246, 247] */}</p>
        <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          Last Updated: April 2026 {/* [cite: 248] */}
        </p>

        {/* FUNCTIONAL TABLE OF CONTENTS */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-10">
          <h3 className="font-clash font-medium text-lg text-gray-900 mb-4">Table of Contents</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
            <li><a href="#section-1" className="text-blue-600 hover:underline">1. Introduction</a></li>
            <li><a href="#section-2" className="text-blue-600 hover:underline">2. Eligibility and Verification</a></li>
            <li><a href="#section-3" className="text-blue-600 hover:underline">3. Creating or Joining a Collaboration</a></li>
            <li><a href="#section-4" className="text-blue-600 hover:underline">4. Ownership and Revenue Splits</a></li>
            <li><a href="#section-5" className="text-blue-600 hover:underline">5. Locking the Agreement</a></li>
            <li><a href="#section-6" className="text-blue-600 hover:underline">6. Revenue Distribution (Only If Applicable)</a></li>
            <li><a href="#section-7" className="text-blue-600 hover:underline">7. Dispute Resolution</a></li>
            <li><a href="#section-8" className="text-blue-600 hover:underline">8. Termination and Leaving a Collaboration</a></li>
            <li><a href="#section-9" className="text-blue-600 hover:underline">9. Auvra's Role</a></li>
            <li><a href="#section-10" className="text-blue-600 hover:underline">10. Relationship to Other Policies</a></li>
            <li><a href="#section-11" className="text-blue-600 hover:underline">11. Contact Information</a></li>
          </ul>
        </div>

        <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">
          
          <section id="section-1" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">1. Introduction</h3>
            <p className="mb-4">
              The Collaboration Hub is a feature of the Auvra Platform that allows users to work together on projects including shared workspaces, task management, and agreement tools. {/* [cite: 262] */} These Collaboration Hub Terms ("Hub Terms") supplement our main Terms of Service and apply whenever you use the Collaboration Hub. {/* [cite: 263] */}
            </p>
            <p className="mb-4">
              The Collaboration Hub is a tool, not a destination. You may use it to collaborate on projects that result in badges preserved on Auvra, projects that are completed entirely outside the Platform, or projects that never produce a badge at all. {/* [cite: 264] */}
            </p>
            <p>
              By using the Collaboration Hub, you agree to these Hub Terms. {/* [cite: 265] */} If there is a conflict between these Hub Terms and our main Terms of Service, these Hub Terms will govern your use of the Collaboration Hub. {/* [cite: 266] */}
            </p>
          </section>

          <section id="section-2" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">2. Eligibility and Verification</h3>
            <p className="mb-4">
              To use the Collaboration Hub, you must complete identity verification (KYC) to the level required by our AML/CFT Policy. {/* [cite: 268] */} Auvra will not grant access to the Collaboration Hub until verification is complete. {/* [cite: 269] */}
            </p>
            <p>
              Auvra reserves the right to suspend or revoke Collaboration Hub access if your verification status changes or if you are found to have provided false information. {/* [cite: 270] */}
            </p>
          </section>

          <section id="section-3" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">3. Creating or Joining a Collaboration</h3>
            <p className="mb-4">When you create or join a collaboration, you agree to: {/* [cite: 272] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Define the scope and goals of the project {/* [cite: 273] */}</li>
              <li>Identify all collaborators (by Auvra username) {/* [cite: 274] */}</li>
              <li>Set ownership splits, revenue shares, and usage rights before any work begins (where applicable) {/* [cite: 275] */}</li>
              <li>Comply with the Community Guidelines and all other Auvra policies {/* [cite: 276] */}</li>
            </ul>
            <p className="mb-4">You may invite any verified Auvra user to join a collaboration. Invitations may be accepted or declined. {/* [cite: 277] */}</p>
            <p>Collaborations may be for cultural works, commercial projects, community initiatives, educational content, or any other lawful purpose. {/* [cite: 278] */} The Collaboration Hub does not require that the final work be preserved on Auvra or anywhere else. {/* [cite: 279] */}</p>
          </section>

          <section id="section-4" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">4. Ownership and Revenue Splits</h3>
            <p className="mb-4">Before any work begins, collaborators may agree on (but are not required to): {/* [cite: 281] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><strong>Ownership splits</strong> - the percentage of the final work owned by each collaborator {/* [cite: 282] */}</li>
              <li><strong>Revenue splits</strong> - the percentage of proceeds from any future sale received by each collaborator {/* [cite: 282] */}</li>
              <li><strong>Usage rights</strong> - whether the work can be used outside the Platform and under what conditions {/* [cite: 283] */}</li>
            </ul>
            <p>If you choose to record these terms in the Collaboration Hub, they become binding once all collaborators have accepted them. {/* [cite: 284] */} If you do not use these tools, you are solely responsible for your own agreements. {/* [cite: 285] */}</p>
          </section>

          <section id="section-5" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">5. Locking the Agreement</h3>
            <p className="mb-4">If you record ownership, revenue, or usage terms in the Collaboration Hub, the agreement becomes locked once all collaborators have accepted it. {/* [cite: 287] */} Locked terms cannot be changed except by unanimous consent of all collaborators, and any such change will be recorded as an amendment. {/* [cite: 288] */}</p>
            <p>Locking the agreement is only required if you want Auvra to automatically distribute revenue from badge sales. {/* [cite: 289] */} If your project never involves an Auvra badge sale, locking is optional. {/* [cite: 290] */}</p>
          </section>

          <section id="section-6" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">6. Revenue Distribution (Only If Applicable)</h3>
            <p className="mb-4">If your collaboration results in a badge sale on Auvra, and you have locked a revenue split in the Collaboration Hub, Auvra will distribute proceeds according to that split. {/* [cite: 292] */} Distributions are made in USDC to each collaborator's Auvra wallet. {/* [cite: 293] */}</p>
            <p className="mb-4">If a collaborator has not completed KYC or cannot receive USDC (e.g., due to sanctions, platform restrictions, or unverified status), Auvra will hold their share of the proceeds until they become eligible. {/* [cite: 294] */} If eligibility is not established within a reasonable time (e.g., 12 months), the funds may be donated to a cultural preservation cause at Auvra's discretion, after reasonable attempts to contact the collaborator. {/* [cite: 295] */}</p>
            <p className="mb-4">Auvra deducts any applicable transaction fees (as described in our main Terms of Service) before distribution. {/* [cite: 296] */}</p>
            <p>If your project does not involve a badge sale on Auvra, this section does not apply. {/* [cite: 297] */} Auvra has no role in any payments made outside the Platform. {/* [cite: 298] */}</p>
          </section>

          <section id="section-7" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">7. Dispute Resolution</h3>
            <p className="mb-4">Disputes arising from a collaboration (e.g., ownership, attribution, revenue, or breach of any agreement) shall first be resolved through good faith negotiations among the collaborators. {/* [cite: 300] */} If the dispute cannot be resolved within thirty (30) days, it may be submitted to the dispute resolution process described in Section 11 of our main Terms of Service (Governing Law & Dispute Resolution). {/* [cite: 301] */}</p>
            <p className="mb-4">Auvra does not arbitrate or mediate disputes. We provide the tools for collaboration but are not a party to your agreements. {/* [cite: 302] */}</p>
            <p>The term "community governance mechanisms" refers to informal processes that communities may choose to adopt (e.g., elder review, consensus voting), but these are not provided or enforced by Auvra. {/* [cite: 303] */}</p>
          </section>

          <section id="section-8" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">8. Termination and Leaving a Collaboration</h3>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">Leaving a collaboration</h4>
            <p className="mb-4">Any collaborator may leave a collaboration at any time. Leaving does not cancel obligations already accepted (e.g., ownership or revenue commitments for work already completed). {/* [cite: 306] */} Leaving does not affect ownership or revenue rights for work completed before departure, unless your locked agreement provides otherwise. {/* [cite: 307] */}</p>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">Termination by Auvra</h4>
            <p className="mb-4">Auvra may suspend or terminate access to the Collaboration Hub if a user violates these Hub Terms, the main Terms of Service, or the Community Guidelines. {/* [cite: 309] */} Termination of access does not affect ownership rights in already-completed work. {/* [cite: 310] */}</p>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">Completion or abandonment</h4>
            <p>Collaborations may be marked as completed by unanimous consent, or as abandoned after six consecutive months of inactivity. {/* [cite: 312] */} "Inactivity" means no logins, file uploads, messages, or other actions by any collaborator within that period. {/* [cite: 313] */} Auvra reserves the right to close abandoned collaborations after providing 30 days' notice to the collaborators' registered email addresses. {/* [cite: 314] */}</p>
          </section>

          <section id="section-9" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">9. Auvra's Role</h3>
            <p className="mb-4">Auvra provides the tools for collaboration but is not a party to your agreements. We do not: {/* [cite: 316] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Require that your project result in a badge or anything on the Platform {/* [cite: 317] */}</li>
              <li>Verify the accuracy or fairness of any terms you set {/* [cite: 318] */}</li>
              <li>Enforce your internal agreements except as necessary to operate the Platform (e.g., distributing revenue according to the splits you set) {/* [cite: 319, 320] */}</li>
              <li>Arbitrate or mediate disputes between collaborators {/* [cite: 321] */}</li>
            </ul>
            <p>We may, however, suspend or terminate access to the Collaboration Hub for violations of our policies. {/* [cite: 322] */}</p>
          </section>

          <section id="section-10" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">10. Relationship to Other Policies</h3>
            <p className="mb-4">These Hub Terms supplement, and do not replace: {/* [cite: 324] */}</p>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>Our main Terms of Service {/* [cite: 325] */}</li>
              <li>Privacy Policy {/* [cite: 326] */}</li>
              <li>Community Guidelines {/* [cite: 327] */}</li>
              <li>Content Ownership Policy {/* [cite: 328] */}</li>
              <li>Copyright Policy {/* [cite: 329] */}</li>
              <li>AI Policy {/* [cite: 330] */}</li>
            </ul>
            <p>In the event of a direct conflict, these Hub Terms will govern your use of the Collaboration Hub. {/* [cite: 331] */}</p>
          </section>

          <section id="section-11" className="pt-8 mt-8 border-t border-gray-100 scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">11. Contact Information</h3>
            <p className="mb-4">For questions about these Collaboration Hub Terms: {/* [cite: 333] */}</p>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <p className="font-medium text-gray-900">Auvra Tech Ltd {/* [cite: 334] */}</p>
              <p>Email: <a href="mailto:info@goauvra.com" className="text-blue-600 hover:underline">info@goauvra.com</a> {/* [cite: 335] */}</p>
              <p>Website: <a href="https://www.goauvra.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.goauvra.com</a> {/* [cite: 335] */}</p>
            </div>
          </section>

        </div>
      </div>
    </LegalLayout>
  );
}