import React from 'react';
import styled from 'styled-components';
import "./styles/Card.css"

interface CardProps {
    title?: string,
    description?: string,
    img?: string
    imgSource?: string,
    imgTools?: string
}

const Card: React.FC<CardProps> = ({title, description, img, imgSource, imgTools}) => {
    return (
        <StyledWrapper>
            <div className="main">
                <div className="w-100">
                    <img src={img} alt="demo" style={{
                        width: '100%',
                        aspectRatio: '16 / 9',
                        objectFit: 'cover',
                        display: 'block'
                    }} />
                </div>
                <div className="data ms-2 mt-2">
                    <div className="imgCard">
                        <img src={imgSource} alt="" />
                    </div>
                    <div className="text-dark d-flex align-items-center ms-2">
                        <div className="text_m">{title}</div>
                    </div>
                </div>
                <hr className='mx-2 my-2 text-dark' />
                <div className="text_s text-center px-1" style={{minHeight: "2rem"}}>{description}</div>
                <div className="btns">
                    <div className="tag bg-light">
                        <img className="tag_svg" src={imgTools} />
                        <span className="tag_text">22</span>
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
        margin-top: -5em;
        margin-left: 0.7em;
        transition: .2s ease-in-out;
        z-index: -1;
    }

    .main:hover .card_back {
        margin-top: -6.25em;
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
