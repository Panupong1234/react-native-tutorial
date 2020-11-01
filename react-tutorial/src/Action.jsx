import React, { Component } from "react";
import { ButtonGHB } from "./component/ui";

class ActionComponent extends React.Component {
  state = {
    total: 0,
  };

  handleIncrement() {
    this.setState({ total: this.state.total + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.total}</h1>
        <div>
          <ButtonGHB
            onClick={() => {
              this.handleIncrement();
            }}
            text="Increment"
          />
          <button
            onClick={() => {
              this.setState({ total: this.state.total - 1 });
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default ActionComponent;
