import * as React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logotype from "../components/Logotype";

const HeroSection = () => {
  return (
    <section className="bg-darken relative overflow-hidden">
      <div className="container px-4 md:px-8 lg:max-w-screen-lg mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-xl lg:py-32 lg:pr-24 lg:w-full xl:pb-32">
          <div className="mt-12 mx-auto max-w-screen-xl px-4 sm:mt-16 sm:px-6 md:px-4 md:mt-16 lg:mt-0 lg:px-0 xl:mt-28">
            <Logotype width={180} className="fill-current text-gray-500" />
            <p className="block text-dark-200 text-base uppercase pt-12">Hello, my name is</p>
            <h1 className="block text-white font-montserrat font-bold text-3xl sm:text-4xl -mb-2">Javier Diaz</h1>
            <h2 className="block text-green-500 tracking-wide font-montserrat font-bold text-xl sm:text-3xl mb-6">I build stuff for the web</h2>
            <p className="block text-gray-400">I'm a Software Engineer and teacher based on Mexico City, Mexico. I build outstanding, high-quality websites and web applications.</p>
            <p className="hidden sm:block text-gray-400 mt-4">Actually, I'm creating platforms and applications using the JAMstack architecture.</p>
            <p className="block text-gray-400 mt-4">Scroll down to find out more about my work or <a className="text-white shadow-link" href="mailto: hello@coderdiaz.me">hire me</a>.</p>
            <div className="mt-6 flex">
              <a className="text-gray-500 hover:text-white p-3 mr-2" aria-label="GitHub" href="https://github.com/coderdiaz">
                <span className="text-2xl icon-github" />
              </a>
              <a className="text-gray-500 hover:text-white p-3 mr-2" aria-label="Twitter" href="https://twitter.com/coderdiaz">
                <span className="text-2xl icon-twitter" />
              </a>
              <a className="text-gray-500 hover:text-white p-3" aria-label="Dribbble" href="https://dribbble.com/coderdiaz">
                <span className="text-2xl icon-dribbble" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__image lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <picture>
          <source srcSet="https://images.unsplash.com/photo-1563288181-3584b59503f9?auto=format&fit=crop&w=320&q=80" media="(max-width: 320px)" />
          <source srcSet="https://images.unsplash.com/photo-1563288181-3584b59503f9?auto=format&fit=crop&w=465&q=50" media="(max-width: 465px)" />
          <source srcSet="https://images.unsplash.com/photo-1563288181-3584b59503f9?auto=format&fit=crop&w=720&q=50" media="(max-width: 720px)" />
          <source srcSet="https://images.unsplash.com/photo-1563288181-3584b59503f9?auto=format&fit=crop&w=1200&q=80" />
          <LazyLoadImage
            alt="Javier Diaz ― I'm a Software Engineer and teacher based on Mexico City"
            className="h-56 w-full object-cover sm:h-72 md:h-80 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1563288181-3584b59503f9?auto=format&fit=crop&w=1200&q=80" />
        </picture>
      </div>
    </section>
  );
};

export default HeroSection;
