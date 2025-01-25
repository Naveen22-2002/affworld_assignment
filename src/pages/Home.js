// src/pages/Home.js
import React from "react";
import "../styles/common.css";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="content">
        <h1>Welcome to My App</h1>
        <p>This is the homepage of your application.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
