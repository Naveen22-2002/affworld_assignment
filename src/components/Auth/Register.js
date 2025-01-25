// src/components/Auth/Register.js
import React from "react";
import { Form, Input, Button } from "antd";
import "./auth.css";

const Register = ({ onRegister }) => {
  const onFinish = (values) => {
    console.log("Register values:", values);
    onRegister(values);
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <Form layout="vertical" onFinish={onFinish} className="auth-form">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
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
        <Button type="primary" htmlType="submit" block>
          Register
        </Button>
      </Form>
      <p className="auth-switch">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Register;
