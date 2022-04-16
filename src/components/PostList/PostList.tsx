import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { PostItem } from "../PostItem/PostItem";
import styles from "./PostList.module.css";
import { PostListProps } from "./PostList.props";

export const PostList: React.FC<PostListProps> = (props) => {
  const { posts, title, onDeletePost } = props;

  if (!posts.length) {
    return <h1>Posts not found</h1>;
  }

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        <TransitionGroup component={null}>
          {posts.map((post) => (
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames={{
                enter: styles["post-enter"],
                enterActive: styles["post-enter-active"],
                exit: styles["post-exit"],
                exitActive: styles["post-exit-active"],
              }}
            >
              <li>
                <PostItem onDeletePost={onDeletePost} post={post} />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </div>
  );
};
