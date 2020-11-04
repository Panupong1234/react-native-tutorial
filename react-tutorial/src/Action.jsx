import React, { Component } from "react";
import { ButtonGHB } from "./component/ui";

class ActionComponent extends React.Component {
  state = {
    total: 10,
  };

  handleIncrement() {
    this.setState({ total: this.state.total + 1 });
  }

  render() {
    return (
      <div>
        <h1>Total : {this.state.total}</h1>
        <div>

          <ButtonGHB
            text='Increment'
            handleClick={()=>{
              this.setState({total: this.state.total + 1})
            }}
            total={this.state.total}
          />

          <ButtonGHB
            text='Decrement'
            handleClick={()=>{
              this.setState({total: this.state.total - 1})
            }}
          />

        </div>
      </div>
    );
  }
}

export default ActionComponent;
