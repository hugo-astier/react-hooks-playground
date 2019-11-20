import React, { Component } from "react";

class ButtonClass extends Component {
  state = {
    count: 0,
    buttonText: "Click me!"
  };

  handleClick = () => {
    const count = this.state.count + 1;
    const buttonText = `I've been clicked ${count} times`;
    this.setState({ count, buttonText });
  };
  render() {
    return (
      <>
        <h5>ButtonClass</h5>
        <div onClick={this.handleClick}>
          <button>{this.state.buttonText}</button>
        </div>
      </>
    );
  }
}

export default ButtonClass;
