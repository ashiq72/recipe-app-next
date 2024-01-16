import Link from "next/link";
import React from "react";
import { GiCampCookingPot } from "react-icons/gi";
import { BsCart } from "react-icons/bs";

function Header() {
  return (
    <div className="shadow">
      <div className="w-full max-w-7xl mx-auto flex justify-between py-6">
        {/* Menu Link  */}
        <div className="flex gap-4">
          <Link
            href="/home"
            className="hover:text-orange-600	duration-300 font-medium font-sans"
          >
            Home
          </Link>
          <Link
            href="/home"
            className="hover:text-orange-600	duration-300 font-medium font-sans"
          >
            About
          </Link>
          <Link
            href="/home"
            className="hover:text-orange-600	duration-300 font-medium font-sans"
          >
            Contact
          </Link>
        </div>
        {/* Logo  */}
        <div className="flex items-center gap-1">
          <h1 className="font-medium text-4xl font-serif">Cook</h1>
          <span className="text-orange-600 pt-1 text-2xl">
            <GiCampCookingPot />
          </span>
          <h1 className="font-medium text-4xl font-serif">Talk</h1>
        </div>
        {/* Cart  */}
        <div>
          <span className="text-2xl">
            <BsCart />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
