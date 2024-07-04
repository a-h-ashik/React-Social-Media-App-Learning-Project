import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import { useState } from "react";
import PostProvider from "./store/PostListStore";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostProvider>
      <div className="app-container">
        <Sidebar func={{tabChange: setSelectedTab}} tab={selectedTab} />
        <div className="container-content">
          <Header />
          {selectedTab === "Create Post" ? <PostForm /> : <PostList />}

          <Footer />
        </div>
      </div>
      </PostProvider>
  );
}

export default App;
