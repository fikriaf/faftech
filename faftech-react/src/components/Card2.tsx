import React from 'react';
import styled from 'styled-components';

const Card = () => {
return (
    <StyledWrapper>
    <div className="main">
        <div className="card">
        <div className="fl">
            <div className="fullscreen">
            <svg viewBox="0 0 100 100" className="fullscreen_svg"><path d="M3.563-.004a3.573 3.573 0 0 0-3.527 4.09l-.004-.02v28.141c0 1.973 1.602 3.57 3.57 3.57s3.57-1.598 3.57-3.57V12.218v.004l22.461 22.461a3.571 3.571 0 0 0 6.093-2.527c0-.988-.398-1.879-1.047-2.523L12.218 7.172h19.989c1.973 0 3.57-1.602 3.57-3.57s-1.598-3.57-3.57-3.57H4.035a3.008 3.008 0 0 0-.473-.035zM96.333 0l-.398.035.02-.004h-28.16a3.569 3.569 0 0 0-3.57 3.57 3.569 3.569 0 0 0 3.57 3.57h19.989L65.323 29.632a3.555 3.555 0 0 0-1.047 2.523 3.571 3.571 0 0 0 6.093 2.527L92.83 12.221v19.985a3.569 3.569 0 0 0 3.57 3.57 3.569 3.569 0 0 0 3.57-3.57V4.034v.004a3.569 3.569 0 0 0-3.539-4.043l-.105.004zM3.548 64.23A3.573 3.573 0 0 0 .029 67.8v28.626-.004l.016.305-.004-.016.004.059v-.012l.039.289-.004-.023.023.121-.004-.023c.074.348.191.656.34.938l-.008-.02.055.098-.008-.02.148.242-.008-.012.055.082-.008-.012c.199.285.43.531.688.742l.008.008.031.027.004.004c.582.461 1.32.742 2.121.762h.004l.078.004h28.61a3.569 3.569 0 0 0 3.57-3.57 3.569 3.569 0 0 0-3.57-3.57H12.224l22.461-22.461a3.569 3.569 0 0 0-2.492-6.125l-.105.004h.008a3.562 3.562 0 0 0-2.453 1.074L7.182 87.778V67.793a3.571 3.571 0 0 0-3.57-3.57h-.055.004zm92.805 0a3.573 3.573 0 0 0-3.519 3.57v19.993-.004L70.373 65.328a3.553 3.553 0 0 0-2.559-1.082h-.004a3.573 3.573 0 0 0-3.566 3.57c0 1.004.414 1.91 1.082 2.555l22.461 22.461H67.802a3.57 3.57 0 1 0 0 7.14h28.606c.375 0 .742-.059 1.082-.168l-.023.008.027-.012-.02.008.352-.129-.023.008.039-.02-.02.008.32-.156-.02.008.023-.016-.008.008c.184-.102.34-.207.488-.32l-.008.008.137-.113-.008.004.223-.211.008-.008c.156-.164.301-.34.422-.535l.008-.016-.008.016.008-.02.164-.285.008-.02-.008.016.008-.02c.098-.188.184-.406.246-.633l.008-.023-.004.008.008-.023a3.44 3.44 0 0 0 .121-.852v-.004l.004-.078V67.804a3.569 3.569 0 0 0-3.57-3.57h-.055.004z" /></svg>
            </div>
        </div>
        <div className="card_content">

        </div>
        <div className="card_back" />
        </div>
        <div className="data">
        <div className="img">
            
        </div>
        <div className="text">
            <div className="text_m">CSS Theme Switch</div>
            <div className="text_s">Praashoo7</div>
        </div>
        </div>
        <div className="btns">
        <div className="likes">
            <svg className="likes_svg" viewBox="-2 0 105 92"><path d="M85.24 2.67C72.29-3.08 55.75 2.67 50 14.9 44.25 2 27-3.8 14.76 2.67 1.1 9.14-5.37 25 5.42 44.38 13.33 58 27 68.11 50 86.81 73.73 68.11 87.39 58 94.58 44.38c10.79-18.7 4.32-35.24-9.34-41.71Z" /></svg><span className="likes_text">22</span>
        </div>
        <div className="comments">
            <svg className="comments_svg" viewBox="-405.9 238 56.3 54.8" ><path d="M-391 291.4c0 1.5 1.2 1.7 1.9 1.2 1.8-1.6 15.9-14.6 15.9-14.6h19.3c3.8 0 4.4-.8 4.4-4.5v-31.1c0-3.7-.8-4.5-4.4-4.5h-47.4c-3.6 0-4.4.9-4.4 4.5v31.1c0 3.7.7 4.4 4.4 4.4h10.4v13.5z" /></svg><span className="comments_text">12</span>
        </div>
        <div className="views">
            <svg className="views_svg" viewBox="0 0 30.5 16.5" ><path d="M15.3 0C8.9 0 3.3 3.3 0 8.3c3.3 5 8.9 8.3 15.3 8.3s12-3.3 15.3-8.3C27.3 3.3 21.7 0 15.3 0zm0 14.5c-3.4 0-6.2-2.8-6.2-6.2C9 4.8 11.8 2 15.3 2c3.4 0 6.2 2.8 6.2 6.2 0 3.5-2.8 6.3-6.2 6.3z" /></svg><span className="views_text">332</span>
        </div>
        </div>
    </div>
    </StyledWrapper>
);
}

const StyledWrapper = styled.div`
    /* CodePen Card */

    .card {
        width: 15em;
        height: 10em;
        background-color: #252525;
        border-radius: 7px;
        cursor: pointer;
    }

    .fl {
        display: flex;
        justify-content: flex-end;
        opacity: 0;
        transition: .2s ease-in-out;
    }

    .fl:hover .fullscreen {
        scale: 1.2;
    }

    .fl:hover .fullscreen_svg {
        fill: white;
    }

    .fullscreen {
        width: 1.5em;
        height: 1.5em;
        border-radius: 5px;
        background-color: #727890;
        margin: 1em;
        margin-right: 0.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .2s ease-in-out;
        box-shadow: 2px 2px 6px rgba(0,0,0,.4);
    }

    .fullscreen_svg {
        width: 15px;
        height: 15px;
        fill: rgb(177, 176, 176);
        transition: .2s ease-in-out;
    }

    .card_back {
        position: absolute;
        width: 15em;
        height: 13em;
        background-color: rgba(30, 31, 38, 0.575);
        border-radius: 7px;
        margin-top: 1rem;
        margin-left: 0.7em;
        transition: .2s ease-in-out;
        z-index: -1;
    }

    .main:hover .card_back {
        margin-top: -0.2rem;
        margin-left: 0em;
        scale: 1.1;
        height: 15.25em;
        cursor: pointer;
    }

    .main:hover .fl {
        opacity: 1;
        cursor: pointer;
        margin-right: 0.5em;
    }

    .data {
        display: flex;
        flex-direction: row;
        margin-top: 1em;
    }

    .img {
        width: 2.25em;
        height: 2.25em;
        background-color: #252525;
        border-radius: 5px;
        overflow: hidden;
    }

    .text {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-left: 0.5em;
        font-family: Montserrat;
        color: white;
    }

    .text_m {
        font-weight: bold;
        font-size: 0.9em;
    }

    .text_s {
        font-size: 0.7em;
    }

    .btns {
        display: flex;
        gap: 0.5em;
        transition: .2s ease-in-out;
    }

    .likes {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5em;
        height: 1.4em;
        border-radius: 4px;
        margin-top: -0.5em;
        opacity: 0;
        background-color: #444857;
        transition: .2s ease-in-out;
    }

    .likes_text {
        font-family: Montserrat;
        font-size: 0.8em;
        margin-left: 0.25em;
        color: white;
    }

    .likes_svg {
        width: 12px;
        height: 12px;
        fill: white;
    }

    .likes:hover {
        background-color: #5A5F73;
        cursor: pointer;
    }

    .comments {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5em;
        height: 1.4em;
        border-radius: 4px;
        margin-top: -0.5em;
        opacity: 0;
        background-color: #444857;
        transition: .24s ease-in-out;
    }

    .comments_text {
        font-family: Montserrat;
        font-size: 0.8em;
        margin-left: 0.25em;
        color: white;
    }

    .comments_svg {
        width: 12px;
        height: 12px;
        fill: white;
    }

    .comments:hover {
        background-color: #5A5F73;
        cursor: pointer;
    }

    .views {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3em;
        height: 1.4em;
        border-radius: 4px;
        margin-top: -0.5em;
        opacity: 0;
        background-color: #444857;
        transition: .28s ease-in-out;
    }

    .views_text {
        font-family: Montserrat;
        font-size: 0.8em;
        margin-left: 0.25em;
        color: white;
    }

    .views_svg {
        width: 12px;
        height: 12px;
        fill: white;
    }

    .views:hover {
        background-color: #5A5F73;
        cursor: pointer;
    }

    .main:hover .likes {
        margin-top: 0.5em;
        opacity: 1;
    }

    .main:hover .comments {
        margin-top: 0.5em;
        opacity: 1;
    }

    .main:hover .views {
        margin-top: 0.5em;
        opacity: 1;
    }



    /* The Main Switch */

    .card_content {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* The switch - the box around the slider */
    .switch_738 {
        font-size: 13px;
        position: relative;
        display: inline-block;
        width: 1.2em;
        height: 3.3em;
    }

    /* Hide default HTML checkbox */
    .switch_738 .chk_738 {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider_738 {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 5px;
    }

    .slider_738:before {
        position: absolute;
        content: "";
        height: .5em;
        width: 2.4em;
        border-radius: 5px;
        left: -0.6em;
        top: 0.2em;
        background-color: white;
        box-shadow: 0 6px 7px rgba(0,0,0,0.3);
        transition: .4s;
    }

    .slider_738:before, .slider_738:after {
        content: "";
        display: block;
    }

    .slider_738:after {
        background: linear-gradient(transparent 50%, rgba(255, 255, 255, 0.15) 0) 0 50% / 50% 100%,
            repeating-linear-gradient(90deg,rgb(255, 255, 255) 0,rgb(255, 255, 255),rgb(255, 255, 255) 20%,rgb(255, 255, 255) 20%,rgb(255, 255, 255) 40%) 0 50% / 50% 100%,
            radial-gradient(circle at 50% 50%,rgb(255, 255, 255) 25%, transparent 26%);
        background-repeat: no-repeat;
        border: 0.25em solid transparent;
        border-left: 0.4em solid #ffffff;
        border-right: 0 solid transparent;
        transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
        transform: translateX(-22.5%) rotate(90deg);
        transform-origin: 25% 50%;
        position: relative;
        top: 0.5em;
        left: 0.55em;
        width: 2em;
        height: 1em;
        box-sizing: border-box;
    }

    .chk_738:checked + .slider_738 {
        background-color: limegreen;
    }

    .chk_738:focus + .slider_738 {
        box-shadow: 0 0 1px limegreen;
    }

    .chk_738:checked + .slider_738:before {
        transform: translateY(2.3em);
    }

    .chk_738:checked + .slider_738:after {
        transform: rotateZ(90deg) rotateY(180deg) translateY(0.45em) translateX(-1.4em);
    }`;

export default Card;
