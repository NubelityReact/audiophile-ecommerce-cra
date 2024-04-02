interface INavigationLinks {
  label: string;
  to: string;
}

export const navigationLinks: INavigationLinks[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Headphones",
    to: "/category/headphones",
  },
  {
    label: "speakers",
    to: "/category/speakers",
  },
  {
    label: "earphones",
    to: "/category/earphones",
  },
];
