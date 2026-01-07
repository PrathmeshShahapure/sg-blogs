"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

const normalizeTag = (tag) => tag.toLowerCase().trim();
const formatTagLabel = (tag) =>
  tag.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase());

export default function BlogListClient({ blogs, excludeSlug, showFilters = true }) {
  // null = All
  const [selectedTag, setSelectedTag] = useState(null);

  // Filter out excluded slug if provided
  const availableBlogs = useMemo(() => {
    if (!excludeSlug) return blogs;
    return blogs.filter((blog) => blog.slug !== excludeSlug);
  }, [blogs, excludeSlug]);

  const tags = useMemo(() => {
    const set = new Set();

    availableBlogs.forEach((blog) => {
      if (Array.isArray(blog.tags)) {
        blog.tags.forEach((tag) => set.add(normalizeTag(tag)));
      }
    });

    return Array.from(set);
  }, [availableBlogs]);

  //  Filter blogs

  const filteredBlogs = useMemo(() => {
    let result = availableBlogs;
    
    if (selectedTag) {
      result = result.filter(
        (blog) =>
          Array.isArray(blog.tags) &&
          blog.tags.map(normalizeTag).includes(selectedTag)
      );
    }

    return result;
  }, [availableBlogs, selectedTag]);

  return (
    <>
      {showFilters && (
        <div className="w-full flex justify-center flex-wrap gap-3 my-8">
          <button
            type="button"
            aria-pressed={!selectedTag}
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              !selectedTag
                ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                : "bg-white text-[#2E2E2E] border-gray-300 hover:bg-gray-100"
            }`}
          >
            All
          </button>

          {/* Dynamic tags  */}
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              aria-pressed={selectedTag === tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                selectedTag === tag
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                  : "bg-white text-[#2E2E2E] border-gray-300 hover:bg-gray-100"
              }`}
            >
              {formatTagLabel(tag)}
            </button>
          ))}
        </div>
      )}

      {/* No blogs */}
      {filteredBlogs.length === 0 && (
        <p className="text-gray-500 mt-10 text-center">
          No blogs found for this tag.
        </p>
      )}

      {/* blogs cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {filteredBlogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            scroll={true}
            className="flex flex-col flex-1 border border-gray-300 rounded-xl p-6 hover:shadow-xl transition"
          >
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/assets/blogs/BlogHeroImg.svg"
                alt={blog.title}
                fill
                className="object-contain"
              />
            </div>

            <h2 className="text-xl font-medium mb-2 mt-4">{blog.title}</h2>

            <p className="text-gray-600 text-lg mb-2">{blog.description}</p>

            <div className="mt-auto flex justify-between text-[var(--color-primary)] text-sm">
              <p>{blog.duration}</p>
              <p>{blog.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
