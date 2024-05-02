declare namespace API {
  interface ResponsiveImage {
    mobile: string;
    tablet: string;
    desktop: string;
  }

  interface Include {
    quantity: number;
    item: string;
  }

  interface Gallery {
    first: ResponsiveImage;
    second: ResponsiveImage;
    third: ResponsiveImage;
  }

  interface Others {
    slug: string;
    name: string;
    image: ResponsiveImage;
  }

  export interface Product {
    id: number;
    slug: string;
    name: string;
    image: ResponsiveImage;
    category: string;
    categoryImage: ResponsiveImage;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: Include[];
    gallery: Gallery;
    others: Others[];
  }
}
