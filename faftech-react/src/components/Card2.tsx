import React from 'react';
import styled from 'styled-components';
export interface CardProps {
    title: string;
    category: string;
    tags: any[];
    img: string;
    url: string;
    logo: string;
}

const Card: React.FC<CardProps> = ({title, category, tags, img, url, logo}) => {
return (
    <StyledWrapper>
    <div className="main">
        <div className="card">
        <div className="fl">
            <div className="fullscreen">
            <svg viewBox="0 0 100 100" className="fullscreen_svg"><path d="M3.563-.004a3.573 3.573 0 0 0-3.527 4.09l-.004-.02v28.141c0 1.973 1.602 3.57 3.57 3.57s3.57-1.598 3.57-3.57V12.218v.004l22.461 22.461a3.571 3.571 0 0 0 6.093-2.527c0-.988-.398-1.879-1.047-2.523L12.218 7.172h19.989c1.973 0 3.57-1.602 3.57-3.57s-1.598-3.57-3.57-3.57H4.035a3.008 3.008 0 0 0-.473-.035zM96.333 0l-.398.035.02-.004h-28.16a3.569 3.569 0 0 0-3.57 3.57 3.569 3.569 0 0 0 3.57 3.57h19.989L65.323 29.632a3.555 3.555 0 0 0-1.047 2.523 3.571 3.571 0 0 0 6.093 2.527L92.83 12.221v19.985a3.569 3.569 0 0 0 3.57 3.57 3.569 3.569 0 0 0 3.57-3.57V4.034v.004a3.569 3.569 0 0 0-3.539-4.043l-.105.004zM3.548 64.23A3.573 3.573 0 0 0 .029 67.8v28.626-.004l.016.305-.004-.016.004.059v-.012l.039.289-.004-.023.023.121-.004-.023c.074.348.191.656.34.938l-.008-.02.055.098-.008-.02.148.242-.008-.012.055.082-.008-.012c.199.285.43.531.688.742l.008.008.031.027.004.004c.582.461 1.32.742 2.121.762h.004l.078.004h28.61a3.569 3.569 0 0 0 3.57-3.57 3.569 3.569 0 0 0-3.57-3.57H12.224l22.461-22.461a3.569 3.569 0 0 0-2.492-6.125l-.105.004h.008a3.562 3.562 0 0 0-2.453 1.074L7.182 87.778V67.793a3.571 3.571 0 0 0-3.57-3.57h-.055.004zm92.805 0a3.573 3.573 0 0 0-3.519 3.57v19.993-.004L70.373 65.328a3.553 3.553 0 0 0-2.559-1.082h-.004a3.573 3.573 0 0 0-3.566 3.57c0 1.004.414 1.91 1.082 2.555l22.461 22.461H67.802a3.57 3.57 0 1 0 0 7.14h28.606c.375 0 .742-.059 1.082-.168l-.023.008.027-.012-.02.008.352-.129-.023.008.039-.02-.02.008.32-.156-.02.008.023-.016-.008.008c.184-.102.34-.207.488-.32l-.008.008.137-.113-.008.004.223-.211.008-.008c.156-.164.301-.34.422-.535l.008-.016-.008.016.008-.02.164-.285.008-.02-.008.016.008-.02c.098-.188.184-.406.246-.633l.008-.023-.004.008.008-.023a3.44 3.44 0 0 0 .121-.852v-.004l.004-.078V67.804a3.569 3.569 0 0 0-3.57-3.57h-.055.004z" /></svg>
            </div>
        </div>
        <a className="card_content" href={url} target="_blank" >
            <img src={img} alt="image" />
        </a>
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
        font-family: Montserrat;
        font-size: 0.8em;
        color: white;
    }

    .tags_svg {
        width: 12px;
        height: 12px;
        fill: white;
    }

    .tags:hover {
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

        .tags,
        .comments,
        .views {
            width: 3em;
            height: 1.8em;
        }

        .tags_svg,
        .comments_svg,
        .views_svg {
            width: 16px;
            height: 16px;
        }

        .tags_text,
        .comments_text,
        .views_text {
            font-size: 0.95em;
        }

        .card_content {
            margin-top: -4em;
            height: 15.5em;;
        }
    }`;

export default Card;
