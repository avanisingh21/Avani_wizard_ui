import React, { Component } from "react";
import Navbar from "/Users/avanisingh/Desktop/my-wizard/src/components/Navbar.js";
import MuiThemeProvider from "/Users/avanisingh/Desktop/my-wizard/node_modules/material-ui/styles/MuiThemeProvider.js";

class Success extends Component {
  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider>
          <Navbar title="Successful Submission" />
          <br />
          <br />
          <div>
            <h1>Thankyou for your Response!</h1>
            <p> You will get an email with further instructions </p>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default Success;
