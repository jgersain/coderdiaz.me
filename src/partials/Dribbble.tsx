import * as React from "react";
import classnames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IShot } from "../interfaces";
import { getDribbbleShots } from "../utils/getDribbbleShots";

const Dribbble = () => {
  const [shots, setShots] = React.useState<IShot[]>([]);

  // On mount get the dribbble shots from API
  React.useEffect(() => {
    getDribbbleShots().then(data => setShots(data));
  }, []);

  // Adding classes by card item for custom grid
  const cardClasses = [
    "sm:col-start-1 sm:col-end-5 sm:row-start-1 sm:row-end-4 pb-56 sm:pb-64 lg:pb-112",
    "sm:col-start-5 sm:col-end-7 sm:row-start-1 sm:row-end-2 pb-56 sm:pb-32 lg:pb-56",
    "sm:col-start-5 sm:col-end-7 sm:row-start-2 sm:row-end-4 pb-56 sm:pb-32 lg:pb-56",
    "hidden sm:block sm:col-start-1 sm:col-end-4 sm:row-start-4 sm:row-end-5 pb-56 sm:pb-36 lg:pb-56",
    "hidden sm:block sm:col-start-4 sm:col-end-7 sm:row-start-4 sm:row-end-5 pb-56 sm:pb-36 lg:pb-56",
  ];

  return (
    <div className="grid sm:grid-cols-6 sm:grid-rows-8 sm:grid-row gap-5 mt-6">
      {shots.map(
        (node: any, index: number) => <div key={index} className={classnames("relative", cardClasses[index])}>
          <LazyLoadImage src={node.images.hidpi} className="absolute w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
};

export default Dribbble;
