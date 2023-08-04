useSelector;
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

type Props = {
  userId: string | undefined;
};

const PostAuthor = ({ userId }: Props) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return (
    <span className="text-sm">
      by {author ? author.name : "Unknown Author"}
    </span>
  );
};

export default PostAuthor;
