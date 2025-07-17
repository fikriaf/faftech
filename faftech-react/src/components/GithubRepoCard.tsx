import React, { useEffect, useState } from "react";
import "./styles/GitHubRepoCard.css";
import { GoStar, GoRepoForked, GoEye } from "react-icons/go";
import { FaExternalLinkAlt } from "react-icons/fa";

interface GitHubRepoCardProps {
repo: any;
}

const GitHubRepoCard: React.FC<GitHubRepoCardProps> = ({ repo }) => {
const [loading, setLoading] = useState(true);

useEffect(() => {
  if (repo) setLoading(false);
}, [repo]);


if (loading) return <div className="text-muted">Loading...</div>;

const updatedDate = new Date(repo.updated_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
});

return (
    <div className="card github-repo-card shadow-sm">
    <div className="card-body d-flex flex-column">
        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-start mb-2">
        {/* Title */}
        <h6 className="card-title mb-0">
            <a
            href={repo.html_url}
            className="repo-link"
            target="_blank"
            rel="noopener noreferrer"
            >
            {repo.full_name}
            </a>
        </h6>

        {/* Icons */}
        <div className="d-flex">
            {repo.homepage && (
                <a
                href={repo.homepage}
                className="btn btn-sm btn-outline-primary p-0 px-2"
                target="_blank"
                rel="noopener noreferrer"
                >
                Web <FaExternalLinkAlt />
                </a>
            )}
        </div>
        </div>

        {/* Description */}
        <p className="card-text text-muted small">{repo.description}</p>

        {/* Tags/Topics */}
        {Array.isArray(repo.topics) && repo.topics.length > 0 && (
        <div className="badge-container mb-2">
            {repo.topics.map((topic: string) => (
            <span key={topic} className="badge bg-light border text-secondary me-1">
                #{topic}
            </span>
            ))}
        </div>
        )}

        {/* Extra info */}
        <div className="d-flex flex-wrap gap-1 small text-secondary mb-2">
        {repo.language && (
            <span className="badge bg-secondary py-1">{repo.language}</span>
        )}
        {repo.license?.name && (
            <span className="badge bg-info text-dark">{repo.license.name}</span>
        )}
        </div>

        <div className="d-flex justify-content-between mt-auto">
            <div className="d-flex gap-3 small stats-icons text-secondary">
            <div title="Stars">
            <GoStar className="me-1" /> {repo.stargazers_count}
            </div>
            <div title="Watchers">
            <GoEye className="me-1" /> {repo.watchers_count}
            </div>
            <div title="Forks">
            <GoRepoForked className="me-1" /> {repo.forks_count}
            </div>
        </div>
        <div className="text-muted small">Updated {updatedDate}</div>
        </div>
    </div>
    </div>
);
};

export default GitHubRepoCard;
