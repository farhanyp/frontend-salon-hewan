import React from "react";
import about from "../assets/img/about.jpg";

function About() {
  return (
    <section id="about" className="section bg-white">
      <div className=" container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={about}
            alt=""
          />
          <div className="flex flex-col items-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-primary text-3xl lg:text-8xl font-medium lg:font-extrabold mb-3 relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                ABOUT
              </h2>
              <p className="mb-4 text-accent">Salon Hewan</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
              Selamat datang di Salon Hewan Terbaik di Kota! Di sini, kami menghadirkan perawatan terbaik untuk sahabat berbulu Anda. Dengan sentuhan profesional dari tim ahli kami, kami menjamin pengalaman grooming yang menyenangkan dan nyaman untuk hewan peliharaan Anda. Dari potongan gaya yang trendi hingga mandi relaksasi, kami menawarkan layanan berkualitas tinggi yang akan meningkatkan penampilan dan kesehatan mereka. Kunjungi salon hewan kami hari ini dan buatlah mereka merasa istimewa!
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
            <a href="https://api.whatsapp.com/send?phone=6285211913891&text=Halo, saya ingin bertanya!">Contact Me</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
