import GithubSlugger from "github-slugger";

export function getToc(content) {
  const slugger = new GithubSlugger();
  const headingRegex = /^(##|###)\s+(.*)$/gm;
  const toc = [];

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();

    const id = slugger.slug(text);

    toc.push({ level, text, id });
  }

  return toc;
}
