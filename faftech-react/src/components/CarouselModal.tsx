import React, { useEffect, useRef } from "react";
import "./styles/CarouselModal.css";

interface CarouselModalProps {
id: string;
title?: string;
children: React.ReactNode;
footer?: React.ReactNode;
isOpen: boolean;
onClose: () => void;
}

const CarouselModal: React.FC<CarouselModalProps> = ({
id,
title,
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
        className="carousel-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        id={id}
    >
        <div className="carousel-modal-content">
        {title && (
            <div className="carousel-modal-header d-flex align-items-center justify-content-between">
                <h5 className="carousel-modal-title">{title}</h5>
                <button
                    className="carousel-modal-close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
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
