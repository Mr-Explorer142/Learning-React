import { useContext, useState } from "react";
import { BsSuitHeartFill, BsTrashFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const [countReact, setCountReact] = useState(post.reactions.likes);
  const { deletePost } = useContext(PostList);

  return (
    <div className="col-lg-4 mb-3" style={{height: "auto"}}>
      <div className="card h-100 shadow-sm">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          {/* delete button */}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            role="button"
            onClick={() => deletePost(post.id)}
          >
            <FaTimes size={12} />
          </span>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary me-1">
              {tag}
            </span>
          ))}
          {/* Reaction button */}
          <div className="mt-2">
            <BsSuitHeartFill
              className="text-danger"
              role="button"
              onClick={() => setCountReact((prev) => prev + 1)}
            />
            <span className="ms-2 fw-bold text-danger">{countReact}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
