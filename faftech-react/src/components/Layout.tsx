import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Particles from "./Particles";
import DotGrid from "./DotGrid";
import { Outlet } from "react-router-dom";
import FadeContent from "./FadeContent";
import "./styles/Layout.css"

const Layout: React.FC = () => {
    return (
      <div className="layout-container">
        {/* <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={500}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div> */}
        {/* <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
          <Particles
            particleColors={['#000', '#000']}
            particleCount={10000}
            particleSpread={10}
            speed={0.5}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div> */}
        <div className="bg-zigzag repeat-video-container">
          <FadeContent blur={false} duration={1500} easing="ease-out" initialOpacity={0}>
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
          </FadeContent>
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
