import React, { useState } from "react";

function ButtonHooks() {
  /*
    Using the following syntax:

    [var, setVar] = useState();

    declares the variable 'var' in the state, and its setter 'setVar'.
    To read in the view: {var}
    To update: setVar(newValue)

    If an argument to useState() is provided this will be used as the
    initial value for the variable being declared.
  */
  const [count, setCount] = useState(0);
  const [buttonText, setbuttonText] = useState("Click me!");

  function handleClick() {
    const newCount = count + 1;
    setCount(newCount);
    setbuttonText(`I've been clicked ${newCount} times`);
  }

  return (
    <>
      <h5>ButtonHooks</h5>
      <div onClick={handleClick}>
        <button>{buttonText}</button>
      </div>
    </>
  );
}

export default ButtonHooks;
