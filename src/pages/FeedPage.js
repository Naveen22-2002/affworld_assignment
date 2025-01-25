import React, { useState } from "react";
import "../styles/feed.css";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import Feed from "../components/Feed/Feed";

const FeedPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Welcome to our community!",
      content: "This is our first post in the community.",
      photo: "/api/placeholder/800/600",
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      title: "Getting Started",
      content: "Learn how to use our platform effectively.",
      photo: "/api/placeholder/800/600",
      createdAt: new Date().toISOString()
    }
  ]);

  const handleCreatePost = async (newPost) => {
    const postToAdd = {
      id: Date.now(),
      title: newPost.title || '',
      content: newPost.content || '',
      photo: newPost.photo || '',
      createdAt: new Date().toISOString()
    };
    
    setPosts(prevPosts => [postToAdd, ...prevPosts]);
  };

  return (
    <div className="feed-page">
      <Navbar />
      <div className="feed-content">
        <h1>Feed</h1>
        <Feed posts={posts} onCreatePost={handleCreatePost} />
      </div>
      <Footer />
    </div>
  );
};

export default FeedPage;