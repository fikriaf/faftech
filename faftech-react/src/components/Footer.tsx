import React from "react"
import FormSubscribe from "./FormSubscribe";

const Footer: React.FC = () => {
    
    return (
        <div
            className="container-fluid bg-dark text-white-50 footer pt-3 wow fadeIn"
            data-wow-delay="0.1s"
            style={{ fontFamily: 'Teko' }}
        >
            <div className="container h-100 pb-3">
                <div className="row w-100 h-100 g-2 py-2 m-0 d-flex align-items-center">
                    <div className="col-md-8 row g-1">
                        <div className="col-lg-6 col-md-6">
                            <h5 className="text-white mb-4">Contact Me</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Jl. Cendrawasih VI, Sawah Baru, Ciputat</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+62 8953 4850 5284</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>fikriarmia27@gmail.com</p>
                        </div>
                        {/* Kolom Kanan */}
                        <div className="col-lg-6 col-md-6 d-flexbox w-100 justify-content-end align-items-center">
                            <a className="btn btn-outline-light btn-social me-2 BtnScale" href="https://github.com/fikriaf" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            <a className="btn btn-outline-light btn-social me-2 BtnScale" href="https://www.instagram.com/fikriaf27" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-light btn-social me-2 BtnScale" href="https://linkedin.com/in/fikri-armia-fahmi-b373b3288" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-light btn-social me-2 BtnScale" href="https://osc.medcom.id/community/author/barayaroas@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-blogger"></i></a>
                            <a className="btn btn-outline-light btn-social me-2 BtnScale" href="https://discord.gg/halomasbuang" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <FormSubscribe />
                    </div>
                </div>
                <div className="text-wrap w-100 text-center">
                    <hr />
                    <p className="p-0 m-0">© 2024 Fikri Armia Fahmi - FAF-Tech. All rights reserved. Unauthorized use of this content is prohibited.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;