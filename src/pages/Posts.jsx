import { useState, useEffect } from "react";
import { PostList, AddPostForm } from "../components";
import { PostsFilter } from "../components/PostsFilters";
import { Button, Pagination, Modal } from "../components/ui";
import { Loader } from "../components/ui/Loader/Loader";
import { usePosts, useFetch } from "../hooks";
import { PostsService } from "../services";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [sortValue, setSortValue] = useState("");
  const [searchString, setSearchString] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const { filteredPosts } = usePosts(posts, sortValue, searchString);
  const {
    error: postsError,
    getData: getPosts,
    isLoading: postsLoading,
  } = useFetch(async (limit, page) => {
    const response = await PostsService.getAllPosts(limit, page);
    setTotalCount(+response.totalCount);
    setPosts(response.data);
  });

  const onAddPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  };

  const onDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  useEffect(() => {
    getPosts(limit, page);
  }, [page]);

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

      <Pagination
        style={{ margin: "50px 0" }}
        total={totalCount}
        current={page}
        setCurrent={setPage}
        limit={limit}
      />

      <Modal visible={isModalVisible} setVisible={setIsModalVisible}>
        <AddPostForm onAddPost={onAddPost} />
      </Modal>
    </>
  );
};

export default Posts;
