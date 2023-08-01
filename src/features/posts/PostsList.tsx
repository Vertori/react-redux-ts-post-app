import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => (b.date && a.date ? b.date.localeCompare(a.date) : 0));

  return (
    <section>
      <h2>Posts</h2>
      {orderedPosts.map((post) => {
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
