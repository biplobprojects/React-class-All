
import React from "react";

//USING React CLASS COMPONENTS:

class Hero1 extends React.Component{

    A = {
  name:"Biplob Borboruah",
  age: 28,
  college:"Suresh gyan vihar university",
  image:"https://m.media-amazon.com/images/M/MV5BMjI3MjIxMjkwM15BMl5BanBnXkFtZTgwNzkyMTU4NzE@._V1_UY1200_CR135,0,630,1200_AL_.jpg"  


    }

    render(){

        return (
<div className="container">
    <div className="row">
        <div className="col-md-3">
            <div className="card">
                <div className="card-header">
                    <img src={this.A.image} />
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">{this.A.name}</li>
                        <li className="list-group-item">{this.A.age}</li>
                        <li className="list-group-item">{this.A.college}</li>


                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

        )
    }
}

export default Hero1


//USING REACT FUNCTION COMPONENTS:

let Hero1 = ()=>{
  let   A = {
        name:"CONOR MCGREGOR",
        age: 28,
        college:"Suresh gyan vihar university",
        image:"https://m.media-amazon.com/images/M/MV5BMjI3MjIxMjkwM15BMl5BanBnXkFtZTgwNzkyMTU4NzE@._V1_UY1200_CR135,0,630,1200_AL_.jpg"
      
      
          }

          return(

            <div className="container">
    <div className="row">
        <div className="col-md-3">
            <div className="card">
                <div className="card-header">
                    <img src={A.image} />
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">{A.name}</li>
                        <li className="list-group-item">{A.age}</li>
                        <li className="list-group-item">{A.college}</li>


                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

        )
    }


export default Hero1

          


