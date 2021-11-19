import React from 'react'

export default function Contact() {
    return (
        <div id="contact" className="contact-area section-padding">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>HELLO <span> WORLD</span></h2>
            </div>
          </div>
          <div className>
            <div>
              <div className="right-contact contact-data">
                
                <div className="right-contact-text">
                  <a href="tel: +254707513731">
                    <i className="fa fa-phone" />
                    <h2>Phone</h2>
                    <p>+(254) 707 513731</p>
                  </a>
                </div>
                
                <div className="right-contact-text">
                  <a href="https://github.com/Joshua360" target="_blank">
                    <i className="fab fa-github" />
                    <h2>GitHub</h2>
                  </a>
                </div>
                <div className="right-contact-text">
                  <a target="_blank" href="./me/Joshua-CV.pdf">
                    <i className="fas fa-file-pdf" />
                    <h2>Resume</h2>
                  </a>
                </div>
                <div className="right-contact-text">
                  <a href="mailto:joshuaowuor27@gmail.com" target="_blank">
                    <i className="fas fa-envelope-open" />
                    <h2>eMAIL</h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
