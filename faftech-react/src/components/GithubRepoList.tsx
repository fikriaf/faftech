import React, { useEffect, useState } from "react";
import GitHubRepoCard from "./GithubRepoCard";
import "./styles/GithubRepoList.css"

interface GitHubRepoListProps {
  username: string;
}

const GitHubRepoList: React.FC<GitHubRepoListProps> = ({ username }) => {
    const [repos, setRepos] = useState<any[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const itemsPerSlide = 9;

    useEffect(() => {
    const fetchRepos = async () => {
        try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`, {
            headers: {
            Authorization: `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`, // ganti dengan tokenmu
            },
        });
        const data = await res.json();
        if (Array.isArray(data)) {
            setRepos(data);
        } else {
            console.error("Repos API did not return an array:", data);
        }
        } catch (err) {
        console.error("Failed to load repos", err);
        }
    };

    fetchRepos();
    }, [username]);

    const totalSlides = Math.ceil(repos.length / itemsPerSlide);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const getSlideRepos = () => {
        const start = currentSlide * itemsPerSlide;
        return repos.slice(start, start + itemsPerSlide);
    };

    return (
        <div className="github-carousel-wrapper position-relative">
        <button className="carousel-nav left" onClick={handlePrev}>❮</button>
        <button className="carousel-nav right" onClick={handleNext}>❯</button>

        <div className="row g-3 slide-animation">
            {getSlideRepos().map((repo) => (
            <div key={repo.id} className="col-md-4">
                <GitHubRepoCard key={repo.id} repo={repo} />
            </div>
            ))}
        </div>

        <div className="slide-indicators text-center mt-3">
            {Array.from({ length: totalSlides }).map((_, idx) => (
            <span
                key={idx}
                className={`indicator-dot ${idx === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(idx)}
            ></span>
            ))}
        </div>
        </div>
    );
};

export default GitHubRepoList;
