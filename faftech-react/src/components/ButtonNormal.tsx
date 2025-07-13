import React from "react";
import { FaLinkedin, FaInstagram, FaDiscord, FaEnvelope, FaBlogger } from "react-icons/fa";

const ButtonNormal: React.FC = () => {
return (
    <div className="d-flex gap-2 flex-wrap">
    <a
        href="mailto:fikriarmia27@gmail.com"
        className="btn btn-dark"
        title="Email"
    >
        <FaEnvelope /> Email
    </a>
    <a
        href="https://osc.medcom.id/community/author/barayaroas@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-warning text-dark"
        title="Blogger"
    >
        <FaBlogger /> Blogger
    </a>
    <a
        href="https://linkedin.com/in/fikri-armia-fahmi-b373b3288"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
        title="LinkedIn"
    >
        <FaLinkedin /> LinkedIn
    </a>
    <a
        href="https://www.instagram.com/fikriaf27"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-danger"
        title="Instagram"
    >
        <FaInstagram /> Instagram
    </a>
    <a
        href="https://discord.gg/fighterfire0346"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary"
        title="Discord"
    >
        <FaDiscord /> Discord
    </a>
    
    </div>
);
};

export default ButtonNormal;
