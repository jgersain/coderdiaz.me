import * as React from "react";
import classname from "classnames";

interface IBannerProps {
  className: string;
}

const Banner = ({ className }: IBannerProps) => {
  const bannerClasses = classname(
    'relative',
    'bg-green-800',
    className,
  );
  return (<>
    <div className={bannerClasses}>
      <div className="max-w-screen-xl mx-auto py-6 px-8 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">
              I'm announced my blog space!
            </span>
            <span className="hidden md:inline">
              Big news! I'm excited to announce my blog space.
            </span>
            <span className="block sm:ml-2 sm:inline-block">
              <a href="/" className="text-white font-bold underline">
                Go to my first post &rarr;
              </a>
            </span>
          </p>
        </div>
        <div className="absolute hidden inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button type="button" className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 transition ease-in-out duration-150">
            <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </>);
}

export default Banner;
