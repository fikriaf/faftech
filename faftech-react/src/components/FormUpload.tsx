import React from 'react';
import styled from 'styled-components';
import { FaUpload, FaMusic } from "react-icons/fa";

const FormUpload = () => {
return (
    <StyledWrapper>
        <label htmlFor="file" className="custum-file-upload">
            <div className="icon">
                <FaUpload size={40} className="me-1" />
                <FaMusic size={40} />
            </div>
            <div className="text">
                <span>Click to upload music (.mp3)</span>
            </div>
            <input id="file" type="file" />
        </label>
    </StyledWrapper>
);
}

const StyledWrapper = styled.div`
.custum-file-upload {
    height: 200px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    gap: 20px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: 2px dashed #e8e8e8;
    background-color: #212121;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0px 48px 35px -48px #e8e8e8;
}

.custum-file-upload .icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.custum-file-upload .icon svg {
    height: 80px;
    fill: #e8e8e8;
}

.custum-file-upload .text {
    display: flex;
    align-items: center;
    justify-content: center;
}

.custum-file-upload .text span {
    font-weight: 400;
    color: #e8e8e8;
}

.custum-file-upload input {
    display: none;
}`;

export default FormUpload;
