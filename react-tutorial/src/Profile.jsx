import React, { Component } from "react";
import { profile } from "./service/dataset";
import { Label } from "./component/ui";

class ProfileComponent extends React.Component {
  state = profile;

  render() {
    return (
      <>
        <h3>Profile</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 180,
            overflow: "hidden",
            border: "2px solid black",
            marginBottom: 30,
          }}
        >
          <img
            src={this.state.profile_pic}
            style={{ display: "block", flex: 3, height: "auto" }}
          />
          <div style={{ flex: 9, paddingLeft: 30 }}>
            <Label text={`Firstname : ${this.state.first_name}`} />
            <Label text={`Lastname : ${this.state.last_name}`} />
            <Label text={`Gender : ${this.state.gender}`} />
          </div>
        </div>
      </>
    );
  }
}

export default ProfileComponent;
