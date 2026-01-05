"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#44087d] text-white">
      <div className=" px-4 lg:px-10 py-6 lg:py-8">
        {/* Top row: logo + appointment button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="StackGuard Logo"
              width={24}
              height={24}
              priority
            />
            <span className="text-xl font-semibold tracking-[0.03em]">
              StackGuard
            </span>
          </div>
          {/** 
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#2E2E2E] hover:bg-[#F3ECFF] transition whitespace-nowrap"
          >
            Make an appointment
          </Link>*/}
        </div>

        {/* Divider */}
        <div className="mt-4 border-t border-white/20" />

        {/* Middle content */}
        <div className="mt-6 lg:mt-7 flex flex-col md:flex-row md:items-start md:justify-between gap-8 lg:gap-16">
          {/* Left: description + copyright (desktop this sits visually like screenshot text) */}
          <div className="md:max-w-sm space-y-4">
            <p className="text-xs sm:text-sm leading-relaxed text-[#D0C4F1]">
              StackGuard delivers lightning-fast secrets scanning with AI based
              remediation and governance powered with industry-leading accuracy
            </p>
            <p className="text-xs text-[#B6A9E6]">© 2025 — Stackguard</p>
          </div>

          {/* Middle: Info links */}
          <div className="w-full md:w-[50%]  flex flex-row  justify-between  ">
            <div className="space-y-3">
              <h2 className="text-sm font-semibold">Info</h2>
              <ul className="space-y-1 text-xs sm:text-sm text-[#D0C4F1]">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform"
                    className="hover:text-white transition"
                  >
                    Platform
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right: Contact + LinkedIn pill aligned to right on desktop */}
            <div className="flex flex-col  items-end gap-4 md:gap-3 ">
              <div className="space-y-2 text-right md:text-right">
                <h2 className="text-sm font-semibold  md:text-right">
                  Contact us
                </h2>
                <p className="text-xs sm:text-sm text-[#D0C4F1]">
                  <Link
                    href="mailto:contact@stackguard.io"
                    className="hover:text-white transition"
                  >
                    contact@stackguard.io
                  </Link>
                </p>
                <p className="text-xs sm:text-sm text-[#D0C4F1]">
                  Singapore | India
                </p>
              </div>

              {/* LinkedIn circular button */}
              <Link
                href="https://www.linkedin.com/company/stackguard/?originalSubdomain=sg"
                className="h-9 w-9 rounded-full bg-[#5A1B9D] flex items-center justify-center hover:bg-[#6D26B5] transition"
                aria-label="StackGuard on LinkedIn"
              >
                <Image
                  src="/assets/footer/linkedin.svg"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom right: scroll to top arrow */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={scrollToTop}
            className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover:bg-[#F3ECFF] transition cursor-pointer"
            aria-label="Scroll to top"
          >
            <Image
              src="/assets/ArrowUp.svg"
              alt="Scroll to top"
              width={18}
              height={18}
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
