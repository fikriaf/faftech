import React, { useEffect, useState } from "react";

// Import gambar
import kuantum1 from "../assets/kuantum1.webp";
import kuantum2 from "../assets/kuantum2.webp";
import ai1 from "../assets/ai1.webp";

type Props = {
  title: string;
};

const images = [kuantum1, kuantum2, ai1, kuantum1, kuantum2];

const BackgroundCarousel: React.FC<Props> = ({ title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-carousel rounded rounded text-center py-4 mt-5 mb-4 position-relative text-white"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        zIndex: 0,
      }}
    >
      {/* Overlay hitam transparan */}
      <div
        className="rounded"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>

      {/* Judul di atas overlay */}
      <h2 className="fw-bold p-0 m-0" style={{ position: "relative", zIndex: 2 }}>{title}</h2>
    </div>
  );
};

export default BackgroundCarousel;
