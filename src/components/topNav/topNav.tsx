"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo1 from "./../../../public/logo1.png";
import { Twirl as Hamburger } from "hamburger-react";

const TopNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="rounded-full h-14 w-14 mx-4">
              <Image src={logo1} alt="logo" width={500} height={500} />
            </div>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="block md:hidden">
          <Hamburger
            duration={0.5}
            toggled={isOpen}
            toggle={setIsOpen}
            color="white"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-4 md:space-x-8 md:items-center mr-10">
          <li className="ml-10 flex items-baseline space-x-4">
            <Link
              href="/"
              className="text-white transition-colors duration-500 hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-xl font-sans"
            >
              Home
            </Link>
          </li>
          <li className="ml-10 flex items-baseline space-x-4">
            <Link
              href="/Blog"
              className="text-white hover:bg-gray-300 transition-colors duration-500 hover:text-black px-3 py-2 rounded-md text-xl font-sans"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "max-h-40" : "max-h-0"
        } mt-4 space-y-2`}
      >
        <li>
          <Link
            href="/"
            className="block transition-colors duration-500 text-center hover:bg-slate-300 text-gray-300 hover:text-black p-2 rounded text-xl"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/Blog"
            className="block transition-colors duration-500 text-center hover:bg-slate-300 text-gray-300 hover:text-black p-2 rounded text-xl"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
