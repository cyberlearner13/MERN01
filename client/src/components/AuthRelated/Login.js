import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Container, Grid, Header } from 'semantic-ui-react';
import './SignUp.css';

const { Field } = Form;
const { Row, Column } = Grid;

class Login extends Component {
  render() {
    return (
      <Container className='signup-form'>
        <Form>
          <Grid columns='3'>
            <Row>
              <Column></Column>
              <Column width={4} style={{ textAlign: 'center' }}>
                <Header as='h2'>Log In</Header>
              </Column>
              <Column></Column>
            </Row>
            <Row>
              <Column width={4}></Column>
              <Column width={8}>
                <Field>
                  <label>Username</label>
                  <input placeholder='Username' />
                </Field>
              </Column>
              <Column></Column>
            </Row>

            <Row>
              <Column width={4}></Column>
              <Column width={8}>
                <Field>
                  <label>Password</label>
                  <input placeholder='Password' type='password' />
                </Field>
              </Column>
              <Column></Column>
            </Row>

            <Row>
              <Column width={4}></Column>
              <Column width={8} style={{ margin: '0 auto' }}>
                <Button type='submit' content='Submit' color='teal' />
                <Button basic color='teal' style={{ marginLeft: '5%' }}>
                  <Link to='/'>Cancel</Link>
                </Button>
              </Column>
              <Column></Column>
            </Row>
          </Grid>
        </Form>
      </Container>
    );
  }
}

export default Login;
