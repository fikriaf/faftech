import React, { useState, useEffect } from "react";
import { FaHome, FaUserAlt, FaCog } from "react-icons/fa";
import './styles/MenuVertical.css'

const MenuVertical: React.FC = () => {
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
        { icon: <FaHome size={25} />, label: "AI", bg: "emerald" },
        { icon: <FaUserAlt size={25} />, label: "CHORD", bg: "amber" },
        { icon: <FaCog size={25} />, label: "SETTING", bg: "crimson" },
    ];

    return (
        <div className={`vertical-menu-container ${scrolled ? "scrolled" : ""}`}>
        {menuItems.map((item, index) => (
            <div
            key={index}
            className="menu-item d-flex gap-3 align-items-center position-relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
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
    );
};

export default MenuVertical;
