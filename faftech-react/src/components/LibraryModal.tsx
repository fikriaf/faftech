import { createPortal } from "react-dom";
import React, { useState } from "react";
import { play, audio } from "../services/music";
import "./styles/LibraryModal.css";
import { usePlayerStore } from "./UsePlayerStore";
import { useMusicPlayer } from "./MusicPlayer";
import { FaPlay, FaPause } from 'react-icons/fa';

type Music = {
    id: number;
    title: string;
    file: string;
    url: string;
    duration: string;
};

const isDJ = (title: string) => title.toLowerCase().includes("ssstik") || title.toLowerCase().includes("snaptik") || title.toLowerCase().includes("musicaldown");

const LibraryModal: React.FC<{ musicList: Music[] }> = ({ musicList }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const { currentTrack } = useMusicPlayer(audio);
    const setIsPlaying = usePlayerStore((state) => state.setIsPlaying);
    const [filter, setFilter] = useState<"all" | "dj" | "song">("all");

    const filteredMusic = musicList.filter((m) => {
        if (filter === "all") return true;
        if (filter === "dj") return isDJ(m.title);
        if (filter === "song") return !isDJ(m.title);
    });

    return createPortal(
        <div className="modal fade" id="libraryModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-sm-down">
            <div className="modal-content library-modal pb-4 bg-dark text-light">
            <div className="modal-header border-0 align-items-center">
                <h5 className="modal-title fw-bold">🎧 Music Library</h5>
                <div className="dropdown-hover ms-3">
                <div className="dropdown-label BtnScale bg-secondary text-light px-3 py-2 rounded">
                    🎧 Filter: {filter === "all" ? "Semua" : filter === "song" ? "Lagu" : "DJ"}
                </div>

                <ul className="dropdown-menu-hover list-group bg-dark text-light mt-1 rounded">
                    <li
                    className="list-group-item list-group-item-action bg-dark text-light"
                    onClick={() => setFilter("all")}
                    >
                    🎶 Semua
                    </li>
                    <li
                    className="list-group-item list-group-item-action bg-dark text-light"
                    onClick={() => setFilter("song")}
                    >
                    🎵 Lagu
                    </li>
                    <li
                    className="list-group-item list-group-item-action bg-dark text-light"
                    onClick={() => setFilter("dj")}
                    >
                    🎧 DJ
                    </li>
                </ul>
                </div>
                <button
                type="button"
                className="btn-close p-2 me-2 btn-close-dark btn-dark btn text-light ms-auto"
                data-bs-dismiss="modal"
                aria-label="Close"
                ></button>
            </div>
            <hr className="p-0 m-0" />
            <div className="modal-body">
                {filteredMusic.length === 0 ? (
                <div className="text-center py-4">Tidak ada lagu ditemukan.</div>
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
                        <span className="col-1 p-0 m-0">
                            {currentTrack?.id === music.id ? (
                                <FaPause size={15} />
                            ) : (
                                <FaPlay size={15} />
                            )}
                        </span>
                        <span className="fw-medium col-8">
                        {music.title}
                        </span>
                        <span className="text-center col-2">
                            {currentTrack?.id === music.id && (
                                <span>🎵</span>
                            )}
                        </span>
                        <small className="text-light col-1">{music.duration}</small>
                    </li>
                    ))}
                </ul>
                )}
            </div>
            </div>
        </div>
        </div>,
        document.body
    );
};

export default LibraryModal;
