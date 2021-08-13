import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import components from "components/MDXComponents";

import { MyBlogPage } from "./styles";
export default function BlogPage({
  frontMatter: { title, date, cover_image },
  slug,
  source,
  readingTime,
}) {
  return (
    <MyBlogPage>
      <div className="blog-post-image">
        <Image alt={slug} src={cover_image} layout="fill" />
      </div>
      <div className="blog-header">
        <h1 className="blog-title">{title}</h1>
        <time>Published on {date}</time>
      </div>
      <div className="reading-time">{readingTime?.text}</div>
      <MDXRemote {...source} components={components} />
    </MyBlogPage>
  );
}
