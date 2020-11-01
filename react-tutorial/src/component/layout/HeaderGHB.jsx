import React from "react";

export class HeaderGHB extends React.Component {
  render() {
    return (
      <header
        style={{
          background: "#ff850c",
          height: 70,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://www.ghbank.co.th/assets/img/logo.png"
          style={{ display: "block", height: 45, width: "auto" }}
        />
      </header>
    );
  }
}
