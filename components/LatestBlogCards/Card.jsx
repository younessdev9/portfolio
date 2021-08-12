import Image from "next/image";
import Link from "next/link";
import { MyLatestArticlesCard } from "./styles";

export default function LatestBlogCard({
  frontMatter: { excerpt, date, title, cover_image },
  slug,
}) {
  return (
    <MyLatestArticlesCard>
      <div className="square">
        <div className="mask">
          <Image
            className="inner-image"
            width={460}
            height={430}
            alt="blog"
            src={cover_image}
          />
        </div>
        <h1>{title}</h1>
        <p>{excerpt}</p>
        <div className="card-bottom">
          <Link href={`/blog/${slug}`} passHref>
            <button className="blog-button">Read more</button>
          </Link>
          <time>{date}</time>
        </div>
      </div>
    </MyLatestArticlesCard>
  );
}
