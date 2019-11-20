import React, { useState, useEffect } from "react";
import axios from "axios";

function PlanetHooks2() {
  const [hasErrors, setHasErrors] = useState(false);
  const [planet, setPlanet] = useState({});
  const [planetNumber, setPlanetNumber] = useState(1);

  /*
    Using the following syntax:
    useEffect(() => {
        // ...
    }, [myVariable]);
    atcs the same as the componentDidMount + componentDidUpdate
    component class method, but with the addition here thanks to
    the second parameter of the condition that the hook runs only
    when state's variable myVariable changes (after the first render).
    If no second parameter, the hook simply runs after every render
    no matter which part of the state changed.
  */
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/planets/${planetNumber}/`)
      .then(response => setPlanet(response.data))
      .catch(() => setHasErrors(true));
  }, [planetNumber]);

  function handleClick() {
    setPlanetNumber(planetNumber + 1);
  }

  if (hasErrors) return "Error while calling SWAPI";
  return (
    <>
      <h5>PlanetHooks2</h5>
      <button onClick={handleClick}>Next planet</button>
      <div>{JSON.stringify(planet)}</div>
    </>
  );
}

export default PlanetHooks2;
