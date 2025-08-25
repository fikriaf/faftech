import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import "./styles/Experience.css";
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

const ExperienceComponent = () => {
  const timelineItemsRef = useRef<HTMLDivElement[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<any>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false); // for animation
  const [carouselDirection, setCarouselDirection] = useState<'left' | 'right' | null>(null);
  const [carouselNextIndex, setCarouselNextIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    timelineItemsRef.current.forEach((item, index) => {
      if (item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
      }
    });

    return () => {
      timelineItemsRef.current.forEach(item => {
        if (item) observer.unobserve(item); });
    };
  }, []);

  const experiences = [
    {
      date: "July 2025 - Now",
      title: "Robotic and AI Engineer",
      company: "Informatika - Universitas Pembangunan Jaya.",
      type: "Job",
      typeTime: "Part-time",
      images: ["/experience/robot1.jpeg", "/experience/robot2.jpeg", "/experience/robot3.jpeg", "/experience/robot4.jpeg"],
      description: [
        "Developing an AI-based waste sorting system using YOLO and CNN.",
        "The AI classifies mixed waste: can, glass, plastic, and other.",
        "Now in the training phase for the AI model.",
        "Simultaneously building a user interface (UI) to visualize and control the robotic system.",
        "Robotic arms or delta robots will execute real-time waste sorting based on AI output.",
        "Goal: boost recycling efficiency, reduce manual labor, and offer a replicable model for sustainable waste management."
      ],
      skills: ["YOLO", "Arduino", "Tkinter"]
    },
    {
      date: "Juny 2025 - August 2025",
      title: "Front-End Developer (Website Company Profile UPJ) Internship",
      company: "KHI - Universitas Pembangunan Jaya",
      type: "Internship",
      typeTime: "Full-time",
      images: ["/experience/frontend1.jpeg", "/experience/frontend2.jpeg", "/experience/frontend1.jpeg"],
      description: [
        "Contributed to the UI/UX improvement of UPJ’s official website (upj.ac.id) by conducting page reviews and identifying visual and responsive design issues.",
        "Reviewed and reported layout inconsistencies, such as misaligned text (lack of justified alignment), oversized images, and poor mobile responsiveness.",
        "Provided recommendations to improve the visual structure of various static pages, including Program & Fees, Admission Pathway, Campus Visit, Alumni, and Student Organizations.",
        "Focused on enhancing user accessibility and experience across desktop and mobile views."
      ],
      skills: ["CMS", "HTML", "CSS", "JS", "Figma"]
    },
    {
      date: "Sep 2024 - Feb 2025",
      title: "Academic Achievement Division",
      company: "Informatics Student Association",
      type: "Organization",
      typeTime: "Part-time",
      images: ["/experience/hima1.jpeg", "/experience/hima2.jpeg", "/experience/hima3.jpeg", "/experience/hima4.jpeg", "/experience/hima5.jpeg"],
      description: [
        "I actively served as a member of the Academic Achievement Division in the Informatics Student Association at Universitas Pembangunan Jaya.",
        "Responsible for supporting student academic development by organizing study groups, academic workshops, and peer tutoring sessions.",
        "Participated in planning initiatives to improve overall academic performance among informatics students and helped facilitate student involvement in academic competitions.",
        "Developed strong collaboration, communication, and organizational skills while promoting a culture of academic excellence within the department."
      ],
      skills: ["Organizational Development", "Organization Skills", "Organizational Leadership"]
    }
  ];

  const openModal = (exp: any) => {
    setModalData(exp);
    setCarouselIndex(0);
    setModalOpen(true);
    setModalVisible(false);
    // Gunakan requestAnimationFrame agar browser sempat render opacity 0
    requestAnimationFrame(() => setModalVisible(true));
  };

  const closeModal = () => {
    setModalVisible(false);
    // wait for animation before unmount
    setTimeout(() => {
      setModalOpen(false);
      setModalData(null);
    }, 300);
  };

  const nextImage = () => {
    if (!modalData) return;
    if (carouselDirection) return;
    setCarouselDirection('right');
    setCarouselNextIndex((carouselIndex + 1) % modalData.images.length);
  };

  const prevImage = () => {
    if (!modalData) return;
    if (carouselDirection) return;
    setCarouselDirection('left');
    setCarouselNextIndex((carouselIndex - 1 + modalData.images.length) % modalData.images.length);
  };

  const handleCarouselAnimEnd = () => {
    if (carouselNextIndex !== null) {
      setCarouselIndex(carouselNextIndex);
      setCarouselNextIndex(null);
      setCarouselDirection(null);
    }
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [modalOpen]);

return (
    <div className="experience-container">
      <div className="floating-elements">
        <div className="floating-element" style={{ width: '100px', height: '100px', top: '10%', left: '5%', animationDuration: '20s' }}></div>
        <div className="floating-element" style={{ width: '70px', height: '70px', top: '70%', left: '80%', animationDuration: '25s' }}></div>
        <div className="floating-element" style={{ width: '50px', height: '50px', top: '40%', left: '90%', animationDuration: '18s' }}></div>
      </div>
      
      <div className="experience-header">
        <h1 className="experience-title">My Experience</h1>
        <p className="experience-subtitle">A journey through my professional career and achievements</p>
      </div>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="timeline-item"
            ref={el => {
              if (el) {
                timelineItemsRef.current[index] = el;
              }
            }}
            onClick={() => openModal(exp)}
            style={{ cursor: 'pointer' }}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">{exp.date}</div>
              <h3 className="timeline-title">{exp.title}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <ul className="timeline-description">
                {exp.description.map((desc: string, i: number) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="timeline-skills">
                {exp.skills.map((skill: string, skillIndex: number) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-number">2+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">60+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">12</div>
          <div className="stat-label">Technologies Mastered</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">3</div>
          <div className="stat-label">Companies Worked</div>
        </div>
      </div>

      {modalOpen && modalData &&
        ReactDOM.createPortal(
          (
            <div className={`modal-overlay ${modalVisible ? 'modal-fade-in' : 'modal-initial'}`} onClick={closeModal}>
              <div
                className={`modal-content ${modalVisible ? 'modal-fade-in' : 'modal-initial'}`}
                onClick={e => e.stopPropagation()}
                onAnimationEnd={e => {
                  if (!modalVisible && modalOpen) {
                    setModalOpen(false);
                    setModalData(null);
                  }
                }}
              >
                <button className="modal-close" onClick={closeModal}>
                  <FiX size={24} />
                </button>
                <div className="modal-flex-row">
                  <div className="modal-info">
                    <div><strong>Title:</strong> {modalData.title}</div>
                    <div><strong>Company:</strong> {modalData.company}</div>
                    <div><strong>Date:</strong> {modalData.date}</div>
                    <div><strong>Type:</strong> {modalData.type}</div>
                    <div><strong>Type Time:</strong> {modalData.typeTime}</div>
                    <div><strong>Description:</strong>
                      <ul>
                        {modalData.description.map((desc: string, i: number) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                    <div><strong>Skills:</strong>
                      <div>
                        {modalData.skills.map((skill: string, i: number) => (
                          <span key={i} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="modal-carousel-3">
                    <button className="carousel-btn" onClick={prevImage} disabled={!!carouselDirection}>
                      <FiChevronLeft size={28} />
                    </button>
                    <div className="carousel-images-wrapper">
                      {/* Left image */}
                      {modalData.images.length > 1 && (
                        <img
                          src={modalData.images[(carouselIndex - 1 + modalData.images.length) % modalData.images.length]}
                          alt="carousel-left"
                          className={`carousel-image side left`}
                        />
                      )}
                      {/* Center image(s) with animation */}
                      <img
                        src={modalData.images[carouselIndex]}
                        alt="carousel-center"
                        className={`carousel-image center${carouselDirection === 'right' ? ' carousel-fade-out-left' : ''}${carouselDirection === 'left' ? ' carousel-fade-out-right' : ''}`}
                        style={{ zIndex: carouselNextIndex !== null ? 2 : 3 }}
                        onAnimationEnd={handleCarouselAnimEnd}
                      />
                      {carouselNextIndex !== null && (
                        <img
                          src={modalData.images[carouselNextIndex]}
                          alt="carousel-center-next"
                          className={`carousel-image center${carouselDirection === 'right' ? ' carousel-fade-in-right' : ''}${carouselDirection === 'left' ? ' carousel-fade-in-left' : ''}`}
                          style={{ zIndex: 3 }}
                        />
                      )}
                      {/* Right image */}
                      {modalData.images.length > 2 && (
                        <img
                          src={modalData.images[(carouselIndex + 1) % modalData.images.length]}
                          alt="carousel-right"
                          className={`carousel-image side right`}
                        />
                      )}
                    </div>
                    <button className="carousel-btn" onClick={nextImage} disabled={!!carouselDirection}>
                      <FiChevronRight size={28} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ),
          document.body
        )
      }
    </div>
  );
};

export default ExperienceComponent;