import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-no-bg.png";
import profileImg from "../assets/profile.png";

const Navbar: React.FC = () => {
    return (
        <div className="container-fluid nav-bar bg-transparent">
            <div className="total-navbar">
                <div className="container-fluid d-flex gap-1 px-0 navbarnya" style={{ fontFamily: "Teko", letterSpacing: "3px", fontSize: "1.5rem" }}>
                    <nav className="navbar navbar-expand-lg navbar-utama navbar-dark bg-dark py-0 px-3 w-100 me-3">
                        <a className="navbar-brand d-flex align-items-center text-center gap-3" href="/">
                            <img className="icon" src={logo} alt="faftech" style={{ width: "50px" }} />
                            <h1 className="text-light m-0 pt-1" style={{ fontFamily: "Teko", fontSize: "medium2em" }}>FAF-Tech</h1>
                        </a>
                        <button type="button"
                        className="navbar-toggler toggle-utama"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-label="Toggle navigation" style={{ zIndex: 999, borderStyle: "none", transform: "skew(-20deg)" }}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse" id="navbarCollapse">
                            <ul className="navbar-nav ms-auto gap-4">
                                <li className="nav-item"><Link to="/" className="nav-link py-3">HOME</Link></li>
                                <li className="nav-item"><Link to="/about" className="nav-link py-3">ABOUT</Link></li>
                                <li className="nav-item"><Link to="/project" className="nav-link py-3">PROJECT</Link></li>
                                <li className="nav-item"><Link to="/contact" className="nav-link py-3">CONTACT</Link></li>
                                <li className="tambahane text-center" style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}><a className="btn btn-outline-light" href="/admin/login">VIEW DATABASE</a></li>
                            </ul>
                        </div>
                        <span className="tambahan-nav" style={{ position: "absolute", right: "-15px", top: 0, bottom: 0, width: "30px", background: "inherit", transform: "skewX(-20deg)", zIndex: 0 }}></span>
                    </nav>
                    <div className="nav-profile d-flex gap-1 p-0 m-0">
                        <nav className="navbar navbar-expand-lg navbar-profile navbar-dark bg-transparent p-0 d-grid gap-1" style={{ transform: "skew(-20deg)" }}>
                            <a href="/admin/login" className="btn btn-primary rounded-0 px-4 py-0"><div className="mt-1 ms-1" style={{ transform: "skew(20deg)", fontSize: "20px", fontWeight: 600 }}>ADMIN</div></a>
                            <a href="/admin/login" className="btn btn-primary rounded-0 py-0"><div className="mt-1 ms-1" style={{ transform: "skew(20deg)", fontSize: "20px", fontWeight: 600 }}>CRUD</div></a>
                        </nav>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 ms-3">
                            <a href="#" className="dropdown-toggle ps-1 pe-3" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ zIndex: 999 }}>
                                <img src={profileImg} style={{ width: "30px" }} alt="profile" />
                            </a>
                            <span className="tambahan-nav" style={{ position: "absolute", left: "-15px", top: 0, bottom: 0, width: "50px", background: "inherit", transform: "skewX(-20deg)" }}></span>
                            <ul className="menu-profile dropdown-menu dropdown-menu-end bg-primary" aria-labelledby="profileDropdown">
                                <li>
                                    <section className="bg-primary">
                                        <div className="container">
                                            <div className="row d-flex justify-content-center align-items-center">
                                                <div className="col-md-12 col-xl-12">
                                                    <div className="card" style={{ borderRadius: "15px" }}>
                                                        <div className="card-body text-center">
                                                            <div className="mt-3 mb-4"><img src={profileImg} className="rounded-circle img-fluid" style={{ width: "100px" }} alt="profile" /></div>
                                                            <h4 className="mb-2 px-5">John Doe</h4>
                                                            <p className="text-muted mb-4">john@example.com</p>
                                                            <div className="d-flex justify-content-between text-center mt-3 mb-2">
                                                                <a href="/account/login" className="btn btn-outline-dark w-100 btn-rounded btn-md loginnya" style={{ fontFamily: "Heebo" }}>Login</a>
                                                                <a href="/account/edit" className="btn btn-outline-dark w-100 btn-rounded btn-md editnya" style={{ fontFamily: "Heebo" }}>Edit</a>
                                                                <a href="/account/logout" className="btn btn-outline-primary w-100 btn-rounded btn-md logoutnya" style={{ fontFamily: "Heebo" }}>Logout</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
