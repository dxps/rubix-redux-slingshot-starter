import React, { PropTypes } from "react";
import { Link } from "react-router";
import "../assets/main.scss";
import { Button } from "@sketchpixy/rubix";

// import '../main.css';

const App = (props) => {

  return (
    <div>
      <br/> &nbsp;
      <Link to="/"><Button bsStyle="green" outlined>Home</Button></Link> &nbsp;
      <Link to="about"><Button bsStyle="blue" outlined>About</Button></Link> &nbsp;
      <Link to="broken-link"><Button bsStyle="red" outlined>Broken link</Button></Link>
      <br/>
      {props.children}
    </div>
  );

};

App.propTypes = {
  children: PropTypes.element
};

export default App;
