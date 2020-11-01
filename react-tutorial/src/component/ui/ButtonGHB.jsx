import React from "react";

export class ButtonGHB extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        style={{
          height: 45,
          padding: "0 30px",
          backgroundColor: "#ff850c",
          border: 0,
          borderRadius: 4,
          color: '#FFF',
          marginRight: 15
        }}
      >
        {this.props.text}
      </button>
    );
  }
}

