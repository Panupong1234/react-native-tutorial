import React from "react";

export class ButtonGHB extends React.Component {
  
  state = {
    value: 0
  }

  constructor(props){
    super(props)
    console.log('constructor ===> ', this.props);
  }

  componentWillMount(){
    console.log('componentWillMount');
    this.setState({
      value: this.props.total * 5
    })
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  handleClick(){
    this.props.handleClick()
    this.setState({
      value: this.state.value + this.props.total
    })
  }

  render() {
    console.log('BUTTON GHB render');
    return (
      <button
        onClick={()=>{
          this.handleClick()
        }}

        style={{
          height: 45,
          padding: "0 30px",
          backgroundColor: this.props.bg || '#ff850c',
          border: 0,
          borderRadius: 4,
          color: '#FFF',
          marginRight: 15,
          ...this.props.overideStyle
        }}
      >
        {this.props.text} = {this.state.value}
      </button>
    );
  }
}

