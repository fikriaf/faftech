import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CarouselModal from './CarouselModal';
import CircularTestimonials from './CircularTestimonial';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import myLogo from '../assets/logo.webp';
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
    const [infoRepo, setInfoRepo] = useState<any>([]);

    // Truncate title to max 20 characters
    const truncateTitle = (str: string, maxLength: number = 20) => {
        if (str.length <= maxLength) return str;
        return str.substring(0, maxLength) + '...';
    };

    const displayTitle = truncateTitle(title);

    useEffect(() => {
        const fetchRepo = async () => {
            try {
                const res = await fetch(`https://api.github.com/repos/fikriaf/${source}`);
                const data = await res.json();
                setInfoRepo(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchRepo();
            
    }, [source]);

    const updatedDate = new Date(infoRepo.updated_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <>
            <CarouselModal
            id="myModal"
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title={title}
            url_html={url}
            url_source={`https://github.com/fikriaf/${source}`}
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
                    <FaExternalLinkAlt size={22} className='text-light' />
                    </a>
                </div>
                <div className="card_content"
                    onClick={() => setShowModal(true)}
                >
                    <img src={img} alt="image" />
                </div>
                <div className="card_back" style={{background: "linear-gradient(135deg, #0d6efd, #093c9c)"}} />
                </div>
                <div className="data">
                <div className="img">
                    <img src={logo?? myLogo} alt="image" />
                </div>
                <div className='d-flex justify-content-between w-100'>
                    <div className="text">
                        <div className="text_m">{displayTitle}</div>
                        <div className="text_s">{category}</div>
                    </div>
                    <div className='d-flex flex-column'>
                        <div className='ms-auto text-white' style={{fontSize: "0.7rem"}}>Updated {updatedDate}</div>
                        <a href={`https://github.com/fikriaf/${source}`} target='_blank' className='btn btn-dark btn-sm py-0 px-1 m-0 ms-auto' style={{ width: "fit-content" }}><FaGithub /> Source</a>
                    </div>
                </div>
                </div>
                <div className='d-flex gap-1 tags-wrapper'>
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
        width: 100%;
        aspect-ratio: 16 / 9;
        height: auto;
        border-radius: 0.5rem;
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
        width: 2rem;
        height: 2rem;
        border-radius: 0.5rem;
        background-color: var(--primary);
        margin: 1rem;
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .2s ease-in-out;
        box-shadow: 2px 2px 6px rgba(0,0,0,.8);
    }

    .fullscreen_svg {
        width: 1rem;
        height: 1rem;
        fill: rgb(177, 176, 176);
        transition: .2s ease-in-out;
    }

    .card_back {
        position: absolute;
        width: 100%;
        aspect-ratio: 16 / 11.7;
        height: auto;
        border-radius: 0.5rem;
        margin-top: 1rem;
        margin-left: 0.7rem;
        transition: .2s ease-in-out;
        z-index: -1;
    }
    
    /* The Main Switch */

    .card_content {
        display: flex;
        width: 100%;
        aspect-ratio: 16 / 9;
        height: auto;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        overflow: hidden;
        position: relative;
    }
    
    .card_content img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }

    .main:hover .card_back {
        margin-top: -0.2rem;
        margin-left: 0;
        transform: scale(1.1);
        aspect-ratio: 16 / 14;
        height: auto;
        width: 100%;
        cursor: pointer;
    }

    .main:hover .fl {
        opacity: 1;
        cursor: pointer;
        margin-right: 0.5rem;
    }

    .data {
        display: flex;
        flex-direction: row;
        margin-top: 1rem;
    }

    .img {
        width: 3rem;
        background-color: #252525;
        border-radius: 0.5rem;
        overflow: hidden;
    }

    .img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
        font-size: 1rem;
    }

    .text_s {
        font-size: 0.8rem;
    }

    .btns {
        display: flex;
        gap: 0.5em;
        transition: .2s ease-in-out;
    }

    .tags-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        max-width: 100%;
        margin-top: 0.5em;
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
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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



    @media (max-width: 480px) {
        .main {
            transform-origin: left;
        }

        .card {
            width: 100%;
            height: 11.5em;
        }

        .card_back {
            width: 100%;
            height: 15em;
        }
            
        .main:hover .card_back {
            width: 100%;
            height: 17.5em;
        }

        .text_m {
            font-size: 1rem;
        }

        .text_s {
            font-size: 0.7em;
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
            height: 100%;
            width: 100%;
        }
    }`;

export default Card;
