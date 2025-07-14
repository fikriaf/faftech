import React from 'react';
import styled from 'styled-components';
import "./styles/Card.css"
import logoGithub from "../assets/github-logo.png"

interface CardProps {
    title?: string
    description?: string
    img?: string
    tags?: any[]
    imgSource?: string
    imgTools?: string
    index?: number;
}

const Card: React.FC<CardProps> = ({title, description, img, tags, imgSource, imgTools}) => {
    return (
        <StyledWrapper>
            <div className="main" style={{minHeight: "15rem", fontFamily: "Heebo"}}>
                <div className="w-100">
                    <img
                    src={img}
                    alt="demo"
                    style={{
                        width: '100%',
                        aspectRatio: '16 / 9',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                    onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = logoGithub;
                    }}
                    />
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
                <div className="text_s text-center px-1">{description}</div>
                <div className='row g-1 p-0 m-0'>
                    {tags?.map((tag, index) => (
                        <div className="col-md-4 col-3 m-0">
                            <button className="tag btn btn-secondary w-100 p-0">
                                <span className="text-light tag_text">{tag}</span>
                            </button>
                        </div>
                    ))}
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
        font-family: Heebo;
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

    `;

export default Card;
