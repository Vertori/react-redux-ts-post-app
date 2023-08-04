import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => (b.date && a.date ? b.date.localeCompare(a.date) : 0));

  return (
    <section className="flex flex-col max-w-[400px] w-full px-4">
      <h2 className="text-2xl pb-4">Posts</h2>
      {orderedPosts.map((post) => {
        return (
          <article key={post.id} className="mb-4 bg-gray-200 shadow-md p-4">
            <h3 className="font-medium">{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>

            <PostAuthor userId={post.userId} />
            {post.date && <TimeAgo timestamp={post.date} />}
            <ReactionButtons post={post} />
          </article>
        );
      })}
    </section>
  );
};

export default PostsList;
