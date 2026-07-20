import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getBlogContent(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "content/blogs",
    `${slug}.md`
  );

  const fileContents = fs.readFileSync(filePath, "utf8");

  const matterResult = matter(fileContents);

  return {
    ...matterResult.data,
    content: matterResult.content,
  };
}