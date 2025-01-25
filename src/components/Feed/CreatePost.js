import React, { useState } from "react";
import { Card, Input, Button, message } from "antd";
const { TextArea } = Input;

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dhn1u6skl/image/upload";
const UPLOAD_PRESET = "affworld_assignment";

const CreatePost = ({ onCreatePost }) => {
  const [caption, setCaption] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) { // 5MB limit
        message.error('Image size should be less than 5MB');
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      const response = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    if (!caption.trim()) {
      message.error('Please add a caption');
      return;
    }

    if (!imageFile) {
      message.error('Please select an image');
      return;
    }

    setLoading(true);
    try {
      const imageUrl = await uploadImage(imageFile);
      
      await onCreatePost({
        content: caption,
        photo: imageUrl,
        createdAt: new Date().toISOString()
      });
      
      // Reset form
      setCaption("");
      setImageFile(null);
      setPreview(null);
      message.success('Post created successfully!');
    } catch (error) {
      message.error('Failed to create post: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="create-post-card">
      <div className="create-post-form">
        <TextArea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Write a caption..."
          autoSize={{ minRows: 2, maxRows: 6 }}
          className="caption-input"
        />
        
        <div className="upload-section">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            id="image-upload"
            className="image-input"
          />
          <label htmlFor="image-upload" className="upload-button">
            Choose Photo
          </label>
          
          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" />
            </div>
          )}
        </div>

        <Button
          type="primary"
          onClick={handleSubmit}
          loading={loading}
          className="post-button"
          disabled={!imageFile || !caption.trim()}
        >
          Post
        </Button>
      </div>
    </Card>
  );
};

export default CreatePost;