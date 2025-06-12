import { Project, GalleryItem } from '../../types/project';

export const brandingProject: Project = {
  slug: 'branding',
  translations: {
    es: {
      title: ' Branding',
      description:
        'Servicios para crear y fortalecer tu marca, desde diseño de logotipos hasta estrategias de comunicación que te posicionen en el mercado.',
    },
  },
  image: '/images/projects/branding/portada.png',
  
  subItems: [
    {
      slug: 'diseno-de-logotipo',
      translations: {
        es: {
          title: 'Diseño de Logotipo',
          description: 'Creación de logotipos únicos que representen la esencia de la marca.',
        },
      },
      image: '/images/projects/branding/diseno-de-logotipo/logo.svg',
      svg: '/images/projects/branding/diseno-de-logotipo/logo.jpg',
      gallery: [
        { type: 'image', url: '/images/projects/branding/diseno-de-logotipo/gallery/logos1.png' },
        { type: 'image', url: '/images/projects/branding/diseno-de-logotipo/gallery/logos2.png' },
      ],
    },
    {
      slug: 'identidad-visual',
      translations: {
        es: {
          title: 'Identidad Visual',
          description:
            'Desarrollo de una identidad coherente que incluye paleta de colores, tipografía y elementos gráficos.',
        },
      },
      image: '/images/projects/branding/identidad-visual/gallery/logo.svg',
      svg: '/images/projects/branding/icons/identity-icon.svg',
      gallery: [
        { type: 'image', url: '/images/projects/branding/identidad-visual/gallery/identity-1.jpg' },
        { type: 'image', url: '/images/projects/branding/identidad-visual/gallery/identity-2.jpg' },
      ],
    },
    {
      slug: 'naming-y-slogan',
      translations: {
        es: {
          title: 'Naming y Slogan',
          description: 'Generación de nombres y eslóganes que resuenen con el público objetivo.',
        },
      },
      image: '/images/projects/branding/icons/naming-icon.svg',
      svg: '/images/projects/branding/icons/naming-icon.svg',
      gallery: [
        { type: 'image', url: '/images/projects/branding/naming-y-slogan/gallery/naming-1.jpg' },
        { type: 'image', url: '/images/projects/branding/naming-y-slogan/gallery/naming-2.jpg' },
      ],
    },
   
  ],
};
