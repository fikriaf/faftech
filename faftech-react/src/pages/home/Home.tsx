import React from "react";
import { Link } from 'react-router-dom';
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import ListGithubSection from "../../components/ListGithub";
import ListArticlesection from "../../components/ListArticles";
import ListOtherArticleSection from "../../components/ListOtherArticles";
import DropText from "../../components/DropText";
import img1 from "../../assets/fikri.jpg";
import img2 from "../../assets/fikri2.jpg";
import img3 from "../../assets/ai1.webp";
import img4 from "../../assets/kuantum1.webp";
import img5 from "../../assets/kuantum2.webp";

const Index: React.FC = () => {
    const images = [img1, img2, img3, img4, img5];
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
        <>
            {/* CONTENT */}
            <div className="container-fluid header bg-transparent p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 headnya">
                        <div className="px-3">
                            <h1 className="head-1 mb-3 d-grid w-100" style={{ fontFamily: "Heebo", fontWeight: 800 }}>
                                <div className="d-md-block d-flex align-items-center justify-content-center gap-2">
                                    Hello <img src="https://user-images.githubusercontent.com/72663882/171687151-bb31c996-c9d2-49c8-b593-734946893b23.gif" width={30} alt="" />
                                </div>
                                <div>
                                    I'm <span ref={el} style={{ whiteSpace: "pre" }} />
                                </div>
                            </h1>
                            <p className="mb-4 pb-2" style={{ fontFamily: "Heebo", fontSize: "1.2rem", textAlign: "justify", fontWeight: "500"}}>
                            I am a passionate and versatile software developer with strong experience in <span className="text-primary">Full-Stack Web Development</span>, <span className="text-primary">AI Engineering</span>, and <span className="text-primary">Data Science</span>. I have developed various web applications using technologies such as React, Laravel, Express, MySQL, MongoDB, PyTorch, and other.
                            </p>
                            <Link to="/about" className="btn BtnScale btn-primary py-3 px-5 me-3">Read More</Link>
                        </div>
                    </div>

                    <div className="col-md-6 animated fadeIn">
                        <div id="customBootstrapCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                >
                                    <div className="custom-carousel-item">
                                        <img src={img} className="img-fluid" alt={`Slide ${index + 1}`} />
                                    </div>
                                </div>
                                ))}
                            </div>
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
                                <div className="d-flex flex-column gap-2">
                                    <button
                                        className="carousel-control-prev bg-primary"
                                        type="button"
                                        data-bs-target="#customBootstrapCarousel"
                                        data-bs-slide="prev"
                                    >
                                        <span className="panah left" aria-hidden="true"></span>
                                    </button>
                                    <button
                                        className="carousel-control-next bg-primary"
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
            <div className="container-fluid bg-primary wow fadeIn" data-wow-delay="0.1s" style={{ padding: "35px" }}>
                <div className="container">
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2" style={{ fontFamily: "inherit" }}>
                            <div className="col-md-12">
                                <select className="form-select border-0 py-3">
                                    <option selected>Select Category</option>
                                    <option value="1">Github</option>
                                    <option value="2">Article [OSC]</option>
                                    <option value="3">Article [Lainnya]</option>
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

            <div className="container-xxl py-5">
                <div className="container">
                    {/* List Github Repo */}
                    <div
                    className="text-center mx-auto mb-5 wow fadeInUp"
                    id="github-section"
                    data-wow-delay="0.1s"
                    style={{ maxWidth: 800, fontFamily: "Heebo" }}
                    >
                        <h1 className="mb-3" style={{ fontWeight: 600 }}>
                            Github
                        </h1>
                        <p>
                            Berikut ini beberapa proyek yang saya kembangkan dan publikasikan di
                            GitHub. Proyek-proyek tersebut mencakup berbagai bidang, mulai dari
                            aplikasi berbasis AI hingga platform web yang inovatif.
                        </p>
                    </div>
                    <ListGithubSection />

                    <hr />
                    
                    {/* List Articles */}
                    <div
                        className="text-center mx-auto mt-5 mb-5 wow fadeInUp"
                        id="osc-article-section"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 600, fontFamily: "Heebo" }}
                    >
                        <h1 className="mb-3">Artikel [OSC]</h1>
                        <p>
                        Berikut ini artikel-artikel saya yang sudah publish di media OSC Community
                        </p>
                    </div>
                    <ListArticlesection />

                    <hr />

                    {/* List Other Articles */}
                    <div className="text-center mx-auto mt-5 mb-5 wow fadeInUp" id="lainnya-section" data-wow-delay="0.1s" style={{maxWidth: 700, fontFamily: "Heebo" }}>
                        <h1 className="mb-3">Artikel [Lainnya]</h1>
                        <p>Berikut ini artikel-artikel saya yang sudah publish di media Kumparan, Geotimes, dan GNFI.</p>
                    </div>
                    <ListOtherArticleSection />

                </div>
            </div>

            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img position-relative overflow-hidden p-5 pe-0">
                        <img className="img-fluid w-100" src="../assets/fikri5.jpg" alt="Fikri Armia Fahmi" />
                    </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1
                        className="mb-4"
                        style={{ fontFamily: 'Heebo', fontWeight: 700 }}
                    >
                        Nama Saya <strong className="text-primary">Fikri Armia Fahmi</strong>
                    </h1>
                    <DropText
                    text="Saya telah mengembangkan berbagai proyek yang mencakup banyak bidang teknologi, mulai dari kecerdasan buatan, algoritma, hingga platform berbasis web. Proyek-proyek ini bertujuan untuk memberikan solusi praktis, efisien, dan inovatif yang dapat diaplikasikan di berbagai sektor."
                    className="mb-4"
                    style={{ textAlign: 'justify' }}
                    />

                    <p><i className="fa fa-check text-primary me-3"></i><strong>Artificial Intelligence</strong></p>
                    <p><i className="fa fa-check text-primary me-3"></i><strong>Frontend Development</strong></p>
                    <p><i className="fa fa-check text-primary me-3"></i><strong>Backend Development</strong></p>
                    <a className="btn BtnScale btn-primary py-3 px-3 mt-3" href="./about/about.php">See The Project</a>
                    </div>
                </div>
                </div>
            </div>
            {/* About End */}

            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="bi bi-arrow-up"></i>
            </a>
        </>
    );
};

export default Index;
