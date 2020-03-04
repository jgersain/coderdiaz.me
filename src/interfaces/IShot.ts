interface Image {
  hidpi: string;
}

export interface IShot {
  id: number;
  title: string;
  images: Image;
};
