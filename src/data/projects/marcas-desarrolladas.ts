import { Project, GalleryItem } from '../../types/project';

export const marcasDesarrolladasProject: Project = {
  slug: 'marcas-desarrolladas',
  translations: {
    es: {
      title: ' Marcas Desarrolladas',
      description:
        'Marcas que han sido desarrolladas con creatividad e innovación, fusionando lo moderno con lo tradicional en diversas industrias.',
    },
  },
  image: '/images/projects/marcas-desarrolladas/portada.png',

  subItems: [
    {
      slug: 'axolotl',
      translations: {
        es: {
          title: 'Axolotl',
          description:
            'Marca de ropa streetwear que fusiona el diseño moderno con la riqueza cultural de las civilizaciones precolombinas.',
        },
      },
      image: '/images/projects/marcas-desarrolladas/axolotl/gallery/logo.svg',
      svg: '/images/projects/marcas-desarrolladas/axolotl/gallery/logo.svg',
      gallery: [
        { type: 'image', url: '/images/projects/marcas-desarrolladas/axolotl/gallery/foto1.png' },
        { type: 'image', url: '/images/projects/marcas-desarrolladas/axolotl/gallery/axolotl-2.jpg' },
      ],
    },
    {
      slug: 'inariyaki',
      translations: {
        es: {
          title: 'Inariyaki',
          description:
            'Restaurante de comida japonesa con un diseño minimalista inspirado en el cerezo japonés. Su identidad visual combina tradición y modernidad.',
        },
      },
      image: '/images/projects/marcas-desarrolladas/inariyaki/gallery/logo.svg',
      svg: '/images/projects/marcas-desarrolladas/inariyaki/gallery/logo.svg',
      gallery: [
        { type: 'image', url: '/images/projects/marcas-desarrolladas/inariyaki/gallery/foto1.png' },
        { type: 'image', url: '/images/projects/marcas-desarrolladas/inariyaki/gallery/foto2.png' },
      ],
    },
    {
      slug: 'meztli',
      translations: {
        es: {
          title: 'Meztli',
          description:
            'Marca de cosméticos inspirada en culturas precolombinas, ofreciendo productos que fusionan tradición y modernidad.',
        },
      },
      image: '/images/projects/marcas-desarrolladas/meztli/gallery/logo.svg',
      svg: '/images/projects/marcas-desarrolladas/meztli/gallery/logo.svg',
      gallery: [
        { type: 'image', url: '/images/projects/marcas-desarrolladas/meztli/gallery/foto1.png' },
        { type: 'image', url: '/images/projects/marcas-desarrolladas/meztli/gallery/foto2p.ng' },
      ],
    },
    {
      slug: 'candy-pop',
      translations: {
        es: {
          title: 'Candy POP',
          description:
            'Candy Pop es una marca especializada en la venta de dulces y golosinas en islas de plazas comerciales, ofreciendo una explosión de sabor para todas las edades.',
        },
      },
      image: '/images/projects/marcas-desarrolladas/candy-pop/gallery/logo.svg',
      svg: '/images/projects/marcas-desarrolladas/candy-pop/gallery/logo.svg',
      gallery: [
        { type: 'image', url: '/images/projects/marcas-desarrolladas/candy-pop/gallery/foto1.png' },
        { type: 'image', url: '/images/projects/marcas-desarrolladas/candy-pop/gallery/foto2.png' },
      ],
    },
    {
      slug: 'happymoon',
      translations: {
        es: {
          title: 'HappyMoon',
          description:
            'HappyMoon es una marca especializada en la venta de dulces y golosinas en islas de plazas comerciales, ofreciendo una explosión de sabor para todas las edades.',
        },
      },
      image: '/images/projects/marcas-desarrolladas/happymoon/gallery/logo.svg',
      svg: '/images/projects/marcas-desarrolladas/happymoon/gallery/logo.svg',
      gallery: [
        { type: 'image', url: '/images/projects/marcas-desarrolladas/happymoon/gallery/foto1.png' },
        { type: 'image', url: '/images/projects/marcas-desarrolladas/happymoon/gallery/foto2.png' },
      ],
    },
   
  ],
};