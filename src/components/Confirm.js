import React, { Component } from "react";
import Navbar from "/Users/avanisingh/Desktop/my-wizard/src/components/Navbar.js";
import MuiThemeProvider from "/Users/avanisingh/Desktop/my-wizard/node_modules/material-ui/styles/MuiThemeProvider.js";
import List from "/Users/avanisingh/Desktop/my-wizard/node_modules/material-ui/List";
import ListItem from "/Users/avanisingh/Desktop/my-wizard/node_modules/material-ui/List/ListItem.js";
class Confirm extends Component {
  goBack = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;

    return (
      <React.Fragment>
        <MuiThemeProvider>
          <Navbar title="Confirm Details" />
          <br />
          <br />
          <div>
            <List>
              <ListItem primaryText="First Name" secondaryText={firstName} />

              <ListItem primaryText="Last Name" secondaryText={lastName} />
              <ListItem primaryText="Email" secondaryText={email} />
              <ListItem primaryText="Occupation" secondaryText={occupation} />
              <ListItem primaryText="Address" secondaryText={city} />
              <ListItem primaryText="Bio" secondaryText={bio} />
            </List>
          </div>
          <br />
          <br />
          <br />
          <button type="button" className="btn btn-info" onClick={this.goBack}>
            Back
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={this.continue}
          >
            Confirm and Continue
          </button>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default Confirm;
