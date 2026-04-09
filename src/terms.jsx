import React from 'react';
import LegalLayout from './legalLayout';

export default function TermsOfService() {
  return (
    <LegalLayout currentPage="terms">
      <div className="prose prose-gray max-w-none">
        
        <h2 className="text-3xl font-clash font-medium text-gray-900 mb-2">Terms of Service</h2> {/* [cite: 134] */}
        <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          Please read these terms carefully before using our platform. Effective immediately upon platform use.
        </p>

        <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">
          
          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">1. Introduction</h3>
            <p className="mb-4">
              Welcome to Auvra Tech Ltd ("Auvra", "we", "us", or "our"). These Terms and Conditions of Use (the "Agreement") govern your access to and use of Auvra's website, mobile applications, and services including cultural preservation tools, badge systems (Collectible and Contribution Badges), collaboration features, AI services (Lens), private vaults (My Vault), community systems, and any related digital platforms (collectively, the "Platform"). {/* [cite: 135] */}
            </p>
            <p>
              By accessing or using our Platform, you agree to comply with and be bound by this Agreement. If you do not agree to any part of these Terms, you must not use our services. {/* [cite: 136, 137] */}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">2. Acceptance of Terms</h3>
            <p className="mb-4">
              By accessing or using the Auvra Platform, you confirm your acceptance of this Agreement, which constitutes a legally binding contract between you and Auvra Tech Ltd effective from your first use. {/* [cite: 138] */} If you are using the Platform on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms. {/* [cite: 139] */}
            </p>
            <p className="mb-4">
              Auvra reserves the right to update, modify, or replace these Terms at any time. Continued use of the Platform following any changes constitutes your acceptance of such changes. {/* [cite: 140, 141] */}
            </p>
            <h4 className="font-medium text-gray-900 mt-6 mb-2">Eligibility</h4>
            <p>
              You may not use the Platform if you are under the age of 13 (or the applicable age of digital consent in your country). {/* [cite: 143] */} If you are between 13 and the age of majority, you may only use the Platform with the consent of a parent or legal guardian. {/* [cite: 144] */}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">3. User Conduct</h3>
            <p className="mb-4">You agree to use the Platform only for lawful purposes and in accordance with this Agreement. You shall not: {/* [cite: 147] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Use the Platform in any way that violates applicable local, national, or international laws. {/* [cite: 148] */}</li>
              <li>Upload or distribute content that is unlawful, harmful, or infringes on the intellectual property or cultural rights of others. {/* [cite: 148] */}</li>
              <li>Misrepresent the cultural authenticity, origin, or significance of any preserved content. {/* [cite: 148] */}</li>
              <li>Use the Platform for any form of financial speculation, market manipulation, or wash trading involving badges. {/* [cite: 149] */}</li>
              <li>Attempt to gain unauthorized access to any part of the Platform or interfere with its systems. {/* [cite: 149] */}</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">4. Intellectual Property & Cultural Ownership</h3>
            <p className="mb-4"><strong>A. Our IP:</strong> All content, features, and functionality on the Platform are the property of Auvra Tech Ltd or its licensors. {/* [cite: 151] */}</p>
            <p className="mb-4">
              <strong>B. User Content & Cultural Badges:</strong> Users retain ownership of the original content they create or upload ("User Content"). {/* [cite: 152] */} Collectible Badges represent original creative works that can be owned and transferred, while Contribution Badges represent shared cultural knowledge preserved as part of the cultural commons. {/* [cite: 154, 156, 157] */}
            </p>
            <p>
              <strong>C. AI-Generated Output:</strong> Auvra does not claim ownership of AI-assisted outputs from Lens. You remain fully responsible for verifying and taking ownership of AI-generated content. {/* [cite: 159, 160, 161] */}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">5. Blockchain & Permanence</h3>
            <p className="mb-4">
              <strong>On-Chain Records:</strong> Collectible and Contribution Badges are recorded on a public blockchain. This data becomes immutable and cannot be deleted or altered once preserved. {/* [cite: 170, 171] */} Full media content is stored off-chain using decentralised storage networks. {/* [cite: 172] */}
            </p>
            <p className="mb-4">
              <strong>Private Vault Content:</strong> Content stored in My Vault is not recorded on the public blockchain. It is encrypted, stored off-chain, and can be deleted by you at any time. {/* [cite: 173, 174, 175] */}
            </p>
          </section>

          <section className="pt-8 mt-8 border-t border-gray-100">
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">Contact Information</h3>
            <p>For any questions regarding these Terms, contact us at <a href="mailto:info@goauvra.com" className="text-blue-600 hover:underline">info@goauvra.com</a>. {/* [cite: 218] */}</p>
          </section>

        </div>
      </div>
    </LegalLayout>
  );
}