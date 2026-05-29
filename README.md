# KRISH OS — Portfolio v2.0

> A futuristic OS-inspired developer portfolio for Krish Sharma — Full Stack Developer · Cloud Engineer · AI Builder

![KRISH OS Preview](public/og-image.jpg)

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion + GSAP |
| 3D | Three.js + React Three Fiber |
| Smooth Scroll | Lenis |
| UI Primitives | Shadcn/UI (Radix) |
| Icons | Lucide React |
| Fonts | Syne · DM Sans · JetBrains Mono |

---

## 📁 Folder Structure

```
krish-os/
├── app/
│   ├── globals.css          # Design system, utilities
│   ├── layout.tsx           # Root layout + metadata
│   └── page.tsx             # Main page (section orchestrator)
│
├── components/
│   ├── sections/
│   │   ├── Hero.tsx           # Canvas particle universe + typed text
│   │   ├── About.tsx          # Storytelling + stats + JSON card
│   │   ├── Skills.tsx         # Category tabs + animated bars
│   │   ├── Projects.tsx       # Case study cards + modal
│   │   ├── CloudSection.tsx   # Architecture diagram
│   │   ├── GitHubDashboard.tsx# Live GitHub API stats
│   │   ├── Timeline.tsx       # Career journey + certifications
│   │   └── Contact.tsx        # Form + social links
│   │
│   ├── CustomCursor.tsx       # Magnetic cursor (desktop)
│   ├── LoadingScreen.tsx      # KRISH OS boot sequence
│   ├── Navigation.tsx         # OS-style floating nav
│   ├── SmoothScrollProvider.tsx # Lenis wrapper
│   └── Footer.tsx
│
├── lib/
│   ├── data.ts               # All portfolio content (resume-sourced)
│   └── utils.ts              # cn(), lerp(), clamp()
│
└── public/
    ├── resume/
    │   └── Krish_Sharma_Resume.pdf
    └── images/
        └── project images/   # Project screenshots
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#050816` |
| Primary | `#7C3AED` (purple) |
| Secondary | `#3B82F6` (blue) |
| Accent | `#06B6D4` (cyan) |
| Foreground | `#F8FAFC` |

**Fonts:**
- Display/Headings → **Syne** (geometric, futuristic)
- Body → **DM Sans** (clean, readable)
- OS/Code elements → **JetBrains Mono** (monospace)

---

## ⚙️ Configuration

### Resume PDF
Replace `/public/resume/Krish_Sharma_Resume.pdf` with your updated resume.

### Project Images
Place project screenshot images in `/public/images/project images/` matching the filenames in `lib/data.ts`.

### Contact Form
To wire up the contact form with real email delivery, integrate [EmailJS](https://www.emailjs.com/):

```tsx
// In components/sections/Contact.tsx, replace the simulation:
import emailjs from "@emailjs/browser";

await emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  { name: form.name, email: form.email, subject: form.subject, message: form.message },
  "YOUR_PUBLIC_KEY"
);
```

---

## 📦 Deploy to Vercel

```bash
npm run build       # Verify no build errors
vercel --prod       # Deploy
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

---

## 🔧 Performance Notes

- Particle canvas uses RAF with `will-change: transform` hints
- Images use Next.js `<Image>` with WebP/AVIF optimisation
- Framer Motion animations use `once: true` to avoid re-triggering
- GitHub API fetches are deferred until section enters viewport
- Lenis scroll is destroyed on unmount to prevent memory leaks

---

## 📄 License

MIT — Use freely, attribution appreciated.

---

*Built with ☕ by Krish Sharma — Bhubaneswar, Odisha, India*
