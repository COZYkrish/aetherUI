"use client";

import { useEffect, useRef, useState } from "react";


const IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const ROW1 = IMAGES.slice(0, 11);
const ROW2 = IMAGES.slice(11);

export const MarqueeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // rect.top is relative to viewport. 
      // (window.scrollY - sectionTop + window.innerHeight) is essentially the scroll distance since the section entered the viewport.
      // Wait, rect.top is (sectionTop - window.scrollY).
      // So (window.innerHeight - rect.top) is how many pixels of the section (from top) have scrolled into view.
      const scrollAmount = window.innerHeight - rect.top;
      setOffset(scrollAmount * 0.3);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const moveRight = `translateX(${offset - 200}px)`;
  const moveLeft = `translateX(${-(offset - 200)}px)`;

  const renderRow = (images: string[]) => {
    // Tripled for seamless scrolling
    const repeated = [...images, ...images, ...images];
    return repeated.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={`Marquee image ${idx}`}
        loading="lazy"
        className="w-[260px] h-[168px] sm:w-[340px] sm:h-[220px] md:w-[420px] md:h-[270px] rounded-xl sm:rounded-2xl object-cover shrink-0"
      />
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-16 sm:pt-24 md:pt-32 lg:pt-40 pb-10 overflow-hidden flex flex-col gap-2 sm:gap-3"
    >
      <div
        className="flex gap-3 will-change-transform"
        style={{ transform: moveRight }}
      >
        {renderRow(ROW1)}
      </div>
      <div
        className="flex gap-3 will-change-transform"
        style={{ transform: moveLeft }}
      >
        {renderRow(ROW2)}
      </div>
    </section>
  );
};
