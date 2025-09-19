import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="w-75" onSubmit={handleOnSubmit}>
      {/* User ID */}
      <div className="mb-3">
        <label htmlFor="userId" className="form-label fw-semibold">
          User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter your User ID"
          ref={userIdElement}
        />
      </div>
      {/* Post Title */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label fw-semibold">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
          ref={postTitleElement}
        />
      </div>
      {/* Post Content */}
      <div className="mb-3">
        <label htmlFor="content" className="form-label fw-semibold">
          Post Content
        </label>
        <textarea
          type="text"
          className="form-control"
          id="content"
          placeholder="Tell us more about it"
          rows={4}
          ref={postBodyElement}
        />
      </div>
      {/* Reactions */}
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label fw-semibold">
          Reactions
        </label>
        <input
          type="number"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
          ref={reactionsElement}
        />
      </div>
      {/* Hashtags */}
      <div className="mb-3">
        <label htmlFor="userId" className="form-label fw-semibold">
          Hashtags
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter your hashtags using space"
          ref={tagsElement}
        />
      </div>
      {/* Post Button */}
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
