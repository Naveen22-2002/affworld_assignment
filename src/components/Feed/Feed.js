import React from "react";
import PostCard from "./PostCard";
import CreatePost from "./CreatePost";
import "../../styles/feed.css";

const Feed = ({ posts, onCreatePost }) => {
  return (
    <div className="feed">
      <CreatePost onCreatePost={onCreatePost} />
      {Array.isArray(posts) && posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;