import "./App.css";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <div className=" w-full  h-full flex gap-y-8 flex-col justify-center items-center py-12">
      {/* <Counter /> */}
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
