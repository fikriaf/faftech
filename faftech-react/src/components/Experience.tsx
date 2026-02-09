import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import "./styles/Experience.css";
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { api, type Experience } from '../services/api';

interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  type: string;
  typeTime: string;
  images: string[];
  description: string[];
  skills: string[];
}

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

  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await api.getExperiences();
        const transformedData: ExperienceItem[] = data.map((exp: Experience) => ({
          date: exp.date_range,
          title: exp.title,
          company: exp.company,
          type: exp.type,
          typeTime: exp.type_time,
          images: exp.images?.map(img => img.image_url) || [],
          description: exp.description,
          skills: exp.skills
        }));
        setExperiences(transformedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load experiences');
      } finally {
        setLoading(false);
      }
    };
    fetchExperiences();
  }, []);

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

  if (loading) {
    return (
      <div className="experience-container" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading experiences...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="experience-container" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-center text-danger">
          <p>Failed to load experiences</p>
          <small>{error}</small>
        </div>
      </div>
    );
  }

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