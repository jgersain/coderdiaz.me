import * as React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import loadable from "@loadable/component";
import HeroSection from "../partials/HeroSection";
import Footer from "../partials/Footer";

const Dribbble = loadable(() => import("../partials/Dribbble"));

const IndexPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="I'm a Software Engineer and teacher based on Mexico City, Mexico. I build outstanding, high-quality websites and web applications." />
        </Helmet>
        <HeroSection />
        <section className="pt-10 pb-5 sm:pt-20 sm:pb-10 overflow-hidden">
          <div className="container px-4 sm:px-8 md:px-8 lg:max-w-screen-lg mx-auto relative">
            <svg className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-20" width="360" height="460" fill="none" viewBox="0 0 360 460">
              <defs>
                <pattern id="svg-pattern-squares-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-dark-500" fill="currentColor"></rect>
                </pattern>
              </defs>
              <rect width="360" height="460" fill="url(#svg-pattern-squares-1)"></rect>
            </svg>
            <div className="grid grid-cols-12 relative z-10">
              <div className="hidden md:block md:col-span-4">
                <span className="mt-2 block w-12 h-1 bg-green-500"></span>
                <dl className="mt-6">
                  <dt className="text-white font-bold text-base">For collaboration or questions;</dt>
                  <dd className="text-base text-gray-500 mt-2">
                    <a href="mailto:hello@coderdiaz.me">sendMail(hello@coderdiaz.me)</a>
                  </dd>
                  <dt className="text-white font-bold text-base mt-6">Currently working at;</dt>
                  <dd className="text-base text-gray-500 mt-2">
                    <a href="https://bedu.org">BEDU Education</a>
                  </dd>
                  <dt className="text-white font-bold text-base mt-6">My favorite editor;</dt>
                  <dd className="text-base text-gray-500 mt-2">
                    <a className="underline" href="https://code.visualstudio.com/">Visual Studio Code</a>
                  </dd>
                </dl>
              </div>
              <div className="col-span-12 md:col-span-8 sm:text-lg">
                <p className="text-gray-500 leading-loose">Currently working as a Tech Lead of Developers Squad at <a className="text-white underline" href="https://bedu.org">BEDU Education</a>. I mostly do front-end but I also do back-end development.</p>
                <p className="text-gray-500 leading-loose mt-4">I have experience working as a freelance and companies (Yeah! Startups too), but I'm ready for visit other cities and work for any development studio.</p>
                <p className="text-gray-500 leading-loose mt-4">Now, I'm learning <span className="text-white">Flutter</span> to create an application to manage my finances and subscriptions. I saty active writting <a className="text-white underline" href="https://twitter.com/coderdiaz">tweets</a>, taking <a className="text-white underline" href="https://vsco.co/coderdiaz">photos</a> and pushing my <a className="text-white underline" href="https://github.com/coderdiaz">codes</a> for you.</p>
                <p className="text-gray-500 leading-loose mt-4">I also share what I learn at meetups and conferences and sometimes I teach about web development.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-10 pb-20 overflow-hidden">
          <div className="container px-4 sm:px-8 md:px-8 lg:max-w-screen-lg mx-auto relative">
            <h3 className="text-2xl text-white">Experiments</h3>
            <h4 className="text-lg text-gray-400">
              My latest experiments uploaded to <a href="https://dribbble.com/coderdiaz" className="text-pink-400 font-medium underline">Dribbble</a>
            </h4>
            <svg className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-100" width="360" height="460" fill="none" viewBox="0 0 360 460">
              <defs>
                <pattern id="svg-pattern-squares-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-dark-500" fill="currentColor"></rect>
                </pattern>
              </defs>
              <rect width="360" height="460" fill="url(#svg-pattern-squares-2)"></rect>
            </svg>
            <Dribbble />
          </div>
        </section>
        <section className="bg-darken py-10 overflow-hidden">
          <div className="container lg:max-w-screen-lg mx-auto py-12 px-4 sm:px-8 lg:py-16 lg:px-0 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl text-gray-500 font-montserrat">
              Let's work together
              <br />
              <span className="text-green-500 text-2xl font-bold">on your next project</span>
            </h2>
            <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
              <div className="inline-flex rounded-md shadow">
                <a href="#" className="inline-flex items-center justify-center px-8 py-4 leading-6 rounded-md text-dark-600 font-medium bg-green-500 hover:bg-green-400 focus:outline-none focus:bg-green-500 focus:shadow-outline transition duration-150 ease-in-out">
                  Hire me
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a href="#" className="inline-flex items-center justify-center px-8 py-4 border border-transparent leading-6 font-medium rounded-md text-white bg-dark-500 hover:bg-dark-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 overflow-hidden">
          <div className="container px-4 sm:px-8 md:px-8 lg:px-0 lg:max-w-screen-lg mx-auto relative">
            <h2 className="text-white text-2xl">Open Source</h2>
            <p className="text-gray-400 font-lg w-100 tracking-wide leading-relaxed mt-1">I volunteer in part time creating libraries and sharing resources to help people create web apps and a better world.</p>
            <svg className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-50" width="360" height="750" fill="none" viewBox="0 0 360 750">
              <defs>
                <pattern id="svg-pattern-squares-3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-dark-500" fill="currentColor"></rect>
                </pattern>
              </defs>
              <rect width="360" height="750" fill="url(#svg-pattern-squares-3)"></rect>
            </svg>
            <div className="grid gap-10 relative pt-20 pb-0 md:py-20 sm:grid-cols-6 lg:grid-cols-12 lg:row-gap-12">
              <div className="sm:col-span-3 md:col-span-2 lg:col-span-3">
                <a href="https://github.com/coderdiaz/vue-tiny-pagination" className="block font-bold font-montserrat text-white hover:text-gray-300 text-lg underline">vue-tiny-pagination</a>
                <p className="text-gray-500 text-base leading-relaxed pt-2">A Vue component to create a tiny pagination with flexbox.</p>
                <div className="flex items-center text-gray-400 text-base pt-4">
                  <span className="w-3 h-3 rounded-full bg-green-500 mr-2" />
                  Vue
                </div>
              </div>
              <div className="sm:col-span-3 md:col-span-2 lg:col-span-3">
                <a href="https://github.com/coderdiaz/yell-vscode-theme" className="block font-bold font-montserrat text-white hover:text-gray-300 text-lg underline">yell-vscode-theme</a>
                <p className="text-gray-500 text-base leading-relaxed pt-2">A VS Code theme for dark lovers with accessible colors.</p>
                <div className="flex items-center text-gray-400 text-base pt-4">
                  <span className="w-3 h-3 rounded-full bg-gray-600 mr-2" />
                  VS Code Extensions
                </div>
              </div>
              <div className="sm:col-span-3 md:col-span-2 lg:col-span-3">
                <a href="https://github.com/coderdiaz/react-card-brand" className="block font-bold font-montserrat text-white hover:text-gray-300 text-lg underline">react-card-brand</a>
                <p className="text-gray-500 text-base leading-relaxed pt-2">A zero-dependency React Hook to show the brand from a card type.</p>
                <div className="flex items-center text-gray-400 text-base pt-4">
                  <span className="w-3 h-3 rounded-full bg-alternative-600 mr-2" />
                  TypeScript
                </div>
              </div>
              <div className="hidden sm:block sm:col-span-3 md:col-span-2 lg:col-span-3">
                <a href="https://github.com/coderdiaz/vue-status-indicator" className="block font-bold font-montserrat text-white hover:text-gray-300 text-lg underline">vue-status-indicator</a>
                <p className="text-gray-500 text-base leading-relaxed pt-2">A Vue component to show status indicator as colored dots.</p>
                <div className="flex items-center text-gray-400 text-base pt-4">
                  <span className="w-3 h-3 rounded-full bg-green-600 mr-2" />
                  Vue
                </div>
              </div>
              <div className="hidden sm:block sm:col-span-3 md:col-span-2 lg:col-span-3">
                <a href="https://github.com/coderdiaz/scoreboard" className="block font-bold font-montserrat text-white hover:text-gray-300 text-lg underline">scoreboard</a>
                <p className="text-gray-500 text-base leading-relaxed pt-2">A board for publicy display the score in a game.</p>
                <div className="flex items-center text-gray-400 text-base pt-4">
                  <span className="w-3 h-3 rounded-full bg-green-600 mr-2" />
                  Vue
                </div>
              </div>
              <div className="hidden sm:block sm:col-span-3 md:col-span-2 lg:col-span-3">
                <a href="https://github.com/coderdiaz/vue-datasource" className="block font-bold font-montserrat text-white hover:text-gray-300 text-lg underline">vue-datasource</a>
                <p className="text-gray-500 text-base leading-relaxed pt-2">A Vue component to create dynamic tables.</p>
                <div className="flex items-center text-gray-400 text-base pt-4">
                  <span className="w-3 h-3 rounded-full bg-green-600 mr-2" />
                  Vue
                </div>
              </div>
              <div className="hidden sm:block sm:col-span-3 md:col-span-2 lg:col-span-3">
                <a href="https://github.com/coderdiaz/vue-template-plugin" className="block font-bold font-montserrat text-white hover:text-gray-300 text-lg underline">vue-template-plugin</a>
                <p className="text-gray-500 text-base leading-relaxed pt-2">A template for create a Vue Plugin with Rollup.</p>
                <div className="flex items-center text-gray-400 text-base pt-4">
                  <span className="w-3 h-3 rounded-full bg-warning-600 mr-2" />
                  JavaScript
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </HelmetProvider>
    </>
  );
};

export default IndexPage;
