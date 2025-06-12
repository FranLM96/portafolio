import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { projects } from "../src/data/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Home() {
  const allowedSlugs = ['branding', 'marcas-desarrolladas', 'diseno-web', 'marketing-publicidad', 'fotografia-video', 'modelado-renderizado-3d'];
  const filteredProjects = projects.filter(project => allowedSlugs.includes(project.slug));
  const allProjects = filteredProjects;
  const [visibleCount, setVisibleCount] = useState(3);
  const [typedText, setTypedText] = useState("");
  const carouselRef = useRef(null);

  const fullText = "Diseñador digital que fusiona creatividad, funcionalidad y detalle.";

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setVisibleCount(width < 640 ? 1 : width < 1024 ? 2 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let timeoutId;
    const type = (index) => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        timeoutId = setTimeout(() => type(index + 1), 25);
      }
    };

    setTypedText(""); // Reset text on mount
    type(0); // Start typing from the beginning

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, []);

  const scrollNext = () => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.querySelector("a")?.offsetWidth || 300;
    carouselRef.current.scrollBy({ left: cardWidth * visibleCount, behavior: "smooth" });
  };

  const scrollPrev = () => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.querySelector("a")?.offsetWidth || 300;
    carouselRef.current.scrollBy({ left: -cardWidth * visibleCount, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Inicio | Francisco Luna</title>
        <meta name="description" content="Portafolio digital de diseño por Francisco Luna." />
      </Head>

      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-28 bg-dark-blue text-light-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary-blue/20 via-transparent to-dark-blue blur-3xl opacity-50 pointer-events-none" />

        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight z-10">
          Hola, soy{" "}
          <Link
            href="/about"
            className="text-primary-blue underline decoration-wavy hover:text-secondary-blue transition-colors"
          >
            Francisco Luna
          </Link>
        </h1>

        <p className="mt-6 text-xl sm:text-2xl max-w-3xl font-mono text-primary-blue z-10">
          {typedText}
          {typedText.length < fullText.length && (
            <span className="blinking-cursor text-secondary-blue">|</span>
          )}
        </p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center z-10">
          <a
            href="#proyectos"
            className="px-6 py-3 rounded-full border border-primary-blue bg-dark-blue/90/20 text-light-blue hover:bg-secondary-blue/30 font-semibold backdrop-blur-md transition-all shadow-md"
          >
            Ver Proyectos
          </a>
          <Link
            href="/about"
            className="px-6 py-3 rounded-full border border-secondary-blue text-light-blue hover:bg-secondary-blue/20 font-semibold backdrop-blur-md transition-all shadow-md"
          >
            Sobre mí
          </Link>
        </div>
      </section>

      <section id="proyectos" className="py-24 bg-dark-background px-6 text-light-blue">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-primary-blue">Proyectos destacados</h2>
            <div className="flex gap-3">
              <button
                onClick={scrollPrev}
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue"
                aria-label="Anterior"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={scrollNext}
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue"
                aria-label="Siguiente"
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto touch-pan-x scrollbar-none scroll-smooth px-4 py-2 bg-dark-blue/40 rounded-3xl shadow-inner snap-x snap-mandatory"
          >
            {allProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects#${project.slug}`}
                className="min-w-[300px] bg-dark-blue/90 border border-gray-600 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.05] transition-transform duration-300 animate-fadeInUp snap-start"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={project.image}
                  alt={project.translations.es.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-light-blue">
                    {project.translations.es.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .blinking-cursor {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </>
  );
}
