import * as React from "react";
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import withBaseLayout from "../layouts/BaseLayout";

const AboutPage = () => {
  return (<>
    <Helmet>
      <title>About me ― Javier Diaz: Software Engineer and teacher</title>
      <meta name="description" content="I’m a Software Engineer and sometimes a “designer”. I currently live in Mexico City, Mexico with my wife Becky and working as a Tech Lead of Developer Squad at BEDU Education." />
    </Helmet>
    <section className="bg-darken h-72 md:h-72">
      <div className="container px-4 sm:px-8 md:px-8 lg:max-w-screen-lg mx-auto relative">
        <h1 className="text-3xl text-gray-300 pt-12">About me</h1>
        <div className="relative pb-72 md:pb-72 lg:pb-80">
          <picture>
            <source
              media="(max-width: 767px)"
              sizes="(max-width: 357px) 100vw, 357px"
              srcSet="
              /images/about-me_a404rf_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,
              /images/about-me_a404rf_ar_1_1,c_fill,g_auto__c_scale,w_279.jpg 279w,
              /images/about-me_a404rf_ar_1_1,c_fill,g_auto__c_scale,w_349.jpg 349w,
              /images/about-me_a404rf_ar_1_1,c_fill,g_auto__c_scale,w_357.jpg 357w" />
            <LazyLoadImage
              sizes="(max-width: 1371px) 70vw, 960px" 
              alt="Javier Diaz"
              className="mt-4 rounded-lg absolute object-cover h-full w-full"
              srcset="
                /images/about-me_a404rf_c_scale,w_840.jpg 840w,
                /images/about-me_a404rf_c_scale,w_909.jpg 909w,
                /images/about-me_a404rf_c_scale,w_949.jpg 949w,
                /images/about-me_a404rf_c_scale,w_960.jpg 960w"
              src="/images/about-me_a404rf_c_scale,w_960.jpg" />
          </picture>
        </div>
      </div>
    </section>
    <section className="min-h-screen mt-36 lg:mt-48 pb-20">
      <div className="container px-4 sm:px-8 md:px-8 lg:max-w-screen-lg mx-auto relative">
        <p className="text-gray-500 text-lg leading-loose">I’m a Software Engineer and sometimes a “designer”.  I currently live in Mexico City,  Mexico with my wife Becky and working as a Tech Lead of Developer Squad at <a href="https://bedu.org" className="text-white shadow-link">BEDU Education</a>.</p>
        <p className="mt-6 text-gray-500 text-lg leading-loose">Now, I'm learning <span className="text-white">Flutter</span> to create an application to manage my finances and subscriptions. I stay active writting tweets, taking photos and pushing my codes for you, too I have a passion for share my knownleadge creating libraries and sharing resources.</p>
        <p className="mt-6 text-gray-500 text-lg leading-loose">Actually, I'm creating platforms and applications using the JAMstack architecture for improve performance and scalability.</p>
        <h2 className="mt-10 text-white text-xl md:text-2xl">Brief history</h2>
        <p className="mt-6 text-gray-500 text-lg leading-loose">I started  software development while still in high school, writing my first programs using Visual BASIC 6 , C and C++. I attend college at the Instituto Tecnologico de Lazaro Cardenas. In 2015, I joined the team at Port of Lazaro Cardenas (APILAC), a government company that manages the facilities and operations in the port terminal. I was working for more than 3 years implementing new technologies within the informaton technology area. In 2017, I travel to Mexico City to start my first job in a Startup called <a href="https://pulpomatic.com" className="text-white shadow-link">Pulpomatic</a>, a SaSS for fleet management and vehicle operations.</p>
        <p className="mt-6 text-gray-500 text-lg leading-loose">In 2018, I travel to Bogota, Colombia to record the <a href="https://platzi.com/clases/vuejs-avanzado/" className="text-white shadow-link">Advanced Vue.js</a> course in the headquarters of Platzi.</p>
        <h2 className="mt-10 text-white text-xl md:text-2xl">Web development</h2>
        <p className="mt-6 text-gray-500 text-lg leading-loose">My primary focus as  a software engineer is on web development, which I have been doing since late 2010s. My first projects we build with HTML, CSS, JavaScript, PHP and MySQL. Now, I work using JavaScript how my main language but too I’m creating application using the powerful Go language. My favorite libraries and frameworks are Vue, React, Nest.js, Next.js, Gatsby and Echo. Actually, I  create my web designs using <a href="https://figma.com" className="text-white shadow-link">Figma</a> and implementing designs on web using <a href="https://tailwindcss.com/" className="text-white shadow-link">TailwindCSS</a>, a utility-first CSS framework designed to rapid UI development.</p>
        <p className="mt-6 text-gray-500 text-lg leading-loose">As a developer I value well written code, that’s easy to read, and ins’t unnecessarily complex. I appreciate following industry set coding standards. I make a point of continually learning and  improving through attending conferences, reading books and blogs, watching screencasts, and following industry experts but too I love to share what I learned.</p>
        <p className="mt-6 text-gray-500 text-lg leading-loose">If you wold like me to speak to an upcoming event, please contact me at <a className="text-white shadow-link" href="mailto:hello@coderdiaz.me">hello@coderdiaz.me.</a></p>
      </div>
    </section>
  </>);
};

export default withBaseLayout(AboutPage, true);
