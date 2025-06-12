import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { projects } from "../src/data/projects";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopProjectsOpen, setDesktopProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const router = useRouter();
  const mobileMenuRef = useRef<HTMLDivElement>(null); // Ref for the mobile menu container

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Effect to handle clicks outside the mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setMobileProjectsOpen(false); // Also close sub-menu if open
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]); // Re-run when mobileMenuOpen changes

  const handleProjectLinkClick = (slug: string) => {
    setDesktopProjectsOpen(false);
    setMobileMenuOpen(false);
    setMobileProjectsOpen(false);
    router.push(`/projects#${slug}`, undefined, { shallow: true });
  };

  return (
    <nav className={`text-blue-400 fixed w-full z-50 bg-transparent transition-transform duration-300 ease-in-out ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide text-blue-500 hover:text-blue-400 transition-colors"
        >
          MiPortafolio
        </Link>

        {/* Menú Desktop */}
        <ul className="hidden lg:flex items-center space-x-10 text-lg font-medium select-none">
          <li>
            <Link
              href="/"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Sobre mí
            </Link>
          </li>

          {/* Dropdown Proyectos Desktop */}
          <li className="relative">
            <button
              onClick={() => setDesktopProjectsOpen(!desktopProjectsOpen)}
              aria-haspopup="true"
              aria-expanded={desktopProjectsOpen}
              className="flex items-center gap-1 hover:text-blue-500 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-400 rounded"
              type="button"
            >
              Proyectos
              <ChevronDown
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  desktopProjectsOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Dropdown panel */}
            {desktopProjectsOpen && (
              <ul
                className="absolute right-0 mt-2 w-48 bg-dark-background border border-blue-500 rounded-md shadow-lg overflow-hidden z-50 animate-fadeIn"
                role="menu"
                aria-label="Proyectos"
              >
                {projects.map(({ slug, translations }) => (
                  <li key={slug} role="none">
                    <a
                      href={`/projects#${slug}`}
                      onClick={() => handleProjectLinkClick(slug)}
                      className="block px-4 py-2 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors duration-150"
                      role="menuitem"
                    >
                      {translations.es.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/contact"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-7 h-7 text-blue-500" />
          ) : (
            <Menu className="w-7 h-7 text-blue-500" />
          )}
        </button>

        {/* Menú Mobile */}
        <div
          ref={mobileMenuRef} // Attach the ref here
          className={`fixed top-0 right-0 h-screen w-64 bg-black shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <nav className="flex flex-col p-6 space-y-6 pt-20 select-none">
            <Link
              href="/"
              className="text-blue-400 font-semibold text-lg hover:text-blue-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className="text-blue-400 font-semibold text-lg hover:text-blue-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre mí
            </Link>

            {/* Dropdown Proyectos Mobile */}
            <div>
              <button
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                aria-haspopup="true"
                aria-expanded={mobileProjectsOpen}
                className="flex items-center gap-2 text-blue-400 font-semibold text-lg hover:text-blue-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                type="button"
              >
                Proyectos
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    mobileProjectsOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {mobileProjectsOpen && (
                <ul className="pl-4 mt-2 flex flex-col space-y-1 text-blue-400">
                  {projects.map(({ slug, translations }) => (
                    <li key={slug}>
                      <a
                        href={`/projects#${slug}`}
                        onClick={() => handleProjectLinkClick(slug)}
                        className="hover:text-blue-500 transition-colors"
                      >
                        {translations.es.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link
              href="/contact"
              className="text-blue-400 font-semibold text-lg hover:text-blue-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>

        {/* Overlay para cerrar menú móvil */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black z-40"
            // Removed onClick from overlay as global listener handles it
            aria-hidden="true"
          />
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
