import * as React from "react";
import classnames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logotype from "../components/Logotype";

const HeroSection = () => {
  const [disableAnimationElements, setDisableAnimationElements] = React.useState(false);
  const [disableAnimationHero, setDisableAnimationHero] = React.useState(false);

  // Dynamic Classes for animated elements using Computed Properties with classnames
  const elementClassesAnimation = classnames({
    "lg:animation-delay-25ms": !disableAnimationElements,
    "lg:animation-1s": !disableAnimationElements,
    "lg:animation-fill-both": !disableAnimationElements,
    "lg:animation-fadeInUp": !disableAnimationElements,
    "no-animate": disableAnimationElements,
  });

  // Dynamic Classes for Hero using Computed Properties with classnames
  const heroImageClasses = classnames("hero__image hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full", {
    "lg:animation-delay-1s": !disableAnimationHero,
    "lg:animation-clipOut": !disableAnimationHero,
    "lg:animation-fill-both": !disableAnimationHero,
    "lg:animation-1s": !disableAnimationHero,
    "no-animate": disableAnimationHero,
  });

  React.useEffect(() => {
    setTimeout(() => setDisableAnimationElements(true), 1100);
    setTimeout(() => setDisableAnimationHero(true), 1950);
  }, []);

  return (
    <section className="bg-darken relative overflow-hidden" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23242629' fill-opacity='0.4'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`
    }}>
      <div className="container px-4 md:px-8 lg:h-full lg:max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-xl lg:py-56 lg:pr-4 lg:w-full lg:flex lg:items-center">
          <div className="mt-12 mx-auto px-4 sm:mt-16 sm:px-6 md:px-4 md:mt-16 lg:mt-0 lg:px-0 xl:mt-28">
            <Logotype width={180} className={classnames("iteration-one fill-current text-gray-500", elementClassesAnimation)} />
            <p className={classnames("iteration-one block text-dark-200 text-base pt-12 xl:text-lg", elementClassesAnimation)}>Hello, my name is</p>
            <h1 className={classnames("iteration-one block text-white font-montserrat font-bold text-3xl sm:text-4xl xl:text-5xl -mb-2", elementClassesAnimation)}>Javier Diaz</h1>
            <h2 className={classnames("iteration-one block text-green-500 tracking-wide font-montserrat font-bold text-xl sm:text-3xl lg:text-3.5xl mb-6", elementClassesAnimation)}>I build stuff for the web</h2>
            <p className={classnames("iteration-one block text-gray-400 xl:text-lg", elementClassesAnimation)}>I'm a Software Engineer and teacher based on Mexico City, Mexico. I build outstanding, high-quality websites and web applications.</p>
            <p className={classnames("iteration-one hidden sm:block text-gray-400 mt-4 xl:text-lg", elementClassesAnimation)}>Actually, I'm creating platforms and applications using the JAMstack architecture.</p>
            <p className={classnames("iteration-one block text-gray-400 mt-4 xl:text-lg", elementClassesAnimation)}>Scroll down to find out more about my work or <a className="text-white shadow-link" href="mailto: hello@coderdiaz.me">hire me</a>.</p>
            <div className={classnames("iteration-one mt-6 flex", elementClassesAnimation)}>
              <a className="text-gray-500 hover:text-white p-3 mr-2" aria-label="GitHub" href="https://github.com/coderdiaz">
                <span className="text-2xl icon-github" />
              </a>
              <a className="text-gray-500 hover:text-white p-3 mr-2" aria-label="Twitter" href="https://twitter.com/coderdiaz">
                <span className="text-2xl icon-twitter" />
              </a>
              <a className="text-gray-500 hover:text-white p-3 mr-2" aria-label="Dribbble" href="https://dribbble.com/coderdiaz">
                <span className="text-2xl icon-dribbble" />
              </a>
              <a className="text-gray-500 hover:text-white p-3" aria-label="Youtube" href="https://www.youtube.com/channel/UCIZS4F2zlOd1rnx6g7Jye1w">
                <span className="text-2xl icon-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={heroImageClasses}>
        <picture>
          <source
            type="image/webp"
            srcSet="/images/hero-300.webp 375w, /images/hero-600.webp 640w, /images/hero-800.webp 768w, /images/hero.webp 1024w" />
          <source
            srcSet="/images/hero-300.jpg 375w, /images/hero-600.jpg 640w, /images/hero-800.jpg 768w, /images/hero.jpg 1024w" />
          <LazyLoadImage
            alt="Javier Diaz ― I'm a Software Engineer and teacher based on Mexico City"
            className="absolute h-56 w-full object-cover sm:h-72 md:max-w-full md:h-80 lg:w-full lg:h-full lg:inset-x-0 border border-transparent"
            srcSet="/images/hero.jpg" />
        </picture>
      </div>
    </section>
  );
};

export default HeroSection;
