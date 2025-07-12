import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-no-bg.png";
import profileImg from "../assets/profile.png";
import { getMusicList, play, next, prev, audio } from "../services/music";
import { useMusicPlayer } from "./MusicPlayer";
import { Play, Pause, SkipBack, SkipForward, Music } from "lucide-react";
import GlareHover from "./GlareHover";
import AnimatedContent from "./AnimateContent";
import "./styles/Navbar.css"
import { useEffect } from 'react';

function formatTime(seconds: number) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
}

const Navbar: React.FC = () => {
    const { currentTrack, currentTime, duration, progressPercent } = useMusicPlayer(audio);

    const handlePlay = async () => {
        play();
    };


    return (
        <div className="container-fluid nav-bar bg-transparent" style={{zIndex: "999999"}}>
            <div className="total-navbar">
                <div className="container-fluid d-flex gap-1 px-0 navbarnya" style={{ fontFamily: "Teko", letterSpacing: "3px", fontSize: "1.5rem" }}>
                    <nav className="navbar navbar-expand-lg navbar-utama navbar-dark bg-dark py-0 px-3 w-100 me-3">
                        <a className="navbar-brand d-flex align-items-center text-center gap-3" href="/">
                            <img className="icon" src={logo} alt="faftech" style={{ width: "50px" }} />
                            <h1 className="text-light m-0 pt-1" style={{ fontFamily: "Teko", fontSize: "medium2em" }}>FAF-Tech</h1>
                        </a>
                        <button type="button"
                        className="navbar-toggler toggle-utama"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-label="Toggle navigation" style={{ zIndex: 999, borderStyle: "none", transform: "skew(-20deg)" }}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse" id="navbarCollapse">
                            <ul className="navbar-nav ms-auto gap-4">
                                <li className="nav-item"><Link to="/" className="nav-link py-3">HOME</Link></li>
                                <li className="nav-item"><Link to="/about" className="nav-link py-3">ABOUT</Link></li>
                                <li className="nav-item"><Link to="/project" className="nav-link py-3">PROJECT</Link></li>
                                <li className="nav-item"><Link to="/contact" className="nav-link py-3">CONTACT</Link></li>
                            </ul>
                        </div>
                        <span className="tambahan-nav" style={{ position: "absolute", right: "-15px", top: 0, bottom: 0, width: "30px", background: "inherit", transform: "skewX(-20deg)", zIndex: 0 }}></span>
                    </nav>
                    <div className="nav-profile d-flex gap-1 p-0 m-0">
                        <nav className="navbar navbar-expand-lg navbar-profile navbar-dark bg-transparent p-0 d-grid gap-1" style={{ transform: "skew(-20deg)" }}>
                            <a href="/admin/login" className="btn btn-danger btn-glare rounded-0 px-4 py-0">
                                <div className="mt-1 me-4" style={{ transform: "skew(20deg)", fontSize: "20px", fontWeight: 600 }}>
                                    ADMIN
                                </div>
                            </a>
                            <a href="/admin/login" className="btn btn-light btn-glare rounded-0 py-0">
                                <div className="mt-1 ms-1" style={{ transform: "skew(20deg)", fontSize: "20px", fontWeight: 600 }}>
                                    CRUD
                                </div>
                            </a>
                        </nav>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 ms-3">
                            <a href="#" className="dropdown-toggle ps-1 pe-3" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ zIndex: 999 }}>
                                <img src={profileImg} style={{ width: "30px" }} alt="profile" />
                            </a>
                            <span className="tambahan-nav" style={{ position: "absolute", left: "-15px", top: 0, bottom: 0, width: "50px", background: "inherit", transform: "skewX(-20deg)" }}></span>
                            <ul className="dropdown-menu dropdown-menu-end fade bg-white" aria-labelledby="profileDropdown">
                                <li>
                                <section className="bg-white">
                                    <div className="container">
                                    <div className="row d-flex justify-content-center align-items-center">
                                        <div className="col-md-12 col-xl-12">
                                        <div className="card" style={{ borderRadius: "15px", border: "none", backgroundColor: "#f8f9fa" }}>
                                            <div className="card-body text-center text-dark">
                                                <div className="mt-2 mb-4">
                                                    <img src={profileImg} className="rounded-circle img-fluid" style={{ width: "100px" }} alt="profile" />
                                                </div>
                                                
                                                <p className="text-muted mb-3" style={{ fontSize: "0.9rem" }}>
  {currentTrack?.title || "Tidak ada lagu"}
</p>

<div className="progress my-2" style={{ height: "4px", backgroundColor: "#dee2e6" }}>
  <div
    className="progress-bar"
    role="progressbar"
    style={{
      width: `${progressPercent}%`,
      backgroundColor: "#343a40",
    }}
  ></div>
</div>

<p className="text-muted m-0 p-0" style={{ fontSize: "0.75rem" }}>
  {formatTime(currentTime)} / {formatTime(duration)}
</p>

                                                <div className="icon-control-group d-flex justify-content-center align-items-center gap-3 mt-1">
                                                    <button onClick={prev} className="btn btn-light border-0">
                                                        <SkipBack size={20} />
                                                    </button>
                                                    <button onClick={handlePlay} className="btn btn-dark rounded-circle" style={{ width: "45px", height: "45px" }}>
                                                        <Play size={22} color="#fff" />
                                                    </button>
                                                    <button onClick={next} className="btn btn-light border-0">
                                                        <SkipForward size={20} />
                                                    </button>
                                                </div>

                                                <div className="icon-control-group d-flex justify-content-between text-center mt-3">
                                                    <a href="/music/library" className="btn btn-outline-dark w-100 btn-rounded btn-md" style={{ fontFamily: "Heebo" }}>Library</a>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </section>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
