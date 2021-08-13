import Link from "next/link";
import Image from "next/image";

import { MyPost } from "./styles";

export default function Post({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a>
        <MyPost>
          <div className="image-container">
            <Image
              className="post-image"
              layout="fill"
              src={post.frontMatter.cover_image}
              alt={post.title}
            />
          </div>
          <div className="post-title">
            <h1>{post.frontMatter.title}</h1>
            <p className="italic-font">{post?.readingTime?.text}</p>
          </div>
          <p className="post-excerpt italic-font">{post.frontMatter.excerpt}</p>
          <time className="italic-font">{post.frontMatter.date}</time>
        </MyPost>
      </a>
    </Link>
  );
}
