import React from "react";
import CategoryGroup from "./CategoryGroup";
import githubLogo from "../assets/github-logo.png"
import image1 from "../assets/kuantum1.webp"
import Card from "./Card";
import "./styles/ListGithub.css"

const ListGithubSection: React.FC = () => {
    const githubItems = [
        {
        href: "https://github.com/fikriaf/CorePoint-v1",
        title: "CorePoint-v1",
        desc: "✅ Aplikasi Serbaguna Berbasis AI",
        },
        {
        href: "https://github.com/fikriaf/EncoAI",
        title: "EncoAI",
        desc: "🤖 Enco AI, Berbasis Neural Network (PyTorch)",
        },
        {
        href: "https://github.com/fikriaf/pySemut-AI",
        title: "pySemutAI",
        desc: "🐜 Program Simulasi Jejak Feromon Semut Berbasis Pygame",
        },
        {
        href: "https://github.com/fikriaf/Lacak-OmeTV",
        title: "LacakOmeTV",
        desc: "👀 Melacak Lokasi Target OmeTV, Scanning IP Address",
        },
        {
        href: "https://github.com/fikriaf/plag-check",
        title: "plag-check",
        desc: "📜 Program Ini Untuk Cek Plagiarisme",
        },
        {
        href: "https://github.com/fikriaf/Hand-Mouse",
        title: "Hand-Mouse",
        desc: "🖐️ Hand Tracking Mouse Controller",
        },
        {
        href: "https://github.com/fikriaf/LLM-API",
        title: "LLM-API",
        desc: "Script yang terhubung ke API Large Language Model",
        },
        {
        href: "https://github.com/fikriaf/Face-Detect",
        title: "Face-Detect",
        desc: "📷 Mendeteksi wajah secara real-time pakai CV2",
        },
        {
        href: "https://github.com/fikriaf/ai-driving-car",
        title: "AI-Driving-Car",
        desc: "🚗 Program Self-Driving Car, menggunakan algoritma NEAT",
        },
        {
        href: "https://github.com/fikriaf/scholary",
        title: "Scholary",
        desc: "🎓 Scholary: platform beasiswa untuk pelajar berbasis web",
        },
        {
        href: "https://github.com/fikriaf?tab=repositories",
        title: "LAINNYA",
        desc: "GO >",
        },
    ];

    return (
        <CategoryGroup className="kategori-1">
            {githubItems.map((item, idx) => (
                <a
                key={idx}
                className="cat-item d-block bg-light text-center rounded p-3"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", minHeight: "18.3rem" }}
                >
                    <Card title={item.title} description={item.desc} img={image1} imgSource={githubLogo} />
                </a>
            ))}
        </CategoryGroup>
    );
};

export default ListGithubSection;
