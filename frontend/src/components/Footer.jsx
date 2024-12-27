import React from "react";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiFillHeart,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

import { images } from "../constants";

const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Downloads</h3>
          <div className="flex flex-col mt-2 gap-4">
            <a
              href="https://example.com/your-apk-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-[8vh] object-contain" src="apkdownload.png" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=your.app.package"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-[8vh] object-contain" src="playstore.png" />
            </a>
          </div>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-start-auto lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Company</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
          <img
            src={images.Logo}
            alt="logo"
            className="h-[4rem] mx-auto md:mx-0"
          />
          <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm">
            Build a modern and creative website with crealand
          </p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <a href="/">
                <AiOutlineTwitter className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillYoutube className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillInstagram className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebook className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <BsTelegram className="w-6 h-auto" />
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
          <div className="bg-primary text-white p-3 rounded-full">
            <AiFillHeart className="w-7 h-auto" />
          </div>
          <p className="font-bold italic text-dark-light">
            Copyright © 2024. Becho.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
