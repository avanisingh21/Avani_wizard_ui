import React, { Component } from "react";

class MyTextFields extends Component {
  render() {
    return (
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            {this.props.labelText}
          </label>
          <div className="col-sm-10">
            <input
              type={this.props.type}
              className="form-control"
              placeholder={this.props.defaultText}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default MyTextFields;
