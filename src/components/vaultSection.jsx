const VaultSection = () => {
  // Floating Avatar Helper
  const FloatingAvatar = ({ src, className, delay }) => (
    <img 
      src={src} 
      alt="Vault User" 
      className={`absolute rounded-full object-cover shadow-lg animate-float-mini z-10 ${className}`}
      style={{ animationDelay: delay }}
    />
  );

  return (
    // We removed the fixed height! Let the content dictate the size.
    <section className="relative w-full bg-white overflow-hidden font-clash flex flex-col items-center pt-5 md:pt-16">
      
      {/*=========================================
          BOX A: TEXT & FLOATING AVATARS 
          This acts as a "container" so avatars float around the text, not the whole page.
      ========================================= */}
      <div className="relative w-full max-w-4xl min-h-[260px] md:min-h-[320px] flex flex-col justify-center items-center px-6">
        
        {/* EXACTLY 5 AVATARS POSITIONED LIKE YOUR SCREENSHOT */}
        
        {/* 1. Top Left (Dark/Red background) */}
        <FloatingAvatar 
          src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&auto=format&fit=crop" 
          className="top-[5%] left-[8%] md:left-[15%] w-16 h-16 md:w-20 md:h-20" 
          delay="0s" 
        />
        
        {/* 2. Mid Left (Blue/Yellow background) */}
        <FloatingAvatar 
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" 
          className="top-[55%] left-[5%] md:left-[10%] w-14 h-14 md:w-16 md:h-16" 
          delay="1.2s" 
        />
        
        {/* 3. Top Right (Cut off at the edge) */}
        <FloatingAvatar 
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" 
          className="top-[0%] right-[-5%] md:right-[5%] w-12 h-12 md:w-14 md:h-14" 
          delay="0.5s" 
        />
        
        {/* 4. Mid Right (Smiling Woman) */}
        <FloatingAvatar 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" 
          className="top-[25%] right-[6%] md:right-[15%] w-16 h-16 md:w-20 md:h-20" 
          delay="2.1s" 
        />
        
        {/* 5. Lower Right (Red texture) */}
        <FloatingAvatar 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
          className="bottom-[10%] right-[15%] md:right-[22%] w-12 h-12 md:w-14 md:h-14" 
          delay="1.8s" 
        />

        {/* PERFECTLY SPACED TEXT */}
        <div className="relative z-30 text-center">
          <p className="text-[13px] md:text-sm text-black font-medium mb-2 tracking-wide">
            Personal Legacy
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-3">
            My Vault
          </h2>
          <p className="text-[15px] md:text-lg text-black leading-tight font-medium">
            We built a private vault with<br className="block" /> bank-grade security.
          </p>
        </div>

      </div>

      {/* =========================================
          BOX B: MAIN CENTER IMAGE
          Because it comes AFTER the div above, it will naturally push down and NEVER overlap the text.
      ========================================= */}
      <div className="relative w-full max-w-[450px] md:max-w-[550px] z-20 -mt-8 md:-mt-12">
        <img 
          src="/Rectangle 2124.png" 
          alt="Main Vault Profile" 
          className="w-full h-auto object-contain"
        />
      </div>

    </section>
  );
};

export default VaultSection;