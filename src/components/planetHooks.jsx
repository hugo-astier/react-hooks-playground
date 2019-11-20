import React, { useState, useEffect } from "react";
import axios from "axios";

function PlanetHooks() {
  const [hasErrors, setHasErrors] = useState(false);
  const [planet, setPlanet] = useState({});

  /*
    Using the following syntax:
    useEffect(() => {
        // ...
    }, []);
    atcs the same as the componentDidMount component class method.
    useEffect() runs after every render(including the first one),
    but if a second parameter is provided(array), it only runs when
    one of the variable included in the array changes. If the array
    is empty, the hook doesn't run when updating the component at all,
    because it doesn't have to watch any variables.
  */
  useEffect(() => {
    axios
      .get("https://swapi.co/api/planets/1/")
      .then(response => setPlanet(response.data))
      .catch(() => setHasErrors(true));
  }, []);

  if (hasErrors) return "Error while calling SWAPI";
  return (
    <>
      <h5>PlanetHooks</h5>
      <div>{JSON.stringify(planet)}</div>
    </>
  );
}

export default PlanetHooks;
