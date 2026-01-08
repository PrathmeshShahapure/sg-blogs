import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogBySlug, getAllBlogs } from "@/lib/getBlogs";
import { getToc } from "@/lib/getToc";
import BlogSidebar from "@/app/components/blogCom/BlogSidebar";
import BlogListClient from "../BlogListClient";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};
  // console.log(blog);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const title = blog.title;
  const description = blog.summary || blog.description;
  const url = `${siteUrl}/blogs/${slug}`;

  const image = blog.image
    ? `${siteUrl}${blog.image}`
    : `${siteUrl}/assets/blogs/BlogHeroImg.png`;

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}



export default async function SingleBlogPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  const allBlogs = getAllBlogs();

  if (!blog) {
    notFound();
  }

  const toc = getToc(blog.content);

  return (
    <div className="min-h-screen container-content bg-white pt-[120px] pb-16">
      <div className="flex ">
        <BlogSidebar title={blog.title} toc={toc} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blog Header */}
          <article className="font-poppins">
            <header className="mb-8">
              <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight text-[#2E2E2E]">
                {blog.title}
              </h1>

              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                {blog.date && (
                  <span className="text-sm sm:text-base">{blog.date}</span>
                )}
                {blog.duration && (
                  <span className="text-sm sm:text-base">{blog.duration}</span>
                )}
                {/* {blog.authors && Array.isArray(blog.authors) && (
                  <span className="text-sm sm:text-base">
                    By {blog.authors.join(", ")}
                  </span>
                )} */}
              </div>

              {/* Tags
            {blog.tags && Array.isArray(blog.tags) && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )} */}

              {/* Description */}
              {blog.description && (
                <p className="text-lg sm:text-xl text-gray-700 mb-6">
                  {blog.description}
                </p>
              )}

              {/* <hr className="border-t border-gray-300" /> */}
            </header>

            {/* Blog Image */}
            {blog.image && (
              <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* MDX Content */}
            <div className="blog-content  text-gray-700 leading-relaxed space-y-6">
              <MDXRemote
                source={blog.content}
                options={{
                  mdxOptions: {
                    rehypePlugins: [rehypeSlug],
                  },
                }}
              />
            </div>
          </article>
          </div>
          </div>
          {/* Related/Other Blog Posts */}
          {allBlogs.length > 1 && (
            <div className="mt-16 pt-8 border-t border-gray-300">
              <h2 className="text-2xl sm:text-3xl font-medium mb-8 text-[#2E2E2E]">
                More Articles
              </h2>
              <BlogListClient 
                blogs={allBlogs} 
                excludeSlug={slug}
                showFilters={false}
              />
            </div>
          )}
        
      
    </div>
  );
}
