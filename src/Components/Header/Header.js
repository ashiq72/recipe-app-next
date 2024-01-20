import Link from "next/link";
import React from "react";
import { GiCampCookingPot } from "react-icons/gi";
import { BsCart } from "react-icons/bs";

function Header() {
  return (
    <div className="shadow">
      <div className="w-full max-w-7xl mx-auto flex justify-between py-6 px-6 2xl:px-0 items-center">
        {/* Menu Link  */}
        <div className="flex gap-4 w-1/3">
          <Link
            href="/"
            className="hover:text-orange-600	duration-300 font-medium font-sans"
          >
            Home
          </Link>
          <Link
            href="/"
            className="hover:text-orange-600	duration-300 font-medium font-sans"
          >
            About
          </Link>
          <Link
            href="/"
            className="hover:text-orange-600	duration-300 font-medium font-sans"
          >
            Contact
          </Link>
        </div>
        {/* Logo  */}
        <div className="w-1/3 flex items-center justify-center">
          <Link
            href="/"
            className="flex items-center gap-1 cursor-pointer hover:bg-orange-50 rounded-lg duration-300 px-2 w-fit"
          >
            <h1 className="font-medium text-4xl font-serif">Cook</h1>
            <span className="text-orange-600 pt-1 text-2xl">
              <GiCampCookingPot />
            </span>
            <h1 className="font-medium text-4xl font-serif">Talk</h1>
          </Link>
        </div>

        {/* Cart  */}
        <div className="w-1/3 flex items-center justify-end">
          <Link
            href=""
            className="hover:bg-orange-50 rounded-full p-2 duration-300 "
          >
            <span className="text-2xl">
              <BsCart />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
