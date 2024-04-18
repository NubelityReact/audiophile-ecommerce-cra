import { ICategoryNavigationProps } from "../components/Containers/CategoryNavigation";

export const CategoryNavigationData: ICategoryNavigationProps["cards"] = [
  {
    img: {
      src: "/assets/nav/headphones.png",
      alt: "headphones",
      width: 80,
      height: 104,
    },
    title: "headphones",
    href: "/category/headphones",
  },
  {
    img: {
      src: "/assets/nav/speakers.png",
      alt: "speakers",
      width: 84,
      height: 101,
    },
    title: "speakers",
    href: "/category/speakers",
  },
  {
    img: {
      src: "/assets/nav/earphones.png",
      alt: "earphones",
      width: 147,
      height: 133,
    },
    title: "earphones",
    href: "/category/earphones",
  },
];
