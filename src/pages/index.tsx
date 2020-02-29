import * as React from "react";
import Helmet from "react-helmet";
import Logotype from "../components/Logotype";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Javier Diaz ― Software Engineer and teacher based on Mexico City</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="max-w-md w-full py-12 px-6">
          <Logotype className="mx-auto h-8 w-auto fill-current text-gray-500" />
          <p className="mt-6 text-sm leading-normal text-center text-gray-600">
            I’m Javier Diaz, <span className="text-gray-500 font-semibold">Software Engineer and teacher</span> based on Mexico City. Currently working as Tech Lead of Developers Squad at <a className="text-teal-500 hover:text-teal-400 underline" href="https://bedu.org">BEDU Education</a>.
          </p>
          <p className="mt-5 text-sm leading-normal text-center text-gray-600">I mostly do front-end but I also do back-end development.</p>
          <a href="https://coderdiaz.me" className="mt-5 relative block w-full py-2 px-3 border border-transparent rounded-md text-white font-semibold bg-teal-600 hover:bg-teal-500 focus:bg-teal-600 focus:outline-none focus:shadow-outline sm:text-sm sm:leading-5 text-center">
            Go to my portfolio
          </a>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
