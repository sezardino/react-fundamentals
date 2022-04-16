import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../components/ui";
import { useFetch } from "../hooks";
import { PostsService } from "../services";

const PostId = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const { getData: getPost, isLoading: isPostLoading } = useFetch(async (id) =>
    setPost(await PostsService.getPostById(id))
  );

  const { getData: getComments, isLoading: isCommentsLoading } = useFetch(
    async (id) => setComments(await PostsService.getCommentsByPostId(id))
  );

  useEffect(() => {
    getPost(params.id);
  }, []);

  useEffect(() => {
    getComments(params.id);
  }, []);

  const content = (
    <div>
      {post && (
        <>
          <h1>
            <span>{post.id}. </span>
            {post.title}
          </h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );

  const commentsContent = (
    <>
      <h2>
        {comments.length <= 0
          ? "The are no comments for this posts"
          : "Comments"}
      </h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h3>{comment.name}</h3>
            <small>{comment.email}</small>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div>
      <div>{isPostLoading || !post ? <Loader /> : content}</div>
      <div style={{ marginTop: 50 }}>
        {isPostLoading || !comments.length ? <Loader /> : commentsContent}
      </div>
    </div>
  );
};

export default PostId;
