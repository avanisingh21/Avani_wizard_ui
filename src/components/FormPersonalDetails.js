import React, { Component } from "react";
import Navbar from "/Users/avanisingh/Desktop/my-wizard/src/components/Navbar.js";
// import MyTextFields from "/Users/avanisingh/Desktop/my-wizard/src/components/MyTextFields.js";

import MuiThemeProvider from "/Users/avanisingh/Desktop/my-wizard/node_modules/material-ui/styles/MuiThemeProvider.js";
import TextField from "/Users/avanisingh/Desktop/my-wizard/node_modules/material-ui/TextField";
import RaisedButton from "/Users/avanisingh/Desktop/my-wizard/node_modules/material-ui/RaisedButton";

class FormPersonalDetails extends Component {
  goBack = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
        <Navbar title="Personal Details" />
        <br />
        <br />
        <div>
          <MuiThemeProvider>
            <TextField
              hintText="Enter your Occupation"
              floatingLabelText="Occupation"
              onChange={handleChange("occupation")}
              defaultValue={values.occupation}
            />
            <br />
            <TextField
              hintText="Enter your address"
              floatingLabelText="City"
              onChange={handleChange("city")}
              defaultValue={values.city}
            />
            <br />
            <TextField
              hintText="Tell us about yourself"
              floatingLabelText="Bio"
              onChange={handleChange("bio")}
              defaultValue={values.bio}
            />
          </MuiThemeProvider>
        </div>
        <br />
        <br />
        <br />
        <button type="button" className="btn btn-info" onClick={this.goBack}>
          Back
        </button>
        <button type="button" className="btn btn-info" onClick={this.continue}>
          Next
        </button>
      </React.Fragment>
    );
  }
}

export default FormPersonalDetails;
