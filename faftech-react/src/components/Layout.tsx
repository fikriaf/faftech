import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
    <div className="layout-container">
      <div className="bg-zigzag repeat-video-container">
        {[...Array(4)].map((_, i) => (
          <video
            key={i}
            className="video-bg-tile m-0 p-0"
            src="/video-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        ))}
      </div>

      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>

    );
};

export default Layout;
