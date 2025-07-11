import { useState, useEffect, useRef } from "react";
import {
  User, Briefcase, GraduationCap, Phone, Mail, MapPin, Calendar, Globe, Lightbulb, Settings
} from "lucide-react";

const About = () => {
  const sectionRefs = useRef([]);
  const [hasAnimated, setHasAnimated] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated[entry.target.id]) {
            entry.target.classList.add("animate-fadeInUp");
            setHasAnimated((prev) => ({ ...prev, [entry.target.id]: true }));
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [hasAnimated]);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <section className="bg-dark-background text-light-blue py-20 px-6" id="sobre-mi">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Encabezado */}
        <div
          id="about-header"
          ref={addToRefs}
          className="text-center space-y-4 opacity-0"
        >
          <h2 className="text-4xl font-bold text-primary-blue">
            Francisco Luna Mancilla
          </h2>
          <p className="text-light-blue max-w-2xl mx-auto text-lg">
            Diseñador Gráfico Digital apasionado por el diseño web y la fotografía. Fusiono estética y funcionalidad para crear experiencias visuales que cuentan historias y despiertan emociones.
          </p>
        
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div id="profile-section" ref={addToRefs} className="opacity-0">
              <h2 className="text-2xl font-bold text-light-blue mb-4 flex items-center gap-2">
                <User className="text-primary-blue" size={24} /> Perfil Profesional
              </h2>
              <div>
                {/* Content for profile */}
              </div>
            </div>

            {/* Experiencia Profesional */}
            <div id="experience-section" ref={addToRefs} className="opacity-0">
              <h3 className="text-1xl font-bold text-primary-blue mb-4 flex items-center gap-2">
                <Briefcase className="text-primary-blue" size={20} /> Experiencia Profesional
              </h3>
             <ul className="space-y-4 text-primary-blue">
  <li>
    <strong className="text-light-blue">Plaza Izazaga 38</strong> — Diseñador Jr<br />
    <span className="text-light-blue text-sm">Abr 2024 - Ene 2025</span>
    <ul className="list-disc list-inside text-light-blue">
      <li>Contenido para redes sociales</li>
      <li>Desarrollo de página en WordPress</li>
      <li className="text-sm text-gray-400">
        <strong>Referencia:</strong> Lic. Brenda Segura —{" "}
        <a href="tel:+525510476745" className="underline hover:text-primary-blue">
          +52 55 1047 6745
        </a>
      </li>
    </ul>
  </li>
  <li>
  <strong className="text-light-blue">Salón Casa Blanca</strong> — Community Manager<br />
  <span className="text-light-blue text-sm">Jul 2018 - Abr 2020</span>
  <ul className="list-disc list-inside text-light-blue">
    <li>Creación de contenido visual (imágenes y video)</li>
    <li className="text-sm text-gray-400">
      <strong>Referencia:</strong> Lic. Eduardo Garcia —{" "}
      <a href="tel:+525598765432" className="underline hover:text-primary-blue">
        +52 55 9876 5432
      </a>
    </li>
  </ul>
</li>

</ul>

            </div>

            <div id="education-section" ref={addToRefs} className="space-y-4 opacity-0">
              <h3 className="text-2xl font-bold text-primary-blue mb-4 flex items-center gap-2">
                <GraduationCap className="text-primary-blue" size={24} /> Formación Académica
              </h3>
              <div className="text-primary-blue space-y-4">
                <div>
                  <strong className="text-light-blue">Liceo Universidad Pedro de Gante</strong><br />
                  Diseño Gráfico Digital (2015 - 2021)
                </div>
                <div>
                  <strong className="text-light-blue">CELEX UPIICSA</strong><br />
                  Curso de inglés (Nov 2023 - Ago 2024)
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contacto, Idiomas, Habilidades, Software */}
          <div className="space-y-10">
            {/* Contacto */}
            <div id="contact-section" ref={addToRefs} className="opacity-0">
              <h3 className="text-xl font-semibold text-primary-blue mb-2 flex items-center gap-2">
                <Phone className="text-primary-blue" size={20} /> Contacto
              </h3>
              <ul className="text-light-blue space-y-1">
                <li className="flex items-center gap-2"><Calendar size={16} className="text-primary-blue" /> 03/08/1996</li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-primary-blue" /> <a href="mailto:Francisco-luna3@hotmail.com" className="hover:underline text-light-blue">Francisco-luna3@hotmail.com</a>
                </li>
                <li className="flex items-center gap-2"><Phone size={16} className="text-primary-blue" /> 5539889660</li>
                <li className="flex items-center gap-2"><MapPin size={16} className="text-primary-blue" /> Fray Juan de Torquemada #53, Col. Obrera, CDMX, C.P. 06800</li>
              </ul>
            </div>

            {/* Idiomas */}
            <div id="languages-section" ref={addToRefs} className="opacity-0">
              <h3 className="text-xl font-semibold text-primary-blue mb-2 flex items-center gap-2">
                <Globe className="text-primary-blue" size={20} /> Idiomas
              </h3>
              <div className="text-primary-blue space-y-1">
                <p>Español – ⭐⭐⭐⭐⭐</p>
                <p>Inglés – ⭐⭐☆☆☆</p>
              </div>
            </div>

            {/* Habilidades */}
            <div id="skills-section" ref={addToRefs} className="opacity-0">
              <h3 className="text-xl font-semibold text-primary-blue mb-2 flex items-center gap-2">
                <Lightbulb className="text-primary-blue" size={20} /> Habilidades
              </h3>
              <div className="grid grid-cols-2 gap-2 text-primary-blue">
                <span>📸 Fotografía</span>
                <span>💻 Desarrollo web</span>
                <span>🎨 Branding</span>
                <span>🎞️ Postproducción</span>
                <span>🧱 Modelado 3D</span>
              </div>
            </div>

            {/* Software */}
            <div id="software-section" ref={addToRefs} className="opacity-0">
              <h3 className="text-xl font-semibold text-primary-blue mb-2 flex items-center gap-2">
                <Settings className="text-primary-blue" size={20} /> Software
              </h3>
              <div className="grid grid-cols-2 gap-2 text-primary-blue">
                <span>Adobe Suite</span>
                <span>Blender</span>
                <span>VS Code</span>
                <span>Office Suite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default About;
