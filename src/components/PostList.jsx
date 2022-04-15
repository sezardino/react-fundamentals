import { PostItem } from "./PostItem";

export const PostList = (props) => {
  const { posts, title, onDeletePost } = props;

  if (!posts.length) {
    return <h1>Posts not found</h1>;
  }

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostItem onDeletePost={onDeletePost} post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
