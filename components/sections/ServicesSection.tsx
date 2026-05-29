import { FadeIn } from "../ui/FadeIn";

const SERVICES = [
  {
    id: "01",
    name: "Full-Stack Development",
    description: "Designing and building production-grade web applications using the MERN stack, Next.js, and robust backends like Node.js, Express, Spring Boot, and Flask. Focused on responsive UIs, secure RESTful APIs, and scalable architecture.",
  },
  {
    id: "02",
    name: "Cloud & DevOps Engineering",
    description: "Deploying and managing scalable infrastructure across AWS, Azure, and GCP. Experience with Linux systems, Git/GitHub workflows, virtualization, and setting up modern deployment pipelines.",
  },
  {
    id: "03",
    name: "AI & Machine Learning",
    description: "Building intelligent systems that learn and adapt. Expertise in Python, Scikit-learn, and Pandas for developing predictive models, voice assistants, and integrating machine learning capabilities into web applications.",
  },
  {
    id: "04",
    name: "Data Visualization & Analytics",
    description: "Transforming raw data into meaningful, interactive experiences. Utilizing tools like Three.js and Chart.js to create stunning 3D dashboards and comprehensive data-driven interfaces with AI-powered insights.",
  },
  {
    id: "05",
    name: "Database Architecture",
    description: "Architecting high-performance data storage solutions with MySQL, MongoDB, and SQLite. Designing efficient schemas, ensuring ACID compliance, and handling complex entity relationships for enterprise-grade applications.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 text-[#0C0C0C]">
      <FadeIn delay={0} y={40} className="w-full mb-16 sm:mb-20 md:mb-28">
        <h2 className="font-black uppercase text-center leading-none" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col w-full">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.id}
            delay={i * 0.1}
            y={30}
            className={`flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12 ${
              i !== 0 ? "border-t border-[#0C0C0C]/15" : ""
            }`}
          >
            {/* Left: Number */}
            <div className="flex-shrink-0">
              <span className="font-black leading-none" style={{ fontSize: "clamp(2.5rem, 10vw, 140px)" }}>
                {service.id}
              </span>
            </div>
            
            {/* Right: Info */}
            <div className="flex flex-col justify-center sm:pt-4">
              <h3 className="font-medium uppercase mb-3 sm:mb-4 leading-tight" style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}>
                {service.name}
              </h3>
              <p className="font-light leading-relaxed max-w-2xl opacity-60" style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}>
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
