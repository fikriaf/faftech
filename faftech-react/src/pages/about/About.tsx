import React from "react";
import "./about.css";
import BackgroundCarousel from "../../components/BackgroundCarousel";

const About: React.FC = () => {
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
        <>
        <div className="container-fluid contain d-flex flex-column">
            <div className="container mt-5 d-grid gap-5">
                <div className="text-end mb-3 top-sosial">
                    <a href="mailto:fikriarmia27@gmail.com">
                        <img
                        src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
                        alt="Email"
                        />
                    </a>
                    <a
                        href="https://osc.medcom.id/community/author/barayaroas@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                        src="https://img.shields.io/badge/Blogger-FF5722?style=for-the-badge&logo=blogger&logoColor=white"
                        alt="Blogger"
                        />
                    </a>
                    <a
                        href="https://linkedin.com/in/fikri-armia-fahmi-b373b3288"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                        src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                        alt="LinkedIn"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/fikriaf27"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                        src="https://img.shields.io/badge/Instagram-%23E4405F?style=for-the-badge&logo=Instagram&logoColor=white"
                        alt="Instagram"
                        />
                    </a>
                    <a
                        href="https://discord.gg/fighterfire0346"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                        src="https://img.shields.io/badge/Discord-%235865F2?style=for-the-badge&logo=discord&logoColor=white"
                        alt="Discord"
                        />
                    </a>
                </div>

                <div className="d-grid gap-5 nama">
                    <h1 className="text-center">
                        <img
                        src="https://readme-typing-svg.herokuapp.com/?font=Oswald&size=35&color=0712FFFF&center=true&vCenter=true&width=600&height=70&duration=5000&lines=Hi;+I'm+🅵🅸🅺🆁🅸+🅰🆁🅼🅸🅰+🅵🅰🅷🅼🅸;"
                        alt="Typing Name"
                        />
                    </h1>
                    <h1 className="text-center">
                        Hi{' '}
                        <img
                        className="tangan"
                        src="https://user-images.githubusercontent.com/72663882/171687151-bb31c996-c9d2-49c8-b593-734946893b23.gif"
                        alt="waving hand gif"
                        width={40}
                        />
                        , I'm 🅵🅸🅺🆁🅸 🅰🆁🅼🅸🅰 🅵🅰🅷🅼🅸
                    </h1>
                    <h3 className="text-center">
                        I Studied The Fields of Artificial Intelligence, Backend Development, and Frontend Development
                    </h3>
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
                    <img
                        alt="MyPhoto"
                        src="../../assets/fikri.jpg"
                        style={{ width: "30%" }}
                    />
                    <ul className="d-grid gap-3 list-unstyled ms-3">
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

                <h2>
                    <img
                        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Technologist.png"
                        alt="Technologist"
                        width={30}
                        height={30}
                    />{' '}
                    Connect with me:
                </h2>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        {[
                        { name: "Github", href: "https://github.com/fikriaf", icon: "fab fa-github" },
                        { name: "LinkedIn", href: "https://linkedin.com/in/fikri-armia-fahmi-b373b3288", icon: "fab fa-linkedin-in" },
                        { name: "Instagram", href: "https://www.instagram.com/fikriaf27", icon: "fab fa-instagram" },
                        { name: "Blog", href: "https://osc.medcom.id/community/author/barayaroas@gmail.com", icon: "fab fa-blogger" },
                        { name: "Discord", href: "https://discord.gg/fighterfire0346", icon: "fab fa-discord" },
                        ].map((item, index) => (
                        <div className="col-12 col-md-6 col-lg-2 my-2" key={index}>
                            <a
                            className={`btn w-100 btn-outline-dark ${index % 2 === 0 ? "bg-secondary text-end" : "text-start"}`}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <div className="d-flex justify-content-between align-items-center">
                                <div>{item.name}</div>
                                <div><i className={item.icon}></i></div>
                            </div>
                            </a>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="">
                <BackgroundCarousel />
                <h2 className="text-center d-block fw-bold w-100 bg-info py-4 mt-5">
                
                Bahasa Pemrograman dan Framework
                </h2>

                <div className="accordion mx-3 mt-4 shadow" id="toolsAccordion">
                    {Object.entries(categorizedTools).map(([category, tools], index) => (
                        <div className="accordion-item" key={category}>
                            <h2 className="accordion-header text-primary" id={`heading-${category}`}>
                                <button
                                className="accordion-button border-0 bg-primary collapsed fw-bold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${category}`}
                                aria-expanded="false"
                                aria-controls={`collapse-${category}`}
                                >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            </h2>
                            <div
                            id={`collapse-${category}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`heading-${category}`}
                            data-bs-parent="#toolsAccordion"
                            >
                                <div className="accordion-body border border-info">
                                    <div className="row">
                                        {tools.map((tool, i) => (
                                        <div
                                            key={i}
                                            className="col-sm-1 col-3 skill bg-white d-grid align-items-center text-center py-2 border tool"
                                        >
                                            <div className="icons">
                                            <img src={tool.icon} alt={tool.name} width={45} height={45} />
                                            </div>
                                            <p className="mt-1 mb-0" style={{ fontSize: "0.7rem" }}>
                                            <strong>{tool.name}</strong>
                                            </p>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
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
                </div>
            </div>
        </div>
        </>
    );
};

export default About;
