import { PostItem } from "./PostItem";

export const PostList = (props) => {
  const { posts, title, onDeletePost } = props;
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
