import React from "react";
import PageWrapper from "../../components/PageWrapper";
import FormRGB from "../../components/FormRGB";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import "./contact.css";

const Contact: React.FC = () => {
  return (
    <PageWrapper direction="right">
        {/* CONTENT */}
        <div className="container-fluid p-0 min-vh-100 bg-transparent fw-semibold" style={{fontFamily: "Heebo"}}>
            <div className="container my-md-5 shadow p-5">
              <div className="d-md-flex d-grid gap-4 justify-content-center">
                <div className="d-flex flex-column gap-3">
                  <div className="d-grid gap-3">
                    <h1>Let's Connect</h1>
                    <span>I'm always excited to work on new projects and collaborate with amazing people. Feel free to reach out if you have any questions or just want to say hello!</span>
                  </div>
                  <div className="row g-1 gap-3 ButtonConnect">
                    <a className="col-12 col-sm-6 btn text-danger btn-light d-flex align-items-center gap-4 p-4 shadow"
                    href="mailto:fikriarmia27@gmail.com"
                    >
                      <FaEnvelope size={30} />
                      <div className="text-start">
                        <h6 className="fw-semibold">Email</h6>
                        <span>fikriarmia27@gmail.com</span>
                      </div>
                    </a>
                    <a className="col-12 col-sm-5 btn text-success btn-light d-flex align-items-center gap-4 p-4 shadow"
                    href="https://wa.me/62895348505284" target="_blank"
                    >
                      <FaWhatsapp size={30} />
                      <div className="text-start">
                        <h6 className="fw-semibold">WhatsApp</h6>
                        <span>wa.me/62895348505284</span>
                      </div>
                    </a>
                    <a className="col-12 col-sm-5 btn text-dark btn-light d-flex align-items-center gap-4 p-4 shadow"
                    href="https://github.com/fikriaf" target="_blank"
                    >
                      <FaGithub size={30} />
                      <div className="text-start">
                        <h6 className="fw-semibold">Github</h6>
                        <span>github.com/fikriaf</span>
                      </div>
                    </a>
                    <a className="col-12 col-sm-6 btn text-primary btn-light d-flex align-items-center gap-4 p-4 shadow"
                    href="https://www.linkedin.com/in/fikri-armia-fahmi-b373b3288" target="_blank"
                    >
                      <FaLinkedin size={30} />
                      <div className="text-start">
                        <h6 className="fw-semibold">LinkedIn</h6>
                        <span>Fikri Armia Fahmi</span>
                      </div>
                    </a>
                  </div>
                </div>
                <FormRGB />
              </div>
            </div>
        </div>
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
            <i className="bi bi-arrow-up"></i>
        </a>
    </PageWrapper>
  )
}

export default Contact;