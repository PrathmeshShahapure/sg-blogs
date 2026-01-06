import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOGS_DIR = path.join(process.cwd(), "content/blogs");

export function getAllBlogs() {
  const files = fs.readdirSync(BLOGS_DIR);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(BLOGS_DIR, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data } = matter(source);

      return {
        title: data.title,
        description: data.description,
        slug: data.slug,
        image: data.image,
        tags: data.tags,
        authors: data.authors,
        duration: data.duration,
        date: data.date
          ? new Date(data.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          : null,
      };
    });
}

export function getBlogBySlug(slug) {
  const files = fs.readdirSync(BLOGS_DIR);
  
  for (const file of files) {
    if (file.endsWith(".mdx")) {
      const filePath = path.join(BLOGS_DIR, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(source);
      
      if (data.slug === slug) {
        return {
          ...data,
          content,
          date: data.date
            ? new Date(data.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : null,
        };
      }
    }
  }
  
  return null;
}
