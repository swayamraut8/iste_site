import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div class="sm:flex sm:items-center sm:justify-between">
        <Link href="/" class="flex items-center mb-4 sm:mb-0">
          <img
            src="https://res.cloudinary.com/atharva7/image/upload/v1671376589/samples/iste_logo_thwbwl.jpg"
            class="mr-3 w-12 h-12"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ISTE-VESIT
          </span>
        </Link>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <Link
            href="https://github.com/ISTE-VESIT-ORG"
            className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            target="_blank"
          >
            <FaGithub size={18} />
          </Link>
          <Link
            href="https://www.instagram.com/iste_vesit/"
            className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            target="_blank"
          >
            <FaInstagram size={18} />
          </Link>
          <Link
            href="https://twitter.com/iste_vesit"
            className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            target="_blank"
          >
            <FaTwitter size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/iste-vesit/mycompany/"
            className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            target="_blank"
          >
            <FaLinkedin size={18} />
          </Link>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="/" class="hover:underline">
          ISTE-VESIT™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
