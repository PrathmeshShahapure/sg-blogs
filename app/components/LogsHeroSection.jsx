'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import AnimatedElement from "./AnimatedElement";

const LogsHeroSection = () => {
  return (
    <AnimatedSection className="mt-15 bg-gradient-to-b from-[#F9F2FF] to-[#F6ECFF]">
      <section>
        <div className=" container-content px-4 sm:px-0 py-12 sm:py-16 lg:py-20 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left content */}
            <AnimatedElement className="w-full lg:w-1/2 max-w-xl flex flex-col justify-center" delay={0.1}>
            <h2 className="text-xl sm:text-2xl md:text-3xl leading-tight font-medium text-[#111111] text-center lg:text-left">
              Talk to us
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>before your logs talk to you
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-sm md:text-base leading-relaxed text-[#2E2E2E] text-center lg:text-left">
              Unseen tokens. Shadow identities. Silent exposures.
              <br className="hidden sm:block" />
              Most breaches start silent and unnoticed.
              <br className="hidden sm:block" />
              StackGuard uncovers every NHI and shuts down risk
              <br className="hidden sm:block" />
              before it spreads.
            </p>
            <div className="flex justify-center lg:justify-start mt-6 sm:mt-8">
              <Link
                href="/contact"
                className="inline-flex px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-4 rounded-full bg-[#44087D] text-white text-base sm:text-lg md:text-xl font-medium shadow-sm hover:bg-[#3A046A] transition"
              >
                Let&apos;s Connect
              </Link>
            </div>
            </AnimatedElement>
            {/* Right illustration */}
            <AnimatedElement className="hidden lg:flex w-full lg:w-1/2 justify-end" delay={0.2}>
              <div className="relative">
                <Image
                  src="/assets/footer.gif"
                  alt="StackGuard Detect, Remediate and Govern illustration"
                  width={650}
                  height={650}
                  className="w-[400px] sm:w-[480px] md:w-[560px] lg:w-[650px] h-auto object-contain"
                  priority
                  unoptimized
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default LogsHeroSection;

