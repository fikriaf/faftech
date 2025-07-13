import React from "react";
import PageWrapper from "../../components/PageWrapper";
import Card2 from "../../components/Card2";
import TrueFocus from "../../components/TrueFocus";

const Project: React.FC = () => {
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
                            blurAmount={5}
                            borderColor="var(--primary)"
                            animationDuration={2}
                            pauseBetweenAnimations={1}
                        />
                    </div>
                    {/* Card */}
                    <div className="mt-5 row g-3">
                        {[...Array(8)].map((_, idx) => (
                            <div className="col-md-3" style={{height: "15rem"}}>
                                <Card2 />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default Project;