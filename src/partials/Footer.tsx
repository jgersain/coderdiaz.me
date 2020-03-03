import * as React from "react";

const Footer = () => {
  return (
    <footer className="bg-darken py-10">
      <div className="container px-4 md:px-8 lg:max-w-screen-lg mx-auto relative text-center">
        <span className="block text-gray-600 text-base">&copy; 2015 - 2020 Javier Diaz</span>
        <p className="text-white lg:w-150 mx-auto pt-4 text-base">This site is built with <a className="underline" href="https://www.gatsbyjs.org/">Gatsby</a> & <a className="underline" href="https://tailwindcss.com">TailwindCSS</a> and hosted on <a className="underline" href="https://netlify.com/">Netlify</a>. <br className="hidden sm:block" />The source code is available on <a className="underline" href="https://github.com/coderdiaz/coderdiaz.dev">Github</a>.</p>
        <p className="text-gray-600 tracking-widest text-base pt-6">
          Made in Mexico with love <span className="icon-heart text-red-500"></span>
        </p>
        <div className="flex justify-center pt-2">
          <a className="text-gray-700 hover:text-gray-600" href="https://github.com/coderdiaz">
            <span className="mr-4 icon-github text-xl" />
          </a>
          <a className="text-gray-700 hover:text-gray-600" href="https://twitter.com/coderdiaz">
            <span className="mr-4 icon-twitter text-xl" />
          </a>
          <a className="text-gray-700 hover:text-gray-600" href="https://dribbble.com/coderdiaz">
            <span className="icon-dribbble text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
