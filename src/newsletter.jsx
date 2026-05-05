export default function Newsletter() {
  return (
    <div className="w-full bg-white text-gray-900 py-2 px-6 flex flex-col items-center">
        
        <div className="mb-16">
          <h3 className="font-clash text-2xl font-medium mb-3">
            Get updates from Auvra
          </h3>
          <p className="text-black font-clash text-sm mb-6 leading-relaxed">
            By signing up, you agree to receive product updates and announcements from Auvra
          </p>
          
          {/* Input Field */}
          <div className="flex items-center bg-gray-100 rounded-xl p-1.5 border border-transparent focus-within:border-gray-300 transition-colors" id="contact">
            <input 
              type="email" 
              placeholder="Email" 
              className="flex-1 bg-transparent px-4 py-2 text-sm outline-none text-gray-800 placeholder-gray-500"
            />
            <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-200 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
    </div>
  )
}
