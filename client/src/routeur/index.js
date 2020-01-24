import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Contact from "../component/contact";
import Add from "../component/add";
import Update from "../component/update";
import Delete from "../component/delete";
import Home from "../component/home";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Router>

          <Switch>
            <Route exact path="/update/:id" component={Update} /> 
            <Route exact path="/DeleteContacts/:id" component={Delete}/>
            <Route exact path="/AddContacts" component={Add} />
            <Route  exact path="/Contacts" component={Contact}/>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}