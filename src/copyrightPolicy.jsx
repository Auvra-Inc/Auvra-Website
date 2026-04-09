import React from 'react';
import LegalLayout from './legalLayout';

export default function CopyrightPolicy() {
  return (
    <LegalLayout currentPage="copyright">
      <div className="prose prose-gray max-w-none">
        
        <h2 className="text-3xl font-clash font-medium text-gray-900 mb-2">Copyright Policy</h2> {/* [cite: 288] */}
        <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          Respecting intellectual property rights. Last Updated: April 2026. {/* [cite: 288] */}
        </p>

        <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">
          
          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">1. Our Commitment</h3>
            <p className="mb-4">
              Auvra respects the intellectual property rights of others. We comply with applicable copyright laws, including the Digital Millennium Copyright Act (DMCA) in the United States, the Copyright Act of Nigeria, and similar laws in other jurisdictions. {/* [cite: 289] */}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">2. Reporting Copyright Infringement</h3>
            <p className="mb-4">
              If you believe that content available on or through the Auvra Platform infringes your copyright, you may send a written notice to our designated Copyright Agent at <strong>info@goauvra.com</strong>. {/* [cite: 292, 296] */}
            </p>
            <p className="mb-4">A valid DMCA notice must include: {/* [cite: 294] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Your physical or electronic signature. {/* [cite: 294] */}</li>
              <li>Identification of the copyrighted work claimed to have been infringed. {/* [cite: 294] */}</li>
              <li>Identification of the material on Auvra that you claim is infringing (e.g., URL or badge ID). {/* [cite: 294] */}</li>
              <li>Your contact information. {/* [cite: 294] */}</li>
              <li>A statement of good faith belief regarding unauthorized use. {/* [cite: 295] */}</li>
              <li>A statement made under penalty of perjury that the notice is accurate. {/* [cite: 295] */}</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">3. Repeat Infringers & False Statements</h3>
            <p className="mb-4">
              Auvra will terminate the accounts of users who are determined to be repeat infringers (users who have had content removed due to copyright infringement on two or more separate occasions within any twelve-month period). {/* [cite: 302, 303] */}
            </p>
            <p>
              Knowingly making a false or misleading statement in a DMCA notice or counter-notice is unlawful and may subject you to liability for damages. {/* [cite: 306] */}
            </p>
          </section>

        </div>
      </div>
    </LegalLayout>
  );
}