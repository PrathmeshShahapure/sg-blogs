import Link from "next/link";
import Image from "next/image";
import { getAllBlogs } from "@/lib/getBlogs";

export default function BlogPage() {
  const blogs = getAllBlogs();
  console.log(blogs);

  return (
    <div className="min-h-screen container-content bg-white mt-[80px] pb-16  flex flex-col items-center">
      <div className=" relative w-1/2 aspect-[16/9]">
        <Image
          src="/assets/blogs/BlogHeroImg.svg"
          alt="Blog banner"
          fill
          className="object-contain"
        />
      </div>

      <div className=" font-poppins text-center px-4 sm:px-0">
        <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight text-[#2E2E2E]">
          Security resources
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 font-normal  px-4 sm:px-0 max-w-3xl mx-auto text-[#2E2E2E]">
          Comprehensive guides, insights,and best practices for security your
          non-human identities and secrets in modern development workflows.
        </p>
      </div>

      <hr className="w-full border-t border-gray-300" />
      <div className=" mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className=" flex flex-col flex-1 border  border-gray-300 rounded-xl p-6 hover:shadow-xl transition"
          >
            <div className=" relative w-full aspect-[16/9]">
              <Image
                src="/assets/blogs/BlogHeroImg.svg"
                alt={blog.title}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-medium mb-2">{blog.title}</h2>

            <p className="text-gray-600 text-lg mb-2 ">{blog.description}</p>
            <div className="mt-auto flex justify-between text-[var(--color-primary)]">
              <p>{blog.duration}</p>
              <p>{blog.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
