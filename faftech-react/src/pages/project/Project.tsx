import React, { useState, useMemo, useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import Card2 from "../../components/Card2";
import TrueFocus from "../../components/TrueFocus";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import api from "../../services/api";
import type { Project } from "../../services/api";
import "./Project.css"

const ProjectPage: React.FC = () => {
    const [selectedTag, setSelectedTag] = useState<string>("all");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [counters, setCounters] = useState({ total: 0, web: 0, ai: 0, api: 0 });
    const [featuredIndex, setFeaturedIndex] = useState<number>(0);
    const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
    const [projects, setProjects] = useState<Project[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [progress, setProgress] = useState(0);

    // Fetch projects from API
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await api.getProjects();
                setProjects(data);
            } catch (err) {
                console.error('Error fetching projects:', err);
                setError('Failed to load projects. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Animate counters when projects load
    useEffect(() => {
        if (projects.length === 0) return;

        const duration = 1500;
        const steps = 30;
        const interval = duration / steps;
        
        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            setCounters({
                total: Math.round(totalProjects * easeOut),
                web: Math.round(webProjects * easeOut),
                ai: Math.round(aiProjects * easeOut),
                api: Math.round(apiProjects * easeOut)
            });
            
            if (step >= steps) clearInterval(timer);
        }, interval);
        
        return () => clearInterval(timer);
    }, [projects]);

    // 3D Tilt Effect for Featured Card
    useEffect(() => {
        const container = document.getElementById('featuredContainer');
        const card = document.getElementById('featuredCard');
        
        if (!container || !card) return;
        
        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };
        
        const handleMouseLeave = () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        };
        
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Auto-rotate featured projects with progress
    useEffect(() => {
        if (!isAutoPlay || projects.length === 0) {
            setProgress(0);
            return;
        }
        
        const duration = 5000;
        const interval = 50;
        const steps = duration / interval;
        let currentStep = 0;
        
        const timer = setInterval(() => {
            currentStep++;
            setProgress((currentStep / steps) * 100);
            
            if (currentStep >= steps) {
                setFeaturedIndex((prev) => (prev + 1) % projects.length);
                currentStep = 0;
                setProgress(0);
            }
        }, interval);
        
        return () => clearInterval(timer);
    }, [isAutoPlay, projects.length, featuredIndex]);

    const nextFeatured = () => {
        if (projects.length === 0) return;
        setFeaturedIndex((prev) => (prev + 1) % projects.length);
        setIsAutoPlay(false);
        setTimeout(() => setIsAutoPlay(true), 10000);
    };

    const prevFeatured = () => {
        if (projects.length === 0) return;
        setFeaturedIndex((prev) => (prev - 1 + projects.length) % projects.length);
        setIsAutoPlay(false);
        setTimeout(() => setIsAutoPlay(true), 10000);
    };

    const currentFeatured = projects[featuredIndex];

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        projects.forEach(project => {
            project.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, [projects]);

    const filteredProjects = useMemo(() => {
        if (selectedTag === "all") return projects;
        return projects.filter(project => 
            project.tags.includes(selectedTag)
        );
    }, [projects, selectedTag]);

    const getProjectCount = (tag: string) => {
        if (tag === "all") return projects.length;
        return projects.filter(project => project.tags.includes(tag)).length;
    };

    const totalProjects = projects.length;
    const webProjects = projects.filter(p => p.category.includes("Website")).length;
    const aiProjects = projects.filter(p => p.category.includes("AI")).length;
    const apiProjects = projects.filter(p => p.category.includes("API")).length;

    const transformProjectForCard = (project: Project) => ({
        title: project.title,
        category: project.category,
        tags: project.tags,
        img: project.image,
        url: project.url,
        logo: project.logo,
        source: project.slug,
        content: project.content.map(c => ({
            name: c.name,
            quote: c.quote,
            src: c.image_url
        }))
    });

    const techStackData = useMemo(() => {
        const techCount: Record<string, number> = {};
        projects.forEach(p => {
            p.tags.forEach(tag => {
                techCount[tag] = (techCount[tag] || 0) + 1;
            });
        });
        
        const techColors: Record<string, string> = {
            "React": "#61DAFB", "TypeScript": "#3178C6", "Express": "#68A063",
            "Laravel": "#FF2D20", "Python": "#3776AB", "MongoDB": "#47A248",
            "vite": "#646CFF", "react": "#61DAFB", "typescript": "#3178C6",
            "tailwind": "#06B6D4", "laravel": "#FF2D20", "javascript": "#F7DF1E",
            "bootstrap": "#7952B3", "express": "#68A063", "mongodb": "#47A248",
            "mysql": "#4479A1", "python": "#3776AB", "fast-api": "#009688", "css": "#1572B6"
        };

        return Object.entries(techCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6)
            .map(([name, count]) => ({
                name: name.charAt(0).toUpperCase() + name.slice(1),
                count,
                color: techColors[name] || "#0d6efd"
            }));
    }, [projects]);

    if (error) {
        return (
            <PageWrapper direction="left">
                <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <h2 className="text-danger mb-3">Error</h2>
                        <p>{error}</p>
                        <button className="btn btn-primary mt-3" onClick={() => window.location.reload()}>Retry</button>
                    </div>
                </div>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper direction="left">
            <div className="container-fluid min-vh-100 bg-transparent mb-5 overflow-x-hidden">
                <div className="container-fluid indukProject">
                    <div className="bg-decoration">
                        <div className="bg-circle circle-1"></div>
                        <div className="bg-circle circle-2"></div>
                        <div className="bg-circle circle-3"></div>
                        <div className="bg-grid"></div>
                    </div>

                    <div className="mb-5" style={{ width: "100%" }}>
                        <TrueFocus sentence="My Project" manualMode={false} blurAmount={0} borderColor="var(--primary)" animationDuration={2} pauseBetweenAnimations={1} />
                    </div>

                    <div className="project-stats-section mb-5">
                        <div className="stats-grid">
                            <div className="stat-card" data-color="blue">
                                <div className="stat-bg-pattern"></div>
                                <div className="stat-content">
                                    <div className="stat-number">{counters.total}</div>
                                    <div className="stat-label">Total Projects</div>
                                </div>
                                <div className="stat-line"></div>
                            </div>
                            <div className="stat-card" data-color="green">
                                <div className="stat-bg-pattern"></div>
                                <div className="stat-content">
                                    <div className="stat-number">{counters.web}</div>
                                    <div className="stat-label">Web Apps</div>
                                </div>
                                <div className="stat-line"></div>
                            </div>
                            <div className="stat-card" data-color="purple">
                                <div className="stat-bg-pattern"></div>
                                <div className="stat-content">
                                    <div className="stat-number">{counters.ai}</div>
                                    <div className="stat-label">AI Projects</div>
                                </div>
                                <div className="stat-line"></div>
                            </div>
                            <div className="stat-card" data-color="orange">
                                <div className="stat-bg-pattern"></div>
                                <div className="stat-content">
                                    <div className="stat-number">{counters.api}</div>
                                    <div className="stat-label">API Services</div>
                                </div>
                                <div className="stat-line"></div>
                            </div>
                        </div>
                    </div>

                    {!isLoading && projects.length > 0 && selectedTag === "all" && (
                        <div className="featured-project-section mb-5">
                            <button className="featured-nav-arrow prev" onClick={prevFeatured}><span>‹</span></button>
                            <button className="featured-nav-arrow next" onClick={nextFeatured}><span>›</span></button>
                            
                            <div className="featured-3d-container" id="featuredContainer">
                                <div className="featured-card" id="featuredCard" key={featuredIndex}>
                                    <div className="featured-border"></div>
                                    <div className="featured-badge-float"><span className="badge-star">★</span><span>Featured</span></div>
                                    <div className="featured-counter">
                                        <span className="current">{String(featuredIndex + 1).padStart(2, '0')}</span>
                                        <span className="separator">/</span>
                                        <span className="total">{String(projects.length).padStart(2, '0')}</span>
                                    </div>
                                    
                                    <div className="featured-content-new">
                                        <div className="featured-image-container">
                                            <div className="featured-image-wrapper">
                                                <img src={currentFeatured?.image} alt={currentFeatured?.title} />
                                                <div className="featured-image-glare"></div>
                                            </div>
                                            <div className="featured-actions">
                                                <a href={currentFeatured?.url} target="_blank" className="featured-action-btn primary">
                                                    <FaExternalLinkAlt /><span>Live Demo</span>
                                                </a>
                                                <a href={`https://github.com/fikriaf/${currentFeatured?.slug}`} target="_blank" className="featured-action-btn secondary">
                                                    <FaGithub /><span>Source</span>
                                                </a>
                                            </div>
                                        </div>
                                        
                                        <div className="featured-details">
                                            <div className="featured-header">
                                                <h2 className="featured-title-new">{currentFeatured?.title}</h2>
                                                <div className="featured-category-new">{currentFeatured?.category}</div>
                                            </div>
                                            <p className="featured-description-new">{currentFeatured?.content?.[0]?.quote?.substring(0, 180)}...</p>
                                            <div className="featured-tags-new">
                                                {currentFeatured?.tags.map((tag, idx) => (
                                                    <span key={idx} className="featured-tag-new" style={{ animationDelay: `${idx * 0.1}s` }}>{tag}</span>
                                                ))}
                                            </div>
                                            <div className="featured-decoration"><div className="deco-circle"></div><div className="deco-line"></div></div>
                                        </div>
                                    </div>
                                    
                                    <div className="featured-bg-effects"><div className="bg-blob blob-1"></div><div className="bg-blob blob-2"></div></div>
                                </div>
                            </div>
                            
                            <div className="featured-dots">
                                {projects.map((_, idx) => (
                                    <button key={idx} className={`featured-dot ${idx === featuredIndex ? 'active' : ''}`} onClick={() => { setFeaturedIndex(idx); setIsAutoPlay(false); setTimeout(() => setIsAutoPlay(true), 10000); }}>
                                        {idx === featuredIndex && isAutoPlay && (<div className="dot-progress" style={{ width: `${progress}%` }} />)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {!isLoading && techStackData.length > 0 && (
                        <div className="tech-stack-section mb-5">
                            <h3 className="section-title">Tech Stack</h3>
                            <div className="tech-cloud">
                                {techStackData.map((tech, idx) => (
                                    <div key={idx} className="tech-item" style={{ '--tech-color': tech.color, animationDelay: `${idx * 0.1}s` } as React.CSSProperties}>
                                        <span className="tech-name">{tech.name}</span>
                                        <span className="tech-count">{tech.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="filter-container d-flex px-3 flex-wrap gap-3 justify-content-center mb-4">
                        <button className={`filter-btn ${selectedTag === "all" ? "active bg-dark text-white" : ""}`} onClick={() => setSelectedTag("all")}>
                            <span className="filter-text">All Projects</span>
                            <span className="filter-count">{getProjectCount("all")}</span>
                            <div className="filter-glow"></div>
                        </button>
                        {allTags.map(tag => (
                            <button key={tag} className={`filter-btn ${selectedTag === tag ? "active" : ""}`} onClick={() => setSelectedTag(tag)} data-tech={tag}>
                                <span className="filter-text">{tag}</span>
                                <span className="filter-count">{getProjectCount(tag)}</span>
                                <div className="filter-glow"></div>
                            </button>
                        ))}
                    </div>

                    <div className="results-counter text-center mb-4">
                        <span className="results-text">
                            Showing <strong>{filteredProjects.length}</strong> project{filteredProjects.length !== 1 ? 's' : ''}
                            {selectedTag !== "all" && <span> tagged with "<span className="tag-highlight">{selectedTag}</span>"</span>}
                        </span>
                    </div>

                    <div className="quick-stats-bar mb-4">
                        <div className="quick-stat"><span className="quick-stat-label">Total</span><span className="quick-stat-value">{filteredProjects.length}</span></div>
                        <div className="quick-stat-divider"></div>
                        <div className="quick-stat"><span className="quick-stat-label">Categories</span><span className="quick-stat-value">{new Set(filteredProjects.map(p => p.category.split('|')[0].trim())).size}</span></div>
                        <div className="quick-stat-divider"></div>
                        <div className="quick-stat"><span className="quick-stat-label">Technologies</span><span className="quick-stat-value">{new Set(filteredProjects.flatMap(p => p.tags)).size}</span></div>
                        {selectedTag !== "all" && (<><div className="quick-stat-divider"></div><button className="quick-stat-reset" onClick={() => setSelectedTag("all")}>Clear Filter</button></>)}
                    </div>
                    
                    <div className="mt-4 row g-4 cardProject">
                        {isLoading ? (
                            [...Array(6)].map((_, idx) => (
                                <div key={`skeleton-${idx}`} className="col-xl-4 col-md-6 col-12 listProject">
                                    <div className="skeleton-card">
                                        <div className="skeleton-image"></div>
                                        <div className="skeleton-content">
                                            <div className="skeleton-line short"></div>
                                            <div className="skeleton-line"></div>
                                            <div className="skeleton-tags"><div className="skeleton-tag"></div><div className="skeleton-tag"></div></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : filteredProjects.length > 0 ? (
                            filteredProjects.map((item, idx) => (
                                <div key={idx} className="col-xl-4 col-md-6 col-12 listProject">
                                    <div className="project-card-wrapper" style={{ animationDelay: `${idx * 0.1}s` }}>
                                        <Card2 {...transformProjectForCard(item)} />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12">
                                <div className="empty-state">
                                    <div className="empty-state-icon"><FaTimes size={48} /></div>
                                    <h3>No Projects Found</h3>
                                    <p>No projects found with the tag "{selectedTag}". Try selecting a different filter.</p>
                                    <button className="btn btn-primary mt-3" onClick={() => setSelectedTag("all")}>View All Projects</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bottom-cta-section mt-5">
                        <div className="cta-content">
                            <h3 className="cta-title">Want to see more?</h3>
                            <p className="cta-description">Check out my GitHub for more projects, contributions, and open source work.</p>
                            <a href="https://github.com/fikriaf" target="_blank" className="cta-button"><FaGithub size={20} />Visit My GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </PageWrapper>
    )
}

export default ProjectPage;
