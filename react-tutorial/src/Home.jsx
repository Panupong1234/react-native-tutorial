import React, { Component } from "react";
import GHBButton from './GHBButton'

class Home extends React.Component {
  state = {
    total: 0,
  };

  render() {
    return (
      <div>
        <h1>{this.state.total}</h1>
        <div>
          <GHBButton
            onClick={() => {
              this.setState({ total: this.state.total + 1 });
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

export default Home;
