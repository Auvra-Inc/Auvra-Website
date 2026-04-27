import React from 'react';
import LegalLayout from './legalLayout';


export default function AMLPolicy() {
  return (
    <LegalLayout currentPage="aml">
      <div className="prose prose-gray max-w-none font-clash">
        
        {/* Document Title & Subtitle */}
        <h2 className="text-3xl font-clash font-medium text-gray-900 mb-2">Anti-Money Laundering (AML) / Counter Financing of Terrorism (CFT) Policy {/* [cite: 148] */}</h2>
        <p className="text-gray-600 mb-2">Ensuring Integrity, Transparency, and Compliance {/* [cite: 149] */}</p>
        <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          Last Updated: April 2026 {/* [cite: 150] */}
        </p>

        {/* FUNCTIONAL TABLE OF CONTENTS */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-10">
          <h3 className="font-clash font-medium text-lg text-gray-900 mb-4">Table of Contents</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
            <li><a href="#section-1" className="text-blue-600 hover:underline">1. Introduction</a></li>
            <li><a href="#section-2" className="text-blue-600 hover:underline">2. Purpose</a></li>
            <li><a href="#section-3" className="text-blue-600 hover:underline">3. Scope</a></li>
            <li><a href="#section-4" className="text-blue-600 hover:underline">4. Customer Due Diligence (CDD)</a></li>
            <li><a href="#section-5" className="text-blue-600 hover:underline">5. Transaction Monitoring</a></li>
            <li><a href="#section-6" className="text-blue-600 hover:underline">6. Suspicious Activity Reporting (SAR)</a></li>
            <li><a href="#section-7" className="text-blue-600 hover:underline">7. Record Keeping</a></li>
            <li><a href="#section-8" className="text-blue-600 hover:underline">8. Risk-Based Approach</a></li>
            <li><a href="#section-9" className="text-blue-600 hover:underline">9. Compliance Officer</a></li>
            <li><a href="#section-10" className="text-blue-600 hover:underline">10. Training and Awareness</a></li>
            <li><a href="#section-11" className="text-blue-600 hover:underline">11. Monitoring and Review</a></li>
            <li><a href="#section-12" className="text-blue-600 hover:underline">12. Contact Information</a></li>
          </ul>
        </div>

        {/* Document Content */}
        <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">
          
          <section id="section-1" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">1. Introduction</h3>
            <p className="mb-4">
              Auvra Tech Ltd is committed to complying with all applicable laws and regulations aimed at preventing money laundering, terrorist financing, and other financial crimes. {/* [cite: 152] */}
            </p>
            <p>
              As a platform that facilitates digital transactions, cultural asset ownership (Collectible and Contribution Badges), creator payments, and community-driven economies, Auvra maintains robust Anti-Money Laundering ("AML") and Counter Financing of Terrorism ("CFT") controls to prevent the misuse of our Platform for illegal activities. {/* [cite: 153] */}
            </p>
          </section>

          <section id="section-2" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">2. Purpose</h3>
            <p className="mb-4">The purpose of this AML/CFT Policy is to establish a clear framework that: {/* [cite: 155] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Ensures compliance with applicable AML/CFT laws and regulations {/* [cite: 156] */}</li>
              <li>Detects and prevents illicit financial activities {/* [cite: 157] */}</li>
              <li>Protects the integrity of Auvra's ecosystem {/* [cite: 158] */}</li>
              <li>Promotes trust and transparency among users {/* [cite: 159] */}</li>
            </ul>
            <p>
              This Policy is designed in alignment with global best practices and applicable financial regulations, including but not limited to Nigeria's Money Laundering (Prevention and Prohibition) Act and the recommendations of the Financial Action Task Force (FATF). {/* [cite: 160] */}
            </p>
          </section>

          <section id="section-3" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">3. Scope</h3>
            <p className="mb-4">This Policy applies to: {/* [cite: 162] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Users of the Auvra Platform who engage in activities that may present money laundering or terrorist financing risks (e.g., financial transactions, high-value badge sales, cross-border payments) {/* [cite: 163] */}</li>
              <li>Employees, contractors, and agents of Auvra {/* [cite: 164] */}</li>
              <li>Third-party service providers and partners {/* [cite: 164] */}</li>
            </ul>
            <p className="mb-4">
              Users who only use low-risk features (e.g., viewing public content, using free Contribution Badges without financial activity) may not be subject to all elements of this Policy. {/* [cite: 165] */} However, Auvra reserves the right to apply appropriate measures based on risk assessment. {/* [cite: 166] */}
            </p>
            <p>
              Any violation of this Policy may result in suspension, termination, or legal action. {/* [cite: 167] */}
            </p>
          </section>

          <section id="section-4" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">4. Customer Due Diligence (CDD)</h3>
            <p className="mb-4">Auvra conducts Customer Due Diligence based on a risk-based assessment. {/* [cite: 169] */} CDD is triggered by certain activities, including but not limited to: {/* [cite: 170] */}</p>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>Creating a Collectible Badge for sale {/* [cite: 171] */}</li>
              <li>Receiving or sending payments above a threshold (to be defined operationally and updated as needed) {/* [cite: 172] */}</li>
              <li>Subscribing to a paid community or vault plan {/* [cite: 173] */}</li>
              <li>Withdrawing or transferring significant value from the Platform {/* [cite: 174] */}</li>
              <li>Any activity that otherwise presents heightened risk {/* [cite: 175] */}</li>
            </ul>
            
            <p className="mb-4"><strong>Standard CDD includes:</strong> {/* [cite: 176] */} Collection of full name, email address, and basic profile information. {/* [cite: 177] */}</p>
            
            <p className="mb-4"><strong>Enhanced Due Diligence (EDD)</strong> may be required for users who: {/* [cite: 178] */}</p>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li>Engage in high-value transactions (threshold defined operationally) {/* [cite: 179] */}</li>
              <li>Are located in or transact with high-risk jurisdictions (as defined by FATF or local regulators) {/* [cite: 180] */}</li>
              <li>Exhibit unusual transaction patterns or are identified as politically exposed persons (PEPs) {/* [cite: 180] */}</li>
            </ul>
            
            <p className="mb-4">EDD may include verification of government-issued identification, proof of address, and source of funds documentation. {/* [cite: 181] */} Auvra reserves the right to suspend or restrict access to certain features until CDD or EDD is satisfactorily completed. {/* [cite: 182] */}</p>
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-4">
              <h4 className="font-medium text-gray-900 mb-2">Operational Thresholds: {/* [cite: 183] */}</h4>
              <p className="text-sm mb-3">For the purposes of this Policy, the following thresholds apply (subject to change with notice to users and regulatory authorities where required): {/* [cite: 184] */}</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>CDD trigger:</strong> Cumulative transactions or badge sales exceeding the equivalent of $1,000 USD within a rolling 30-day period. {/* [cite: 185] */}</li>
                <li><strong>EDD trigger:</strong> Cumulative transactions exceeding $10,000 USD within a rolling 90-day period, or any single transaction above $5,000 USD. {/* [cite: 186] */}</li>
                <li><strong>High-risk jurisdiction:</strong> Any country identified by the FATF as under increased monitoring or on its call for action list. {/* [cite: 187] */}</li>
              </ul>
              <p className="text-sm mt-3">Auvra reserves the right to lower these thresholds for users exhibiting other risk indicators (e.g., unusual transaction patterns, negative media, or law enforcement inquiries). {/* [cite: 188] */} Thresholds will be reviewed at least annually and updated as necessary to comply with regulatory guidance. {/* [cite: 189] */}</p>
            </div>
          </section>

          <section id="section-5" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">5. Transaction Monitoring</h3>
            <p className="mb-4">Auvra continuously monitors user activity and transactions to identify unusual or suspicious behaviour. {/* [cite: 191] */} This includes: {/* [cite: 192] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Detection of large, complex, or irregular transaction patterns (e.g., rapid creation and transfer of high-value badges, circular trading) {/* [cite: 193] */}</li>
              <li>Monitoring transfers involving high-risk jurisdictions {/* [cite: 194] */}</li>
              <li>Identification of patterns inconsistent with a user's stated profile or cultural activity {/* [cite: 195] */}</li>
              <li>Automated and manual review systems {/* [cite: 195] */}</li>
            </ul>
            <p>Suspicious activities may trigger investigation, temporary restriction of accounts, or reporting obligations. {/* [cite: 196] */}</p>
          </section>

          <section id="section-6" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">6. Suspicious Activity Reporting (SAR)</h3>
            <p className="mb-4">Auvra maintains procedures for identifying and reporting suspicious activities to relevant authorities where required by law. {/* [cite: 198] */} Examples of suspicious activities include: {/* [cite: 199] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Attempts to bypass KYC requirements or provide false identity documents {/* [cite: 200] */}</li>
              <li>Use of the Platform for transactions with no apparent cultural or economic purpose {/* [cite: 200] */}</li>
              <li>Unusual transaction patterns with no clear explanation (e.g., circular trades, self-dealing) {/* [cite: 200] */}</li>
              <li>Transactions linked to sanctioned entities, regions, or known terrorist financing networks {/* [cite: 200] */}</li>
              <li>Sudden change in behaviour (e.g., a long-dormant account suddenly engaging in high-volume badge sales) {/* [cite: 201] */}</li>
            </ul>
            <p className="mb-4">Auvra reserves the right to suspend accounts and report such activities to the Nigerian Financial Intelligence Unit (NFIU) or other competent authorities. {/* [cite: 202] */} In certain circumstances, we may be prohibited by law from notifying the user of such a report or investigation. {/* [cite: 203] */} Our reporting will comply with all applicable "no-tipping off" provisions. {/* [cite: 204] */}</p>
          </section>

          <section id="section-7" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">7. Record Keeping</h3>
            <p className="mb-4">Auvra maintains accurate and secure records of: {/* [cite: 206] */}</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>User identity and verification data (KYC documents, EDD findings) {/* [cite: 207] */}</li>
              <li>Transaction history (badge sales, subscription payments, USDC transfers) {/* [cite: 207] */}</li>
              <li>Compliance and investigation reports (SAR filings, internal reviews) {/* [cite: 208] */}</li>
            </ul>
            <h4 className="font-medium text-gray-900 mt-6 mb-2">Retention periods: {/* [cite: 209] */}</h4>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Legal minimum:</strong> At least five (5) years from the date of transaction or account closure, as required by applicable AML/CFT laws. {/* [cite: 210] */}</li>
              <li><strong>Internal policy:</strong> Auvra may retain certain records for longer periods where necessary for legitimate business purposes (e.g., ongoing investigations, legal proceedings, or risk management), subject to data protection laws. {/* [cite: 211] */}</li>
            </ul>
            <p>Records are made available to regulatory authorities when required. {/* [cite: 212] */}</p>
          </section>

          <section id="section-8" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">8. Risk-Based Approach</h3>
            <p className="mb-4">Auvra adopts a risk-based approach to AML/CFT compliance by: {/* [cite: 214] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Categorising users based on risk level (low, medium, high) according to their activity, jurisdiction, and transaction volume {/* [cite: 215] */}</li>
              <li>Applying enhanced controls to high-risk accounts (e.g., more frequent monitoring, additional verification) {/* [cite: 216] */}</li>
              <li>Adjusting monitoring thresholds based on user behaviour and platform growth {/* [cite: 217] */}</li>
            </ul>
            <p>This ensures that compliance measures are proportionate and effective, without unduly burdening low-risk users. {/* [cite: 218] */}</p>
          </section>

          <section id="section-9" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">9. Compliance Officer</h3>
            <p className="mb-4">Auvra designates a Compliance Officer responsible for: {/* [cite: 220] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Overseeing AML/CFT implementation and enforcement across the Platform {/* [cite: 221] */}</li>
              <li>Ensuring regulatory compliance with all applicable laws {/* [cite: 222] */}</li>
              <li>Acting as the primary contact with regulatory authorities (e.g., NFIU, SEC Nigeria) {/* [cite: 223] */}</li>
              <li>Conducting internal reviews, audits, and risk assessments {/* [cite: 224] */}</li>
              <li>Filing Suspicious Transaction Reports (STRs) where required {/* [cite: 225] */}</li>
            </ul>
            <p>The Compliance Officer has full authority to enforce this Policy across the organisation, including the power to freeze accounts or transactions pending investigation. {/* [cite: 226] */}</p>
          </section>

          <section id="section-10" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">10. Training and Awareness</h3>
            <p className="mb-4">Auvra ensures that all relevant personnel (including customer support, product, and compliance teams) receive ongoing training on: {/* [cite: 228] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>AML/CFT regulations and obligations {/* [cite: 229] */}</li>
              <li>Identification of red flags and suspicious activities {/* [cite: 230] */}</li>
              <li>Internal reporting procedures and escalation paths {/* [cite: 231] */}</li>
            </ul>
            <p>Regular updates and refresher programmes are conducted to maintain awareness and adapt to evolving regulatory requirements. {/* [cite: 232] */}</p>
          </section>

          <section id="section-11" className="scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">11. Monitoring and Review</h3>
            <p className="mb-4">Auvra conducts continuous monitoring and periodic reviews of its AML/CFT framework to ensure effectiveness and alignment with evolving regulatory requirements. {/* [cite: 234] */} This includes: {/* [cite: 235] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Internal audits and compliance checks (at least annually) {/* [cite: 236] */}</li>
              <li>External assessments where necessary (e.g., third-party audits for licensing or partnership requirements) {/* [cite: 237] */}</li>
              <li>Updates to policies and procedures in response to new regulations or emerging risks {/* [cite: 238] */}</li>
            </ul>
          </section>

          <section id="section-12" className="pt-8 mt-8 border-t border-gray-100 scroll-mt-24">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">12. Contact Information</h3>
            <p className="mb-4">For questions regarding this Policy or to report suspicious activity, please contact: {/* [cite: 240] */}</p>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <p className="font-medium text-gray-900">Auvra Tech Ltd {/* [cite: 241] */}</p>
              <p>Email: <a href="mailto:info@goauvra.com" className="text-blue-600 hover:underline">info@goauvra.com</a> {/* [cite: 242] */}</p>
              <p>Website: <a href="https://www.goauvra.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.goauvra.com</a> {/* [cite: 243] */}</p>
            </div>
            <p className="mt-4 text-sm text-gray-500">For urgent reports of suspicious activity, please include "AML/CFT Suspicious Activity Report" in the subject line. {/* [cite: 244] */}</p>
          </section>

        </div>
      </div>
    </LegalLayout>
  );
}