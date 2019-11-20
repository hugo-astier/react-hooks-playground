import React, { useState, useEffect } from "react";
import axios from "axios";

function PlanetHooks3() {
  const [hasErrors, setHasErrors] = useState(false);
  const [planet, setPlanet] = useState({});

  /*
    Using the following syntax:

    useEffect(() => {
        // ...
        return () => { /... };
    }, []);

    The returned function atcs the same as the componentWillUnmount
    component class method.
    This returned function is called the "cleanup" function of
    the effect. The hook always cleans up the previous effect before
    applying the next one. In this case, because we have a second
    parameter being an empty array, the cleanup function will only
    run when the component will unmount, as the effect itself will
    never run during the component's "life" - component being updated -
    (since we have this second parameter being an empty array, the hook
    doesn't run when updating the component at all, because it doesn't
    have to watch any variables).


    Another cleanup function scenario would be with this syntax:

    useEffect(() => {
        // ...
        return () => { /... };
    });

    Here, we don't have a second parameter assigned, so the hook will
    run every time the component updates no matter which part of the state
    changed. Which means the cleanup function will also run every time,
    just before the next effect gets applied.

  */
  useEffect(() => {
    axios
      .get("https://swapi.co/api/planets/1/")
      .then(response => setPlanet(response.data))
      .catch(() => setHasErrors(true));
    return () => {
      alert("bye bye!");
    };
  }, []);

  if (hasErrors) return "Error while calling SWAPI";
  return <div>{JSON.stringify(planet)}</div>;
}

export default PlanetHooks3;
