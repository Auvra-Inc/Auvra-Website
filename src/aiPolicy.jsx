import React from 'react';
import LegalLayout from './legalLayout';

export default function AIPolicy() {
  return (
    <LegalLayout currentPage="ai">
      <div className="prose prose-gray max-w-none">
        
        <h2 className="text-3xl font-clash font-medium text-gray-900 mb-2">AI Policy</h2> {/* [cite: 219] */}
        <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          Lens AI is a tool, not a judge of cultural truth. Last Updated: April 2026. {/* [cite: 219] */}
        </p>

        <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">
          
          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">1. Introduction</h3>
            <p className="mb-4">
              Lens AI is a set of optional, automated tools integrated into the Auvra Platform to assist users with cultural preservation and discovery. {/* [cite: 220] */} By using Lens AI, you agree to the terms of this policy. {/* [cite: 222] */}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">2. What Lens AI Does</h3>
            <p className="mb-4">Lens AI can perform the following functions (where enabled): {/* [cite: 224] */}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Transcription</strong> - convert spoken content into written text. {/* [cite: 224] */}</li>
              <li><strong>Translation</strong> - translate text between supported languages. {/* [cite: 224] */}</li>
              <li><strong>Tagging</strong> - generate suggested metadata tags (e.g., culture, region). {/* [cite: 224] */}</li>
              <li><strong>Enhancement</strong> - improve audio and video quality. {/* [cite: 224] */}</li>
              <li><strong>Q&A</strong> - answer user questions about preserved content. {/* [cite: 224] */}</li>
              <li><strong>Artifact recognition</strong> - identify cultural artifacts from uploaded images. {/* [cite: 224] */}</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">3. AI Limitations & Verification</h3>
            <p className="mb-4">
              AI outputs may contain errors, omissions, biases, or culturally inappropriate suggestions. {/* [cite: 226] */} Lens is not a substitute for human judgment, especially for sacred, restricted, or historically sensitive content. {/* [cite: 227] */}
            </p>
            <p>
              Community verification (by elders, experts, or designated community members) is the primary mechanism for establishing authenticity. {/* [cite: 230] */} AI suggestions do not override human decisions. {/* [cite: 231] */}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-clash font-medium text-gray-900 mb-4">4. AI Training and Your Data</h3>
            <p className="mb-4">
              By default, Auvra does not use your personal content (including private vault content, badge media, or your prompts) to train or improve Lens AI models. {/* [cite: 234] */}
            </p>
            <p className="mb-4">
              If we offer an optional program to improve Lens AI, participation will be opt-in only. {/* [cite: 235] */} Private vault content will never be used for training unless you explicitly move it to a public badge or give separate, informed consent. {/* [cite: 237] */}
            </p>
          </section>

        </div>
      </div>
    </LegalLayout>
  );
}