import { useContext, useRef } from "react";
import { PostListContex } from "../store/PostListStore";

function PostForm() {
  const {addPost} = useContext(PostListContex);

  const userIDElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userID = userIDElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    addPost(userID, title, body, reaction, tags);

    userIDElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";
  };
  return (
    <>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            ref={userIDElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input type="text" className="form-control" id="title" ref={titleElement} />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            rows="4"
            className="form-control"
            id="body"
            ref={bodyElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Reaction
          </label>
          <input
            type="text"
            className="form-control"
            id="reaction"
            ref={reactionElement}
          />
          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Tags
            </label>
            <input type="text" className="form-control" id="tags" ref={tagsElement} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default PostForm;
