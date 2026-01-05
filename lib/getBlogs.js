import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOGS_DIR = path.join(process.cwd(), "content/blogs");
console.log(process.cwd());

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
        date: new Date(data.date?.toISOString()).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      };
    });
}
getAllBlogs();
