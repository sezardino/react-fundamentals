import { PostItem } from "./PostItem";

export const PostList = (props) => {
  const { posts, title } = props;

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
