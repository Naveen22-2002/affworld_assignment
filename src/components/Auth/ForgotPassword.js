// src/components/Auth/ForgotPassword.js
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import "./auth.css";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log("Forgot Password values:", values);
    // Simulate API call
    setTimeout(() => {
      message.success("Password reset email sent!");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <Form layout="vertical" onFinish={onFinish} className="auth-form">
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block loading={loading}>
          Send Reset Link
        </Button>
      </Form>
      <p className="auth-switch">
        Back to <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default ForgotPassword;
