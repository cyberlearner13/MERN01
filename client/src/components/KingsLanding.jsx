import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { Container } from "semantic-ui-react";

import Landfall from "./Landfall";


class KingsLanding extends Component {
  state = {
    name: ""
  };

  getData = () => {
    axios
      .get("http://localhost:5000/guest")
      .then(res => this.setState({ name: res.data.title }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Router>
          <div class="ui-container">
            <h2>
              Header Portion, Currently on the Landing Page | Sign Up | Login
            </h2>
            <Route exact path="/" component={()=> <Landfall getData={ this.getData } name={this.state.name} /> }  />
            <Route path="/chores" component={() => <div>page 2</div>} />
            <Route path="/notes" component={() => <div>page 3</div>} />
            <Route path="/deardiary" component={() => <div>page 4</div>} />
          </div>
        </Router>
      </Container>
    );
  }
}

export default KingsLanding;
