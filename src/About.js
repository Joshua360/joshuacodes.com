import React from 'react'



export default class About
 extends React.Component {


   state={
     aboutData:[]
   }



componentDidMount(){
  fetch("https://jcodes-backend.herokuapp.com/Abouts")
  .then(response=>response.json())
  .then(data=> {
    this.setState(prevState=>{
      return {
        aboutData: data
      }
    })

  
    // console.log(this.state.aboutData[0].Image[0].url)



  })
}


  render() {
    return (
      <div className="about-area section-padding" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="stack">
            {
              this.state.aboutData.map(item=>

                <img src={this.state.aboutData[0].Image[0].url} alt="about image" />
              
              )

            }
             
            </div>
          </div>
          <div className="col-md-7 col-md-offset-1 col-sm-12">
            <div className="about-right">
              <h2 style={{textTransform: 'capitalize'}}>More about me</h2>
              <p style={{fontSize: '20px'}}>
                {
                  this.state.aboutData.map(item=>

                  <p key={item.id}>{item.About}</p>
                  
                  )

                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
