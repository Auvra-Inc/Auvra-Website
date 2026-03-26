import { FaApple, FaGooglePlay,  } from 'react-icons/fa';

const AppDownloadSection = () => {
  return (
    <section className="py-20 flex flex-col items-center justify-center text-center px-6 font-clash">
      
      {/* Rating Pill */}
      <div className=" font-clash flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 shadow-sm bg-white mb-8">
        <span className="text-yellow-500">⭐</span>
        <span className="font-bold text-gray-900">4.7 rating</span>
        <span className="text-gray-500 text-sm">(based on 125 reviews)</span>
      </div>

      <p className="max-w-xl text-lg text-gray-600 font-sans mb-6">
        Stay rooted in what matters with a platform that honors your stories. Simple tools, clear progress, and gentle guidance help you build a legacy that lasts.
      </p>

      <h4 className="font-bold text-xl text-gray-900 mb-8">Built with blockchain.</h4>

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
    </section>
  );
};

export default AppDownloadSection;