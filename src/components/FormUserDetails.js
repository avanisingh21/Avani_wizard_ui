import React, { Component } from "react";
import Navbar from "/Users/avanisingh/Desktop/my-wizard/src/components/Navbar.js";
import MuiThemeProvider from "/Users/avanisingh/Desktop/my-wizard/node_modules/material-ui/styles/MuiThemeProvider.js";
import TextField from "/Users/avanisingh/Desktop/my-wizard/node_modules/material-ui/TextField";
import RaisedButton from "/Users/avanisingh/Desktop/my-wizard/node_modules/material-ui/RaisedButton";

class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { handleChange } = this.props;
    const { values } = this.props;

    return (
      <React.Fragment>
        <Navbar title="User Details" />
        <br />
        <br />
        <div>
          <MuiThemeProvider>
            <TextField
              hintText="Enter your First Name"
              floatingLabelText="First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
            <br />
            <TextField
              hintText="Enter your Last Name"
              floatingLabelText="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            />
            <br />
            <TextField
              hintText="Enter your Email"
              floatingLabelText="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
            <br />
            <br />
            <br />
            <button
              type="button"
              className="btn btn-info"
              onClick={this.continue}
            >
              Next
            </button>
          </MuiThemeProvider>
        </div>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;
