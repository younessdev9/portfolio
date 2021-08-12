import LatestBlogCard from "./Card";
import { MyLatestArticles } from "./styles";
export default function LatestArticles({ posts }) {
  return (
    <MyLatestArticles>
      <h2 className="article-title">Latest Articles</h2>
      <div className="articles">
        {posts.map((post) => (
          <LatestBlogCard key={post.slug} {...post} />
        ))}
      </div>
    </MyLatestArticles>
  );
}
