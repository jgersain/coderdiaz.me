import * as React from "react";
import { Link } from "gatsby";

const CTASection = () => {
  return (
    <section className="bg-darken py-10 overflow-hidden">
      <div className="container lg:max-w-screen-lg mx-auto py-12 px-4 sm:px-8 lg:py-16 lg:px-0 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl text-gray-500 font-montserrat">
          Let's work together
          <br />
          <span className="text-green-500 text-2xl font-bold">on your next project</span>
        </h2>
        <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div className="inline-flex rounded-md shadow">
            <Link to="/" className="inline-flex items-center justify-center px-8 py-4 leading-6 rounded-md text-dark-600 font-medium bg-green-500 hover:bg-green-400 focus:outline-none focus:bg-green-500 focus:shadow-outline transition duration-150 ease-in-out">
              Hire me
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 border border-transparent leading-6 font-medium rounded-md text-white bg-dark-500 hover:bg-dark-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
