import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    text?: string;
}

const ButtonGlow: React.FC<ButtonProps> = ({text = 'Button'}) => {
return (
    <StyledWrapper>
    <button id="btn">{text}</button>
    </StyledWrapper>
);
}

const StyledWrapper = styled.div`
button {
    padding: 10px 20px;
    text-transform: uppercase;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 500;
    color: #ffffff80;
    text-shadow: none;
    background: transparent;
    cursor: pointer;
    box-shadow: transparent;
    border: 1px solid #ffffff80;
    transition: 0.5s ease;
    user-select: none;
}

#btn:hover,
:focus {
    color: #ffffff;
    background: #008cff;
    border: 1px solid #008cff;
    text-shadow: 0 0 2px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 2px #008cff, 0 0 10px #008cff, 0 0 10px #008cff,
    0 0 20px #008cff;
}`;

export default ButtonGlow;
