import React from "react";
import "./styles/ProfileCard.css";

interface ProfileCardProps {
  avatarUrl: string;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  className?: string;
  onContactClick?: () => void;
  showUserInfo?: boolean;
}

const PRIMARY_BLUE = "#0d6efd";
const STATUS_COLOR = "#198754"; // Bootstrap green for online

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl = "<Placeholder for avatar URL>",
  miniAvatarUrl,
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  status = "Online",
  contactText = "Contact",
  className = "",
  onContactClick,
  showUserInfo = true,
}) => {
  return (
    <div
      className={`pc-bootstrap-card-modern ${className}`.trim()}
      style={{
        position: "relative",
        borderRadius: 10,
        boxShadow: "0 8px 32px 0 rgba(13,110,253,0.12)",
        padding: "56px 32px 32px 32px",
        width: 380,
        height: "94%",
        margin: "0 auto",
        textAlign: "center",
        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
        overflow: "hidden",
        border: "1.5px solid rgba(13,110,253,0.18)"
      }}
    >
      {/* Background image with overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background: `url(${avatarUrl}) center/cover no-repeat`,
          filter: "blur(10px) brightness(0.7)",
          transition: "background 0.3s",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: "linear-gradient(180deg,rgba(0,0,0,0.45) 60%,rgba(13,110,253,0.18) 100%)",
        }}
      />
      {/* Floating mini avatar */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 18,
          transform: "translateX(-50%)",
          zIndex: 3,
        }}
      >
        <img
          src={miniAvatarUrl || avatarUrl}
          alt={`${name || "User"} mini avatar`}
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            objectFit: "cover",
            border: `4px solid #fff`,
            boxShadow: "0 4px 24px 0 rgba(13,110,253,0.18)",
            background: "#e9ecef",
          }}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.opacity = "0.5";
            target.src = avatarUrl;
          }}
        />
      </div>
      <div style={{ height: 56 }} /> {/* Spacer for floating avatar */}
      <div style={{ position: "relative", zIndex: 4 }}>
        {showUserInfo && (
          <div style={{ marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
              <div>
                <span
                  style={{
                    display: "inline-block",
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: PRIMARY_BLUE,
                    border: "2px solid #fff",
                    boxShadow: "0 2px 8px 0 rgba(13,110,253,0.10)",
                  }}
                >
                  {/* empty, just for visual */}
                </span>
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 600, color: "#fff", fontSize: 16, letterSpacing: 0.2 }}>
                  @{handle}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: STATUS_COLOR,
                      boxShadow: "0 0 6px 1px #19875455",
                    }}
                  />
                  <span style={{ fontSize: 13, color: "#e0e0e0", fontWeight: 500 }}>{status}</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div style={{ marginBottom: 22 }}>
          <h3
            style={{
              margin: 0,
              fontSize: 24,
              color: "#fff",
              fontWeight: 800,
              letterSpacing: 0.1,
              lineHeight: 1.2,
              textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
          >
            {name}
          </h3>
          <p
            style={{
              margin: "8px 0 0 0",
              color: "#e0e0e0",
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: 0.1,
              textShadow: "0 2px 8px rgba(0,0,0,0.13)",
            }}
          >
            {title}
          </p>
          {/* Bio singkat */}
          <div
            style={{
              margin: "10px 0 0 0",
              color: "#cfd8dc",
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 1.5,
              textShadow: "0 1px 4px rgba(0,0,0,0.10)",
            }}
          >
            Enthusiastic about creative coding and building delightful user experiences.
          </div>
        </div>
        {/* Social media icons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 18, marginBottom: 18 }}>
          <a
            href="https://www.linkedin.com/in/fikri-armia-fahmi-b373b3288/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#0a66c2",
              background: "#fff",
              borderRadius: "50%",
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 1px 6px 0 rgba(13,110,253,0.10)",
              textDecoration: "none",
              fontSize: 18,
              transition: "background 0.18s",
            }}
            aria-label="LinkedIn"
            onMouseOver={e => (e.currentTarget.style.background = "#e7f3ff")}
            onMouseOut={e => (e.currentTarget.style.background = "#fff")}
          >
            {/* LinkedIn SVG */}
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/>
            </svg>
          </a>
          <a
            href="https://github.com/fikriaf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#212529",
              background: "#fff",
              borderRadius: "50%",
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 1px 6px 0 rgba(13,110,253,0.10)",
              textDecoration: "none",
              fontSize: 18,
              transition: "background 0.18s",
            }}
            aria-label="GitHub"
            onMouseOver={e => (e.currentTarget.style.background = "#f3f3f3")}
            onMouseOut={e => (e.currentTarget.style.background = "#fff")}
          >
            {/* GitHub SVG */}
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/fikriaf27/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#d6249f",
              background: "#fff",
              borderRadius: "50%",
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 1px 6px 0 rgba(13,110,253,0.10)",
              textDecoration: "none",
              fontSize: 18,
              transition: "background 0.18s",
            }}
            aria-label="Instagram"
            onMouseOver={e => (e.currentTarget.style.background = "#fce7fa")}
            onMouseOut={e => (e.currentTarget.style.background = "#fff")}
          >
            {/* Instagram SVG */}
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.1S388.6 9.7 353.3 8c-35.3-1.7-141.3-1.7-176.6 0-35.3 1.7-66.7 9.9-92.1 36.2S9.7 123.4 8 158.7c-1.7 35.3-1.7 141.3 0 176.6 1.7 35.3 9.9 66.7 36.2 92.1s56.8 34.5 92.1 36.2c35.3 1.7 141.3 1.7 176.6 0 35.3-1.7 66.7-9.9 92.1-36.2s34.5-56.8 36.2-92.1c1.7-35.3 1.7-141.3 0-176.6zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.7 102.9-9 132.3z"/>
            </svg>
          </a>
        </div>
        {/* Divider */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.18)",
          margin: "0 0 22px 0"
        }} />
        <button
          className="pc-contact-btn-modern"
          style={{
            background: PRIMARY_BLUE,
            color: "#fff",
            border: "none",
            borderRadius: 12,
            padding: "12px 36px",
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer",
            boxShadow: "0 2px 12px 0 rgba(13,110,253,0.12)",
            transition: "background 0.18s, transform 0.18s, box-shadow 0.18s",
          }}
          onClick={onContactClick}
          type="button"
          aria-label={`Contact ${name || "user"}`}
          onMouseOver={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "#0b5ed7";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px) scale(1.03)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 24px 0 rgba(13,110,253,0.18)";
          }}
          onMouseOut={e => {
            (e.currentTarget as HTMLButtonElement).style.background = PRIMARY_BLUE;
            (e.currentTarget as HTMLButtonElement).style.transform = "none";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 2px 12px 0 rgba(13,110,253,0.12)";
          }}
        >
          {contactText}
        </button>
      </div>
    </div>
  );
};

export default React.memo(ProfileCard);
