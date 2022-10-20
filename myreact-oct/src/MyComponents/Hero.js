import React from "react";


function Hero(){

    let hero = {

        name:"Hrithik Roshan",
        Age: 46,
        Salary: "100cr",
        image: "https://www.bollywoodhungama.com/wp-content/uploads/2016/11/Hrithik-Roshan-1-2.jpg"
    }
    let hero2={
    

        name:"Salman Khan",
        Age: 55,
        Salary: "200cr",
        image: "https://images.indianexpress.com/2021/11/Salman-Khan-1200-4.jpg"
    }

    let hero3={
    

        name:"Shahrukh khan",
        Age: 56,
        Salary: "500cr",
        image: "https://www.filmibeat.com/img/popcorn/profile_photos/shahrukh-khan-20190625140849-86.jpg"
    }

    return (

      <div className="container mt-5" >
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src={hero.image} alt="" />
                    <div className="card-header bg-primary" >
                        <p>HRITHIK ROSHAN BIO</p>
                    </div>
                    <div className="card-body bg-success">
                        <ul className="list-group ">
                            <li className="list-group-item bg-dark text-light">Age: {hero.Age}</li>
                            <li className="list-group-item bg-dark text-light">Salary: {hero.Salary}</li>
                            
                        </ul>
                    </div>
                </div>
                <hr />

                <div className="card">
                    <img className="card-img-top" src={hero2.image} alt="" />
                    <div className="card-header bg-primary" >
                        <p>Salman Khan BIO</p>
                    </div>
                    <div className="card-body bg-success">
                        <ul className="list-group ">
                            <li className="list-group-item bg-dark text-light">Age: {hero2.Age}</li>
                            <li className="list-group-item bg-dark text-light">Salary: {hero2.Salary}</li>
                            
                        </ul>
                    </div>
                </div>
                <hr />
                

                <div className="card ">
                    <img className="card-img-top" src={hero3.image} alt="" />
                    <div className="card-header bg-primary" >
                        <p>Shahrukh khan BIO</p>
                    </div>
                    <div className="card-body bg-success">
                        <ul className="list-group ">
                            <li className="list-group-item bg-dark text-light">Age: {hero3.Age}</li>
                            <li className="list-group-item bg-dark text-light">Salary: {hero3.Salary}</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Hero;