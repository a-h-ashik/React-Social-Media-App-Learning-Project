import { createContext, useReducer } from "react";

export const PostListContex = createContext({
  postListData: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (element) => element.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

function PostProvider({ children }) {
  const [postListData, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_VALUE
  );

  const addPost = (userID, title, body, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Math.floor(Math.random() * 100 + 1),
        title: title,
        body: body,
        reaction: reaction,
        userId: userID,
        tags: tags,
      },
    });
  };
  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId: id,
      },
    });
  };

  return (
    <>
      <PostListContex.Provider value={{ postListData, addPost, deletePost }}>
        {children}
      </PostListContex.Provider>
    </>
  );
}

const DEFAULT_VALUE = [
  {
    id: 1,
    title: "Going to Dhaka",
    body: "Hi Friends, a new semester is about to start. I am heading back to Dhaka.",
    reaction: 10,
    userId: "user_1",
    tags: ["Dhaka", "Study", "Travel"],
  },
  {
    id: 2,
    title: "Going to Cox's Bazar",
    body: "Hello, Off to Cox's Bazar with my family. Hope to enjoy a lot.",
    reaction: 15,
    userId: "user_2",
    tags: ["Tour", "Family", "Travel"],
  },
];

export default PostProvider;
