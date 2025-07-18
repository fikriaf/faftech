import React from "react";

const AnimateMusic = () => {
    return (
        <svg width="34" height="100%" viewBox="0 0 50 40" className="mx-1" xmlns="http://www.w3.org/2000/svg" fill="var(--primary)">
            <rect x="0" width="8" y="10" height="30">
                <animate attributeName="y" values="20; 0; 20" dur="1s" repeatCount="indefinite" />
                <animate attributeName="height" values="30; 40; 30" dur="1s" repeatCount="indefinite" />
            </rect>
            <rect x="12" width="9" y="10" height="30">
                <animate attributeName="y" values="20; 5; 20" dur="0.8s" repeatCount="indefinite" />
                <animate attributeName="height" values="30; 35; 30" dur="0.8s" repeatCount="indefinite" />
            </rect>
            <rect x="24" width="8" y="10" height="30">
                <animate attributeName="y" values="20; 7; 20" dur="0.9s" repeatCount="indefinite" />
                <animate attributeName="height" values="30; 33; 30" dur="0.9s" repeatCount="indefinite" />
            </rect>
            <rect x="36" width="9" y="10" height="30">
                <animate attributeName="y" values="20; 3; 20" dur="1.1s" repeatCount="indefinite" />
                <animate attributeName="height" values="30; 37; 30" dur="1.1s" repeatCount="indefinite" />
            </rect>
            {/* <rect x="48" width="8" y="10" height="30">
                <animate attributeName="y" values="20; 3; 20" dur="1.2s" repeatCount="indefinite" />
                <animate attributeName="height" values="30; 37; 30" dur="1.2s" repeatCount="indefinite" />
            </rect> */}
        </svg>
    )
}

export default AnimateMusic;