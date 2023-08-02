import { useDispatch } from "react-redux";
import { addReaction, ReactionsType } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤",
  rocket: "🚀",
  coffee: "☕",
};

interface ReactionButtonProps {
  post: {
    id: string;
    reactions: ReactionsType;
  };
}

const ReactionButtons = ({ post }: ReactionButtonProps) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() =>
          dispatch(
            addReaction({
              postId: post.id,
              reaction: name as keyof ReactionsType,
            })
          )
        }
      >
        {emoji} {post.reactions[name as keyof ReactionsType]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
