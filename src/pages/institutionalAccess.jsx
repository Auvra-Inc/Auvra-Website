import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../reuseables/navbar'; // Adjust path if needed
import FooterSection from '../footerSection'; // Adjust path if needed

export default function InstitutionalAccess() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here (e.g., EmailJS, Formspree, or your backend)
    setTimeout(() => setIsSubmitting(false), 2000); // Mocking a loading state
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Institutional Access | Auvra</title>
        <meta name="description" content="Apply for institutional and government access to Auvra's cultural preservation infrastructure." />
      </Helmet>

      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-clash font-bold text-black mb-4 tracking-tight">
              Institutional Access
            </h1>
            <p className="text-lg text-gray-600 font-clash max-w-xl mx-auto leading-relaxed">
              For museums, universities, and government bodies looking to preserve cultural heritage at scale.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 font-clash">Organization Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="e.g. National Museum of History"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 font-clash">Organization Type</label>
                  <select 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-50 focus:bg-white appearance-none"
                  >
                    <option value="">Select type...</option>
                    <option value="museum">Museum / Archive</option>
                    <option value="university">University / Academic</option>
                    <option value="government">Government Body</option>
                    <option value="ngo">NGO / Non-Profit</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 font-clash">Contact Person Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 font-clash">Work Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="name@organization.gov"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 font-clash">Expected Scope of Preservation</label>
                <textarea 
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder="Tell us about the volume of assets (audio, artifacts, documents) you are looking to preserve..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-black text-white font-clash font-medium py-4 rounded-xl hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 mt-8 disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>

            </form>
          </motion.div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}