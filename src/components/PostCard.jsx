import { MdDeleteForever } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { useContext } from "react";
import { PostListContex } from "../store/PostListStore";

function PostCard({postData}) {
  const {deletePost} = useContext(PostListContex);
  return (
    <>
      <div className="card post-card">
        <div className="card-body">
          <h5 className="card-title">
            {postData.title}
            <span className="post-delete-button" onClick={() => deletePost(postData.id)}>
              <IconContext.Provider value={{size: "1.75rem"}}>
                <MdDeleteForever />
              </IconContext.Provider>
            </span>
          </h5>
          <p className="card-text">
            {postData.body}
          </p>
          {postData.tags.map((element) => (
            <span key={element} className="badge text-bg-success post-tag">{element}</span>
          ))}
          <div className="like-button">
            <IconContext.Provider value={{size: "1.25rem"}}>
              <AiFillLike />
            </IconContext.Provider>
            <span>{postData.reaction}</span>
          </div>
          

        </div>
      </div>
    </>
  );
}
export default PostCard;
