import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { sortByDate } from "utils/sortByDate";
import Header from "components/Header";
import Showcase from "components/Showcase";
import MyLatestArticles from "components/LatestBlogCards";

export default function Home({ posts }) {
  return (
    <>
      <div>
        <Header />
        <Showcase />
        <MyLatestArticles posts={posts} />
      </div>
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
    const { data: frontMatter } = matter(markDownWithMeta);
    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      posts: posts.slice(0, 3).sort(sortByDate),
    },
  };
}
