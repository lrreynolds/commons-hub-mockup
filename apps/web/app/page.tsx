"use client";

import { Hero } from "@/components/sections/Hero";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Features } from "@/components/sections/Features";
import { Promise } from "@/components/sections/Promise";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <section className="flex justify-center px-[18px] py-20 md:px-[18px] md:py-[80px] md:pb-[70px]">
      <div className="w-full max-w-[960px] mx-auto px-[22px] md:px-[56px]">
        <Hero />
        <BeforeAfter />
        <Features />
        <Promise />
        <CTA />
      </div>
    </section>
  );
}
