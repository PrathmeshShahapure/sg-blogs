"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsResourcesOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 150);
    setHoverTimeout(timeout);
  };

  const isActive = (path) => pathname === path;

  return (
    <>
      <nav className="  font-poppins text-base   lg:text-xl bg-[white] flex items-center justify-between h-9 my-5 px-4 md:px-5 lg:px-10">
        <div>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center align-center place-items-center gap-1 outline-none"
          >
            <div className="flex items-center align-center mb-1 place-items-center justify-center">
              <Image
                src="/assets/assets/icons/Weblogo.svg"
                alt="logo"
                width={34}
                height={34}
                priority
              />
            </div>
            <div className="flex items-center align-center place-items-center justify-center">
              <span className="font-regular text-xl  md:text-2xl lg:text-4xl">
                StackGuard
              </span>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex gap-6">
          <Link
            href="/platform"
            className={`${
              isActive("/platform")
                ? "font-bold text-[#44087D]"
                : "text-[#2E2E2E]"
            }`}
          >
            Platform
          </Link>
          <Link
            href="/pricing"
            className={`${
              isActive("/pricing")
                ? "font-bold text-[#44087D]"
                : "text-[#2E2E2E]"
            }`}
          >
            Pricing
          </Link>
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1 cursor-pointer ${
                isActive("/blog") || isActive("/docs")
                  ? "font-bold text-[#44087D]"
                  : "text-[#2E2E2E]"
              }`}
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            >
              Resources
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isResourcesOpen && (
              <div className="absolute top-full left-0 mt-1 w-32 bg-white rounded-md shadow-lg py-2 z-50">
                <Link
                  href="/blog"
                  className={`block px-4 py-2 transition cursor-pointer ${
                    isActive("/blog")
                      ? "bg-gray-100 text-[#44087D] font-bold"
                      : "text-gray-700 hover:bg-gray-100 hover:text-[#7B2BBE]"
                  }`}
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/docs"
                  className={`block px-4 py-2 transition cursor-pointer ${
                    isActive("/docs")
                      ? "bg-gray-100 text-[#44087D] font-bold"
                      : "text-gray-700 hover:bg-gray-100 hover:text-[#7B2BBE]"
                  }`}
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Docs
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/partner"
            className={`${
              isActive("/partner")
                ? "font-bold text-[#44087D]"
                : "text-[#2E2E2E]"
            }`}
          >
            Partners
          </Link>
          <Link
            href="/about"
            className={`${
              isActive("/about") ? "font-bold text-[#44087D]" : "text-[#2E2E2E]"
            }`}
          >
            About us
          </Link>
        </div>

        <div className="hidden lg:flex gap-4 items-center">
          <Link
            href="/contact"
            className="text-base  lg:text-lg px-5 md:px-6 py-2 rounded-full text-white bg-[#44087D]"
            type="button"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? <IoMdClose size={24} /> : <IoIosMenu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden font-poppins w-full x-1 mt-3 flex flex-col gap-3 bg-white border-t border-gray-200 py-4">
          <Link
            href="/platform"
            onClick={() => setIsOpen(false)}
            className={`px-4 text-base sm:text-lg ${
              isActive("/platform")
                ? "font-bold text-[#44087D]"
                : "text-[#2E2E2E]"
            }`}
          >
            Platform
          </Link>
          <Link
            href="/pricing"
            onClick={() => setIsOpen(false)}
            className={`px-4 text-base sm:text-lg ${
              isActive("/pricing")
                ? "font-bold text-[#44087D]"
                : "text-[#2E2E2E]"
            }`}
          >
            Pricing
          </Link>
          <div className="px-4">
            <button
              className={`flex items-center gap-1 cursor-pointer ${
                isActive("/blog") || isActive("/docs")
                  ? "font-bold text-[#44087D]"
                  : "text-[#2E2E2E]"
              }`}
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            >
              Resources
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isResourcesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  href="/blog"
                  className={`block py-1 transition cursor-pointer ${
                    isActive("/blog")
                      ? "font-bold text-[#44087D]"
                      : "text-[#2E2E2E] hover:text-[#7B2BBE]"
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    setIsResourcesOpen(false);
                  }}
                >
                  Blog
                </Link>
                <Link
                  href="/docs"
                  className={`block py-1 transition cursor-pointer ${
                    isActive("/docs")
                      ? "font-bold text-[#44087D]"
                      : "text-[#2E2E2E] hover:text-[#7B2BBE]"
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    setIsResourcesOpen(false);
                  }}
                >
                  Docs
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/partner"
            onClick={() => setIsOpen(false)}
            className={`px-4 text-base sm:text-lg ${
              isActive("/partner")
                ? "font-bold text-[#44087D]"
                : "text-[#2E2E2E]"
            }`}
          >
            Partners
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`px-4 text-base sm:text-lg ${
              isActive("/about") ? "font-bold text-[#44087D]" : "text-[#2E2E2E]"
            }`}
          >
            About us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`px-4 text-base sm:text-lg ${
              isActive("/contact")
                ? "font-bold text-[#44087D]"
                : "text-[#2E2E2E]"
            }`}
          >
            Contact us
          </Link>
          <Link
            href="/free-assessment"
            className="mt-2 font-poppins mx-4 text-sm sm:text-base py-2 rounded-full text-white bg-[#44087D] text-center"
            type="button"
          >
            Risk Assessment
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
