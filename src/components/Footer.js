import React from "react";
import { FiInstagram} from "react-icons/fi";
import {AiOutlineWhatsApp} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
          <li className='flex justify-center text-accent'>
        <a className='text-base px-6' href="#">
          <FiInstagram/>
        </a>
        <a className='text-base' href="https://api.whatsapp.com/send?phone=6285211913891&text=Halo, saya ingin bertanya!">
          <AiOutlineWhatsApp/>
        </a>
      </li>
          </div>

          <div>
            <h1 className="text-4xl">Salon Hewan</h1>
          </div>

          <p>&copy; 2023 Rahma Andriani</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
