import React, { useEffect, useState } from "react";
import CategoryGroup from "./CategoryGroup";
import githubLogo from "../assets/github-logo.png"
import image1 from "../assets/kuantum1.webp"
import Card from "./Card";
import "./styles/ListGithub.css"
import { fetchGitHubRepos } from "../services/GithubRepo";
// @ts-ignore
import type { RepoSimple } from "../services/GithubRepo";
import { Tags } from "lucide-react";

const ListGithubSection: React.FC = () => {
    const [githubItems, setGithubItems] = useState<RepoSimple[]>([]);

    useEffect(() => {
        fetchGitHubRepos("fikriaf").then(setGithubItems).catch(console.error);
    }, []);

    const combinedItems = [
    ...githubItems.map((item, idx) => (
        <a
        key={idx}
        className="cat-item d-block bg-light h-100 text-center rounded p-3"
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        >
        <Card
            title={item.title}
            description={item.desc}
            tags={item.tags}
            img={item.image}
            imgSource={githubLogo}
            index={idx}
        />
        </a>
    )),
    <a
        key="other"
        className="cat-item d-block bg-light h-100 text-center rounded p-3"
        href="https://github.com/fikriaf?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
    >
        <Card
        title="Other"
        description="Click to Check 50+ My Repo Github"
        tags={["other", "repo"]}
        img={githubLogo}
        imgSource={githubLogo}
        index={githubItems.length}
        />
    </a>,
    ];

    return (
        <CategoryGroup className="kategori-1">
            {combinedItems}
        </CategoryGroup>
        
    );
};

export default ListGithubSection;
