import { useEffect, useMemo, useState } from "react";
import { AddPostForm, PostList } from "./components";
import { PostsFilter } from "./components/PostsFilters";

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
  const [searchString, setSearchString] = useState("");

  const onAddPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  };

  const onDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const sortedPosts = useMemo(() => {
    console.log(1);
    if (!sortValue) {
      return posts;
    }

    return [...posts].sort((a, b) => a[sortValue].localeCompare(b[sortValue]));
  }, [sortValue, posts]);

  const filteredPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchString.toLocaleLowerCase())
    );
  }, [sortedPosts, searchString]);

  return (
    <>
      <AddPostForm onAddPost={onAddPost} />
      <hr />
      <PostsFilter
        sort={sortValue}
        changeSort={setSortValue}
        search={searchString}
        changeSearch={setSearchString}
      />
      {filteredPosts.length > 0 ? (
        <PostList
          onDeletePost={onDeletePost}
          posts={filteredPosts}
          title="ReactJS"
        />
      ) : (
        <h1>Posts not found</h1>
      )}
    </>
  );
}

export default App;
