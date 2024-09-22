"use client"; // Zorgt ervoor dat dit component client-side wordt gerenderd

import React from "react";
import Logo from "@/public/logo.jpg";
import Image from "next/image";
import MenuIcon from "@/public/logo.jpg";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const NavBar = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Op zoek naar stukadoor, of tegelzetter? 
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>neem contact op: +31 6 16289147</p>
        </div>
      </div>
      <div className="">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              {/* Link naar de homepage */}
              <Image src={Logo} alt="Noah Stukadoors Logo" height={120} width={240} />
            </Link>
            
            {/* Mobiel menu voor kleine schermen */}
            <Sheet>
              <SheetTrigger asChild>
              <button>hahah</button>
              </SheetTrigger>
              <SheetContent side="left" className="p-4">
                <nav className="flex flex-col gap-4">
                  <Link href="/" className="text-black">Home</Link>
                  <Link href="/spachtelputz" className="text-black">Spachtelputz</Link>
                  <Link href="/stukadoorwerk" className="text-black">Stukadoorwerk</Link>
                  <Link href="/tegelzetten" className="text-black">Tegelzetten</Link>
                  <Link href="/about" className="text-black">Over Ons</Link>
                  <Link href="/tarieven" className="text-black">Tarieven</Link>
                  <Link href="/contact" className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                    Contact opnemen
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Desktop menu voor grotere schermen */}
            <nav className="hidden md:flex gap-6 text-black items-center">
              <Link href="/about">Over Ons</Link>
              <Link href="/tarieven">Tarieven</Link>
              <Link href="/spachtelputz" className="text-black">Spachtelputz</Link>
              <Link href="/stukadoorwerk" className="text-black">Stukadoorwerk</Link>
              <Link href="/tegelzetten" className="text-black">Tegelzetten</Link>
              <Link href="/contact">
                <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                  Contact opnemen
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};