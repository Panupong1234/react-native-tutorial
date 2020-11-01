import React, { Component } from "react";
import { topicNews } from "./service/dataset";
import { Label } from "./component/ui";

class TopicComponent extends React.Component {
  state = { items: topicNews };

  render() {
    return (
      <>
        <h3>Topic</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxHeight: 230,
            overflow: "scroll",
            border: "2px solid black",
            marginBottom: 30,
          }}
        >
          {this.state.items.map((e, i) => (
            <Label
              key={`label_topic_${i}`}
              text={`Topic : ${e.title} (${e.author})`}
            />
          ))}
        </div>
      </>
    );
  }
}

export default TopicComponent;
