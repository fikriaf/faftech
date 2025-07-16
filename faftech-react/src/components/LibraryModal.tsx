import { createPortal } from "react-dom";
import React, { useState, useEffect } from "react";
import { play, audio } from "../services/music";
import "./styles/LibraryModal.css";
import { usePlayerStore } from "./UsePlayerStore";
import { useMusicPlayer } from "./MusicPlayer";
import Loader1 from "./Loader1";
import ButtonMiring from "./ButtonMiring";
import { FaPlay, FaPause, FaTimes, FaMusic } from 'react-icons/fa';
import FormUpload from "./FormUpload";

type Music = {
    id: number;
    title: string;
    file: string;
    url: string;
    duration: string;
};

const isDJ = (title: string) => title.toLowerCase().includes("ssstik") || title.toLowerCase().includes("snaptik") || title.toLowerCase().includes("musicaldown");

const LibraryModal: React.FC<{ musicList: Music[] }> = ({ musicList }) => {
    
    const [showUploadForm, setShowUploadForm] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false)
    const { currentTrack } = useMusicPlayer(audio);
    const { isPlaying, setIsPlaying} = usePlayerStore();
    const [filter, setFilter] = useState<"all" | "dj" | "song">("all");

    const filteredMusic = musicList.filter((m) => {
        if (filter === "all") return true;
        if (filter === "dj") return isDJ(m.title);
        if (filter === "song") return !isDJ(m.title);
    });

    useEffect(() => {
        const handleFlip = () => setShowUploadForm(true);
        window.addEventListener('open-upload-form', handleFlip);
        return () => window.removeEventListener('open-upload-form', handleFlip);
    }, []);

    return createPortal(
        <div className="modal fade" id="libraryModal" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-sm-down">
                <div className="modal-content-flip-container">
                    <div className={`modal-content-flip-inner ${showUploadForm ? "flip" : ""}`}>
                        {/* sisi depan */}
                        <div className="modal-content library-modal pb-4 bg-dark text-light">
                            <div className="modal-header d-flex justify-content-between gap-3 border-0 align-items-center">
                                <span className="modal-title fw-bold">🎧 Music Library</span>
                                {/* <button
                                className="btn btn-sm btn-primary"
                                onClick={() => setShowUploadForm(true)}
                                >
                                + Tambah Lagu
                                </button> */}

                                <ButtonMiring />
                                <div className="dropdown-hover">
                                    <div className="dropdown-label BtnScale bg-secondary text-light px-3 py-2 rounded rounded-sm">
                                        🎧 Filter: {filter === "all" ? "Semua" : filter === "song" ? "Lagu" : "DJ"}
                                    </div>
                                    <ul className="dropdown-menu-hover list-group bg-dark text-light rounded">
                                        <li
                                        className="list-group-item m-0 list-group-item-action bg-dark text-light"
                                        onClick={() => setFilter("all")}
                                        >
                                        🎶 Semua
                                        </li>
                                        <li
                                        className="list-group-item m-0 list-group-item-action bg-dark text-light"
                                        onClick={() => setFilter("song")}
                                        >
                                        🎵 Lagu
                                        </li>
                                        <li
                                        className="list-group-item m-0 list-group-item-action bg-dark text-light"
                                        onClick={() => setFilter("dj")}
                                        >
                                        🎧 DJ
                                        </li>
                                    </ul>
                                </div>
                                <button
                                type="button"
                                className="d-flex p-2 me-2 btn-close-dark btn-dark btn text-light ms-auto"
                                data-bs-dismiss="modal"
                                ><FaTimes /></button>
                            </div>
                            <hr className="p-0 m-0" />
                            <div className="modal-body">
                                <div className="library-flip-wrapper">
                                    <div className={`library-flip-inner ${showUploadForm ? "flip" : ""}`}>
                                        {/* Halaman depan: daftar lagu */}
                                        <div className="library-front">
                                            {filteredMusic.length === 0 ? (
                                            <div className="text-center py-4"><Loader1/></div>
                                            ) : (
                                            <ul className="list-group list-group-flush">
                                                {filteredMusic.map((music, idx) => (
                                                <li
                                                    key={music.id}
                                                    className={"list-group-item list-hover text-light d-flex justify-content-between align-items-center mx-2 rounded"}
                                                    onClick={() => {
                                                        const realIndex = musicList.findIndex(m => m.id === music.id);
                                                        play(realIndex);
                                                        setIsPlaying(true);
                                                    }}

                                                    style={{
                                                    cursor: "pointer",
                                                    backgroundColor: idx % 2 === 0 ? "#212529" : "#494a4bff", // bg-dark vs bg-secondary
                                                    }}
                                                >
                                                    <div className={`w-100 row px-0 mx-0 text-center d-flex justify-content-between align-items-center ${currentTrack?.id === music.id ? "text-primary" : "text-light"}`}>
                                                    <span className="col-1 p-0 m-0">
                                                        {currentTrack?.id === music.id && isPlaying ? (
                                                            <FaPause size={15} />
                                                        ) : (
                                                            <FaPlay size={15} />
                                                        )}
                                                    </span>
                                                    <span className="fw-medium text-start TitleMusic text-truncate col-8">
                                                    {music.title}
                                                    </span>
                                                    <span className="text-center col-2">
                                                        {currentTrack?.id === music.id && (
                                                            <FaMusic />
                                                        )}
                                                    </span>
                                                    <small className="col-1">{music.duration}</small>
                                                    </div>
                                                </li>
                                                ))}
                                            </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                        </div>

                        <div className="modal-content library-modal pb-4 bg-dark text-light">
                            {/* Halaman belakang: form upload */}
                            <div className="library-back m-3 h-100 w-100">
                                <button
                                    className="btn btn-sm btn-secondary"
                                    onClick={() => setShowUploadForm(false)}
                                >
                                    ← Kembali
                                </button>
                                <div className="d-flex justify-content-center w-100 align-items-center h-100">
                                    <FormUpload />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default LibraryModal;
