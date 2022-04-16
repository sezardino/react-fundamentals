import React from "react";
import { Button } from "../ui";

import styles from "./PostItem.module.css";
import { PostItemProps } from "./PostItem.props";

export const PostItem: React.FC<PostItemProps> = (props) => {
  const { post, onDeletePost } = props;
  const { title, id, body } = post;

  return (
    <article className={styles.item}>
      <div>
        <h3>
          <span>{id}.</span>
          {title}
        </h3>
        <p>{body}</p>
      </div>
      <div className={styles.buttons}>
        <Button to={`/posts/${id}`}>Read Full</Button>
        <Button onClick={() => onDeletePost(id)}>Delete</Button>
      </div>
    </article>
  );
};
