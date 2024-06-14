export interface IImageLoadProps extends React.ComponentProps<'img'> {
  src: string;
  height?: number;
  imgStyles?: string;
  containerStyles?: string;
}
