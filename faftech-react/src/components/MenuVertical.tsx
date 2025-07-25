import React, { useState, useEffect } from "react";
import { FaHome, FaUserAlt, FaCog } from "react-icons/fa";
import ConsultationModal from "./ConsultationModal";
import ChordModal from "./ChordModal";

import './styles/MenuVertical.css'

import { SiOpenai } from "react-icons/si";
import { FaGuitar } from "react-icons/fa"; 

const MenuVertical: React.FC = () => {

    const [showModal, setShowModal] = useState(false);
    const [showChordModal, setShowChordModal] = useState(false);

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { icon: <SiOpenai size={25} />, label: "AI", bg: "emerald", modal: () => setShowModal(true) },
        { icon: <FaGuitar size={25} />, label: "CHORD", bg: "amber", modal: () => setShowChordModal(true) },
        { icon: <FaCog size={25} />, label: "SETTING", bg: "crimson", modal: () => setShowModal(true) },
    ];

    const [show, setShow] = useState(false);

    return (
        <>
            <ConsultationModal show={showModal} onClose={() => setShowModal(false)} />
            <ChordModal show={showChordModal} onClose={() => setShowChordModal(false)} />
            <div className={`vertical-menu-container ${scrolled ? "scrolled" : ""} ${show ? 'showMenu' : ''}`}>
                {!show && (
                    <div
                        className="text-dark bg-primary d-md-none position-absolute"
                        style={{ zIndex: 999999999, right: '3.7rem', top: '0', fontSize: '2rem', cursor: 'pointer', width: "0.5rem", height: "100%", backgroundColor: "blue" }}
                        onClick={() => setShow(true)}
                    >
                        {''}
                    </div>
                    )}

                    {show && (
                    <div
                        className="text-dark bg-primary d-md-none position-absolute"
                        style={{ zIndex: 999999999, right: '3.7rem', top: '0', fontSize: '2rem', cursor: 'pointer', width: "0.5rem", height: "100%", backgroundColor: "blue" }}
                        onClick={() => setShow(false)}
                    >
                        {''}
                    </div>
                )}
                <div
                    className="text-dark bg-primary position-absolute d-md-block d-none"
                    style={{ zIndex: 999999999, right: '0', top: '0', fontSize: '2rem', cursor: 'pointer', width: "0.2rem", height: "100%", backgroundColor: "blue" }}
                >
                    {''}
                </div>
                {menuItems.map((item, index) => (
                <div
                key={index}
                className="menu-item d-flex gap-3 align-items-center position-relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => item.modal()}
                >
                    <div className={`icon bg-primary text-white d-flex justify-content-center align-items-center rounded ${item.bg}`}>
                        {item.icon}
                    </div>
                    <div
                        className={`label position-absolute ${
                        hoveredIndex === index ? "show" : ""
                        }`}
                    >
                        {item.label}
                    </div>
                </div>
            ))}
            </div>
        </>
    );
};

export default MenuVertical;
