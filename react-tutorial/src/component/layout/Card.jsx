import React, {useEffect} from "react";
import { news } from "../../service/dataset";

class Image extends React.Component {
    
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  render() {
    return (
      <img
        style={{
          display: "block",
          width: 120,
          height: 120 / (this.props.index % 2 ? 0.5 : 1),
          margin: 30,
        }}
        src={this.props.img}
      />
    );
  }
}

class Card extends React.Component {
  state = {
    items: news,
    hide: false,
  };

  render() {
    console.log("Card ===> ", this.state);

    return (
      <div>
        <h3>Image</h3>
        <button
          onClick={() => {
            this.setState({ hide: !this.state.hide });
          }}
        >
          HIDE
        </button>

        {!this.state.hide ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflow: "scroll",
            }}
          >
            {this.state.items.map((e, i) => {
              return <Image key={"image_" + i} img={e.urlToImage} index={i} />;
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export { Card };
