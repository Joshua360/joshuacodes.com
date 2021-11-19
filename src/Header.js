import React from 'react'

export default function Header() {
    return (

      <div>

    <div class="loader_bg"><div class="loader"></div></div>

        <header className="nav-area navbar-fixed-top sticky_navigation">
        <div className="container">
          <div className="row">
            {/*main menu starts*/}
            <div className="col-md-12">
              <div className="main-menu">
                <div className="navbar navbar-cus">
                  <div className="navbar-header">
                    <a href="index.html" className="navbar-brand">
                      <img style={{width: '60px'}} src="images/vector/two.svg" />
                    </a>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div className="navbar-collapse collapse">
                    <nav>
                      <ul className="nav navbar-nav navbar-right">
                        <li className="active"><a className="smooth-menu" href="#home">Home</a></li>
                        <li><a className="smooth-menu" href="#about">About</a></li>
                        <li><a className="smooth-menu" href="#portfolio">Portfolio</a></li>
                        <li><a className="smooth-menu" href="#">Blog</a></li>
                        <li><a className="smooth-menu" href="#contact">Say hi</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            {/*main menu ends*/}
          </div>
        </div>
      </header>


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

      </div>

    )
}
