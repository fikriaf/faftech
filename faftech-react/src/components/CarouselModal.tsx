import React, { useEffect, useRef } from "react";
import "./styles/CarouselModal.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';

interface CarouselModalProps {
    id: string;
    title?: string;
    url_html?: string;
    url_source?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const CarouselModal: React.FC<CarouselModalProps> = ({
    id,
    title,
    url_html,
    url_source,
    children,
    footer,
    isOpen,
    onClose,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
        document.body.style.overflow = "hidden";
        } else {
        document.body.style.overflow = "";
        }
    }, [isOpen]);

    return isOpen ? (
        <div className="carousel-modal-backdrop" onClick={onClose}>
        <div
            className="carousel-modal-dialog mx-3"
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
            id={id}
        >
            <div className="carousel-modal-content">
            {title && (
                <div className="carousel-modal-header d-flex align-items-center justify-content-between">
                    <h5 className="carousel-modal-title fw-bold">{title}</h5>
                    <div className="d-flex gap-3">
                        <a className="btn btn-dark " href={url_source} target="_blank">
                            <FaGithub />  Source
                        </a>
                        <a className="btn btn-outline-primary" href={url_html} target="_blank"><FaExternalLinkAlt /></a>
                        <button
                            className="carousel-modal-close"
                            onClick={onClose}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
            <div className="carousel-modal-body">{children}</div>
            {footer && <div className="carousel-modal-footer">{footer}</div>}
            </div>
        </div>
        </div>
    ) : null;
};

export default CarouselModal;
