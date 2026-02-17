import { FiPlay, FiX, FiMusic } from "react-icons/fi";

interface Props {
  show: boolean;
  onPlayMusic: () => void;
  onWithoutMusic: () => void;
}

export default function MusicOverlay({ show, onPlayMusic, onWithoutMusic }: Props) {
  if (!show) return null;

  return (
    <div className="music-overlay">
      <div className="music-overlay-content">
        <div className="music-overlay-icon">
          <FiMusic />
        </div>
        <h2>Welcome to FAF Tech</h2>
        <p>Would you like to enable background music?</p>
        
        <div className="music-overlay-buttons">
          <button className="btn-music-play" onClick={onPlayMusic}>
            <FiPlay />
            <span>Play Music</span>
          </button>
          <button className="btn-music-skip" onClick={onWithoutMusic}>
            <FiX />
            <span>Without Music</span>
          </button>
        </div>
      </div>

      <style>{`
        .music-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999999999;
        }

        .music-overlay-content {
          text-align: center;
          color: white;
          animation: fadeIn 0.3s ease;
        }

        .music-overlay-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 24px;
          background: rgba(13, 204, 242, 0.1);
          border: 2px solid rgba(13, 204, 242, 0.5);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: #0dccf2;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(13, 204, 242, 0.4); }
          50% { box-shadow: 0 0 0 20px rgba(13, 204, 242, 0); }
        }

        .music-overlay-content h2 {
          font-size: 2rem;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .music-overlay-content p {
          color: #9ca3af;
          margin-bottom: 32px;
          font-size: 1.1rem;
        }

        .music-overlay-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-music-play, .btn-music-skip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .btn-music-play {
          background: linear-gradient(135deg, #0dccf2 0%, #0891b2 100%);
          color: #000;
        }

        .btn-music-play:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(13, 204, 242, 0.3);
        }

        .btn-music-skip {
          background: transparent;
          border: 1px solid #4b5563;
          color: #9ca3af;
        }

        .btn-music-skip:hover {
          border-color: #6b7280;
          color: white;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
