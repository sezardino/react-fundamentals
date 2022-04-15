import { useEffect, useState } from "react";
import { AddPostForm, PostList } from "./components";
import { PostsFilter } from "./components/PostsFilters";
import { Button, Modal } from "./components/ui";
import { Loader } from "./components/ui/Loader/Loader";
import { useFetch, usePosts } from "./hooks";
import { PostsService } from "./services";

function App() {
  const [posts, setPosts] = useState([]);
  const [sortValue, setSortValue] = useState("");
  const [searchString, setSearchString] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { filteredPosts } = usePosts(posts, sortValue, searchString);
  const {
    error: postsError,
    getData: getPosts,
    isLoading: postsLoading,
  } = useFetch(async () => {
    const posts = await PostsService.getAllPosts();

    setPosts(posts);
  });

  const onAddPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  };

  const onDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  useEffect(() => {
    getPosts();
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

      {postsError && <h2>{postsError}</h2>}

      {postsLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      ) : (
        <PostList
          onDeletePost={onDeletePost}
          posts={filteredPosts}
          title="ReactJS"
        />
      )}

      <Modal visible={isModalVisible} setVisible={setIsModalVisible}>
        <AddPostForm onAddPost={onAddPost} />
      </Modal>
    </>
  );
}

export default App;
