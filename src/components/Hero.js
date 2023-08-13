import React from "react";
import pet from "../assets/img/kucing.png";
import Fade from 'react-reveal/Fade';

function Hero() {
  return (
    <section
      id="home"
      className="lg:h-[90vh] flex items-center bg-white lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* Left */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <h1 className="text-primary text-4xl text-center leading-[44px] md:text-5xl md:leading-tight lg:text-left lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
            Peliharaanmu Akan Selalu Segar & Wangi!
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
            Kami menawarkan pelayanan terbaik dari kami untuk membantu anda mengurus si kesayangan
            </p>
            <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
              <a href="#">
                Mari Salon
              </a>
            </button>
          </div>
          {/* Right */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={pet} className="w-[25rem]" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
