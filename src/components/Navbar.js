import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid justify-content-md-center">
          <span className="navbar-brand mb-0 h1 ">{this.props.title}</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
