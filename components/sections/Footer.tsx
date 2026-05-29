"use client";


import { 
  Twitter, Linkedin, Github, Instagram, Facebook, MessageCircle,
  Home, User, Code, LayoutGrid, Mail,
  Monitor, Bot, Cloud, Database, PieChart,
  Folder, FileText, Wifi, HelpCircle,
  ArrowUp
} from "lucide-react";
import { FadeIn } from "../ui/FadeIn";
import { PhysicsDoodles } from "./PhysicsDoodles";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/krish-sharma-710927380/" },
  { icon: Github, href: "https://github.com/COZYkrish" },
  { icon: Instagram, href: "https://www.instagram.com/wtf.kid_ish/" },
  { icon: Facebook, href: "https://facebook.com" },
  { icon: MessageCircle, href: "https://wa.me/916372658336" }, // WhatsApp-ish
];

const exploreLinks = [
  { name: "Home", icon: Home, href: "#" },
  { name: "About Me", icon: User, href: "#about" },
  { name: "Technical Skills", icon: Code, href: "#skills" },
  { name: "Projects", icon: LayoutGrid, href: "#projects" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

const servicesLinks = [
  { name: "Full-Stack Dev", icon: Monitor, href: "#services" },
  { name: "Cloud & DevOps", icon: Cloud, href: "#services" },
  { name: "AI & ML", icon: Bot, href: "#services" },
  { name: "Data Viz & Analytics", icon: PieChart, href: "#services" },
  { name: "Database Architecture", icon: Database, href: "#services" },
];

const resourceLinks = [
  { name: "Project Portfolio", icon: Folder, href: "/projects" },
  { name: "Resume", icon: FileText, href: "#" },
  { name: "Blog", icon: Wifi, href: "#" },
  { name: "FAQ", icon: HelpCircle, href: "#" },
];

export const Footer = () => {
  const scrollToTop = () => {
    // Scroll using lenis if available, otherwise fallback to window
    const lenis = (window as unknown as { lenis?: { scrollTo: (target: number) => void } }).lenis;
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };



  return (
    <footer className="bg-[#050607] text-[#D7E2EA] pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 md:px-10 lg:px-12 relative z-20 border-t border-white/5 overflow-hidden">
      {/* Interactive Physics Doodles Overlay */}
      <PhysicsDoodles />

      <div className="max-w-7xl mx-auto relative z-20 pointer-events-none">
        {/* We need the footer content to allow clicks to pass through to the doodles behind them in empty spaces, but links must be clickable. */}
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <FadeIn delay={0} y={20}>
              {/* Logo */}
              <div className="flex items-baseline mb-6">
                <span
                  className="text-2xl sm:text-3xl tracking-tight drop-shadow-md"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  <span style={{ color: "#BF00FF", textShadow: "0 0 10px rgba(191,0,255,0.8)" }}>aether</span>
                  <span style={{ color: "#00E5FF", marginLeft: "8px", textShadow: "0 0 15px rgba(0,229,255,0.3)" }}>UI</span>
                </span>
              </div>
              
              <p className="text-[#D7E2EA]/60 font-light max-w-sm mb-8 leading-relaxed">
                Building meaningful digital experiences that leave a lasting impact.
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 pointer-events-auto"
                  >
                    <social.icon size={18} className="text-[#D7E2EA]/80 hover:text-white" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
            
            {/* Explore Column */}
            <FadeIn delay={0.1} y={20} className="flex flex-col gap-6">
              <h3 className="text-[#F5DEB3] font-bold tracking-wide">Explore</h3>
              <ul className="flex flex-col gap-4">
                {exploreLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="flex items-center gap-3 text-sm text-[#D7E2EA]/60 hover:text-[#00E5FF] transition-colors group pointer-events-auto">
                      <link.icon size={16} className="text-[#00E5FF] opacity-80 group-hover:opacity-100" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Services Column */}
            <FadeIn delay={0.2} y={20} className="flex flex-col gap-6">
              <h3 className="text-[#F5DEB3] font-bold tracking-wide">Services</h3>
              <ul className="flex flex-col gap-4">
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="flex items-center gap-3 text-sm text-[#D7E2EA]/60 hover:text-[#00E5FF] transition-colors group pointer-events-auto">
                      <link.icon size={16} className="text-[#00E5FF] opacity-80 group-hover:opacity-100" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Resources Column */}
            <FadeIn delay={0.3} y={20} className="flex flex-col gap-6">
              <h3 className="text-[#F5DEB3] font-bold tracking-wide">Resources</h3>
              <ul className="flex flex-col gap-4">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="flex items-center gap-3 text-sm text-[#D7E2EA]/60 hover:text-[#00E5FF] transition-colors group pointer-events-auto">
                      <link.icon size={16} className="text-[#00E5FF] opacity-80 group-hover:opacity-100" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>

        {/* Back to Top */}
        <FadeIn delay={0.5} y={0} className="mt-8 flex justify-end pointer-events-auto">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </FadeIn>

      </div>
    </footer>
  );
};
