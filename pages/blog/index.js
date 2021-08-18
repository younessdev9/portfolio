import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

import Blog from "components/Blog";
import { sortByDate } from "utils/sortByDate";
import SEO from "components/SEO";

export default function BlogPage({ posts }) {
  return (
    <>
      <SEO
        title="Blog"
        description="Welcome to Youness blog, where I do talk about JavaScript & TypeScript tips, practices for helping you get better"
        image="/homeFrame.png"
        site="/blog"
      />
      <Blog posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const markDownWithMeta = fs.readFileSync(
      path.join("posts", fileName),
      "utf-8"
    );

    const { data: frontMatter, content } = matter(markDownWithMeta);

    return {
      slug,
      frontMatter,
      readingTime: readingTime(content),
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
