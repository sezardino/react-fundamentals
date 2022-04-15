import { useEffect, useState } from "react";
import { AddPostForm, PostList } from "./components";
import { Select } from "./components/ui";

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
  const [sortValue, setSortValue] = useState("");

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

  const onSortChange = (evt) => {
    setSortValue(evt.target.value);
    setPosts((posts) =>
      [...posts].sort((a, b) =>
        a[evt.target.value].localeCompare(b[evt.target.value])
      )
    );
  };

  const selectProps = {
    name: "sort-by",
    defaultValue: "Sort By",
    value: sortValue,
    onChange: onSortChange,
    options: [
      { value: "title", label: "Title" },
      { value: "body", label: "Body" },
    ],
  };

  return (
    <>
      <AddPostForm onAddPost={onAddPost} />
      <hr />
      <Select {...selectProps} />
      {content}
    </>
  );
}

export default App;
