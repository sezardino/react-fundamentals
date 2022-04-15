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

  const content =
    posts.length > 0 ? (
      <PostList onDeletePost={onDeletePost} posts={posts} title="ReactJS" />
    ) : (
      <h1>Posts not found</h1>
    );

  return (
    <>
      <AddPostForm onAddPost={onAddPost} />
      {content}
    </>
  );
}

export default App;
