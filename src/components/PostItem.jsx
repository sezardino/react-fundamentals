import { Button } from "./ui";

export const PostItem = ({ post }) => {
  const { title, id, body } = post;

  return (
    <article className="post-item">
      <div>
        <h3>
          <span>{id}.</span>
          {title}
        </h3>
        <p>{body}</p>
      </div>
      <Button>Delete</Button>
    </article>
  );
};
