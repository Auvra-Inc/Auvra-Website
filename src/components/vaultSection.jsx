const VaultSection = () => {
  // Floating Avatar Helper
  const FloatingAvatar = ({ src, className, delay }) => (
    <img 
      src={src} 
      alt="Vault User" 
      loading="lazy"
      className={`absolute rounded-full object-cover shadow-lg animate-float-mini z-10 ${className}`}
      style={{ animationDelay: delay }}
    />
  );

  return (
    <section className="relative w-full bg-white overflow-hidden font-clash flex flex-col items-center pt-5 md:pt-16">
      
      <div className="relative w-full max-w-4xl min-h-[260px] md:min-h-[320px] flex flex-col justify-center items-center px-6">
        
        <FloatingAvatar 
          src="/webp/Group 1396.webp" 
          className="top-[5%] left-[8%] md:left-[15%] w-16 h-16 md:w-20 md:h-20" 
          delay="0s" 
        />
        
        <FloatingAvatar 
          src="/webp/Group 1397.webp" 
          className="top-[55%] left-[5%] md:left-[10%] w-14 h-14 md:w-16 md:h-16" 
          delay="1.2s" 
        />
        
        <FloatingAvatar 
          src="/webp/Group 1399.webp" 
          className="top-[0%] right-[-5%] md:right-[5%] w-12 h-12 md:w-14 md:h-14" 
          delay="0.5s" 
        />
        
        <FloatingAvatar 
          src="/webp/Rectangle 2125.webp" 
          className="top-[25%] right-[6%] md:right-[15%] w-16 h-16 md:w-20 md:h-20" 
          delay="2.1s" 
        />
        
        <FloatingAvatar 
          src="/webp/caro2.webp" 
          className="bottom-[10%] right-[15%] md:right-[22%] w-12 h-12 md:w-14 md:h-14" 
          delay="1.8s" 
        />

        {/* PERFECTLY SPACED TEXT */}
        <div className="relative z-30 text-center">
          <p className="text-[13px] md:text-sm text-black font-medium mb-2 tracking-wide">
            Personal Legacy
          </p>
          <h2 className="text-5xl md:text-7xl font-semibold text-black tracking-tight mb-3">
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
          src="/webp/Rectangle 2124.webp" 
          alt="Main Vault Profile" 
          loading="lazy"
          width={550}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>

    </section>
  );
};

export default VaultSection;