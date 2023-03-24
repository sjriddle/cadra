import React from 'react';

import Illustration from '../images/hero-illustration.svg';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Bg gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <img src={Illustration} className="max-w-none" width="2143" height="737" alt="Hero Illustration" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:text-left">
            <h1 className="h1 font-uncut-sans mb-6" data-aos="zoom-out" data-aos-delay="100">
                Transform your <span className="text-transparent text-8xl bg-clip-text bg-gradient-to-r to-purple-500 from-blue-600">infrastructure</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10" data-aos="zoom-out" data-aos-delay="200">
              AI-driven platform for seamless infrastructure management, monitoring, and scaling.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <div>
                <a className="btn text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group" href="#0">
                  Sign Up{' '}
                  <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </a>
              </div>
              <div>
                <a className="btn text-gray-300 bg-gradient-to-t from-gray-800 to-gray-700 hover:to-gray-800 w-full shadow-lg" href="#0">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
