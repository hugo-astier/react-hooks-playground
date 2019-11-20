import React from "react";
import ButtonClass from "./components/buttonClass";
import ButtonHooks from "./components/buttonHooks";
import PlanetClass from "./components/planetClass";
import PlanetHooks from "./components/planetHooks";
import PlanetClass2 from "./components/planetClass2";
import PlanetHooks2 from "./components/planetHooks2";
import PlanetClass3Wrapper from "./components/planetClass3Wrapper";
import PlanetHooks3Wrapper from "./components/planetHooks3Wrapper";

function App() {
  return (
    <div className="App">
      <h1>Buttons: Declare, Read, Update the state</h1>
      <ButtonClass />
      <ButtonHooks />
      <h1>Planets: Use lifecycle events by consuming an API</h1>
      <PlanetClass />
      <PlanetHooks />
      <PlanetClass2 />
      <PlanetHooks2 />
      <PlanetClass3Wrapper />
      <PlanetHooks3Wrapper />
    </div>
  );
}

export default App;
