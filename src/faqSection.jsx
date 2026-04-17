import React, { useState } from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

// --- DATA: FAQ ITEMS ---
const faqs = [
  {
    question: "What is a badge on Auvra?",
    answer: "A badge is a permanently verifiable cultural record. It can be a piece of art, a family story, a traditional recipe, a language lesson, or a craft technique. Every badge is anchored on the blockchain, so it carries the context, provenance, and history of the people behind it, and the community that verified it."
  },
  {
    question: "What's the difference between a Collectible Badge and a Contribution Badge?",
    answer: (
      <>
        A <strong>Collectible Badge</strong> is a record that is meant to be owned and collected. Like a limited edition artwork or piece of music, or a crafted object. It can be shared with the world and collected by people who value it.
        <br /><br />
        A <strong>Contribution Badge</strong> is for records that belong to everyone: languages, oral history, rituals, recipes, and more. Representation verified by the community that holds it, and available as a common record to all.
      </>
    )
  },
  {
    question: "How does Auvra ensure cultural authenticity?",
    answer: "Auvra relies on a decentralized network of community elders and verified cultural custodians to review and authenticate records before they are permanently minted."
  },
  {
    question: "Do I need to understand blockchain to use Auvra?",
    answer: "Not at all. Auvra handles all the complex web3 technology in the background. You can use it just like any other app."
  },
  {
    question: "Can institutions and communities use Auvra?",
    answer: "Yes, institutions, museums, and community organizations can create verified accounts to help catalog and preserve their specific cultural archives."
  }
];

// --- DATA: CARDS ---
const featureCards = [
  {
    title: "A home for your culture",
    description: "Document, verify, and share your traditions. Keep them safe and make them accessible to your people.",
    image: "/art.png" // <-- REPLACE WITH REAL IMAGE
  },
  {
    title: "Collaboration without compromise",
    description: "We don't sell your data to any third party company. Your institution remains yours to control.",
    image: "/art1.png" // <-- REPLACE WITH REAL IMAGE
  },
  {
    title: "Try Lens AI",
    description: "Make meaning undeniable",
    image: "/art2.png" // <-- REPLACE WITH REAL IMAGE
  }
];

export default function FaqAndCardsSection() {
  // THE FIX: Set this to an empty array so NO FAQs open on page load!
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="w-full bg-white text-gray-900 py-20 px-4 md:px-8 flex flex-col items-center" id="faq">
      <div className="max-w-xl w-full flex flex-col gap-24">
        
        {/* =========================================
            SECTION 1: FAQ ACCORDION
        ========================================= */}
        <div>
          <h2 className="font-clash text-2xl font-medium mb-4 leading-tight">
            Frequently asked <br /> questions
          </h2>
          
          <div className="flex items-center justify-between mb-8 font-clash">
            <span className="text-gray-500 text-sm">Can't find your answer?</span>
            <button className="text-xs font-semibold uppercase tracking-wider border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-50 transition">
              Contact us
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndexes.includes(index);
              return (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white"
                >
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium font-clash pr-4 text-[20px]">{faq.question}</span>
                    <svg 
                      className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 text-md text-black leading-relaxed border-t border-gray-100 pt-4 font-clash">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            SECTION 2: VISUAL CARDS
        ========================================= */}
        <div className="flex flex-col gap-8">
          {featureCards.map((card, index) => (
            <div 
              key={index} 
              className="relative w-full aspect-[4/5] sm:aspect-square bg-gray-900 rounded-[2rem] overflow-hidden shadow-xl"
            >
              {/* Background Image */}
              <img 
                src={card.image} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Gradient Overlay for Text Readability */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div> */}
              
              {/* Text Content */}
              <div className="absolute w-full bottom-0 inset-x-0 p-8 md:p-10 text-center text-white flex flex-col items-center">
                <h3 className="font-clash text-[26px] md:text-4xl mb-3 font-light tracking-wide text-white ">
                  {card.title}
                </h3>
                <p className="text-md font-clash md:text-base text-white font-light max-w-[90%] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-4 w-full max-w-xs">
                <button className="flex items-center justify-center gap-3 w-full bg-[#111111] text-white py-4 rounded-full font-medium hover:bg-black transition shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <FaApple className="text-2xl" /> 
                  Download for iPhone
                </button>
                
                <button className="flex items-center justify-center gap-3 w-full bg-gray-100 text-gray-900 py-4 rounded-full font-medium hover:bg-gray-200 transition">
                  <FaGooglePlay className="text-xl " /> 
                  Get it on Android
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}