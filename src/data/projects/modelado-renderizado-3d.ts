import { Project, GalleryItem } from '../../types/project';

export const modeladoRenderizado3dProject: Project = {
  slug: 'modelado-renderizado-3d',
  translations: {
    es: {
      title: ' Modelado y Renderizado 3D',
      description: 'Servicios avanzados de modelado y renderizado 3D, desde la creación de modelos hasta la animación, que dan vida a ideas y proyectos.',
    },
  },
  image: '/images/projects/modelado-renderizado-3d/portada.png',
  gallery: [
    { type: 'image', url: '/images/projects/modelado-renderizado-3d/gallery/marcas-1.jpg' },
    { type: 'image', url: '/images/projects/modelado-renderizado-3d/gallery/marcas-2.jpg' },
    { type: 'image', url: '/images/projects/modelado-renderizado-3d/gallery/marcas-3.jpg' },
  ],
  subItems: [
    {
      translations: {
        es: {
          title: 'Modelado 3D',
          description: 'Creación de modelos tridimensionales detallados de productos, personajes y entornos para diversas aplicaciones.',
        },
      },
      slug: 'modelado-3d',
      image: '/images/projects/modelado-renderizado-3d/icons/3d-model-icon.svg',
      svg: '/images/projects/modelado-renderizado-3d/icons/3d-model-icon.svg',
      gallery: [
        { type: 'image', url: '/images/projects/modelado-renderizado-3d/modelado-3d/gallery/3d2.png' },
        { type: 'image', url: '/images/projects/modelado-renderizado-3d/modelado-3d/gallery/3d.png' },
      ],
    },
    {
      translations: {
        es: {
          title: 'Renderizado y Texturizado',
          description: 'Generación de imágenes fotorrealistas con técnicas avanzadas de iluminación y materiales.',
        },
      },
      slug: 'renderizado-y-texturizado',
      image: '/images/projects/modelado-renderizado-3d/icons/render-icon.svg',
      svg: '/images/projects/modelado-renderizado-3d/icons/render-icon.svg',
      gallery: [
        { type: 'image', url: '/images/projects/modelado-renderizado-3d/renderizado-y-texturizado/gallery/render-2.png' },
        { type: 'image', url: '/images/projects/modelado-renderizado-3d/renderizado-y-texturizado/gallery/render-1.png' },
      ],
    },
    {
      translations: {
        es: {
          title: 'Animación 3D',
          description: 'Desarrollo de animaciones para personajes, objetos y escenas, incluyendo simulaciones de efectos como partículas, agua y fuego.',
        },
      },
      slug: 'animacion-3d',
      image: '/images/projects/modelado-renderizado-3d/icons/animation-icon.svg',
      svg: '/images/projects/modelado-renderizado-3d/icons/animation-icon.svg',
      gallery: [
        { type: 'image', url: '/images/projects/modelado-renderizado-3d/animacion-3d/gallery/animation-1.jpg' },
        { type: 'image', url: '/images/projects/modelado-renderizado-3d/animacion-3d/gallery/animation-2.jpg' },
      ],
    },
  ],
};