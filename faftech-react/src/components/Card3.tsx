import React, { useState, useEffect, useRef } from 'react';
import { div } from "framer-motion/client";
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

const Card3 = () => {

    const CardItems = [
        {
            icon: <FaDesktop size={30} />,
            title: "Frontend",
            child: [
                {
                    name: "React",
                    percent: 95
                },
                {
                    name: "Laravel",
                    percent: 95
                },
                {
                    name: "Bootstrap",
                    percent: 95
                }
            ]
        },
        {
            icon: <FaCode size={30} />,
            title: "Languages",
            child: [
                {
                    name: "Python",
                    percent: 95
                },
                {
                    name: "Typescript",
                    percent: 90
                },
                {
                    name: "PHP",
                    percent: 95
                }
            ]
        },
        {
            icon: <FaServer size={30} />,
            title: "Backend",
            child: [
                {
                    name: "Express",
                    percent: 95
                },
                {
                    name: "Filament",
                    percent: 95
                },
                {
                    name: "FastAPI",
                    percent: 85
                }
            ]
        },
        {
            icon: <FaDatabase size={30} />,
            title: "Database",
            child: [
                {
                    name: "MongoDB",
                    percent: 90
                },
                {
                    name: "MySQL",
                    percent: 85
                },
                {
                    name: "PHPMyAdmin",
                    percent: 95
                }
            ]
        },
        {
            icon: <FaTools size={30} />,
            title: "Tools",
            child: [
                {
                    name: "VS Code",
                    percent: 100
                },
                {
                    name: "Github",
                    percent: 90
                },
                {
                    name: "Postman",
                    percent: 95
                }
            ]
        },
        {
            icon: <FaPencilRuler size={30} />,
            title: "Design",
            child: [
                {
                    name: "Figma",
                    percent: 100
                },
                {
                    name: "Canva",
                    percent: 100
                },
                {
                    name: "Power Design",
                    percent: 90
                }
            ]
        }
    ]
    const barRefs = useRef<HTMLDivElement[]>([]);

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
                // reset ke 0% saat elemen keluar viewport
                bar.style.transition = "none"; // reset tanpa animasi
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
    }, []);

    barRefs.current = [];
    
    return(
        <>
            {CardItems.map((item,idx) => (
                <FadeInOnScroll>
                <div className="col-md-3 p-4 animatedFade bg-white rounded shadow shadow-bottom" style={{width: "22.8rem"}}>
                    <div className="d-flex gap-2 justify-content-start align-items-center mb-3">
                        {item.icon}
                        <h5 className="p-0 m-0">{item.title}</h5>
                    </div>
                    <div className="d-grid gap-2">
                        {[...Array(3)].map((_, idx) => (
                            <div key={idx} className={`row${idx+1}`}>
                                <div className="d-flex justify-content-between">
                                    <span>{item.child?.[idx].name}</span>
                                    <span>{item.child?.[idx].percent}%</span>
                                </div>
                                <div
                                    className="border linePercent border-0 mt-2 border-secondary rounded-pill"
                                    data-percent={`${item.child?.[idx].percent}%`}
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
    )
}

export default Card3