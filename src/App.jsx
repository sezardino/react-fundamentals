import { useMemo, useState } from "react";
import { AddPostForm, PostList } from "./components";
import { PostsFilter } from "./components/PostsFilters";
import { Button, Modal } from "./components/ui";

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
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      <Button
        style={{ margin: "25px 0" }}
        onClick={() => setIsModalVisible(true)}
      >
        Create new Post
      </Button>
      <PostsFilter
        sort={sortValue}
        changeSort={setSortValue}
        search={searchString}
        changeSearch={setSearchString}
      />
      <PostList
        onDeletePost={onDeletePost}
        posts={filteredPosts}
        title="ReactJS"
      />
      <Modal visible={isModalVisible} setVisible={setIsModalVisible}>
        <AddPostForm onAddPost={onAddPost} />
      </Modal>
    </>
  );
}

export default App;
