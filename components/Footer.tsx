import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-blue/95 text-white/90 py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-sm">
        {/* Branding y descripción */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-primary-blue">MiPortafolio</h4>
          <p className="text-white/80">
            Diseñado y desarrollado por Francisco Luna, fusionando diseño, código y creatividad en un solo espacio.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h5 className="text-lg font-semibold text-primary-blue mb-4">Enlaces</h5>
          <ul className="space-y-2 text-white/80">
            <li><a href="/" className="hover:text-light-blue transition">Inicio</a></li>
            <li><a href="/projects" className="hover:text-light-blue transition">Proyectos</a></li>
            <li><a href="/about" className="hover:text-light-blue transition">Sobre mí</a></li>
            <li><a href="/contact" className="hover:text-light-blue transition">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto directo */}
        <div>
          <h5 className="text-lg font-semibold text-primary-blue mb-4">Contacto</h5>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-center gap-2">
              {/* @ts-ignore */}
              <FaEnvelope className="text-primary-blue" />
              <a href="mailto:Francisco-luna3@hotmail.com" className="hover:underline text-light-blue">Francisco-luna3@hotmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              {/* @ts-ignore */}
              <FaPhoneAlt className="text-primary-blue" />
              <span>5539889660</span>
            </li>
            <li className="flex items-center gap-2">
              {/* @ts-ignore */}
              <FaMapMarkerAlt className="text-primary-blue" />
              <span>CDMX, México</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Redes sociales y derechos */}
      <div className="mt-12 border-t border-primary-blue pt-6 text-center space-y-4">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-blue hover:text-light-blue transition transform hover:scale-110"
            aria-label="GitHub"
          >
            {/* @ts-ignore */}
            <FaGithub size={20} />
          </a>
          <a
            href="www.linkedin.com/in/franciscolunaportafolio0396"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-blue hover:text-light-blue transition transform hover:scale-110"
            aria-label="LinkedIn"
          >
            {/* @ts-ignore */}
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.behance.net/franciscoluna15" // Placeholder URL for Behance
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-blue hover:text-light-blue transition transform hover:scale-110"
            aria-label="Behance"
          >
            {/* @ts-ignore */}
            <FaBehance size={20} />
          </a>
          <a
            href="mailto:Francisco-luna3@hotmail.com"
            className="text-primary-blue hover:text-light-blue transition transform hover:scale-110"
            aria-label="Correo"
          >
            {/* @ts-ignore */}
            <FaEnvelope size={20} />
          </a>
        </div>

        <p className="text-white/70 text-xs">
          © {new Date().getFullYear()} Francisco Luna. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};


export default Footer;
