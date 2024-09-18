import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/registered-trademark-logo-icon-copyright-mark-vector-36613825.jpg";

const NavBar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">
            <Image
              src={Logo}
              alt="{shopname} ahahhaha"
              height={50}
              width={50}
            />
          </Link>
        </div>
        <div className="space-x-4 font-semibold">
          <Link href="/" className="text-white hover:text-gray-200">
            menukaart
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200">
            beoordelingen
          </Link>
          <Link href="/services" className="text-white hover:text-gray-200">
            contact
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200">
            restaurant informatie
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
