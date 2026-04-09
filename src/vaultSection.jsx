const VaultSection = () => {
  
  // A quick helper to keep the code clean! This builds the small floating images 
  // and automatically applies your CSS animations with different delays.
  const FloatingAvatar = ({ src, className, delay }) => (
    <img 
      src={src} 
      alt="Vault User" 
      className={`absolute rounded-full object-cover shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] animate-float-mini z-10 ${className}`}
      style={{ animationDelay: delay }}
    />
  );

  return (
    // h-[800px] gives it enough height to let the center image sit perfectly at the bottom
    <section className="relative w-full h-[800px] md:h-[900px] bg-white overflow-hidden font-clash flex flex-col items-center pt-32">
      
      {/* 1. TEXT CONTENT */}
      <div className="relative bottom-30 z-30 text-center px-6 max-w-lg mx-auto">
        <p className="text-sm md:text-base text-black font-clash mb-4 tracking-wide">
          Personal Legacy
        </p>
        <h2 className="text-6xl md:text-7xl font-bold text-black tracking-tight mb-6">
          My Vault
        </h2>
        <p className="text-lg md:text-xl text-black font-clash leading-relaxed">
          We built a private vault with<br className="hidden md:block" /> bank-grade security.
        </p>
      </div>

      {/* 2. MAIN CENTER IMAGE */}
      {/* left-1/2 and -translate-x-1/2 perfectly centers an absolute element */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-[500px] md:max-w-[550px] z-20">
        <img 
          src="/Rectangle 2124.png" 
          alt="Main Vault Profile" 
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 3. FLOATING AVATARS AROUND THE SCREEN */}
      
      {/* Top Left (Large dark image) */}
      <FloatingAvatar 
        src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&auto=format&fit=crop" 
        className="top-[5%] left-[3%] md:left-[20%] w-16 h-16 md:w-24 md:h-24" 
        delay="0s" 
      />
      
      {/* Middle Left (Blue background image) */}
      <FloatingAvatar 
        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" 
        className="top-[35%] left-[-5%] md:left-[12%] w-20 h-20 md:w-28 md:h-28" 
        delay="1.2s" 
      />
      
      {/* Top Right (Cut off image at the very top edge) */}
      <FloatingAvatar 
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" 
        className="top-[1%] right-[-5%] md:right-[15%] w-16 h-16 md:w-24 md:h-24" 
        delay="0.5s" 
      />
      
      {/* Upper Middle Right (Woman smiling) */}
      <FloatingAvatar 
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" 
        className="top-[20%] right-[8%] md:right-[22%] w-20 h-20 md:w-28 md:h-28" 
        delay="2.1s" 
      />
      
      {/* Lower Middle Right (Red texture image) */}
      <FloatingAvatar 
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
        className="top-[45%] right-[12%] md:right-[28%] w-14 h-14 md:w-20 md:h-20" 
        delay="1.8s" 
      />

      

    </section>
  );
};

export default VaultSection;