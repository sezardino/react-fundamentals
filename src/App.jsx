import { useState } from "react";
import { AddPostForm, PostList } from "./components";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Hello World", body: "Welcome to learning React!" },
    { id: 2, title: "Installation", body: "You can install React from npm." },
    {
      id: 3,
      title: "Up and running",
      body: "You can start coding right away.",
    },
  ]);

  const onAddPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  };

  const onDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <>
      <AddPostForm onAddPost={onAddPost} />
      <PostList onDeletePost={onDeletePost} posts={posts} title="ReactJS" />
    </>
  );
}

export default App;
