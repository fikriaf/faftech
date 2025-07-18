import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePlayerStore } from "./UsePlayerStore";
import LibraryModal from "./LibraryModal";
import logo from "../assets/logo-no-bg.png";
import profileImg from "../assets/profile.png";
import { getMusicList, play, pause, next, prev, audio } from "../services/music";
import { useMusicPlayer } from "./MusicPlayer";
import ButtonCV from "./ButtonCV";
import ToolTip from "./ToolTip";
import AnimateMusic from "./AnimateMusic";
import { Play, Pause, SkipBack, SkipForward, Music } from "lucide-react";
import { FaMusic } from "react-icons/fa";
import {
  RiAlbumFill,     // Ikon album
  RiMusic2Fill,    // Musik
  RiPlayList2Fill, // Playlist penuh
  RiEqualizerFill, // Equalizer
} from "react-icons/ri";

import {
  MdLibraryMusic,  // Ikon perpustakaan musik
} from "react-icons/md";
import GlareHover from "./GlareHover";
import AnimatedContent from "./AnimateContent";
import "./styles/Navbar.css"
import { BiMusic } from "react-icons/bi";
import { div } from "framer-motion/client";

function formatTime(seconds: number) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
}

const Navbar: React.FC = () => {

    const { currentTrack, currentTime, duration, progressPercent, musicList } = useMusicPlayer(audio);
    const isPlaying = usePlayerStore((state) => state.isPlaying);
    const setIsPlaying = usePlayerStore((state) => state.setIsPlaying);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleMusic = async (parameter: string) => {
        if (parameter === 'playANDpause') {
            if (isPlaying) {
                audio.pause();
            } else {
                if (!audio.src) {
                    play();
                } else {
                    audio.play().catch(() => {
                    play();
                    });
                }
            }
            setIsPlaying(!isPlaying);

        } else if (parameter === 'next') {
            setIsPlaying(true)
            next();
        } else if (parameter === 'prev') {
            setIsPlaying(true)
            prev();
        }
        
    };

    return (
        <div className="container-fluid nav-bar bg-transparent" style={{zIndex: "999999"}}>
            <LibraryModal musicList={musicList} />
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
                        {isMobile ? (
                            <div className="navbar-collapse collapse" id="navbarCollapse">
                                <ul className="navbar-nav ms-auto gap-4">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link py-3">HOME</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link py-3">ABOUT</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/project" className="nav-link py-3">PROJECT</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link py-3">CONTACT</Link>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div className="navbar-collapse collapse" id="navbarCollapse">
                                <ul className="navbar-nav ms-auto gap-4">
                                    <li className="nav-item">
                                        <ToolTip text="Return to the main page">
                                        <Link to="/" className="nav-link py-3">HOME</Link>
                                        </ToolTip>
                                    </li>
                                    <li className="nav-item">
                                        <ToolTip text="Learn more about me">
                                        <Link to="/about" className="nav-link py-3">ABOUT</Link>
                                        </ToolTip>
                                    </li>
                                    <li className="nav-item">
                                        <ToolTip text="Explore my best works and projects">
                                        <Link to="/project" className="nav-link py-3">PROJECT</Link>
                                        </ToolTip>
                                    </li>
                                    <li className="nav-item">
                                        <ToolTip text="Get in touch with me">
                                        <Link to="/contact" className="nav-link py-3">CONTACT</Link>
                                        </ToolTip>
                                    </li>
                                </ul>
                            </div>
                        )}
                        <span className="tambahan-nav" style={{ position: "absolute", right: "-15px", top: 0, bottom: 0, width: "30px", background: "inherit", transform: "skewX(-20deg)", zIndex: 0 }}></span>
                    </nav>
                    <div className="nav-profile d-flex gap-1 p-0 m-0">
                        <nav className="navbar navbar-expand-lg navbar-profile navbar-dark bg-transparent p-0 d-grid gap-1" style={{ transform: "skew(-20deg)" }}>
                            <a className="btn btn-danger btn-glare rounded-0 px-4 py-0">
                                <div className="mt-1 me-4" style={{ transform: "skew(20deg)", fontSize: "1.25rem", fontWeight: 600 }}>
                                    THEME
                                </div>
                            </a>
                            <button className="btn btn-light rounded-0 py-0">
                                <div className="mt-1" style={{ transform: "skew(20deg)", fontSize: "1.25rem", fontWeight: 600 }}>
                                    <ButtonCV />
                                </div>
                            </button>
                        </nav>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 ms-3">
                            <a href="#" className="dropdown-toggle ps-1 pe-3" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false"
                            data-bs-auto-close="outside" style={{ zIndex: 999 }}>
                                {isPlaying ? (
                                    <AnimateMusic />
                                ):(
                                    <div className="border border-primary py-0 px-2 rounded"><BiMusic /></div>
                                )}
                            </a>
                            <span className="tambahan-nav" style={{ position: "absolute", left: "-15px", top: 0, bottom: 0, width: "50px", background: "inherit", transform: "skewX(-20deg)" }}></span>
                            <ul className="dropdown-menu dropdown-menu-end fade bg-dark" aria-labelledby="profileDropdown">
                                <li>
                                <section className="bg-dark">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="col-md-12 col-xl-12">
                                        <div className="p-3 bg-dark" style={{ borderRadius: "0.5rem", border: "none" }}>
                                            <div className="card-body text-center text-light">
                                                {/* <div className="mt-2 mb-4">
                                                    <img src={profileImg} className="rounded-circle img-fluid" style={{ width: "100px" }} alt="profile" />
                                                </div>
                                                 */}
                                                <p className="text-warning fw-semibold mb-3" style={{ fontSize: "0.7rem", fontFamily: "Heebo", letterSpacing: "1px" }}>
                                                    {currentTrack?.title || musicList?.[0]?.title || "Tidak ada lagu"}
                                                </p>

                                                <div className="progress bg-light my-2" style={{ height: "5px"}}>
                                                <div
                                                    className="progress-bar rounded-pill"
                                                    role="progressbar"
                                                    style={{
                                                    width: `${progressPercent}%`,
                                                    }}
                                                ></div>
                                                </div>

                                                <p className="text-primary m-0 p-0" style={{ fontSize: "0.75rem" }}>
                                                {formatTime(currentTime)} / {formatTime(duration)}
                                                </p>

                                                <div className="icon-control-group d-flex justify-content-center align-items-center gap-3 mt-1">
                                                    <button onClick={() => handleMusic('prev')} className="btn btn-outline-primary border-0">
                                                        <SkipBack size={20} />
                                                    </button>
                                                    <button
                                                    onClick={() => handleMusic('playANDpause')}
                                                    className="btn btn-primary p-0 rounded-circle"
                                                    style={{ width: "2.5rem", height: "2.5rem" }}
                                                    >
                                                    {isPlaying ? (
                                                        <Pause size={22} color="#fff" />
                                                    ) : (
                                                        <Play size={22} color="#fff" />
                                                    )}
                                                    </button>
                                                    <button onClick={() => handleMusic('next')} className="btn btn-outline-primary border-0">
                                                        <SkipForward size={20} />
                                                    </button>
                                                </div>

                                                <div className="icon-control-group d-flex justify-content-between text-center mt-3">
                                                    <button
                                                className="btn btn-outline-primary d-flex align-items-center gap-1 justify-content-center w-100 btn-rounded btn-md"
                                                data-bs-toggle="modal"
                                                data-bs-target="#libraryModal"
                                                style={{ fontFamily: "Heebo" }}
                                                >
                                                <MdLibraryMusic size={25} /> Library
                                                </button>
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
