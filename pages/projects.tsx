// IMPORTS
import Head from "next/head";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../src/data/projects";
import { useRouter } from "next/router"; // Added import
import { GalleryItem } from "../src/types/project"; // Import GalleryItem type

// Arrows
type ArrowProps = {
  onClick?: () => void;
};

const NextArrow = ({ onClick }: ArrowProps) => (
  <button
    aria-label="Siguiente"
    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-white hover:text-blue-500 transition-colors"
    onClick={onClick}
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M7.05 4.05a1 1 0 011.414 0L13.364 9l-4.9 4.95a1 1 0 01-1.414-1.414L10.536 9 7.05 5.464a1 1 0 010-1.414z" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }: ArrowProps) => (
  <button
    aria-label="Anterior"
    className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-white hover:text-blue-500 transition-colors"
    onClick={onClick}
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M12.95 4.05a1 1 0 00-1.414 0L6.636 9l4.9 4.95a1 1 0 001.414-1.414L9.464 9l3.486-3.536a1 1 0 000-1.414z" />
    </svg>
  </button>
);

// COMPONENTE
export default function Projects() {
  const sliderRef = useRef<Slider | null>(null);
  const subRefs = useRef<{ [key: string]: Slider | null }>({});
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [modalMedia, setModalMedia] = useState<GalleryItem | null>(null); // State for modal media (image or video)
  const language = "es";
  const router = useRouter(); // Initialized useRouter

  // Function to open the modal
  const openModal = (media: GalleryItem) => {
    setModalMedia(media);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalMedia(null);
  };


  // Configuración del slider principal
  const mainSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    autoplay: false,
    afterChange: (index: number) => setCurrentSlideIndex(index),
  };

  // Configuración de sliders internos
  const detailSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
  };

  // Manejador del hash para navegación directa
  const handleHashChange = useCallback(() => {
    const hash = router.asPath.split("#")[1]; // Get hash from router.asPath
    if (hash) {
      // Try to find a category matching the hash
      const categoryIndex = projects.findIndex((p) => p.slug === hash);
      if (categoryIndex !== -1) {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(categoryIndex);
        }
        setCurrentSlideIndex(categoryIndex);
      } else {
        // If no category matches, try to find a sub-item matching the hash
        projects.forEach(category => {
          const subItemIndex = category.subItems?.findIndex(sub => sub.slug === hash);
          if (subItemIndex !== -1 && subItemIndex !== undefined) {
            const catIdx = projects.findIndex(p => p.slug === category.slug);
            if (catIdx !== -1) {
              if (sliderRef.current) {
                sliderRef.current.slickGoTo(catIdx);
              }
              setCurrentSlideIndex(catIdx);
            }
          }
        });
      }
    }
  }, [router.asPath, projects]); // Depend on router.asPath

  useEffect(() => {
    handleHashChange(); // Call on initial load and on router.asPath change
  }, [handleHashChange]);

  // New useEffect to handle sub-item navigation after main slider changes
  useEffect(() => {
    const hash = router.asPath.split("#")[1]; // Get hash from router.asPath
    if (hash && projects[currentSlideIndex]) {
      const currentCategory = projects[currentSlideIndex];
      const subItemIndex = currentCategory.subItems?.findIndex(sub => sub.slug === hash);

      if (subItemIndex !== -1 && subItemIndex !== undefined) {
        // Give a small delay for the sub-slider to render after main slider transition
        setTimeout(() => {
          const subSlider = subRefs.current[currentCategory.slug];
          const element = document.getElementById(hash);

          if (subSlider && subSlider.slickGoTo && element) {
            subSlider.slickGoTo(subItemIndex);
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            console.warn(`Failed to navigate to sub-item ${hash}. Sub-slider or element not found.`);
          }
        }, 200); // Increased delay slightly
      }
    }
  }, [currentSlideIndex, router.asPath, projects]); // Depend on currentSlideIndex, router.asPath, and projects

  if (!projects || projects.length === 0) {
    return (
      <div className="text-white text-center mt-20">
        No hay proyectos disponibles.
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Proyectos | Mi Portafolio</title>
        <meta name="description" content="Lista de mis proyectos realizados" />
      </Head>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto relative">
          {/* Navegación */}
          <div className="grid grid-cols-3 gap-4 mb-8 px-4 justify-center max-w-xs mx-auto sm:flex sm:flex-wrap sm:justify-center sm:gap-4 sm:max-w-none">
  {projects.map((category, idx) => (
    <button
      key={category.slug}
      onClick={() => sliderRef.current?.slickGoTo(idx)}
      className={`flex flex-col items-center justify-center w-20 h-24 text-center
        ${
          idx === currentSlideIndex
            ? "bg-primary-blue text-white border border-primary-blue"
            : "bg-transparent text-primary-blue border border-primary-blue hover:bg-primary-blue hover:text-white"
        }
        rounded-md transition-all duration-200 shadow-md p-3
        sm:w-28 sm:h-32
      `}
    >
      <div className="text-xl mb-1">
        {/* Emoji o primer palabra del título */}
        {category.translations[language]?.title.split(' ')[0] || ''}
      </div>
      <span className="text-xs sm:text-sm font-semibold leading-tight">
        {/* Título sin la primera palabra */}
        {category.translations[language]?.title.substring(category.translations[language]?.title.indexOf(' ') + 1) || "Sin título"}
      </span>
    </button>
  ))}
</div>


          {/* Slider principal */}
          <div className="w-full mx-auto relative">
            <Slider {...mainSettings} ref={sliderRef}>
              {projects.map((category) => (
                <div key={category.slug} className="mt-16 flex flex-col items-center">
                  {category.image && (
                    <img
                      src={category.image}
                      alt={category.translations[language]?.title || "Imagen del proyecto"}
                      className="w-full max-h-[400px] object-cover rounded-xl shadow-lg mb-8 transition-opacity duration-700 ease-in-out" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      style={{
                        opacity:
                          projects[currentSlideIndex]?.slug === category.slug ? 1 : 0.3,
                        cursor: "pointer",
                      }}
                      onClick={() => sliderRef.current?.slickNext()}
                    />
                  )}

                  <h2 className="text-2xl font-bold text-blue-500 mb-4 text-center">
                    {category.translations[language]?.title || "Sin título"}
                  </h2>
                  <p className="text-white mb-6 text-center max-w-2xl mx-auto">
                    {category.translations[language]?.description || "Sin descripción"}
                  </p>

                  {/* SubItems */}
                  <div className="mt-8 w-full mx-auto relative">
                    {category.subItems && category.subItems.length > 0 ? (
                      <Slider
                        {...detailSettings}
                        ref={(el) => {
                          subRefs.current[category.slug] = el;
                        }}
                      >
                        {category.subItems.map((sub) => (
                          <div key={sub.slug} id={sub.slug} className="p-4 flex flex-col items-center text-center sub-item-content">
                            <h3 className="text-2xl font-bold text-white mb-2">
                               {sub.translations[language]?.title || "Sin título"}
                            </h3>
                            {sub.image && (
                               <img
                                 src={sub.image}
                                 alt={sub.translations[language]?.title || "Subproyecto"}
                                 className="w-full max-w-[160px] h-auto object-cover rounded-lg mb-4 shadow-md" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                               />
                            )}
                            <p className="text-white mb-4">
                               {sub.translations[language]?.description || "Sin descripción"}
                            </p>
                            {/* Galería */}
                            {sub.gallery && sub.gallery.length > 0 && (
                               <div className="mt-4 w-full max-w-md mx-auto">
                                 <Slider {...detailSettings}>
                                   {sub.gallery.map((item, imgIdx) => ( // Changed imageUrl to item
                                     <div key={imgIdx} className="px-2">
                                       {item.type === 'image' ? ( // Check item type
                                         <img
                                           src={item.url} // Use item.url
                                           alt={`Imagen ${imgIdx + 1}`}
                                           className="w-full h-auto object-cover rounded-lg shadow-md cursor-pointer" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                           onClick={() => openModal(item)} // Pass the item object
                                         />
                                       ) : (
                                         <video
                                           src={item.url} // Use item.url
                                           controls // Added controls
                                            // Added
                                           className="w-full h-auto object-cover rounded-lg shadow-md cursor-pointer" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                           onClick={() => openModal(item)} // Pass the item object
                                         />
                                       )}
                                     </div>
                                   ))}
                                 </Slider>
                               </div>
                            )}
                          </div>
                        ))}
                      </Slider>
                    ) : (
                      <p className="text-center text-gray-300">
                        No hay subproyectos disponibles.
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && modalMedia && ( // Check if modalMedia exists
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal} // Close modal when clicking outside the image
        >
          <div className="relative max-w-screen-lg max-h-screen p-4" onClick={(e) => e.stopPropagation()}> {/* Prevent modal closing when clicking on the image container */}
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-white text-3xl font-bold z-10"
              onClick={closeModal}
              aria-label="Cerrar modal"
            >
              &times;
            </button>
            {modalMedia.type === 'image' ? ( // Check modalMedia type
              <img
                src={modalMedia.url} // Use modalMedia.url
                alt="Imagen en modal"
                className="max-w-full max-h-screen object-contain"
              />
            ) : (
              <video
                src={modalMedia.url} // Use modalMedia.url
                controls // Added controls
                 // Added
                className="max-w-full max-h-screen object-contain"
              />
            )}
          </div>
        </div>
      )}

          <style jsx>{`
        .blinking-cursor {
          animation: blink 1s step-start infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        /* Opcional: puedes agregar estilos personalizados para los sliders si lo deseas */
        .sub-item-content {
          scroll-margin-top: 100px;
        }

        .slick-dots li button:before {
          color: #3b82f6; /* azul para los dots */
        }
        .slick-dots li.slick-active button:before {
          color: #ffffff; /* blanco para el dot activo */
        }
      `}</style>
    </>
  );
}