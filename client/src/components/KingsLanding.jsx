import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import { Container, Header } from 'semantic-ui-react';

import Landfall from './LandingViews/Landfall';
import Login from './AuthRelated/Login';
import SignUp from './AuthRelated/SignUp';

class KingsLanding extends Component {
  state = {
    name: ''
  };

  getData = () => {
    axios
      .get('http://localhost:5000/guest')
      .then(res => this.setState({ name: res.data.title }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Router>
          <div>
            <Header as='h1'>Our App</Header>
            <Route
              exact
              path='/'
              component={() => (
                <Landfall getData={this.getData} name={this.state.name} />
              )}
            />
            <Route path='/login' component={() => <Login />}></Route>
            <Route path='/signup' component={() => <SignUp />}></Route>

            <Route path='/chores' component={() => <div>page 2</div>} />
            <Route path='/notes' component={() => <div>page 3</div>} />
            <Route path='/deardiary' component={() => <div>page 4</div>} />
          </div>
        </Router>
      </Container>
    );
  }
}

export default KingsLanding;
