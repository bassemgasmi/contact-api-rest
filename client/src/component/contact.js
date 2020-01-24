import React, { Component } from "react";
import Axios from "axios";
import {withRouter} from "react-router-dom"

import Modif from "./update";
import Delete from "./delete";


class contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: [],
      
    };
  }

  componentDidMount = () => {
    Axios.get("http://localhost:8080/contacts")
      .then(response => {
        console.log(response.data);
        this.setState({
          contact: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteDone=()=>{
    console.log('deleteDone')
    Axios.get("http://localhost:8080/contacts")
    .then(response => {
      console.log(response.data);
      this.setState({
        contact: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
 edit=(id)=>{
   console.log('id', id)
   this.props.history.push(`/update/${id}`)
  }
  render() {
    
   
    const contactItems = this.state.contact.map((el,index) => (
     
       <div key={el._id} className="contactMap">
        <p>nom:{el.nom}</p>
        <p>tel:{el.telephone}</p>
        <p>mail:{el.mail}</p>
        <div className="contactModDel">
          <button onClick={()=>this.edit(el._id)}>edit</button>
        {/* <Modif id={el._id} editContact={el}/> */}
        <Delete deleteDone={this.deleteDone} id={el._id}/>
        </div>
       
      </div>
     
    ));
    return (
      <div>
      <h2>Contact List</h2>
      <div className="contactList">
       
         {contactItems}
      </div>
      </div>
    );
  }
}

export default withRouter(contact) ;
