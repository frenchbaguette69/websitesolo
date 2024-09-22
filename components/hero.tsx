"use client";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {

  return (
    <section
      className="pt-8 md:pb-20 md:pt-5 md:pb-10 bg-white overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center gap-4">
          <div className="md:w-[478px]">
            <div className="tag">Neem vrijblijvend contact op</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text mt-2 py-3">
              Eten Bestellen bij shop
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-8">
              Bent u op zoek naar een betrouwbare tegelzetter of stukadoor dan neem vrijblijvend contact op voor een offerte. Bekijk onze tarieven pagina dan kunt u een groffe inschatting maken
            </p>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
                      <div className="hidden sm:block md:hidden top-[524px] left-[448px]">
          
          </div>
          </div>

        </div>
      </div>
    </section>
  );
};