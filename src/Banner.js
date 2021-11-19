import React from 'react'

export default function Banner() {
    return (
        <div className="banner-area" id="home">
        <div className="banner-table">
          <div className="banner-table-cell">
            <div className="welcome-text">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-xs-12">
                    <section className="intro animate-scale">
                      <div className="img-area">
                        <img src="images/home/mr.PNG" alt="" />
                      </div>
                      <h3> Hi, I'm Joshua Ouma</h3>
                      <h1 className="ah-headline">
                        <span className="ah-words-wrapper">
                          <b className="is-visible">Fullstack developer</b>
                          <b>JavaScript Enthusiast</b>
                          <b>PHP Developer</b>
                          <b>React Developer</b>
                          <b>SQL Expert</b>
                        </span>
                      </h1>
                    </section>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
