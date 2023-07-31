import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  return (
    <section>
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>

            <PostAuthor userId={post.userId} />
            {post.date && <TimeAgo timestamp={post.date} />}
          </article>
        );
      })}
    </section>
  );
};

export default PostsList;
