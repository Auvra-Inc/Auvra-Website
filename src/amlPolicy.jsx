import React from 'react';
import LegalLayout from './legalLayout';

export default function AMLPolicy() {
  return (
    <LegalLayout currentPage="aml">
      <div className="prose prose-gray max-w-none">
        
        <h2 className="text-3xl font-clash font-medium text-gray-900 mb-2">Anti-Money Laundering (AML) / CFT Policy</h2> {/* [cite: 59] */}
        <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          Ensuring Integrity, Transparency, and Compliance. Last Updated: April 2026.
        </p>

        <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">
          
          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">1. Introduction & Purpose</h3>
            <p className="mb-4">
              Auvra Tech Ltd is committed to complying with all applicable laws and regulations aimed at preventing money laundering, terrorist financing, and other financial crimes. {/* [cite: 59] */} As a platform that facilitates digital transactions, cultural asset ownership, and creator payments, we maintain robust AML and CFT controls. {/* [cite: 60] */}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">2. Scope</h3>
            <p className="mb-4">This Policy applies to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Users engaging in activities that present money laundering risks (financial transactions, high-value badge sales). {/* [cite: 62] */}</li>
              <li>Employees, contractors, agents, and third-party partners of Auvra. {/* [cite: 63] */}</li>
            </ul>
            <p>Users utilizing only low-risk features (viewing public content) may not be subject to all elements, though Auvra reserves the right to apply measures based on risk. {/* [cite: 63, 64] */}</p>
          </section>

          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">3. Customer Due Diligence (CDD)</h3>
            <p className="mb-4">
              CDD is triggered by activities such as creating a Collectible Badge for sale, receiving payments above a threshold, or withdrawing significant value. {/* [cite: 67] */}
            </p>
            <p className="mb-4">
              <strong>Enhanced Due Diligence (EDD)</strong> may be required for users engaging in high-value transactions, those located in high-risk jurisdictions, or those exhibiting unusual transaction patterns. {/* [cite: 67, 68] */}
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-4">
              <h4 className="font-medium text-gray-900 mb-2">Operational Thresholds:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>CDD trigger:</strong> Cumulative transactions exceeding $1,000 USD within a rolling 30-day period. {/* [cite: 71] */}</li>
                <li><strong>EDD trigger:</strong> Cumulative transactions exceeding $10,000 USD within a rolling 90-day period, or any single transaction above $5,000 USD. {/* [cite: 72] */}</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">4. Suspicious Activity Reporting (SAR)</h3>
            <p className="mb-4">
              Auvra maintains procedures for reporting suspicious activities to relevant authorities. {/* [cite: 78] */} Examples include attempts to bypass KYC, circular trading, or sudden changes in behavior. {/* [cite: 79, 80] */} We comply with all applicable "no-tipping off" provisions. {/* [cite: 82] */}
            </p>
          </section>

        </div>
      </div>
    </LegalLayout>
  );
}