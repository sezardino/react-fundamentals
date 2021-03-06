import { useState } from "react";
import { Button, Input } from "./ui";

export const AddPostForm = (props) => {
  const { onAddPost } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitHandler = (evt) => {
    evt.preventDefault();
    onAddPost({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form className="add-post-form" onSubmit={submitHandler}>
      <h2>Create new Post</h2>
      <Input
        type="text"
        name="title"
        value={title}
        placeholder="Title"
        className="add-post-form__input"
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <Input
        type="textarea"
        name="body"
        value={body}
        placeholder="Body"
        className="add-post-form__textarea"
        onChange={(evt) => setBody(evt.target.value)}
      />
      <Button type="submit">Create new Post</Button>
    </form>
  );
};
