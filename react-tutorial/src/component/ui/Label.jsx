import React from "react";

export class Label extends React.Component {
  state = {};

  render() {
    return <p style={{ textAlign: "left" }}>{this.props.text}</p>;
  }
}
