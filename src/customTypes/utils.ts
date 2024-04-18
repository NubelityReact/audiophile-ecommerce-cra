export type withHTMLAttrs<T, EL = HTMLElement> = T &
  React.HtmlHTMLAttributes<EL>;

export type Image = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};
