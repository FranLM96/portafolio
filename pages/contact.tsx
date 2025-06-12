import Head from "next/head";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Portafolio</title>
        <meta name="description" content="Contáctame para proyectos o colaboraciones" />
      </Head>

      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center px-6 py-20 sm:py-32">
        <h1 className="text-5xl font-extrabold mb-6 text-center tracking-tight leading-tight drop-shadow-md">
          ¡Trabajemos juntos!
        </h1>
        <p className="text-gray-300 max-w-2xl text-center mb-14 text-lg md:text-xl leading-relaxed">
          ¿Tienes una idea o proyecto en mente? Me encantaría saber más y crear algo increíble juntos.
          No dudes en contactarme para colaboraciones o cualquier consulta.
        </p>

        {/* Contact information grid temporarily commented out to fix build */}
        {/*
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3 w-full max-w-5xl">
          {[
            {
              icon: <FaEnvelope className="text-4xl text-blue-500 mb-4" />,
              title: "Email",
              content: (
                <a
                  href="mailto:francisco-luna3@hotmail.com"
                  className="text-blue-500 hover:underline transition-colors duration-300 font-medium"
                >
                  francisco-luna3@hotmail.com
                </a>
              ),
            },
            {
              icon: <FaPhoneAlt className="text-3xl text-blue-500 mb-4" />,
              title: "Teléfono",
              content: (
                <a
                  href="https://wa.me/525539889660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline transition-colors duration-300 font-medium"
                >
                  +52 55 3988 9660
                </a>
              ),
            },
            {
              icon: <FaMapMarkerAlt className="text-4xl text-blue-500 mb-4" />,
              title: "Ubicación",
              content: (
                <p className="text-gray-400 leading-relaxed">
                  Fray Juan de Torquemada #53<br />
                  Col. Obrera, CDMX
                </p>
              ),
            },
          ].map(({ icon, title, content }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-gray-800 bg-opacity-70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300"
            >
              {icon}
              <h3 className="font-semibold text-white text-xl mb-2">{title}</h3>
              {content}
            </div>
          ))}
        </div>
        */}

        <p className="text-gray-500 mt-16 italic text-center max-w-md mx-auto select-none">
          Próximamente: formulario de contacto.
        </p>
      </section>
    </>
  );
}
