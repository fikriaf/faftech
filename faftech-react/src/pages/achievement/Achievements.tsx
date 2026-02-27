import React, { useState, useEffect, useMemo } from 'react';
import PageWrapper from '../../components/PageWrapper';
import TrueFocus from '../../components/TrueFocus';
import api, { type Achievement } from '../../services/api';
import {
  Award,
  FileText,
  GraduationCap,
  Calendar,
  ExternalLink,
  Filter,
  Trophy,
  BookOpen,
  Lightbulb,
  Users,
  ScrollText,
  Star,
  Zap,
  Target,
  Crown,
  Medal,
  Hexagon,
  Diamond
} from 'lucide-react';
import './Achievements.css';

const Achievements: React.FC = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await api.getAchievements();
        setAchievements(data);
      } catch (err) {
        console.error('Error fetching achievements:', err);
        setError('Failed to load achievements. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    achievements.forEach(a => cats.add(a.category));
    return Array.from(cats).sort();
  }, [achievements]);

  const filteredAchievements = useMemo(() => {
    const typeOrder: Record<string, number> = {
      'certificate': 1,
      'conference': 2,
      'award': 3,
      'publication': 4,
      'patent': 5
    };
    
    return achievements
      .filter(achievement => {
        const typeMatch = selectedType === 'all' || achievement.type === selectedType;
        const categoryMatch = selectedCategory === 'all' || achievement.category === selectedCategory;
        return typeMatch && categoryMatch;
      })
      .sort((a, b) => {
        if (a.is_featured && !b.is_featured) return -1;
        if (!a.is_featured && b.is_featured) return 1;
        const orderA = typeOrder[a.type] || 99;
        const orderB = typeOrder[b.type] || 99;
        if (orderA !== orderB) return orderA - orderB;
        return new Date(b.issue_date).getTime() - new Date(a.issue_date).getTime();
      });
  }, [achievements, selectedType, selectedCategory]);

  const stats = useMemo(() => ({
    total: achievements.length,
    certificates: achievements.filter(a => a.type === 'certificate').length,
    conferences: achievements.filter(a => a.type === 'conference').length,
    awards: achievements.filter(a => a.type === 'award').length,
    publications: achievements.filter(a => a.type === 'publication').length,
    patents: achievements.filter(a => a.type === 'patent').length,
    featured: achievements.filter(a => a.is_featured).length
  }), [achievements]);

  const typeOrder = ['certificate', 'conference', 'award', 'publication', 'patent'];

  const typeConfig: Record<string, { icon: React.ReactNode; label: string; color: string; gradient: string; bgIcon: React.ReactNode }> = {
    certificate: { 
      icon: <ScrollText size={18} />, 
      label: 'Certificates', 
      color: '#0d6efd',
      gradient: 'linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%)',
      bgIcon: <ScrollText size={80} opacity={0.08} />
    },
    award: { 
      icon: <Trophy size={18} />, 
      label: 'Awards', 
      color: '#fd7e14',
      gradient: 'linear-gradient(135deg, #fd7e14 0%, #f59e0b 100%)',
      bgIcon: <Trophy size={80} opacity={0.08} />
    },
    publication: { 
      icon: <BookOpen size={18} />, 
      label: 'Publications', 
      color: '#198754',
      gradient: 'linear-gradient(135deg, #198754 0%, #20c997 100%)',
      bgIcon: <BookOpen size={80} opacity={0.08} />
    },
    patent: { 
      icon: <Lightbulb size={18} />,
      label: 'Patents', 
      color: '#6f42c1',
      gradient: 'linear-gradient(135deg, #6f42c1 0%, #8b5cf6 100%)',
      bgIcon: <Lightbulb size={80} opacity={0.08} />
    },
    conference: { 
      icon: <Users size={18} />, 
      label: 'Conferences', 
      color: '#dc3545',
      gradient: 'linear-gradient(135deg, #dc3545 0%, #fd7e14 100%)',
      bgIcon: <Users size={80} opacity={0.08} />
    }
  };

  const getBgIcon = (type: string) => {
    const config = typeConfig[type];
    if (!config) return <Star size={80} opacity={0.08} />;
    return config.bgIcon;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 30) return `${diffDays} days ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  if (error) {
    return (
      <PageWrapper direction="left">
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <h2 className="text-danger mb-3">Error</h2>
            <p>{error}</p>
            <button className="btn btn-primary mt-3" onClick={() => window.location.reload()}>
              Retry
            </button>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper direction="left">
      <div className="achievements-page">
        {/* Animated Background */}
        <div className="achievements-bg">
          <div className="bg-orb orb-1"></div>
          <div className="bg-orb orb-2"></div>
          <div className="bg-orb orb-3"></div>
          <div className="bg-orb orb-4"></div>
          <div className="floating-particles"></div>
        </div>

        <div className="container-fluid indukAchievements">
          {/* Header */}
          <div className="achievements-header mb-5">
            <div className="header-decoration">
              <div className="deco-line"></div>
              <div className="deco-star">✦</div>
              <div className="deco-line"></div>
            </div>
            <TrueFocus
              sentence="Achievements"
              manualMode={false}
              blurAmount={0}
              borderColor="var(--primary)"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
            <p className="achievements-subtitle mt-3">
              Milestones, certifications, and recognitions throughout my journey
            </p>
          </div>

          {/* Stats Cards */}
          {!isLoading && (
            <div className="stats-section mb-5">
              <div className="stats-row">
                <div className="stat-item total" style={{ '--stat-color': '#0d6efd' } as React.CSSProperties}>
                  <div className="stat-glow"></div>
                  <div className="stat-icon-wrapper">
                    <Award size={24} />
                  </div>
                  <div className="stat-info">
                    <span className="stat-value">{stats.total}</span>
                    <span className="stat-label">Total</span>
                  </div>
                </div>
                
                {typeOrder.map((type) => {
                  const config = typeConfig[type];
                  const statKey = type === 'certificate' ? 'certificates' : type === 'conference' ? 'conferences' : type;
                  return (
                    <div 
                      key={type} 
                      className="stat-item" 
                      style={{ '--stat-color': config.color } as React.CSSProperties}
                    >
                      <div className="stat-glow" style={{ background: config.gradient }}></div>
                      <div className="stat-icon-wrapper" style={{ color: config.color, background: `${config.color}15` }}>
                        {config.icon}
                      </div>
                      <div className="stat-info">
                        <span className="stat-value">{(stats as Record<string, number>)[statKey]}</span>
                        <span className="stat-label">{config.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Filters */}
          <div className="filters-section mb-4">
            <div className="filter-group">
              <div className="filter-label">
                <Filter size={16} />
                <span>Type</span>
              </div>
                <div className="filter-buttons">
                  <button 
                    className={`filter-btn ${selectedType === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedType('all')}
                  >
                    <Zap size={14} />
                    <span>All</span>
                  </button>
                  {typeOrder.map((type) => {
                    const config = typeConfig[type];
                    return (
                      <button 
                        key={type}
                        className={`filter-btn ${selectedType === type ? 'active' : ''}`}
                        onClick={() => setSelectedType(type)}
                        style={{ '--btn-color': config.color, '--btn-gradient': config.gradient } as React.CSSProperties}
                      >
                        {config.icon}
                        <span>{config.label}</span>
                      </button>
                    );
                  })}
                </div>
            </div>

            {categories.length > 0 && (
              <div className="filter-group mt-3">
                <div className="filter-label">
                  <Target size={16} />
                  <span>Category</span>
                </div>
                <div className="filter-buttons">
                  <button 
                    className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    <Star size={14} />
                    <span>All</span>
                  </button>
                  {categories.map(category => (
                    <button 
                      key={category}
                      className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <Diamond size={14} />
                      <span>{category}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="results-info mb-4">
            <span className="results-badge">
              {filteredAchievements.length} Achievement{filteredAchievements.length !== 1 ? 's' : ''}
            </span>
            {selectedType !== 'all' && <span className="filter-tag">{typeConfig[selectedType]?.label || selectedType}</span>}
            {selectedCategory !== 'all' && <span className="filter-tag">{selectedCategory}</span>}
          </div>

          {/* Achievements Grid */}
          <div className="achievements-grid">
            {isLoading ? (
              [...Array(6)].map((_, idx) => (
                <div key={idx} className="achievement-card skeleton">
                  <div className="skeleton-content">
                    <div className="skeleton-icon"></div>
                    <div className="skeleton-line"></div>
                    <div className="skeleton-line medium"></div>
                    <div className="skeleton-line short"></div>
                  </div>
                </div>
              ))
            ) : filteredAchievements.length > 0 ? (
              filteredAchievements.map((achievement, idx) => (
                <div 
                  key={achievement.id}
                  className={`achievement-card ${achievement.is_featured ? 'featured' : ''}`}
                  style={{ 
                    '--card-color': typeConfig[achievement.type]?.color || '#0d6efd',
                    '--card-gradient': typeConfig[achievement.type]?.gradient || 'linear-gradient(135deg, #0d6efd 0%, #8b5cf6 100%)',
                    animationDelay: `${idx * 0.08}s`
                  } as React.CSSProperties}
                  onMouseEnter={() => setHoveredCard(achievement.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => achievement.certificate_file_url && window.open(`https://faftech-be.vercel.app${achievement.certificate_file_url}`, '_blank')}
                >
                  {/* Background Icon */}
                  <div className="card-bg-icon">
                    {getBgIcon(achievement.type)}
                  </div>

                  {/* Decorative Elements */}
                  <div className="card-decoration">
                    <div className="deco-circle"></div>
                    <div className="deco-dots"></div>
                  </div>

                  {/* Featured Badge */}
                  {achievement.is_featured && (
                    <div className="featured-badge">
                      <Crown size={12} />
                      <span>Featured</span>
                    </div>
                  )}
                  
                  {/* Type Badge */}
                  <div className="type-badge" style={{ background: typeConfig[achievement.type]?.gradient }}>
                    {typeConfig[achievement.type]?.icon}
                  </div>

                  {/* Card Header */}
                  <div className="card-header">
                    <div className="header-content">
                      <span className="category-pill">{achievement.category}</span>
                      <span className="date-badge">
                        <Calendar size={10} />
                        {formatDate(achievement.issue_date)}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body">
                    <h3 className="achievement-title">
                      {achievement.title}
                    </h3>
                    <p className="achievement-description">{achievement.description}</p>
                    
                    <div className="issuer-row">
                      <div className="issuer-info">
                        <div className="issuer-avatar">
                          <Medal size={14} />
                        </div>
                        <div className="issuer-details">
                          <span className="issuer-label">Issued by</span>
                          <span className="issuer-name">{achievement.issuer}</span>
                        </div>
                      </div>
                      <div className="card-date">
                        <Calendar size={12} />
                        {formatDate(achievement.issue_date)}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="card-footer">
                    <div className="time-ago">
                      <Zap size={10} />
                      {getTimeAgo(achievement.issue_date)}
                    </div>
                    {achievement.certificate_file_url && (
                      <a
                        href={`https://faftech-be.vercel.app${achievement.certificate_file_url}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="view-btn"
                      >
                        <ExternalLink size={12} />
                        <span>View</span>
                      </a>
                    )}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="hover-glow"></div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <div className="empty-illustration">
                  <div className="empty-icon-wrapper">
                    <SearchIcon />
                  </div>
                  <div className="empty-particles">
                    <span></span><span></span><span></span>
                  </div>
                </div>
                <h3>No Achievements Found</h3>
                <p>No achievements match your current filters.</p>
                <button 
                  className="clear-btn"
                  onClick={() => { setSelectedType('all'); setSelectedCategory('all'); }}
                >
                  <Filter size={14} />
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

const SearchIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

export default Achievements;
