import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { AddPostForm, PostList } from "./components";
import { PostsFilter } from "./components/PostsFilters";
import { Button, Modal } from "./components/ui";
import { usePosts } from "./hooks";
import { PostsService } from "./services";

function App() {
  const [posts, setPosts] = useState([]);
  const [sortValue, setSortValue] = useState("");
  const [searchString, setSearchString] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { filteredPosts } = usePosts(posts, sortValue, searchString);

  const onAddPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  };

  const onDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const fetchPosts = async () => {
    const posts = await PostsService.getAllPosts();

    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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
