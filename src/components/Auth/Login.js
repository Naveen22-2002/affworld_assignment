// src/components/Auth/Login.js
import React from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./auth.css";

const Login = ({ onLogin }) => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const username = "testmail@gmail.com";
  const password = "testpassword";

  const handleSubmit = (values) => {
    const { email, password: userPassword } = values;

    // Validate email and password
    if (email === username && userPassword === password) {
      console.log("Login successful!");
      navigate("/task-board"); // Redirect to the home page
    } else {
      console.log("Invalid email or password!");
      alert("Invalid email or password!"); // Show an error message
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <Form
        layout="vertical"
        onFinish={handleSubmit} // Use Form's onFinish to handle submission
        className="auth-form"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
      <p className="auth-switch">
        Don't have an account? <a href="/register">Register</a>
      </p>
      <p className="auth-forgot">
        <a href="/forgot-password">Forgot Password?</a>
      </p>
    </div>
  );
};

export default Login;
