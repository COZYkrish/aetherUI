# aetherUI – Cinematic Portfolio Experience

Welcome to **aetherUI**, a highly interactive, cinematic developer portfolio built with modern web technologies. This project is designed to break away from traditional static resumes and deliver a premium, app-like user experience that showcases technical skills through engaging visuals and buttery-smooth interactions.

## 🌟 The User Experience (UX)

This portfolio is heavily focused on micro-interactions, 3D graphics, and fluid motion to create a "wow" factor from the moment the user opens the page.

### 1. Cinematic Loading Sequence
Before entering the site, users are greeted with a fully interactive 3D loading screen built with React Three Fiber. An orthographic camera overlooks a rotating isometric grid of metallic cubes that assemble themselves as the site assets load in the background, setting the cinematic tone immediately.

### 2. Intelligent Custom Cursor
The default mouse pointer is replaced with a highly optimized, custom-built ring-and-dot cursor. Powered by Framer Motion and event delegation, the cursor intelligently morphs based on what the user is interacting with:
- **Default:** A sleek, minimal purple ring trailing a solid dot.
- **Hovering Buttons/Links:** Expands into a larger, cyan glassy circle to indicate clickability.
- **Hovering Text:** Transforms into a vertical text-selection bar.
- **Clicking:** Shrinks rapidly to provide tactile visual feedback.

### 3. Immersive 3D Hero Section
The landing section features a stunning, interactive 3D background powered by **Spline**. The background responds to user input, while crisp, animated typography introduces the developer. A perfectly positioned, glassy "Contact Me" button hovers strategically over the scene, offering a clear call to action.

### 4. Glassmorphic Skills & Tools Marquee
The skills section features an infinite, seamless scrolling marquee of technologies. It sits on top of a frosted, semi-transparent grey glassmorphism container. Instead of hard cutoffs, the marquee uses advanced CSS `mask-image` gradients to smoothly fade the icons into the glassy background as they enter and exit the screen.

### 5. Dynamic Scroll Animations & Smooth Scrolling
- **Lenis Smooth Scroll:** Native scrolling is hijacked and smoothed out using Lenis, ensuring the user glides down the page like a camera panning in a movie.
- **Scroll-Triggered Reveals:** As the user scrolls, components don't just appear—they animate in. Stats count up dynamically from zero using spring physics, and sections fade in with a staggered upward motion.

## 🛠️ Tech Stack & Workflow

This project leverages a cutting-edge React ecosystem to achieve its cinematic feel without compromising performance.

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS (for rapid, utility-first styling)
- **Animation Engine:** Framer Motion (used for all UI animations, cursor logic, and scroll reveals)
- **3D Rendering:** Three.js, React Three Fiber, React Three Drei
- **3D Assets:** Spline (`@splinetool/react-spline/next`)
- **Smooth Scrolling:** Lenis (`@studio-freight/lenis`)
- **Icons:** Lucide React & Devicon

### Development Workflow

1. **State Management & Data:** All portfolio data (projects, skills, stats, timelines) is decoupled from the UI components and stored in `lib/data.ts`. This allows for instant updates to the content without touching the complex animation logic.
2. **Component Architecture:** The UI is split into logical, reusable sections (`HeroSection.tsx`, `AboutSection.tsx`, `SkillsSection.tsx`).
3. **Animation Wrappers:** Animations are handled via reusable wrappers like `<FadeIn>` which utilize Framer Motion's `whileInView` API, keeping the individual sections clean and declarative.
4. **Performance Optimization:** Heavy operations like DOM observer patterns have been replaced with highly performant Event Delegation (specifically in the Custom Cursor logic) to ensure the main thread remains unblocked, keeping the 3D canvas and animations running at 60+ FPS.

## 🚀 Getting Started

To run this project locally:

```bash
# 1. Clone the repository
git clone https://github.com/COZYkrish/aetherUI.git

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to experience the portfolio.

## 📝 License
Designed and developed by Krish Sharma. Feel free to draw inspiration from the design and interactions!
