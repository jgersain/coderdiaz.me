import * as React from "react";
import Img from "gatsby-image";
import classnames from "classnames";
import { IShot } from "../interfaces";

interface IDribbleProps {
  shots: IShot[];
}

const Dribbble = ({ shots }: IDribbleProps) => {
  // Adding classes by card item for custom grid
  const cardClasses = [
    "sm:col-start-1 sm:col-end-5 sm:row-start-1 sm:row-end-4",
    "sm:col-start-5 sm:col-end-7 sm:row-start-1 sm:row-end-2",
    "sm:col-start-5 sm:col-end-7 sm:row-start-2 sm:row-end-4",
    "hidden sm:block sm:col-start-1 sm:col-end-4 sm:row-start-4 sm:row-end-5 h-36",
    "hidden sm:block sm:col-start-4 sm:col-end-7 sm:row-start-4 sm:row-end-5",
  ];

  return (
    <div className="grid sm:grid-cols-6 sm:grid-rows-8 sm:grid-row gap-5 mt-6">
      {shots.map(
        (node, index) => <div className={classnames("relative", cardClasses[index])}>
          <Img fluid={node.localCover.childImageSharp.fluid} />
        </div>
      )}
    </div>
  );
};

export default Dribbble;
