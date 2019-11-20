import React, { Component } from "react";
import axios from "axios";

class PlanetClass2 extends Component {
  state = {
    hasErrors: false,
    planet: {},
    planetNumber: 1
  };

  componentDidMount = () => {
    axios
      .get(`https://swapi.co/api/planets/${this.state.planetNumber}/`)
      .then(response => {
        this.setState({ planet: response.data });
      })
      .catch(() => this.setState({ hasErrors: true }));
  };

  componentDidUpdate = () => {
    axios
      .get(`https://swapi.co/api/planets/${this.state.planetNumber}/`)
      .then(response => {
        this.setState({ planet: response.data });
      })
      .catch(() => this.setState({ hasErrors: true }));
  };

  handleClick = () => {
    this.setState({ planetNumber: this.state.planetNumber + 1 });
  };

  render() {
    if (this.state.hasErrors) return "Error while calling SWAPI";

    return (
      <>
        <h5>PlanetClass2</h5>
        <button onClick={this.handleClick}>Next planet</button>
        <div>{JSON.stringify(this.state.planet)}</div>
      </>
    );
  }
}

export default PlanetClass2;
