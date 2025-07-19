import { useState, useEffect } from "react";

function useMobileDetection() {
    const [isMobile, setIsMobile] = useState(() => {
        // Ambil dari localStorage saat pertama kali
        const saved = localStorage.getItem("isMobile");
        return saved !== null ? JSON.parse(saved) : window.innerWidth <= 480;
    });

    useEffect(() => {
        const checkMobile = () => {
        const mobile = window.innerWidth <= 480;
        localStorage.setItem("isMobile", JSON.stringify(mobile));
        setIsMobile(mobile);
        };

        checkMobile(); // cek pertama kali
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return isMobile;
}

export default useMobileDetection