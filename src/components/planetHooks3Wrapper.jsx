import React, { Component } from "react";
import PlanetHooks3 from "./planetHooks3";

class PlanetHooks3Wrapper extends Component {
  state = {
    display: true
  };
  render() {
    return (
      <>
        <h5>PlanetHooks3</h5>
        <button onClick={() => this.setState({ display: false })}>
          Delete PlanetHooks3 component
        </button>
        {this.state.display && <PlanetHooks3 />}
      </>
    );
  }
}

export default PlanetHooks3Wrapper;
