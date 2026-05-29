"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

// List of doodles to render. We'll generate a card for each.
const doodles = [
  { text: "Hire me", emoji: "👋", rotation: -10 },
  { text: "Wow", emoji: "⭐", rotation: 15 },
  { text: "Anonymous", emoji: "🌸", rotation: -5 },
  { text: "Creative", emoji: "🎨", rotation: 20 },
  { text: "Designer", emoji: "✏️", rotation: -15 },
  { text: "Developer", emoji: "💻", rotation: 5 },
  { text: "UX/UI", emoji: "✨", rotation: -20 },
  { text: "aetherUI", emoji: "🌌", rotation: 10 },
  { text: "React", emoji: "⚛️", rotation: -8 },
  { text: "Next.js", emoji: "🚀", rotation: 12 },
  { text: "Awesome", emoji: "🔥", rotation: -18 },
  { text: "Hello", emoji: "😊", rotation: 8 },
];

export const PhysicsDoodles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Determine card sizes based on screen width
    const isMobile = window.innerWidth < 640;
    const cardWidth = isMobile ? 90 : 120;
    const cardHeight = isMobile ? 105 : 140;
    // Show fewer doodles on mobile to prevent overcrowding
    const visibleDoodles = isMobile ? doodles.slice(0, 8) : doodles;

    // Module aliases
    const Engine = Matter.Engine,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    // Create engine
    const engine = Engine.create();
    
    // Set up world boundaries based on the container's actual size
    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight;
    
    // Floor and walls
    const ground = Bodies.rectangle(width / 2, height + 25, width, 50, { isStatic: true });
    const wallLeft = Bodies.rectangle(-25, height / 2, 50, height * 2, { isStatic: true });
    const wallRight = Bodies.rectangle(width + 25, height / 2, 50, height * 2, { isStatic: true });

    // Create bodies for each doodle
    const cardBodies = visibleDoodles.map((doodle) => {
      const x = Math.random() * (width - 150) + 75;
      const y = Math.random() * -500 - 100; // Spawn above the view
      
      return Bodies.rectangle(x, y, cardWidth, cardHeight, {
        restitution: 0.6,
        friction: 0.1,
        frictionAir: 0.02,
        angle: (doodle.rotation * Math.PI) / 180,
      });
    });

    Composite.add(engine.world, [ground, wallLeft, wallRight, ...cardBodies]);

    // Add mouse control
    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(engine.world, mouseConstraint);
    
    mouseConstraint.mouse.element.removeEventListener("mousewheel", (mouseConstraint.mouse as unknown as { mousewheel: EventListener }).mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", (mouseConstraint.mouse as unknown as { mousewheel: EventListener }).mousewheel);

    // Fix dragging glitch: make container solid during drag so mousemove isn't lost
    Matter.Events.on(mouseConstraint, "startdrag", () => {
      if (containerRef.current) containerRef.current.style.pointerEvents = "auto";
    });
    Matter.Events.on(mouseConstraint, "enddrag", () => {
      if (containerRef.current) containerRef.current.style.pointerEvents = "none";
    });

    // Run the engine
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Sync DOM elements and rescue fallen bodies
    let animationFrame: number;
    const updateLoop = () => {
      cardBodies.forEach((body, i) => {
        // Rescue bodies that fell out of bounds (e.g. if container height was 0 on mount)
        if (body.position.y > height + 200) {
          Matter.Body.setPosition(body, {
            x: Math.random() * (width - 150) + 75,
            y: -200,
          });
          Matter.Body.setVelocity(body, { x: 0, y: 0 });
        }

        if (cardRefs.current[i]) {
          const x = body.position.x - cardWidth / 2;
          const y = body.position.y - cardHeight / 2;
          const angle = body.angle;
          cardRefs.current[i]!.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
        }
      });
      animationFrame = requestAnimationFrame(updateLoop);
    };
    updateLoop();

    // Handle window resize dynamically
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      Matter.Body.setPosition(ground, { x: width / 2, y: height + 25 });
      Matter.Body.setVertices(ground, Matter.Bodies.rectangle(width / 2, height + 25, width, 50).vertices);
      Matter.Body.setPosition(wallRight, { x: width + 25, y: height / 2 });
    };
    
    // Observe the container's height in case footer content changes size
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(containerRef.current);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrame);
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, []);

  // Determine card display sizes responsively (CSS handles visual, JS handles physics)
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none overflow-hidden z-10"
    >
      {doodles.map((doodle, i) => (
        <div
          key={i}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          className="absolute top-0 left-0 w-[90px] h-[105px] sm:w-[120px] sm:h-[140px] bg-[#F5F1E7] rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col pointer-events-auto cursor-grab active:cursor-grabbing select-none border border-black/5"
          style={{ willChange: "transform" }}
        >
          {/* Top tape/margin area */}
          <div className="h-3 sm:h-4 bg-[#E8E2D2]/50 w-full mb-1 sm:mb-2"></div>
          
          {/* Main doodle area */}
          <div className="flex-1 flex items-center justify-center text-2xl sm:text-4xl">
            {doodle.emoji}
          </div>
          
          {/* Bottom text */}
          <div className="h-[30px] sm:h-[40px] border-t border-black/10 flex items-center justify-center font-caveat text-black/80 font-medium text-xs sm:text-sm tracking-wide">
            {doodle.text}
          </div>
        </div>
      ))}
    </div>
  );
};
