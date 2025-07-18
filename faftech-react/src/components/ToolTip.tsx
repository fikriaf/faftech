import React from 'react';
import styled from 'styled-components';

interface TooltipProps {
    children: React.ReactNode;
    text: string;
}
const ToolTip: React.FC<TooltipProps> = ({children, text}) => {
    return (
        <StyledWrapper>
        <div className="item-hints">
            <div className="hint" data-position={4}>
            <span className="hint-radius" />
            {children}
            <div className="hint-content do--split-children">
                <p>{text}</p>
            </div>
            </div>
        </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .item-hints {
    --purple: #720c8f;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
  }
  .item-hints .hint {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-hints .hint-dot {
    z-index: 3;
    border: 1px solid #ffe4e4;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    -webkit-transform: translate(-0%, -0%) scale(0.95);
    transform: translate(-0%, -0%) scale(0.95);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .item-hints .hint-radius {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -125px 0 0 -125px;
    opacity: 0;
    visibility: hidden;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  .item-hints .hint[data-position="1"] .hint-content {
    top: 85px;
    left: 50%;
    margin-left: 56px;
  }
  .item-hints .hint-content {
    width: 250px;
    position: absolute;
    z-index: 5;
    padding: 35px 0;
    opacity: 0;
    transition: opacity 0.7s ease, visibility 0.7s ease;
    color: var(--dark);
    visibility: hidden;
    pointer-events: none;
    font-family: Heebo;
    font-size: 1rem;
    letter-spacing: 1px
  }
  .item-hints .hint:hover .hint-content {
    position: absolute;
    z-index: 5;
    padding: 35px 0;
    opacity: 1;
    -webkit-transition: opacity 0.7s ease, visibility 0.7s ease;
    transition: opacity 0.7s ease, visibility 0.7s ease;
    color: var(--dark);
    visibility: visible;
    pointer-events: none;
    color: var(--dark);
  }
  .item-hints .hint-content::before {
    width: 0px;
    bottom: 29px;
    left: 0;
    content: "";
    background-color: var(--dark);
    height: 1px;
    position: absolute;
    transition: width 0.4s;
  }
  .item-hints .hint:hover .hint-content::before {
    width: 180px;
    transition: width 0.4s;
  }
  .item-hints .hint-content::after {
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transform: rotate(-225deg);
    transform: rotate(-225deg);
    bottom: 29px;
    left: 0;
    width: 80px;
    content: "";
    background-color: var(--dark);
    height: 1px;
    position: absolute;
    opacity: 1;
    -webkit-transition: opacity 0.5s ease;
    transition: opacity 0.5s ease;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }
    .item-hints .hint:hover .hint-content::after {
        opacity: 1;
        visibility: visible;
    }
    .item-hints .hint[data-position="4"] .hint-content {
        top: 100%;         /* posisinya di bawah elemen trigger */
        left: -13.5rem;           /* mulai dari pojok kiri */
        margin-top: 12px;  /* beri jarak dari bawah tombol */
    }

    .item-hints .hint[data-position="4"] .hint-content::before {
        right: 0;
        top: 1.8rem;
        width: 85%; /* langsung set ukuran final */
        height: 1px;
        background-color: var(--dark);
        position: absolute;
        content: "";
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.4s ease 0.2s;
    }

    .item-hints .hint[data-position="4"]:hover .hint-content::before {
        transform: scaleX(1);
    }


    .item-hints .hint[data-position="4"] .hint-content::after {
        left: 100%;
        bottom: auto;
        top: -0.5rem;
        width: 53px;
        height: 1px;
        background-color: var(--dark);
        position: absolute;
        content: "";
        transform: rotate(135deg); /* ubah arah garis */
        transform-origin: left center;
        opacity: 0;
        transition: opacity 0.5s ease;
    }

    .item-hints .hint[data-position="4"]:hover .hint-content::after {
        opacity: 1;
    }
`;

export default ToolTip;
