import React, { useState } from 'react';
import styled from 'styled-components';
import CarouselModal from './CarouselModal';
import CircularTestimonials from './CircularTestimonial';
import { FaExternalLinkAlt } from "react-icons/fa";
export interface CardProps {
    title: string;
    category: string;
    tags: any[];
    img: string;
    url: string;
    logo: string;
    source: string;
    content?: any[0];
}

const Card: React.FC<CardProps> = ({title, category, tags, img, url, logo, source, content}) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <CarouselModal
            id="myModal"
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title={title}
            url_html={url}
            url_source={source}
            >
                <CircularTestimonials
                    testimonials={content || []}
                    autoplay={false}
                    colors={{
                        name: "#000000ff",
                        designation: "#000000ff",
                        testimony: "#000000ff",
                        arrowBackground: "#0582CA",
                        arrowForeground: "#141414",
                        arrowHoverBackground: "#f7f7ff",
                    }}
                    fontSizes={{
                        name: "2rem",
                        designation: "1.5rem",
                        quote: "1rem",
                    }}
                />
            </CarouselModal>

            <StyledWrapper>
            <div className="main">
                <div className="card">
                <div className="fl">
                    <a
                    className="fullscreen"
                    href={url} target="_blank" 
                    >
                    <FaExternalLinkAlt className='text-light' />
                    </a>
                </div>
                <div className="card_content"
                    onClick={() => setShowModal(true)}
                >
                    <img src={img} alt="image" />
                </div>
                <div className="card_back" />
                </div>
                <div className="data">
                <div className="img">
                    <img src={logo} alt="image" />
                </div>
                <div className="text">
                    <div className="text_m">{title}</div>
                    <div className="text_s">{category}</div>
                </div>
                </div>
                <div className='d-flex gap-1'>
                    {tags?.map((tag, index) => (
                        <div className="btns">
                            <div className="tags">
                                <span className="tags_text">{tag}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </StyledWrapper>
        </>
    );
}

const StyledWrapper = styled.div`
    /* CodePen Card */

    .card {
        width: 15em;
        height: auto;
        border-radius: 7px;
        cursor: pointer;
    }

    .fl {
        position: absolute;
        display: flex;
        justify-content: flex-end;
        opacity: 0;
        top: 0;
        right: 0;
        transition: .2s ease-in-out;
        z-index: 2;
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

    .img img {
        width: 100%;
        height: 100%;
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

    .tags {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.4em;
        padding: 0 0.3rem;
        border-radius: 4px;
        margin-top: -0.5em;
        opacity: 0;
        background-color: #444857;
        transition: .2s ease-in-out;
    }

    .tags_text {
        font-family: Heebo;
        font-size: 0.8em;
        color: white;
    }

    .tags_svg {
        height: 12px;
        fill: white;
    }

    .tags:hover {
        background-color: #5A5F73;
        cursor: pointer;
    }

    .main:hover .tags {
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
        width: 100%;
        margin-top: -3.5em;
        height: 13em;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        overflow: hidden;
        position: relative;
    }
    
    .card_content img {
        position: absolute;
        top: 4rem;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }

    @media (max-width: 480px) {
        .main {
            transform: scale(0.6);
            transform-origin: left;
        }

        .card {
            width: 17em;
            height: 11.5em;
        }

        .card_back {
            width: 17em;
            height: 15em;
        }
            
        .main:hover .card_back {
            height: 17.5em;
        }

        .fullscreen {
            width: 2em;
            height: 2em;
        }

        .fullscreen_svg {
            width: 20px;
            height: 20px;
        }

        .text_m {
            font-size: 0.9em;
        }

        .text_s {
            font-size: 0.7em;
        }

        .img {
            width: 2.5em;
            height: 2.5em;
        }

        .tags {
            height: 1.8em;
            padding: 0 0.5rem;
        }

        .tags_svg {
            height: 16px;
        }

        .tags_text {
            font-size: 0.95em;
        }

        .card_content {
            margin-top: -4em;
            height: 15.5em;;
        }
    }`;

export default Card;
