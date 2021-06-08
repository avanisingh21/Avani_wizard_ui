import React, { Component } from "react";
import FormUserDetails from "/Users/avanisingh/Desktop/my-wizard/src/components/FormUserDetails.js";
import FormPersonalDetails from "/Users/avanisingh/Desktop/my-wizard/src/components/FormPersonalDetails.js";
import Success from "/Users/avanisingh/Desktop/my-wizard/src/components/Success.js";
import Confirm from "/Users/avanisingh/Desktop/my-wizard/src/components/Confirm.js";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  //proceeding to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  //going back at prev step

  prevStep = () => {
    const { step } = this.state;

    this.setState({ step: step - 1 });
  };
  // handling field inputs
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;
