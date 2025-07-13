import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaBlogger, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';

const ButtonAnimated = () => {
return (
    <StyledWrapper>
    <ul className="example-2">
        <li className="icon-content">
            <a className='text-decoration-none' href="mailto:fikriarmia27@gmail.com" aria-label="gmail" data-social="gmail">
                <div className="filled" />
                <div className='d-flex align-items-center gap-1'><FaEnvelope size={20} /> Gmail</div>
            </a>
        </li>
        <li className="icon-content">
            <a className='text-decoration-none' target="_blank" href="https://osc.medcom.id/community/author/barayaroas@gmail.com" aria-label="Blogger" data-social="blogger">
                <div className="filled" />
                <div className='d-flex align-items-center gap-1'><FaBlogger size={20} /> Blogger</div>
            </a>
        </li>
        <li className="icon-content">
            <a className='text-decoration-none' target="_blank" href="https://linkedin.com/in/fikri-armia-fahmi-b373b3288" aria-label="linkedin" data-social="linkedin">
                <div className="filled" />
                <div className='d-flex align-items-center gap-1'><FaLinkedin size={20} /> LinkedIn</div>
            </a>
        </li>
        <li className="icon-content">
            <a className='text-decoration-none' target="_blank" href="https://www.instagram.com/fikriaf27" aria-label="Instagram" data-social="Instagram">
                <div className="filled" />
                <div className='d-flex align-items-center gap-1'><FaInstagram size={20} /> Instagram</div>
            </a>
        </li>
        <li className="icon-content">
            <a className='text-decoration-none' target="_blank" href="https://discord.gg/fighterfire0346" aria-label="Discord" data-social="Discord">
                <div className="filled" />
                <div className='d-flex align-items-center gap-1'><FaDiscord size={20} /> Discord</div>
            </a>
        </li>
    </ul>
    </StyledWrapper>
);
}

const StyledWrapper = styled.div`
ul {
    list-style: none;
}

.example-2 {
    display: flex;
    justify-content: center;
    align-items: center;
}
.example-2 .icon-content {
    margin: 0 5px;
    position: relative;
}
.example-2 .icon-content .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 6px 10px;
    border-radius: 15px;
    opacity: 0;
    visibility: hidden;
    font-size: 0.5rem;
    transition: all 0.3s ease;
}
.example-2 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -2rem;
}

.example-2 .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 2.5rem;
    padding: 0 0.8rem;
    border-radius: 0.5rem;
    background-color: #ffff;
    transition: all 0.3s ease-in-out;
}


.example-2 .icon-content a[data-social="gmail"] {
    color: #bd081c;
}
.example-2 .icon-content a[data-social="blogger"] {
    color: var(--warning);
}
.example-2 .icon-content a[data-social="linkedin"] {
    color: var(--primary);
}
.example-2 .icon-content a[data-social="Instagram"] {
    color: var(--danger);
}
.example-2 .icon-content a[data-social="Discord"] {
    color: var(--secondary);
}

.example-2 .icon-content a:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 50%);
}
.example-2 .icon-content a div {
    position: relative;
    z-index: 1;
}
.example-2 .icon-content a:hover {
    color: white;
}
.example-2 .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover .filled {
    height: 100%;
}

.example-2 .icon-content a[data-social="gmail"] .filled,
.example-2 .icon-content a[data-social="gmail"] ~ .tooltip {
    background-color: #bd081c;
}
.example-2 .icon-content a[data-social="blogger"] .filled,
.example-2 .icon-content a[data-social="blogger"] ~ .tooltip {
    background-color: var(--warning);
}
.example-2 .icon-content a[data-social="linkedin"] .filled,
.example-2 .icon-content a[data-social="linkedin"] ~ .tooltip {
    background-color: var(--primary);
}
.example-2 .icon-content a[data-social="Instagram"] .filled,
.example-2 .icon-content a[data-social="Instagram"] ~ .tooltip {
    background-color: var(--danger);
}
.example-2 .icon-content a[data-social="Discord"] .filled,
.example-2 .icon-content a[data-social="Discord"] ~ .tooltip {
    background-color: var(--secondary);
}`;

export default ButtonAnimated;
