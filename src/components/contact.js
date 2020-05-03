import React from "react"

function Contact() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>
              <hr className="divider mt-4 mb-5"/>   
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-3 col-sm-6 ml-auto text-center mb-5 mb-lg-0">
              <i className="fab fa-github fa-3x mb-3 text-muted"></i>
              <a className="d-block" href="https://github.com/lmariemeehan" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
            <div className="col-lg-3 col-sm-6 text-center mb-5">
              <i className="fab fa-linkedin fa-3x mb-3 text-muted"></i>
              <a className="d-block" href="https://www.linkedin.com/in/laura-meehan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="col-lg-3 col-sm-6 mr-auto text-center mb-5">
              <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
              <a className="d-block" href="mailto:lmariemeehan@gmail.com">Email</a>
            </div>
            <div className="col-lg-3 col-sm-6 mr-auto text-center">
              <i className="fas fa-file fa-3x mb-3 text-muted"></i>
              <a className="d-block" href="https://resume.creddle.io/resume/esk2ehlp0oj" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact