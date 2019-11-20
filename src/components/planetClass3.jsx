import React, { Component } from "react";
import axios from "axios";

class PlanetClass3 extends Component {
  state = {
    hasErrors: false,
    planet: {}
  };

  componentDidMount = () => {
    axios
      .get(`https://swapi.co/api/planets/1/`)
      .then(response => {
        this.setState({ planet: response.data });
      })
      .catch(() => this.setState({ hasErrors: true }));
  };

  componentWillUnmount = () => {
    alert("bye bye!");
  };

  render() {
    if (this.state.hasErrors) return "Error while calling SWAPI";
    return <div>{JSON.stringify(this.state.planet)}</div>;
  }
}

export default PlanetClass3;
