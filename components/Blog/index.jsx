import Post from "components/Post";

import { MyBlog } from "./styles";

export default function Blog({ posts }) {
  return (
    <MyBlog>
      <h1>Blog</h1>
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </MyBlog>
  );
}
