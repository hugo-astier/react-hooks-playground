import React, { Component } from "react";
import PlanetClass3 from "./planetClass3";

class planetClass3Wrapper extends Component {
  state = {
    display: true
  };
  render() {
    return (
      <>
        <h5>PlanetClass3</h5>
        <button onClick={() => this.setState({ display: false })}>
          Delete PlanetClass3 component
        </button>
        {this.state.display && <PlanetClass3 />}
      </>
    );
  }
}

export default planetClass3Wrapper;
