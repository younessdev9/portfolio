import fs from "fs";
import path from "path";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";

import BlogPage from "components/Blog/BlogPage";
import SEO from "components/SEO";

export default function PostPage(props) {
  console.log({ props });
  return (
    <>
      <SEO
        title={props.frontMatter.title}
        description={props.frontMatter.excerpt}
        image={props.frontMatter.cover_image}
        site={`/blog/${props.slug}`}
      />
      <BlogPage {...props} />
    </>
  );
}
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".mdx", ""),
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );
  const { data, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    scope: data,
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug,
      readingTime: readingTime(content),
    },
  };
}
