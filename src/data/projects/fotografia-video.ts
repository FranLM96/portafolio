import { Project, GalleryItem } from '../../types/project';

export const fotografiaVideoProject: Project = {
  slug: 'fotografia-video',
  translations: {
    es: {
      title: ' Fotografía y Video',
      description: 'Servicios fotográficos y de video que capturan la esencia de tu producto, proyecto o evento, con postproducción para obtener resultados de alta calidad.',
    },
  },
  image: '/images/projects/fotografia-video/portada.png',
  gallery: [
    { type: 'image', url: '/images/projects/branding/gallery/branding-1.jpg' },
    { type: 'image', url: '/images/projects/branding/gallery/branding-2.jpg' },
    { type: 'image', url: '/images/projects/branding/gallery/branding-3.jpg' },
  ],
  subItems: [
    {
      translations: {
        es: {
          title: 'Fotografía',
          description: 'Captura de imágenes con enfoque en detalles y composición para destacar productos y servicios.',
        },
      },
      slug: 'fotografia',
      image: '/images/projects/fotografia-video/icons/photo-icon.svg',
      svg: '/images/projects/fotografia-video/icons/photo-icon.svg',
      gallery: [
        { type: 'image', url: '/images/projects/fotografia-video/fotografia/gallery/foto1.png' },
        { type: 'image', url: '/images/projects/fotografia-video/fotografia/gallery/foto2.png' },
      ],
    },
    {
      translations: {
        es: {
          title: 'Retoque y Postproducción Fotográfica',
          description: 'Mejora de imágenes a través de corrección de color, eliminación de imperfecciones y efectos visuales.',
        },
      },
      slug: 'retoque-y-postproduccion-fotografica',
      image: '/images/projects/fotografia-video/icons/photo-retouch-icon.svg',
      svg: '/images/projects/fotografia-video/icons/photo-retouch-icon.svg',
    gallery: [
  {
    type: 'image',
    url: '/images/projects/fotografia-video/retoque-y-postproduccion-fotografica/gallery/retoque1.png'
  },
  {
    type: 'image',
    url: '/images/projects/fotografia-video/retoque-y-postproduccion-fotografica/gallery/retoque2.png'
  }
],

    },
    {
      translations: {
        es: {
          title: 'Edición y Postproducción de Video',
          description: 'Creación de videos profesionales con efectos, transiciones, corrección de color y postproducción para transmitir el mensaje deseado.',
        },
      },
      slug: 'edicion-y-postproduccion-de-video',
      image: '/images/projects/fotografia-video/icons/video-edit-icon.svg',
      svg: '/images/projects/fotografia-video/icons/video-edit-icon.svg',
      gallery: [
        { type: 'video', url: '/images/projects/fotografia-video/edicion-y-postproduccion-de-video/gallery/FIN.mp4' },
        { type: 'video', url: '/images/projects/fotografia-video/edicion-y-postproduccion-de-video/gallery/concursohistoria.mp4' },
      ],
    },
  ],
};