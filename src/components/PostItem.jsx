import { Button } from "./ui";

export const PostItem = (props) => {
  const { post, onDeletePost } = props;
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
      <Button onClick={() => onDeletePost(id)}>Delete</Button>
    </article>
  );
};
