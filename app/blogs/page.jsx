import Image from "next/image";
import { getAllBlogs } from "@/lib/getBlogs";
import BlogListClient from "./BlogListClient";
import LogsHeroSection from "../components/LogsHeroSection";

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <>
      <div className="min-h-screen container-content bg-white pt-[80px] pb-16 flex flex-col items-center">
        <div className="relative w-1/2 aspect-[16/9]">
          <Image
            src="/assets/blogs/BlogHeroImg.svg"
            alt="Blog banner"
            fill
            className="object-contain"
          />
        </div>

        <div className="font-poppins text-center px-4 sm:px-0">
          <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight text-[#2E2E2E]">
            Security resources
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 font-normal px-4 sm:px-0 max-w-3xl mx-auto text-[#2E2E2E]">
            Comprehensive guides, insights, and best practices for securing your
            non-human identities and secrets in modern development workflows.
          </p>
        </div>

        <hr className="w-full border-t border-gray-300" />

        <BlogListClient blogs={blogs} />
      </div>

      <LogsHeroSection />
    </>
  );
}
