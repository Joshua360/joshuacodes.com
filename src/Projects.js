import React from 'react'

export default class Projects extends React.Component {


  state={
    projects:[]
  }

  


  componentDidMount(){
    fetch("https://jcodes-backend.herokuapp.com/Projects")
    .then(response=>response.json())
    .then(data=> {
      console.log(data);
      this.setState(prevState=>{
        return {
          projects: data
        }
      })

      console.log(this.state.projects[0].Screenshot[0].url)
  
    })
  }

  

  render(){

    return (
        <div id="portfolio" className="portfolio-area section-padding">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>My <span>Web Apps</span></h2>
            </div>
          </div>
        </div>
        <div className="portfolio-content">
         
          <div className="container">


            <div className="wrapper">

                {

                      this.state.projects.map(item=>
                      
                          
                            <div className="project-item">
                              <a target="_blank" href={item.Link} rel="noopener noreferrer">
                                <img  className="IMG"  src={item.Screenshot[0].url} alt="project" />
                                {/* {console.log(item.Screenshot[0].url)} */}
                                
                              </a>
                              <div className><a target="_blank" href={item.Link} rel="noopener noreferrer">
                                </a><div className="overlay-inner"><a target="_blank" href={item.Link}>
                                  </a>

                                  <h4>
                                    <a rel="noopener noreferrer" target="_blank" href={item.Link}>{item.Name}</a>
                                  </h4>

                                </div>
                              </div>
                              <p><a rel="noopener noreferrer" target="_blank" href={item.Link}>View App</a></p>
                            </div>

                      
                      )
                }


            </div>
              
             





            

          </div>
        </div>
      </div>
    )

  }
}
