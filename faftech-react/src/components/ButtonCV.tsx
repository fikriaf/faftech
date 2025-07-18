import React from 'react';
import styled from 'styled-components';
import { BiFile } from 'react-icons/bi';

const ButtonCV = () => {
return (
    <StyledWrapper>
    <div className="download-button bg-transparent">
        <div className='d-flex justify-content-center align-items-center gap-1 p-0 m-0'>
            <BiFile className='mb-1' />
            <span className='p-0 m-0'> CV</span>
        </div>

        {/* <div className="docs bg-white d-flex align-items-center">
            <span className='p-0 mt-1'>MY CV</span>
        </div> */}
        <a className="download btn-glare" href='https://raw.githubusercontent.com/fikriaf/fikriaf/main/sources/CV_Fikri%20Armia%20Fahmi.pdf'>
            <svg viewBox="0 0 24 24" width={24} height={24} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1={12} y1={15} x2={12} y2={3} />
            </svg>
        </a>
    </div>
    </StyledWrapper>
);
}

const StyledWrapper = styled.div`
.download-button {
    position: relative;
    height: 100%;
    width: 100%;
    color: white;
    font-weight: 600;
    cursor: pointer;
    z-index: 1;
    all: unset;
}

.download-button .docs {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    transform: skew(-20deg);
}

.docs span {
    transform: skew(20deg);
    font-weight: 600;
}
.download {
    position: absolute;
    top: -0.05rem;
    left: -0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 6rem;
    z-index: -1;
    color: black;
    transform: skew(-20deg) translateY(0%);
    background-color: #01e056;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    opacity: 0;
}

.download-button:hover .download {
    transform: translateY(117%);
    opacity: 1;
}

.download svg polyline,
.download svg line {
    animation: docs 1s infinite;
}

@keyframes docs {
    0% {
    transform: translateY(0%);
    }

    50% {
    transform: translateY(-15%);
    }

    100% {
    transform: translateY(0%);
    }
}`;

export default ButtonCV;
