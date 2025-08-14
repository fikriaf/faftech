import React, { useEffect, useRef } from 'react';
import "./styles/Experience.css";

const ExperienceComponent = () => {
  const timelineItemsRef = useRef<HTMLDivElement[]>([]);

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
      date: "2022 - Present",
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      description: "Leading the development of cutting-edge web applications using React, TypeScript, and modern CSS frameworks. Mentoring junior developers and implementing best practices for scalable applications.",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"]
    },
    {
      date: "2020 - 2022",
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed responsive web applications for various clients across different industries. Collaborated with UX/UI designers to implement pixel-perfect interfaces and optimized performance.",
      skills: ["JavaScript", "Vue.js", "SASS", "Webpack", "Jest"]
    },
    {
      date: "2018 - 2020",
      title: "Web Developer",
      company: "Creative Web Agency",
      description: "Created custom websites and web applications for small to medium businesses. Specialized in WordPress development and e-commerce solutions using WooCommerce.",
      skills: ["HTML/CSS", "PHP", "WordPress", "MySQL", "SEO"]
    },
    {
      date: "2016 - 2018",
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      description: "Started my professional journey building and maintaining company websites. Gained experience in responsive design and cross-browser compatibility.",
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"]
    }
  ];

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
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">{exp.date}</div>
              <h3 className="timeline-title">{exp.title}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <p className="timeline-description">{exp.description}</p>
              <div className="timeline-skills">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-number">6+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">12</div>
          <div className="stat-label">Technologies Mastered</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">8</div>
          <div className="stat-label">Companies Worked</div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;