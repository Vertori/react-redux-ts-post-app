import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onAuthorChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId(e.target.value);
  };

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(addNewPost(title, content, userId));

      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <section className="max-w-[400px] w-full px-4">
      <h2 className="text-2xl pb-4">Add a New Post</h2>
      <form className="flex flex-col gap-y-4">
        {/* post title  */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="postTitle" className="mr-2">
            Post Title:
          </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
            className="bg-gray-200 p-1.5"
          />
        </div>
        {/* author  */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="postAuthor" className="mr-2">
            Author:
          </label>
          <select
            id="postAuthor"
            value={userId}
            onChange={onAuthorChanged}
            className="bg-gray-200 p-1.5"
          >
            <option value=""></option>
            {users.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </select>
        </div>
        {/* content  */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="postContent" className="mr-2">
            Content:
          </label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
            className="bg-gray-200 p-1.5"
          />
        </div>
        {/* button */}
        <div className="mx-auto">
          <button
            type="button"
            className="bg-blue-400 enabled:hover:bg-blue-300 px-6 py-2 font-semibold cursor-pointer disabled:cursor-default disabled:opacity-25"
            onClick={onSavePostClicked}
            disabled={!canSave}
          >
            Save Post
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddPostForm;
