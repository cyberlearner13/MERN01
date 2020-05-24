import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Landfall.css';

const { Row, Column } = Grid;

const Landfall = props => (
  <Grid columns='3' className='title'>
    <Row>
      <Column>My Application Of Wonders</Column>
      <Column></Column>
      <Column style={{ margin: '10px 0' }}>
        <Link to='/login'>
          <Button basic color='teal'>
            Login
          </Button>
        </Link>
        <Link to='/signup' style={{ marginLeft: '20px' }}>
          <Button basic color='teal'>
            Signup
          </Button>
        </Link>
      </Column>
    </Row>
  </Grid>
);

export default Landfall;

/**
 * <Column>
        <Link to='/chores'>
          <Button basic color='teal'>
            Chores
          </Button>
        </Link>
      </Column>
      <Column>
        <Link to='/notes'>
          <Button basic color='teal'>
            Notes
          </Button>
        </Link>
      </Column>
      <Column>
        <Link to='/deardiary'>
          <Button basic color='teal'>
            Dear Diary
          </Button>
        </Link>
      </Column>
 */
