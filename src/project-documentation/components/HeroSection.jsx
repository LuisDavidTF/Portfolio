export default function HeroSection ({ title, tagline, image }) {
  return (
    <section className="relative pb-8 md:pb-16 overflow-hidden flex flex-col items-center justify-center text-center px-4 w-full" style={{ paddingTop: '140px' }}>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D4A373]/10 rounded-full blur-[80px]"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center animate-fade-in">
        {image && (
          <div className="mb-8 w-full max-w-[120px] md:max-w-[200px] animate-slide-down">
            <img src={image} alt={title} className="w-full h-auto rounded-3xl shadow-xl border border-theme-light" />
          </div>
        )}
        {tagline && (
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[#D4A373]/15 text-[#D4A373] text-sm md:text-base font-semibold tracking-wide uppercase animate-slide-down shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            {tagline}
          </div>
        )}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text !leading-[1.1] animate-slide-down">
          {title}
        </h1>
      </div>
    </section>
  );
}

