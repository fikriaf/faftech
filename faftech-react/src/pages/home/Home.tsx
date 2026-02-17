// 1. Library eksternal
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

// 2. CSS
import "./Home.css";

// 3. Komponen internal
import PageWrapper from "../../components/PageWrapper";
import ListGithubSection from "../../components/ListGithub";
import ListArticlesection from "../../components/ListArticles";
import DropText from "../../components/DropText";
import TextPressure from "../../components/TextPressure";
import RotatingText from "../../components/RotatingText";
import AnimatedContent from "../../components/AnimateContent";
import FadeContent from "../../components/FadeContent";
import ButtonAnimated2 from "../../components/ButtonAnimated2";
import GitHubRepoList from "../../components/GithubRepoList";
import ButtonCool from "../../components/ButtonCool";

// 4. Aset (gambar)
import img1 from "../../assets/fikri.jpg";
import img2 from "../../assets/fikri2.jpg";
import img3 from "../../assets/ai1.webp";
import img4 from "../../assets/kuantum1.webp";
import img5 from "../../assets/kuantum2.webp";
import fotoHima from "../../assets/fikri5.jpg";
import newImg1 from "../../assets/new_image/IMG-20260126-WA0025.jpg.jpeg";
import newImg2 from "../../assets/new_image/IMG-20251212-WA0068.jpg.jpeg";
import newImg3 from "../../assets/new_image/IMG_20251216_125933_320.jpg.jpeg";
import newImg4 from "../../assets/new_image/IMG_20251210_175414_194.jpg.jpeg";
import newImg5 from "../../assets/new_image/IMG_20251208_124201_437.jpg.jpeg";
import newImg6 from "../../assets/new_image/IMG_20251124_172906_868.jpg.jpeg";
import newImg7 from "../../assets/new_image/IMG_20251005_171318_676.jpg.jpeg";
import newImg8 from "../../assets/new_image/IMG_20251002_134920_227.jpg.jpeg";
import newImg9 from "../../assets/new_image/IMG_20250915_195652_573.jpg.jpeg";
import newImg10 from "../../assets/new_image/fikri0.jpg";


const Index: React.FC = () => {
    const images = [img1, newImg1, newImg2, newImg3, newImg4, newImg5, newImg6, newImg7, newImg8, newImg9, newImg10];
    const el = useRef<HTMLSpanElement | null>(null);
    const typedInstance = useRef<Typed | null>(null);

    useEffect(() => {
        typedInstance.current = new Typed(el!.current, {
            strings: [
            " <span class='text-primary'>F</span>ikri <span class='text-primary'>A</span>rmia <span class='text-primary'>F</span>ahmi"
            ],
            typeSpeed: 50,
            backDelay: 1500,
            backSpeed: 50,
            loop: true
        })
        return () => {
            typedInstance.current?.destroy()
        }
    }, [])

    return (
        <PageWrapper direction="left">
            {/* CONTENT */}
            <div className="container-fluid header bg-transparent p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 headnya">
                        <div className="px-3">
                            <h1 className="head-1 mb-3 d-grid w-100" style={{ fontFamily: "Heebo", fontWeight: 800 }}>
                                <div className="d-md-block d-flex align-items-center justify-content-center gap-2">
                                    <div style={{position: 'relative'}}>
                                        <AnimatedContent
                                        distance={150}
                                        direction="horizontal"
                                        reverse={true}
                                        duration={1.2}
                                        ease="bounce.out"
                                        initialOpacity={0.2}
                                        animateOpacity
                                        scale={1.1}
                                        threshold={0.2}
                                        delay={0.3}
                                        >
                                        <TextPressure
                                            text="Hello!"
                                            flex={true}
                                            alpha={false}
                                            stroke={false}
                                            width={true}
                                            weight={true}
                                            italic={true}
                                            textColor="#000"
                                            strokeColor="#000"
                                            minFontSize={80}
                                        />
                                        </AnimatedContent>
                                    </div>
                                </div>
                                <div style={{
                                    backdropFilter: 'blur(10px)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                    padding: '0.5rem',
                                    borderRadius: '0.5rem',
                                    borderBottom: "2px solid"
                                }}>
                                    I'm <span ref={el} style={{ whiteSpace: "pre" }} />
                                </div>
                            </h1>
                            <p className="mb-4 pb-2" style={{ fontFamily: "Heebo", fontSize: "clamp(1rem, 2vw, 1.2rem)", textAlign: "justify", fontWeight: "500",
                                backdropFilter: 'blur(10px)',
                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                padding: '0.5rem',
                                borderRadius: '0.5rem'
                            }}>
                            I am a passionate and versatile software developer with strong experience in <span className="text-primary">Full-Stack Web Development</span>, <span className="text-primary">AI Engineering</span>, and <span className="text-primary">Data Science</span>. I have developed various web applications using technologies such as React, Laravel, Express, MySQL, MongoDB, PyTorch, and other.
                            </p>
                            <AnimatedContent
                            distance={5}
                            direction="vertical"
                            reverse={true}
                            duration={1.2}
                            ease="ease"
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.3}
                            >
                            {/* <ButtonAnimated2 text="Read More" link="/about" /> */}
                            <ButtonCool text="READ MORE" link="/about" />
                            {/* <Link to="/about" className="btn ms-2 BtnScale detail btn-primary py-3 px-5">Read More<span className="panahGo">&#8594;</span></Link> */}
                            </AnimatedContent>
                        </div>
                    </div>

                    <div className="col-md-6 animated fadeIn">
                        <div id="customBootstrapCarousel" className="carousel slide" data-bs-ride="carousel">
                            {/* <FadeContent blur={false} duration={100} easing="ease-out" initialOpacity={0}> */}
                                <div className="carousel-inner">
                                    {images.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                    >
                                        <div className="custom-carousel-item">
                                            <img src={img} className="img-fluid w-100" alt={`Slide ${index + 1}`} />
                                        </div>
                                    </div>
                                    ))}
                                    
                                </div>
                            {/* </FadeContent> */}
                            <div className="carousel-indicators">
                                {images.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#customBootstrapCarousel"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? 'active' : ''}
                                    aria-current={index === 0 ? 'true' : undefined}
                                    aria-label={`Slide ${index + 1}`}
                                />
                                ))}
                            </div>
                            <div className="carousel-nav">
                                <div className="d-flex flex-md-column gap-2 justify-content-between">
                                    <button
                                        className="carousel-control-prev BtnScale bg-primary"
                                        type="button"
                                        data-bs-target="#customBootstrapCarousel"
                                        data-bs-slide="prev"
                                    >
                                        <span className="panah left" aria-hidden="true"></span>
                                    </button>
                                    <button
                                        className="carousel-control-next BtnScale bg-primary"
                                        type="button"
                                        data-bs-target="#customBootstrapCarousel"
                                        data-bs-slide="next"
                                    >
                                        <span className="panah right" aria-hidden="true"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SECTION SEARCH */}
            <div className="container-fluid " data-wow-delay="0.1s" style={{ padding: "35px" , background: "linear-gradient(135deg, #0d6efd, #093c9c)"}}>
                <div className="container">
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2" style={{ fontFamily: "inherit" }}>
                            <div className="col-md-12">
                                <select className="form-select border-0 py-3">
                                    <option selected>Select Category</option>
                                    <option value="1">Github</option>
                                    <option value="2">Article</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-search btn-dark border-0 w-100 py-3">Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-3 pt-5">
                <div className="container">
                    {/* List Github Repo */}
                    <div
                    className="text-center w-100 mx-auto mb-5 wow fadeInUp"
                    id="github-section"
                    data-wow-delay="0.1s"
                    style={{ fontFamily: "Heebo",
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        padding: '0.5rem',
                        borderRadius: '0.5rem',
                        borderBottom: "2px solid #0d6efd"
                    }}
                    >
                        
                        <h1 className="mb-3" style={{ fontWeight: 600 }}>
                            Github <RotatingText
                            texts={['React', 'Laravel', 'PyTorch', 'LLM', 'Express', 'MongoDB', 'MySQL']}
                            mainClassName="px-2 sm:px-2 md:px-3 bg-primary d-inline-flex text-light overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded rounded-lg"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                            />
                        </h1>
                        <p>
                            Berikut ini beberapa proyek yang saya kembangkan dan publikasikan di
                            GitHub. Proyek-proyek tersebut mencakup berbagai bidang, mulai dari
                            aplikasi berbasis AI hingga platform web yang inovatif.
                        </p>
                    </div>
                    <GitHubRepoList username="fikriaf" />
                    {/* <ListGithubSection /> */}
                </div>
            </div>

            <div className="bg-white py-4 my-2 pt-2 shadow-lg">
                <div className="container-xxl">
                    <div className="container">
                        {/* List Articles */}
                        <div
                            className="text-center w-100 mx-auto mt-5 mb-5 wow fadeInUp"
                            id="osc-article-section"
                            data-wow-delay="0.1s"
                            style={{ fontFamily: "Heebo",
                                backdropFilter: 'blur(10px)',
                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                padding: '0.5rem',
                                borderRadius: '0.5rem',
                                borderBottom: "2px solid #0d6efd"
                            }}
                        >
                            <h1 className="mb-3">
                                Articles <RotatingText
                                texts={['OSC', 'Kumparan', 'Geotimes', 'GNFI']}
                                mainClassName="px-2 sm:px-2 md:px-3 bg-primary d-inline-flex text-light overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded rounded-lg"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2000}
                                />
                            </h1>
                            <p>
                            Berikut ini artikel-artikel saya yang sudah publish di media OSC Community, Kumparan, Geotimes, dan GNFI.
                            </p>
                        </div>
                        <ListArticlesection />
                    </div>
                </div>
            </div>

            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid w-100" src="/experience/robot1.jpeg" alt="Fikri Armia Fahmi" />
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1
                            className="mb-4 BgBlurUnderLine"
                            style={{ fontFamily: 'Heebo', fontWeight: 700 }}
                        >
                            Saya <strong className="text-gradient-primary-dark glow-primary">Fikri Armia Fahmi</strong>
                        </h1>
                        <div className="BgBlurNormal">
                            <DropText
                            text="Saya telah mengembangkan berbagai proyek yang mencakup banyak bidang teknologi, mulai dari kecerdasan buatan, algoritma, hingga platform berbasis web. Proyek-proyek ini bertujuan untuk memberikan solusi praktis, efisien, dan inovatif yang dapat diaplikasikan di berbagai sektor."
                            className="mb-4"
                            style={{ textAlign: 'justify' }}
                            />
                            <p><i className="fa fa-check text-primary me-3"></i><strong>Artificial Intelligence</strong></p>
                            <p><i className="fa fa-check text-primary me-3"></i><strong>Frontend Development</strong></p>
                            <p><i className="fa fa-check text-primary me-3"></i><strong>Backend Development</strong></p>
                        </div>
                        <ButtonAnimated2 text="Go Project" link="/project" />
                        {/* <a className="btn BtnScale detail btn-primary py-3 px-3 mt-3" href="./about/about.php">See The Project <span className="panahGo">&#8594;</span></a> */}
                    </div>
                </div>
                </div>
            </div>
            {/* About End */}

            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="bi bi-arrow-up"></i>
            </a>
        </PageWrapper>
    );
};

export default Index;
