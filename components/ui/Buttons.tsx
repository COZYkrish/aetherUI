export const ContactButton = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative group inline-flex ${className}`}>
      {/* Glowing background on hover */}
      <div 
        className="absolute -inset-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
        style={{
          background: "linear-gradient(90deg, #eab308, #22c55e, #06b6d4)",
        }}
      />
      <a
        href="#contact"
        className={`relative z-10 w-full h-full rounded-full text-white font-bold uppercase tracking-[0.2em] px-8 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-5 text-xs sm:text-sm md:text-base outline outline-2 outline-white outline-offset-[-3px] transition-all min-w-[160px] sm:min-w-[180px] inline-flex items-center justify-center`}
        style={{
          background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
          boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
        }}
      >
        Contact Me
      </a>
    </div>
  );
};

export const LiveProjectButton = ({ className = "", href, text = "Live Project" }: { className?: string, href?: string, text?: string }) => {
  const Component = href ? "a" : "button";
  return (
    <Component
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors inline-block text-center ${className}`}
    >
      {text}
    </Component>
  );
};
