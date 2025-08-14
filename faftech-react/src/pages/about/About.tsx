import React from "react";
import "./about.css";
import PageWrapper from "../../components/PageWrapper";
import BackgroundCarousel from "../../components/BackgroundCarousel";
import ButtonAnimated from "../../components/ButtonAnimated";
import CurvedLoop from "../../components/CurvedLoop";
import MyImage from "../../assets/fikri2.jpg"
import MyImageNoBg from "../../assets/fikri2-Photoroom.png"
import ProfileCard from "../../components/ProfileCard";
import Card3 from "../../components/Card3";
import DarkVeil from "../../components/DarkVeil";
import ExperienceComponent from "../../components/Experience";

import {
    FaCode,
    FaServer,
    FaDatabase,
    FaTools,
    FaPencilRuler,
    FaDesktop
} from 'react-icons/fa';

const About: React.FC = () => {
    const bgLogo = [
    "#fd7e14", // oranye terang (Bootstrap orange)
    "#198754", // hijau stabil (Bootstrap success)
    "#dc3545", // merah tajam (Bootstrap danger)
    "#0dcaf0", // cyan cerah (Bootstrap info)
    "#6f42c1",  // ungu gelap (Bootstrap purple)
    "#20c997"
    ]

    const logoCategory = [
        <FaCode />,
        <FaDesktop />,
        <FaDatabase />,
        <FaTools />,
        <FaPencilRuler />,
        <FaServer />
    ]
    
    const categorizedTools = {
        languages: [
            { name: "Python", icon: "https://techstack-generator.vercel.app/python-icon.svg" },
            { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
            { name: "JavaScript", icon: "https://techstack-generator.vercel.app/js-icon.svg" },
            { name: "TypeScript", icon: "https://techstack-generator.vercel.app/ts-icon.svg" },
            { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
            { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
            { name: "C", icon: "https://skillicons.dev/icons?i=c" },
            { name: "Java", icon: "https://techstack-generator.vercel.app/java-icon.svg" },
        ],

        frameworks: [
            { name: "React", icon: "https://techstack-generator.vercel.app/react-icon.svg" },
            { name: "Laravel", icon: "https://skillicons.dev/icons?i=laravel" },
            { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
            { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
            { name: "Filament", icon: "https://pbs.twimg.com/profile_images/1619675369333788674/FVauPXtT_400x400.jpg" },
            { name: "PyTorch", icon: "https://skillicons.dev/icons?i=pytorch" },
            { name: "Sklearn", icon: "https://skillicons.dev/icons?i=sklearn" },
            { name: "NLTK", icon: "https://miro.medium.com/v2/resize:fit:592/1*YM2HXc7f4v02pZBEO8h-qw.png" },
            { name: "OpenCV", icon: "https://skillicons.dev/icons?i=opencv" },
            { name: "Tkinter", icon: "https://i2.wp.com/iot4beginners.com/wp-content/uploads/2020/04/DxD1hLgUwAAo-Od.jpg?fit=375%2C422&ssl=1" },
            { name: "Pygame", icon: "https://user-images.githubusercontent.com/46412508/170405943-e75458ec-6cb4-462e-91ba-43c861a3d6cf.png" },

        ],

        databases: [
            { name: "MySQL", icon: "https://techstack-generator.vercel.app/mysql-icon.svg" },
            { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
            { name: "phpMyAdmin", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/PhpMyAdmin_logo.svg/1200px-PhpMyAdmin_logo.svg.png" },
            { name: "DBeaver", icon: "https://dbeaver.io/wp-content/uploads/2015/09/beaver-head.png" },
        ],

        tools: [
            { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
            { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
            { name: "NetBeans", icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg" },
            { name: "Laragon", icon: "https://cdn.worldvectorlogo.com/logos/laragon.svg" },
            { name: "Kaggle", icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png" },
            { name: "Colab", icon: "https://img.icons8.com/?size=512&id=lOqoeP2Zy02f&format=png" },
            { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
        ],

        design: [
            { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
            { name: "Canva", icon: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxo4K81Ei7WzcnqEk8W.MgwbTd_YqcrKt3ED_2JioHRslZyvQSJ7Ptwb0.k9awp_ldXhvqCsS38auQNzE.3mKc9U-&format=source" },
        ],

        hardware: [
            { name: "Arduino", icon: "https://skillicons.dev/icons?i=arduino" },
        ]
    };


    return (
        <PageWrapper direction="right">
            <div className="container-fluid contain d-flex flex-column">
                <div className="container mt-5 d-grid gap-5">
                    <div className="text-end mb-3 top-sosial d-flex justify-content-end gap-2 flex-wrap">
                        <ButtonAnimated />
                    </div>

                    <div className="d-grid gap-5 nama overflow-x-hidden">
                        <h1 className="text-center">
                            <img
                            src="https://readme-typing-svg.herokuapp.com/?font=Oswald&size=35&color=0712FFFF&center=true&vCenter=true&width=600&height=70&duration=5000&lines=Hi;+I'm+🅵🅸🅺🆁🅸+🅰🆁🅼🅸🅰+🅵🅰🅷🅼🅸;"
                            alt="Typing Name"
                            />
                        </h1>
                        <h1 className="text-center BgBlurUnderLine">
                            Hi{' '}
                            <img
                            className="tangan"
                            src="https://user-images.githubusercontent.com/72663882/171687151-bb31c996-c9d2-49c8-b593-734946893b23.gif"
                            alt=""
                            width={40}
                            />
                            , I'm 🅵🅸🅺🆁🅸 🅰🆁🅼🅸🅰 🅵🅰🅷🅼🅸
                        </h1>

                        <div className="mx-3 text-dark">
                            <CurvedLoop
                            marqueeText="Artificial Intelligence ✦ Backend Development ✦ Frontend Development ✦"
                            speed={5}
                            curveAmount={100}
                            direction="left"
                            interactive={true}
                            className="text-dark BgBlurNormal"
                            />
                        </div>
                    </div>

                    <div className="text-center overflow-hidden">
                        <img
                            className="img-fluid"
                            src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"
                            style={{ width: "100%" }}
                            alt="Animated Banner"
                        />
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center foto" style={{ fontFamily: "Heebo" }} >
                        <ProfileCard
                        name="Fikri Armia Fahmi"
                        title="Full-Stack Web & AI Engineer"
                        handle="fikriaf"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl={MyImageNoBg}
                        iconUrl={MyImage}
                        miniAvatarUrl={MyImage}
                        showUserInfo={true}
                        enableTilt={false}
                        onContactClick={() => console.log('Contact clicked')}
                        />
                        <ul className="d-grid shadow shadow-lg gap-3 mt-3 list-unstyled ms-3" style={{
                            backdropFilter: 'blur(10px)',
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                            padding: '0.5rem',
                            borderRadius: '0.5rem',
                            borderBottom: "2px solid #0d6efd",
                            borderTop: "2px solid #0d6efd",
                            minHeight: "27.5rem"
                        }}>
                            <li>
                                🔭 I’m currently studying at{' '}
                                <a href="https://upj.ac.id/" target="_blank" rel="noopener noreferrer">
                                    Universitas Pembangunan Jaya
                                </a>
                            </li>
                            <li>
                                🌱 I’m currently learning{' '}
                                <strong>
                                    Python, HTML, CSS, Javascript, Typescript, PHP, C, C++, AHK, SQL
                                </strong>
                            </li>
                            <li>
                                🤝 I’m looking for help with{' '}
                                <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">
                                    stackoverflow
                                </a>
                                ,{' '}
                                <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">
                                    w3schools
                                </a>
                            </li>
                            <li>
                                👨‍💻 All of my projects are available at{' '}
                                <a href="https://github.com/fikriaf" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                📝 I regularly write articles on{' '}
                                <a
                                    href="https://osc.medcom.id/community/author/barayaroas@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    OSC Medcom
                                </a>
                            </li>
                                <li>
                                💬 Ask me about{' '}
                                <strong>
                                    Keras, Tensorflow, PyTorch, NLTK, OpenCV, Pygame, Bootstrap,
                                    Node.js, Express.js, Arduino, MySQL, MongoDB
                                </strong>
                            </li>
                            <li>
                                📫 How to reach me <strong>fikriarmia27@gmail.com</strong>
                            </li>
                            <li>
                                ⚡ Fun fact <strong>I think I overthinking</strong>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* My Education & Career Journey */}
                <div className="w-100 d-flex justify-content-center">
                    <ExperienceComponent />
                </div>

                {/* Skills */}
                <BackgroundCarousel title="Skills" />
                <div className="container d-flex my-5 justify-content-center">
                    <div className="row gap-md-5 gap-3 d-flex justify-content-center">
                        <Card3 />
                    </div>
                </div>
                <div className="position-relative" style={{maxHeight: "40rem"}}>
                    {/* Bg-hook */}
                    {/* <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 0, backgroundSize: 'cover' }}>
                        <DarkVeil
                        />
                    </div> */}
                    <div className="accordion bg-transparent mb-3 mt-4 mx-5 shadow shadow-lg position-relative overflow-hidden" id="toolsAccordion">
                        {/* Video background */}
                        {/* <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                            style={{ zIndex: 0, opacity: 0.3 }} // kamu bisa atur opacity sesuka hati
                        >
                            <source src="/path/to/your-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}

                        {/* bg-image */}
                        {/* <div
                            className="position-absolute top-0 start-0 w-100 h-100"
                            style={{
                            backgroundImage: `url('/logo.webp')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 0.3,
                            zIndex: 0,
                            height: "fit-content",
                            }}
                        ></div> */}

                        
                        {Object.entries(categorizedTools).map(([category, tools], index) => {
                        const isLanguage = category === "languages";
                        return (
                            <div className="accordion-item bg-transparent" key={category}>
                                <h2 className="accordion-header bg-transparent shadow shadow-bottom" id={`heading-${category}`}>
                                    <button
                                    className={`d-flex align-items-center gap-2 accordion-button border-0 bg-transparent shadow-none text-primary p-3 ${isLanguage ? '' : 'collapsed'}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse-${category}`}
                                    aria-expanded="false"
                                    aria-controls={`collapse-${category}`}
                                    style={{fontSize: "1.5rem", fontFamily: "Heebo", fontWeight: "600"}}
                                    >
                                        <div className="d-flex align-items-center text-white rounded"
                                        style={{padding: "1rem", backgroundColor: bgLogo?.[index]}}
                                        >
                                            {logoCategory?.[index]}
                                        </div>
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </button>
                                </h2>
                                <div
                                id={`collapse-${category}`}
                                className={`accordion-collapse collapse ${isLanguage ? 'show' : ''}`}
                                aria-labelledby={`heading-${category}`}
                                data-bs-parent="#toolsAccordion"
                                >
                                    <div className="accordion-body border-top">
                                        <div className="row">
                                            {tools.map((tool, i) => (
                                            <div
                                                key={i}
                                                className="col-sm-1 col-3 skill d-grid align-items-center text-center py-2 tool"
                                            >
                                                <div className="icons">
                                                <img src={tool.icon} alt={tool.name} width={45} height={45} />
                                                </div>
                                                <p className="mt-1 mb-0" style={{ fontSize: "0.5rem" }}>
                                                <strong>{tool.name}</strong>
                                                </p>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
                <div>
                    <h2 className="text-center d-block fw-bold w-100 bg-image bg-primary position-relative overflow-hidden py-4 mt-5">
                        Skill Analyze
                    </h2>

                    <div className="text-center stat mb-5">
                        <img
                            className="lang"
                            src="https://github-readme-mwendwa.vercel.app/api/top-langs/?username=fikriaf&layout=compact&count_private=true&theme=blue-green&title_color=00b3ff"
                            alt="Top languages"
                        />
                        <div>
                            <img
                            src="https://bad-apple-github-readme.vercel.app/api?username=fikriaf&show_icons=true&count_private=true&line_height=25&icon_color=00b3ff&theme=blue-green&title_color=00b3ff"
                            alt="Fikri's github stats"
                            />
                            <img
                            src="https://streak-stats.demolab.com/?user=fikriaf&count_private=true&theme=blue-green&title_color=00b3ff"
                            alt="Fikri's current streak"
                            />
                        </div>
                        <div>
                            <img src="https://camo.githubusercontent.com/6dae8c63f51b9e31403614ae50f1cb8c1bbeaf5d095ce43b4c72f7fa1e2a7122/68747470733a2f2f6769746875622d726561646d652d61637469766974792d67726170682e76657263656c2e6170702f67726170683f757365726e616d653d66696b72696166267468656d653d72656163742d6461726b" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="bi bi-arrow-up"></i>
            </a>
        </PageWrapper>
    );
};

export default About;
