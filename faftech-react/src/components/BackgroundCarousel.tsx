import React, { useEffect, useState } from "react";
import "./BackgroundCarousel.css";

// Import gambar
import kuantum1 from "../../assets/kuantum1.webp";
import kuantum2 from "../../assets/kuantum2.webp";
import ai1 from "../../assets/ai1.webp";

const images = [kuantum1, kuantum2, ai1, kuantum1, kuantum2];

const BackgroundCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      className="bg-carousel text-center fw-bold py-5 mt-5"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      Skill Analyze
    </h2>
  );
};

export default BackgroundCarousel;
