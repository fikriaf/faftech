import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
<div className="layout-container">
      <div className="bg-zigzag"></div> {/* Background zigzag */}
      
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>

    );
};

export default Layout;
