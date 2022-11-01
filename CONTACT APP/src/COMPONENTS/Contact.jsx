import React, { Component } from "react";
import ContactDetails from "./ContactDetails.jsx";
import ContactList from "./ContactList.jsx";
import Axios from 'axios'

class Contact extends Component {
  
    state = {
    contacts: [],
  };

  componentDidMount(){

    Axios.get("https://jsonplaceholder.typicode.com/users")
       .then((res)=>{
        this.setState({contacts: res.data})
       })
       .catch()
  }
  render() {
    return (

        
      <div className="container">
        <pre>{JSON.stringify(this.state.contacts)}</pre>
        <div className="row">
          <div className="col-md-8">
            {
                this.state.contacts.length >0 ? <>
                
                </> : null
            }
            <ContactList  contactdata={this.state.contacts}/>
          </div>
          <div className="col-md-4">
            <ContactDetails/>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
