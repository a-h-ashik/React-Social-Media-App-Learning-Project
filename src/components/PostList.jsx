import { useContext } from "react";
import PostCard from "./PostCard";
import { PostListContex } from "../store/PostListStore";

function PostList() {
  const { postListData } = useContext(PostListContex);
  return (
    <>
      <div className="posts-container">
        {postListData.map((element) => (
          <PostCard key={element.id} postData={element} />
        ))}
      </div>
    </>
  );
}
export default PostList;
