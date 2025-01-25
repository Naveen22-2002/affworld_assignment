import React from "react";
import { Card, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

const PostCard = ({ post }) => {
  if (!post) return null;

  return (
    <Card 
      className="post-card"
      bordered={false}
    >
      <div className="post-header">
        <Avatar icon={<UserOutlined />} />
        <span className="post-time">
          {post.createdAt ? new Date(post.createdAt).toLocaleString() : 'Just now'}
        </span>
      </div>
      
      {post.photo && (
        <div className="post-image">
          <img 
            src={post.photo} 
            alt="Post content" 
            className="post-img"
          />
        </div>
      )}
      
      <p className="post-content">{post.content}</p>
    </Card>
  );
};

export default PostCard;