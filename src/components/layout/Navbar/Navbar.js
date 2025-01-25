// src/components/Navbar.js
import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <Menu mode="horizontal" className="navbar">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="tasks">
        <Link to="/task-board">Task Board</Link>
      </Menu.Item>
      <Menu.Item key="feed">
        <Link to="/feed">Feed</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
