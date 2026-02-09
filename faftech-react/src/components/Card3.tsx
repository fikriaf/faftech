import React, { useState, useEffect, useRef } from 'react';
import FadeInOnScroll from "./FadeInOnScroll";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaPencilRuler,
  FaDesktop
} from 'react-icons/fa';

import "./styles/Card3.css"
import { api, type SkillCategory, type Skill } from '../services/api';

const Card3 = () => {
    const [cardItems, setCardItems] = useState<SkillCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const barRefs = useRef<HTMLDivElement[]>([]);

    const getIcon = (iconName: string) => {
        switch (iconName.toLowerCase()) {
            case 'frontend': return <FaDesktop size={30} />;
            case 'backend': return <FaServer size={30} />;
            case 'database': return <FaDatabase size={30} />;
            case 'tools': return <FaTools size={30} />;
            case 'design': return <FaPencilRuler size={30} />;
            default: return <FaCode size={30} />;
        }
    };

    const transformSkillsForDisplay = (skills: Skill[], count: number = 3) => {
        return skills.slice(0, count).map(skill => ({
            name: skill.name,
            percent: skill.proficiencies?.[0]?.percent || 50
        }));
    };

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const data = await api.getSkills();
                setCardItems(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load skills');
            } finally {
                setLoading(false);
            }
        };
        fetchSkills();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const bar = entry.target as HTMLDivElement;
                    const percent = bar.dataset.percent;

                    if (entry.isIntersecting && percent) {
                        bar.style.transition = "width 1.5s ease-out";
                        bar.style.width = percent;
                    } else {
                        bar.style.transition = "none";
                        bar.style.width = "0%";
                    }
                });
            },
            { threshold: 0.3 }
        );

        barRefs.current.forEach((bar) => {
            if (bar) observer.observe(bar);
        });

        return () => observer.disconnect();
    }, [cardItems]);

    if (loading) {
        return (
            <div className="text-center" style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error || cardItems.length === 0) {
        return (
            <div className="text-center text-danger" style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p>{error || 'No skills available'}</p>
            </div>
        );
    }

    barRefs.current = [];

    return (
        <>
            {cardItems.map((item) => (
                <FadeInOnScroll key={item.id}>
                    <div className="col-md-3 p-4 animatedFade bg-white rounded shadow shadow-bottom" style={{ width: "22.8rem" }}>
                        <div className="d-flex gap-2 justify-content-start align-items-center mb-3">
                            {getIcon(item.icon)}
                            <h5 className="p-0 m-0">{item.name}</h5>
                        </div>
                        <div className="d-grid gap-2">
                            {transformSkillsForDisplay(item.skills).map((skill, skillIdx) => (
                                <div key={skillIdx} className={`row${skillIdx + 1}`}>
                                    <div className="d-flex justify-content-between">
                                        <span>{skill.name}</span>
                                        <span>{skill.percent}%</span>
                                    </div>
                                    <div
                                        className="border linePercent border-0 mt-2 border-secondary rounded-pill"
                                        data-percent={`${skill.percent}%`}
                                        ref={(el) => {
                                            if (el) barRefs.current.push(el);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeInOnScroll>
            ))}
        </>
    );
}

export default Card3;
