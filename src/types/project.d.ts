export interface Translation {
  title: string;
  description: string;
}

export interface GalleryItem {
  type: 'image' | 'video';
  url: string;
}

export interface SubItem {
  slug: string;
  translations: {
    es: Translation;
  };
  image: string;
  svg: string;
  gallery?: GalleryItem[]; // Made optional as per common practice for arrays
}

export interface Project {
  slug: string;
  translations: {
    es: Translation;
  };
  image: string;
  gallery?: GalleryItem[]; // Made optional
  subItems: SubItem[];
}