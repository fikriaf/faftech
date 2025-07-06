import React, { useEffect, useRef, useState } from "react";

interface DropTextProps {
    text: string;
    className?: string;
    style?: React.CSSProperties;
}

const DropText: React.FC<DropTextProps> = ({ text, className = "", style }) => {
    const containerRef = useRef<HTMLParagraphElement>(null);
    const lastScrollY = useRef<number>(0);
    const [visibleKey, setVisibleKey] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            const currentScrollY = window.scrollY;

            const isScrollingDown = currentScrollY > lastScrollY.current;
            lastScrollY.current = currentScrollY;

            if (entry.isIntersecting && isScrollingDown) {
            setVisibleKey(prev => prev + 1);
            }
        },
        { threshold: 0.01 }
        );

        const ref = containerRef.current;
        if (ref) observer.observe(ref);

        return () => {
        if (ref) observer.unobserve(ref);
        };
    }, []);

    return (
        <p ref={containerRef} className={className} style={{ ...style, textAlign: 'justify', wordBreak: 'break-word' }}>
        {text.split("").map((char, i) => (
            <span
            key={`${visibleKey}-${i}`}
            className="drop-char"
            style={{ animationDelay: `${i * 0.01}s` }}
            >
            {char}
            </span>
        ))}
        </p>
    );
};

export default DropText;
