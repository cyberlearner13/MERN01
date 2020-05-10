import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Landfall = props => (
  <div>
    <p>
      KingsLanding <Button basic color="violet" onClick={props.getData}>Get Name</Button>
    </p>
    <p>Name: {props.name}</p>
    <div>
      Welcome to your very own King's Landing. Use this swiss army knife of an
      application to take care of your daily needs
    </div>
    <Link to="/chores">
      <Button basic color="teal">
        Chores
      </Button>
    </Link>
  </div>
);

export default Landfall;
