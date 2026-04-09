import React from 'react';
import LegalLayout from './legalLayout';

export default function CollaborationTerms() {
  return (
    <LegalLayout currentPage="collab">
      <div className="prose prose-gray max-w-none">
        
        <h2 className="text-3xl font-clash font-medium text-gray-900 mb-2">Collaboration Hub Terms</h2> {/* [cite: 91] */}
        <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          Clear rules for creating together wherever the work leads. Last Updated: April 2026. {/* [cite: 91, 92] */}
        </p>

        <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">
          
          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">1. Introduction</h3>
            <p className="mb-4">
              The Collaboration Hub allows users to work together on projects including shared workspaces, task management, and agreement tools. {/* [cite: 92] */} These terms supplement our main Terms of Service. {/* [cite: 93] */}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">2. Eligibility and Verification</h3>
            <p className="mb-4">
              To use the Collaboration Hub, you must complete identity verification (KYC) to the level required by our AML/CFT Policy. Auvra will not grant access until verification is complete. {/* [cite: 98, 99] */}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">3. Ownership, Revenue Splits & Locking</h3>
            <p className="mb-4">
              Before work begins, collaborators may agree on ownership splits, revenue shares, and usage rights. {/* [cite: 104] */} If recorded in the Collaboration Hub, these terms become locked once all collaborators accept them. {/* [cite: 106] */} Locked terms cannot be changed except by unanimous consent. {/* [cite: 107] */}
            </p>
            <p>
              If your collaboration results in a badge sale on Auvra, and you have locked a revenue split, Auvra will distribute proceeds according to that split in USDC. {/* [cite: 110, 111] */}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">4. Termination and Leaving</h3>
            <p className="mb-4">
              Any collaborator may leave at any time. Leaving does not cancel obligations already accepted (e.g., ownership rights for work already completed). {/* [cite: 121, 122, 123] */} Collaborations may be marked as abandoned after six consecutive months of inactivity. {/* [cite: 126] */}
            </p>
          </section>

        </div>
      </div>
    </LegalLayout>
  );
}