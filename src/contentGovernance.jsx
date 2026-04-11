import React from 'react';
import LegalLayout from './LegalLayout';

export default function ContentGovernance() {
  return (
    <LegalLayout currentPage="governance">
      <div className="prose prose-gray max-w-none">
        
        <h2 className="text-3xl font-clash font-medium text-gray-900 mb-2">Content Governance Policy {/* [cite: 744] */}</h2>
        <p className="text-gray-600 mb-2">How we manage cultural content, verification, and moderation. {/* [cite: 745] */}</p>
        <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          Last Updated: April 2026 {/* [cite: 746] */}
        </p>

        {/* FUNCTIONAL TABLE OF CONTENTS */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-10">
          <h3 className="font-clash font-medium text-lg text-gray-900 mb-4">Table of Contents</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
            <li><a href="#section-1" className="text-blue-600 hover:underline">1. Introduction</a></li>
            <li><a href="#section-2" className="text-blue-600 hover:underline">2. Governance Tiers by Content Type</a></li>
            <li><a href="#section-3" className="text-blue-600 hover:underline">3. Community Verification (Contribution Badges)</a></li>
            <li><a href="#section-4" className="text-blue-600 hover:underline">4. Moderation Standards</a></li>
            <li><a href="#section-5" className="text-blue-600 hover:underline">5. Content Review and Removal</a></li>
            <li><a href="#section-6" className="text-blue-600 hover:underline">6. Appeals Process</a></li>
            <li><a href="#section-7" className="text-blue-600 hover:underline">7. Transparency Reporting</a></li>
            <li><a href="#section-8" className="text-blue-600 hover:underline">8. Relationship to Other Policies</a></li>
            <li><a href="#section-9" className="text-blue-600 hover:underline">9. Contact Information</a></li>
          </ul>
        </div>

        <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">
          
          <section id="section-1" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">1. Introduction {/* [cite: 747] */}</h3>
            <p className="mb-4">
              This Content Governance Policy explains how Auvra manages cultural content across the Platform - specifically, how content is verified, moderated, and removed when it violates our rules or legal obligations. {/* [cite: 748] */} It does not replace our Copyright Policy (legal takedowns) or Community Guidelines (user behaviour). {/* [cite: 749] */} Instead, it focuses on the operational framework for content decisions. {/* [cite: 750] */}
            </p>
            <p>
              This policy applies to all content on the Platform, including badges, profiles, comments, collaboration files, and private vault content (where applicable). {/* [cite: 751] */}
            </p>
          </section>

          <section id="section-2" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">2. Governance Tiers by Content Type {/* [cite: 752] */}</h3>
            <p className="mb-4">Different content types have different governance models: {/* [cite: 753] */}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 font-medium text-gray-900">Content Type</th>
                    <th className="py-2 font-medium text-gray-900">Governance Model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-medium text-gray-900">Collectible Badges</td>
                    <td className="py-3">Creator-owned. {/* [cite: 755] */} Removed only for legal violations (e.g., copyright, illegality) or policy violations (e.g., hate speech). {/* [cite: 755] */}</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-gray-900">Contribution Badges</td>
                    <td className="py-3">Community-verified. {/* [cite: 756] */} Subject to authenticity review by designated community members. {/* [cite: 756] [cite: 757] */}</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-gray-900">Private Vault Content</td>
                    <td className="py-3">User-controlled. {/* [cite: 758] */} Auvra does not moderate unless reported or required by law. {/* [cite: 758] */}</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-gray-900">User Profiles and Comments</td>
                    <td className="py-3">Subject to Community Guidelines. {/* [cite: 759] */} Moderated for abuse, hate speech, or harassment. {/* [cite: 759] */}</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-gray-900">Collaboration Files</td>
                    <td className="py-3">Governed by Collaboration Hub Terms. {/* [cite: 760] */} Moderated only for legal or severe policy violations. {/* [cite: 760] */}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="section-3" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">3. Community Verification (Contribution Badges) {/* [cite: 761] */}</h3>
            <p className="mb-4">Contribution Badges rely on community members to verify cultural authenticity and accuracy. {/* [cite: 762] */}</p>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">Who can verify? {/* [cite: 763] */}</h4>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Community elders</strong> - individuals recognised by their community as having authority over cultural knowledge. {/* [cite: 764] */} Auvra does not appoint elders; communities designate them. {/* [cite: 764] [cite: 765] */}</li>
              <li><strong>Community verifiers</strong> - users who have earned trust through consistent, accurate contributions over time, as determined by Auvra's reputation system (e.g., number of successful verifications, positive feedback). {/* [cite: 766] */}</li>
            </ul>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">What can be verified? {/* [cite: 767] */}</h4>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Cultural authenticity (e.g., "This is a genuine Igbo proverb") {/* [cite: 768] */}</li>
              <li>Historical or contextual accuracy {/* [cite: 769] */}</li>
              <li>Appropriate classification (e.g., sacred vs. public) {/* [cite: 770] */}</li>
            </ul>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">Verification process {/* [cite: 771] */}</h4>
            <ol className="list-decimal pl-5 space-y-1 mb-4">
              <li>A user submits a Contribution Badge. {/* [cite: 772] */}</li>
              <li>Relevant communities are notified for verification. {/* [cite: 773] */}</li>
              <li>Verified users may approve, reject, or add contextual notes. {/* [cite: 774] */}</li>
              <li>A badge may be marked as "Community Verified" after sufficient endorsements (threshold defined operationally). {/* [cite: 775] */}</li>
              <li>Disputed badges may be escalated to community elders or Auvra moderators. {/* [cite: 776] */}</li>
            </ol>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">Verification thresholds {/* [cite: 777] */}</h4>
            <p className="mb-2">
              The number of endorsements required for "Community Verified" status may be adjusted based on platform growth, abuse patterns, and community feedback. {/* [cite: 778] */} Auvra will announce significant changes to verification thresholds. {/* [cite: 779] */}
            </p>
            <p>
              Verification is not a guarantee of absolute truth it reflects reasonable consensus within the verifying community. {/* [cite: 780] */} Auvra does not arbitrate disputes over cultural truth. {/* [cite: 781] */}
            </p>
          </section>

          <section id="section-4" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">4. Moderation Standards {/* [cite: 782] */}</h3>
            <p className="mb-4">Auvra moderates content based on these standards: {/* [cite: 783] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><strong>Illegal content</strong> - Removed and reported to authorities (e.g., child exploitation, terrorist content). {/* [cite: 784] */}</li>
              <li><strong>Hate speech</strong> - Content that attacks or demeans individuals or groups based on protected characteristics. {/* [cite: 785] */}</li>
              <li><strong>Harassment and threats</strong> - Repeated targeting, intimidation, or doxxing. {/* [cite: 786] */}</li>
              <li><strong>Cultural misrepresentation</strong> - Knowingly false claims of cultural origin or significance. {/* [cite: 787] */}</li>
              <li><strong>Spam and scams</strong> - Repetitive, irrelevant, or deceptive content. {/* [cite: 788] */}</li>
            </ul>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">Who moderates? {/* [cite: 789] */}</h4>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Automated tools (for spam, sensitive content flags) {/* [cite: 790] */}</li>
              <li>Trained Auvra moderators {/* [cite: 791] */}</li>
              <li>Community verifiers (for Contribution Badges) {/* [cite: 792] */}</li>
            </ul>
            <p>Moderation actions may include: content removal, labelling, reduced visibility, account restriction, or suspension. {/* [cite: 793] */}</p>
          </section>

          <section id="section-5" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">5. Content Review and Removal {/* [cite: 794] */}</h3>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">Who can request a review? {/* [cite: 795] */}</h4>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>The content owner {/* [cite: 796] */}</li>
              <li>A verified community representative (for Contribution Badges) {/* [cite: 797] */}</li>
              <li>Any user reporting a violation {/* [cite: 798] */}</li>
              <li>Law enforcement or regulatory authorities {/* [cite: 799] */}</li>
            </ul>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">How to request a review {/* [cite: 800] */}</h4>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Use the in-app reporting tool {/* [cite: 801] */}</li>
              <li>Email info@goauvra.com with "Content Review Request" in the subject line {/* [cite: 802] */}</li>
            </ul>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">Review process {/* [cite: 803] */}</h4>
            <ol className="list-decimal pl-5 space-y-1 mb-4">
              <li>We acknowledge receipt within 2-3 business days. {/* [cite: 804] */}</li>
              <li>We review the request against this policy and applicable law. {/* [cite: 805] */}</li>
              <li>If removal is justified, we remove or restrict access. {/* [cite: 806] */}</li>
              <li>We notify the content owner of the outcome. {/* [cite: 807] */} The reporter may also be notified unless doing so would compromise an investigation, violate legal obligations, or breach confidentiality. {/* [cite: 807] */}</li>
            </ol>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">Emergency removals {/* [cite: 808] */}</h4>
            <p>For content that poses immediate risk of harm (e.g., violence, exploitation), we may remove without prior notice and report to authorities. {/* [cite: 809] */}</p>
          </section>

          <section id="section-6" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">6. Appeals Process {/* [cite: 810] */}</h3>
            <p className="mb-4">If your content was removed or your account restricted, you may appeal. {/* [cite: 811] */}</p>
            
            <h4 className="font-medium text-gray-900 mt-6 mb-2">How to appeal {/* [cite: 812] */}</h4>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Email info@goauvra.com with "Content Governance Appeal" in the subject line {/* [cite: 813] */}</li>
              <li>Include: your username, a description of the content or action, and why you believe it should be reconsidered {/* [cite: 814] */}</li>
            </ul>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">Appeal process {/* [cite: 815] */}</h4>
            <ol className="list-decimal pl-5 space-y-1 mb-4">
              <li>We review your appeal within 14 days. {/* [cite: 816] */}</li>
              <li>We may uphold, reverse, or modify the original decision. {/* [cite: 817] */}</li>
              <li>We notify you of the outcome. {/* [cite: 818] */}</li>
            </ol>

            <h4 className="font-medium text-gray-900 mt-6 mb-2">Final review {/* [cite: 819] */}</h4>
            <p>
              If dissatisfied, you may request a final review by our Compliance Officer (the same role responsible for AML/CFT oversight). {/* [cite: 820] */} The Compliance Officer has authority to review and decide on moderation appeals that raise legal, regulatory, or serious policy concerns. {/* [cite: 821] */} For routine content disputes, a senior moderator will conduct the final review. The decision is final, subject to legal rights. {/* [cite: 822] */}
            </p>
          </section>

          <section id="section-7" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">7. Transparency Reporting {/* [cite: 823] */}</h3>
            <p className="mb-4">Auvra will publish an annual transparency report covering: {/* [cite: 824] */}</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Number of content removal requests received {/* [cite: 825] */}</li>
              <li>Number of removals by category (e.g., copyright, hate speech, cultural misrepresentation) {/* [cite: 826] */}</li>
              <li>Number of appeals and outcomes {/* [cite: 826] */}</li>
              <li>Number of accounts suspended or terminated {/* [cite: 827] */}</li>
            </ul>
            <p>The first report will be published within 12 months of launch and annually thereafter. {/* [cite: 828] */}</p>
          </section>

          <section id="section-8" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">8. Relationship to Other Policies {/* [cite: 829] */}</h3>
            <p className="mb-4">This Content Governance Policy focuses on verification, moderation, and removal. {/* [cite: 830] */} It does not replace: {/* [cite: 830] */}</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Copyright Policy - for legal takedowns of infringing material {/* [cite: 831] */}</li>
              <li>Community Guidelines - for user behaviour rules {/* [cite: 832] */}</li>
              <li>Content Ownership Policy - for ownership of Collectible vs Contribution Badges {/* [cite: 833] */}</li>
              <li>AI Policy - for Lens AI outputs {/* [cite: 834] */}</li>
              <li>Collaboration Hub Terms - for collaborative project governance {/* [cite: 835] */}</li>
            </ul>
            <p>In the event of a direct conflict, this policy will govern content moderation decisions. {/* [cite: 836] */}</p>
          </section>

          <section id="section-9" className="pt-8 mt-8 border-t border-gray-100 scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">9. Contact Information {/* [cite: 837] */}</h3>
            <p className="mb-2">For questions about this Content Governance Policy or to submit a review request: {/* [cite: 838] */}</p>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <p className="font-medium text-gray-900">Auvra Tech Ltd {/* [cite: 839] */}</p>
              <p>Email: <a href="mailto:info@goauvra.com" className="text-blue-600 hover:underline">info@goauvra.com</a> {/* [cite: 840] */}</p>
              <p>Mailing address: No 13 God Time Estate, Igbe Ikorodu, Lagos State, Nigeria {/* [cite: 841] */}</p>
            </div>
            <p className="text-sm text-gray-500 mt-4">Please include "Content Governance Question" or "Content Review Request" in the subject line, as applicable. {/* [cite: 842] */}</p>
          </section>

        </div>
      </div>
    </LegalLayout>
  );
}