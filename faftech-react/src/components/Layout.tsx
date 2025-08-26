import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Particles from "./Particles";
import Galaxy from "./Galaxy";
import LightRays from "./LightRays";
import DotGrid from "./DotGrid";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import FadeContent from "./FadeContent";
import MenuVertical from "./MenuVertical";

import "./styles/Layout.css"

const Layout: React.FC = () => {
    return (
      <div className="layout-container">
        <div className="bg-lain" style={{ width: '100%', height: '100%', position: 'absolute' }}>
          {/* <DotGrid
            dotSize={2}
            gap={15}
            baseColor="#5227FF"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={300}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          /> */}

          <Particles
            particleColors={['#000', '#000']}
            particleCount={1000}
            particleSpread={10}
            speed={0.5}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />

          {/* // Basic usage
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Galaxy />
          </div> */}

          {/* <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          /> */}

        </div>

        {/* <div className="bg-zigzag repeat-video-container">
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
        </div> */}
        
        <Navbar />
        <MenuVertical />
        <div className="main-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
};

export default Layout;
