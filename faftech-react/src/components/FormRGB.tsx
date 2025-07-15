import React from 'react';
import styled from 'styled-components';
import ButtonGlow from './ButtonGlow';
import InputWrapper from './InputWrapper';

const FormRGB = () => {
return (
    <StyledWrapper>
    <div className="form-container h-100">
        <form className="form">
            <div className="">
                <label htmlFor="email">Email</label>
                <InputWrapper placeholder='Type Here' type='email' />
            </div>
            <div className="form-group">
                <label htmlFor="textarea">Type below for question/suggestion</label>
                <textarea name="textarea" id="textarea" rows={10} cols={50} required defaultValue={""} />
            </div>
            <ButtonGlow text='Submit' />
        </form>
    </div>
    </StyledWrapper>
);
}

const StyledWrapper = styled.div`
.form-container {
    width: 100%;
    background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
}

.form-container button:active {
    scale: 0.95;
}

.form-container .form {
    display: flex;
    flex-direction: column;
    justify: space-between;
    gap: 2rem;
}

.form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
}

.form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
}

.form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: #fff;
    height: 96px;
    border: 1px solid #414141;
    background-color: transparent;
    font-family: inherit;
}

.form-container .form-group input::placeholder {
    opacity: 0.5;
}

.form-container .form-group input:focus {
    outline: none;
    border-color: var(--primary);
}

.form-container .form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
}

.form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #717171;
    font-weight: 600;
    width: 40%;
    background: #313131;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
}

.form-container .form-submit-btn:hover {
    background-color: #fff;
    border-color: #fff;
}`;

export default FormRGB;
