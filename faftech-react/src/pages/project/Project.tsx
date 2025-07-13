import React from "react";
import PageWrapper from "../../components/PageWrapper";
import Card2 from "../../components/Card2";
import TrueFocus from "../../components/TrueFocus";

const Project: React.FC = () => {

    const listProjects = [
        {
            title: "GPALytics",
            category: "Website",
            tags: ["react", "ts", "express", "mongodb"],
            url: "https://gpalytics-two.vercel.app/",
            image: "https://raw.githubusercontent.com/fikriaf/GPAlytics_FrontEnd/main/Preview.png",
            logo: "/logo.webp"
        }
    ]

    return (
        <PageWrapper direction="left">
            {/* CONTENT */}
            <div className="container-fluid bg-transparent">
                <div className="container my-5">
                    {/* Heading */}
                    <div className="" style={{ width: "100%" }}>
                        <TrueFocus
                            sentence="My Project"
                            manualMode={false}
                            blurAmount={0}
                            borderColor="var(--primary)"
                            animationDuration={2}
                            pauseBetweenAnimations={1}
                        />
                    </div>
                    {/* Card */}
                    <div className="mt-5 row g-md-3">
                        {listProjects.map((item, idx) => (
                            <>
                            <div className="col-md-3 col-6" style={{height: "15rem"}}>
                                <Card2 title={item.title} category={item.category}
                                tags={item.tags} img={item.image} url={item.url} logo={item.logo} />
                            </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default Project;