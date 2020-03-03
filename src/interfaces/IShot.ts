import { FluidObject } from "gatsby-image";

export interface IShot {
  id: number;
  title: string;
  localCover: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
};
