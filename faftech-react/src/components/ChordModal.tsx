'use client'

import { useState, useEffect, useRef } from 'react';
import { FaGuitar, FaMagic } from 'react-icons/fa';
import './styles/ChordModal.css';

type Song = {
title: string;
artist: string;
content: string;
};

const songs: Song[] = [
{
    title: 'Kau Begitu Indah',
    artist: 'Band Fikri',
    content: `[Intro]
C  G  Am  F

[Verse]
C             G
Kau begitu indah
Am            F
Di setiap langkahku
C               G
Dan ku tak bisa jauh
Am               F
Dari bayangmu, ooh…

[Chorus]
F          G
Ku ingin kau tahu
Em          Am
Rasa ini sungguh
F        G         C
Takkan pernah ku sembunyikan`
},
{
    title: 'Bayangan Senja',
    artist: 'Fikri Music',
    content: `[Intro]
Am  G  F  E

[Verse]
Am        G
Langit pun merah
F         E
Saat kau pergi`
}
];

type ChordModalProps = {
show: boolean;
onClose: () => void;
};

export default function ChordModal({ show, onClose }: ChordModalProps) {
const [selectedSong, setSelectedSong] = useState<Song>(songs[0]);
const [autoScroll, setAutoScroll] = useState(false);
const [scrollSpeed, setScrollSpeed] = useState(1); // px per tick
const [darkMode, setDarkMode] = useState(false);
const chordRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    if (!show) return;
    const interval = setInterval(() => {
    if (autoScroll && chordRef.current) {
        chordRef.current.scrollTop += scrollSpeed;
    }
    }, 30);
    return () => clearInterval(interval);
}, [autoScroll, scrollSpeed, show]);

useEffect(() => {
    document.body.classList.toggle('modal-open', show);
}, [show]);

const [aiPrompt, setAiPrompt] = useState('');


if (!show) return null;

return (
    <div
    className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center"
    style={{ zIndex: 1050 }}
    onClick={onClose}
    >
    <div
        className={`rounded-4 shadow-lg p-4 m-3 animate__animated animate__zoomIn ${darkMode ? 'bg-dark text-white' : 'bg-white text-dark'}`}
        style={{ width: '90%', maxWidth: 1000 }}
        onClick={(e) => e.stopPropagation()}
    >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
                <h4 className="mb-1">
                <FaGuitar className="me-2 text-primary" />
                {selectedSong.title}
                </h4>
                <small className="text-muted">{selectedSong.artist}</small>
            </div>
            {/* Dark Mode */}
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="darkModeSwitch"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
                <label className="form-check-label" htmlFor="darkModeSwitch">
                    Dark Mode
                </label>
            </div>
            <button className="btn" onClick={onClose}>
                x
            </button>
        </div>

        {/* Content Area */}
        <div className="row">
        {/* KIRI: Chord */}
        <div className="col-md-7" style={{ height: 500, overflowY: 'auto' }} ref={chordRef}>
            <div style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '1.1rem' }}>
            {selectedSong.content}
            </div>
        </div>

        {/* KANAN: Kontrol */}
        <div className="d-flex flex-column justify-content-between col-md-5 ps-md-4 mt-4 mt-md-0">
            <div className='w-100 '>
                {/* Pilih Lagu */}
                <div className="mb-3">
                <label className="form-label fw-bold">Pilih Lagu:</label>
                <select
                    className="form-select"
                    value={selectedSong.title}
                    onChange={(e) =>
                    setSelectedSong(songs.find((s) => s.title === e.target.value) || songs[0])
                    }
                >
                    {songs.map((song, i) => (
                    <option key={i} value={song.title}>
                        {song.title} - {song.artist}
                    </option>
                    ))}
                </select>
                </div>

                {/* Auto Scroll */}
                <div className="form-check form-switch mb-2">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="autoScrollSwitch"
                    checked={autoScroll}
                    onChange={() => setAutoScroll(!autoScroll)}
                />
                <label className="form-check-label" htmlFor="autoScrollSwitch">
                    Auto Scroll
                </label>
                </div>

                {/* Scroll Speed */}
                <div className="mb-3">
                <label htmlFor="scrollSpeedRange" className="form-label">
                    Kecepatan Scroll
                </label>
                <input
                    type="range"
                    className="form-range"
                    min={1}
                    max={10}
                    value={scrollSpeed}
                    onChange={(e) => setScrollSpeed(Number(e.target.value))}
                />
                </div>

                
            </div>

            {/* Buttons */}
            <div className="d-grid gap-2 mt-auto">
                <div className="mb-2">
                    <label htmlFor="aiPrompt" className="form-label fw-bold">
                        Prompt Generate Chord
                    </label>
                    <div
                        className={`d-flex align-items-center px-3 py-2 rounded-4 shadow-sm ${
                        darkMode ? 'bg-secondary text-light' : 'bg-light text-dark'
                        }`}
                        style={{ border: '1px solid #ccc', transition: 'all 0.3s ease' }}
                    >
                        <input
                        id="aiPrompt"
                        type="text"
                        className="form-control border-0 bg-transparent shadow-none"
                        placeholder="Example: Peterpan - Semua Tentang Kita..."
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                        }}
                        />
                    </div>
                </div>
                <button className="btn btn-outline-primary" onClick={() => alert('Fitur AI belum tersedia')}>
                    <FaMagic className="me-2" />
                    Generate Chord with AI
                </button>
            </div>
        </div>
        </div>
    </div>
    </div>
);
}
