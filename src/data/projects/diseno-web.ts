import { Project } from '../../types/project';

export const disenoWebProject: Project = {
  slug: 'diseno-web',
  translations: {
    es: {
      title: ' Diseño Web',
      description:
        'Servicios completos de desarrollo web que incluyen desde diseño hasta optimización SEO, adaptados a todas las plataformas y dispositivos.',
    },
  },
  image: '/images/projects/diseno-web/portada.png',
  gallery: [
    { type: 'image', url: '/images/projects/diseno-web/gallery/web-1.jpg' },
    { type: 'image', url: '/images/projects/diseno-web/gallery/web-2.jpg' },
    { type: 'image', url: '/images/projects/diseno-web/gallery/web-3.jpg' },
  ],
  subItems: [
    {
      slug: 'desarrollo-frontend',
      translations: {
        es: {
          title: 'Desarrollo Frontend',
          description:
            'Creación de interfaces atractivas y responsivas utilizando tecnologías como HTML, CSS, JavaScript y frameworks como React.',
        },
      },
      image: '/images/projects/diseno-web/icons/frontend-icon.svg',
      svg: '/images/projects/diseno-web/icons/frontend-icon.svg',
      gallery: [
        { type: 'image', url: '/images/projects/diseno-web/desarrollo-frontend/gallery/frontend-1.jpg' },
        { type: 'image', url: '/images/projects/diseno-web/desarrollo-frontend/gallery/frontend-2.jpg' },
      ],
    },
    {
      slug: 'desarrollo-backend',
      translations: {
        es: {
          title: 'Desarrollo Backend',
          description:
            'Implementación de funcionalidades del lado del servidor utilizando PHP y frameworks como Laravel.',
        },
      },
      image: '/images/projects/diseno-web/icons/backend-icon.svg',
      svg: '/images/projects/diseno-web/icons/backend-icon.svg',
      gallery: [
        { type: 'image', url: '/images/projects/diseno-web/desarrollo-backend/gallery/backend-1.jpg' },
        { type: 'image', url: '/images/projects/diseno-web/desarrollo-backend/gallery/backend-2.jpg' },
      ],
    },
    {
      slug: 'wordpress',
      translations: {
        es: {
          title: 'WordPress',
          description: 'Desarrollo de sitios web personalizados y fáciles de administrar a través de WordPress.',
        },
      },
      image: '/images/projects/diseno-web/icons/wordpress-icon.svg',
      svg: '/images/projects/diseno-web/icons/wordpress-icon.svg',
      gallery: [
        { type: 'image', url: '/images/projects/diseno-web/wordpress/gallery/wordpress-1.jpg' },
        { type: 'image', url: '/images/projects/diseno-web/wordpress/gallery/wordpress-2.jpg' },
      ],
    },
    {
      slug: 'diseno-responsive',
      translations: {
        es: {
          title: 'Diseño Responsive',
          description:
            'Asegurando que el sitio web se visualice correctamente en dispositivos móviles, tablets y computadoras de escritorio.',
        },
      },
      image: '/images/projects/diseno-web/icons/responsive-icon.svg',
      svg: '/images/projects/diseno-web/icons/responsive-icon.svg',
      gallery: [
        { type: 'image', url: '/images/projects/diseno-web/diseno-responsive/gallery/responsive-1.jpg' },
        { type: 'image', url: '/images/projects/diseno-web/diseno-responsive/gallery/responsive-2.jpg' },
      ],
    },
    {
      slug: 'optimizacion-seo',
      translations: {
        es: {
          title: 'Optimización SEO',
          description:
            'Aplicación de prácticas de optimización para motores de búsqueda, mejorando la visibilidad en línea.',
        },
      },
      image: '/images/projects/diseno-web/icons/seo-icon.svg',
      svg: '/images/projects/diseno-web/icons/seo-icon.svg',
      gallery: [
        { type: 'image', url: '/images/projects/diseno-web/optimizacion-seo/gallery/seo-1.jpg' },
        { type: 'image', url: '/images/projects/diseno-web/optimizacion-seo/gallery/seo-2.jpg' },
      ],
    },
  ],
};
