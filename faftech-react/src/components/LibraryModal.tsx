import { createPortal } from "react-dom";
import React, { useState } from "react";
import { play, audio } from "../services/music";
import "./styles/LibraryModal.css";
import { usePlayerStore } from "./UsePlayerStore";
import { useMusicPlayer } from "./MusicPlayer";

type Music = {
    id: number;
    title: string;
    file: string;
    url: string;
    duration: string;
};

const isDJ = (title: string) => title.toLowerCase().includes("ssstik");

const LibraryModal: React.FC<{ musicList: Music[] }> = ({ musicList }) => {
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
            <div className="modal-content library-modal bg-dark text-light">
            <div className="modal-header border-0 align-items-center">
                <h5 className="modal-title fw-bold">🎧 Music Library</h5>
                <select
                className="form-select bg-secondary text-light border-0 w-auto ms-3"
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                style={{ fontSize: "0.85rem" }}
                >
                <option value="all">🎶 Semua</option>
                <option value="song">🎵 Lagu</option>
                <option value="dj">🎧 DJ (ssstik)</option>
                </select>
                <button
                type="button"
                className="btn-close btn-close-dark btn-dark btn text-light ms-auto"
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
                            play(idx),
                            setIsPlaying(true)
                        }}
                        style={{
                        cursor: "pointer",
                        backgroundColor: idx % 2 === 0 ? "#212529" : "#494a4bff", // bg-dark vs bg-secondary
                        }}
                    >
                        <span className="fw-medium">
                        {music.title}
                        {isDJ(music.title) && (
                            <span className="badge bg-warning text-dark ms-2">DJ</span>
                        )}
                        </span>
                        {currentTrack?.id === music.id && (
                            <small className="text-success mt-1">🎵 Currently Playing</small>
                        )}
                        <small className="text-light">{music.duration}</small>
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
