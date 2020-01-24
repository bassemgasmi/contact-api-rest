import React, { Component } from "react";
import Axios from "axios";


class Modif extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: {}
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    Axios.get("http://localhost:8080/contacts/" + this.props.match.params.id)
      .then(response => {
        console.log("response.data", response.data);
        this.setState({
          // nom: res.data.nom,
          //telephone: res.data.telephone,
          // mail: res.data.mail

          contact: { ...response.data }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  onChangeContact = (e) => {
    this.setState({
      contact: {
          ...this.state.contact,
          [e.target.name]: e.target.value
      }
    })
  }

  onSubmit = e => {
    e.preventDefault();

    const studentObject = {
      nom: this.state.contact.nom,
      telephone: this.state.contact.telephone,
      mail: this.state.contact.mail
    };

    let id = this.props.match.params.id;
    Axios.put(`http://localhost:8080/contacts/${id}`, studentObject)
    .then(response =>{
      console.log("modif sucess");
      this.props.history.push("/Contacts");
    })
    
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.contact.hasOwnProperty("name"));
    console.log("this.state.contact", this.state.contact);
    return (
      <div>
        <h2>Modif Contact</h2>
        {this.state.contact.hasOwnProperty("nom") && (
          <div>
            <p>Contact Name</p>
            <input name="nom" value={this.state.contact.nom} onChange={this.onChangeContact}/>
           
            <p>Contact Telephone</p>
            <input name="telephone" value={this.state.contact.telephone} onChange={this.onChangeContact}/>
            <p>Contact Email</p>
            <input name="mail" value={this.state.contact.mail} onChange={this.onChangeContact}/>
            <br />
            
              <button onClick={this.onSubmit}>add Contact</button>
          
          </div>
        )}
      </div>
    );
  }
}

export default Modif;
