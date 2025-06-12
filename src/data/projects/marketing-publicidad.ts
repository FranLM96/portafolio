import { Project, GalleryItem } from '../../types/project';

export const marketingPublicidadProject: Project = {
  slug: 'marketing-publicidad',
  translations: {
    es: {
      title: ' Marketing y Publicidad',
      description: 'Servicios enfocados en mejorar la presencia y visibilidad de tu marca a través de estrategias publicitarias innovadoras.',
    },
  },
  subItems: [
    {
      translations: {
        es: {
          title: 'Publicidad Impresa',
          description: 'Diseño de materiales impresos como banners, flyers y pósters que capturen la atención y refuercen la marca.',
        },
      },
      slug: 'publicidad-impresa',
      image: '/images/projects/marketing-publicidad/icons/print-icon.svg',
      svg: '/images/projects/marketing-publicidad/icons/print-icon.svg',
      gallery: [
        { type: 'image', url: '/images/projects/marketing-publicidad/publicidad-impresa/gallery/freezer2.png' },
        { type: 'image', url: '/images/projects/marketing-publicidad/publicidad-impresa/gallery/Volante.png' },
      ],
    },
    {
      translations: {
        es: {
          title: 'Marketing Digital',
          description: 'Estrategias digitales para maximizar la presencia en línea y obtener resultados medibles.',
        },
      },
      slug: 'marketing-digital',
      image: '/images/projects/marketing-publicidad/icons/digital-marketing-icon.svg',
      svg: '/images/projects/marketing-publicidad/icons/digital-marketing-icon.svg',
      gallery: [
        { type: 'image', url: '/images/projects/marketing-publicidad/marketing-digital/gallery/perfil-muertos.png' },
        { type: 'image', url: '/images/projects/marketing-publicidad/marketing-digital/gallery/post.png' },
      ],
    },
    {
      translations: {
        es: {
          title: 'Mockups',
          description: 'Creación de mockups realistas para mostrar diseños de manera profesional y atractiva.',
        },
      },
      slug: 'mockups',
      image: '/images/projects/marketing-publicidad/icons/mockup-icon.svg',
      svg: '/images/projects/marketing-publicidad/icons/mockup-icon.svg',
      gallery: [
        { type: 'image', url: '/images/projects/marketing-publicidad/mockups/gallery/mock.png' },
        { type: 'image', url: '/images/projects/marketing-publicidad/mockups/gallery/shampoo.png' },
      ],
    },
  ],
 
  image: '/images/projects/marketing-publicidad/portada.png',
};