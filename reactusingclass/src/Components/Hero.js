
import React from "react"
class Hero extends React.Component{

hero ={
    name: "hugh jackman",
    age: 45,
    sal: "2100 cr",
    image:"https://pbs.twimg.com/profile_images/1302962150302982146/NTb6iGpC_400x400.jpg"
}

render(){

   return <div className="container">
    
    {/* JSON.stringify = To convert JS object to string: */}
    <div>{JSON.stringify(this.hero)}</div>
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        <img src={this.hero.image} alt="" />
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">{this.hero.name}</li>
                            <li className="list-group-item">{this.hero.age}</li>
                            <li className="list-group-item">{this.hero.sal}</li>
                        </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    

}
}

export default Hero