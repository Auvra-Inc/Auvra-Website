import React from 'react';
import LegalLayout from './legalLayout';

export default function CommunityGuidelines() {
  return (
    <LegalLayout currentPage="community">
      <div className="prose prose-gray max-w-none">
        
        <h2 className="text-3xl font-clash font-medium text-gray-900 mb-2">Community Guidelines</h2> {/* [cite: 253] */}
        <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          Building a respectful, authentic, and inclusive cultural home. Last Updated: April 2026. {/* [cite: 253] */}
        </p>

        <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">
          
          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">1. Our Shared Space</h3>
            <p className="mb-4">
              Auvra is a platform for preserving, celebrating, and sharing cultural heritage. {/* [cite: 254] */} Our community includes creators, collectors, families, cultural custodians, and institutions from around the world. {/* [cite: 254] */}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">2. Core Principles</h3>
            <ul className="space-y-4">
              <li>
                <strong>Respect Cultural Authenticity:</strong> Do not misrepresent the origin, significance, or ownership of cultural content. {/* [cite: 259] */} Do not use the Platform to falsely claim affiliation with a community or cultural tradition. {/* [cite: 261] */}
              </li>
              <li>
                <strong>No Hateful or Harmful Content:</strong> You may not upload content that attacks or demeans individuals based on race, ethnicity, religion, gender, or cultural identity. {/* [cite: 263] */}
              </li>
              <li>
                <strong>Protect Sacred Knowledge:</strong> If a badge is marked as sacred or restricted, do not share it outside the Platform or beyond the permitted audience. {/* [cite: 265] */}
              </li>
              <li>
                <strong>No Spam, Scams, or Misuse:</strong> Do not use Auvra for financial speculation, wash trading, or market manipulation involving badges. {/* [cite: 269] */}
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">3. Enforcement</h3>
            <p className="mb-4">
              If you see content or behaviour that violates these guidelines, please report it to <strong>info@goauvra.com</strong>. {/* [cite: 278] */} We may issue warnings, temporarily restrict your account, or permanently suspend your account for violations. {/* [cite: 281] */}
            </p>
          </section>

        </div>
      </div>
    </LegalLayout>
  );
}