import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { bricks } from '../../bricks';

import "./style.css";

const { components: { CounterAppBrick: { CounterBtns, CounterObj } } } = bricks;

const CounterApp = () => {
  const [state, setState] = useState(CounterObj);
  const counterKeys = Object.keys(state);

  const handleButton = (e) => {
    const countKey = e.nativeEvent.srcElement.parentNode.className;
    const button = e.target.innerHTML;
    const initialValue = state[countKey];
    if (button === "Reset") setState({ ...state, [countKey]: 0 });
    if (button === "+1") setState({ ...state, [countKey]: initialValue + 1 });
    if (button === "-1") setState({ ...state, [countKey]: initialValue - 1 });
};
  
  return (
    <>
      <h1>CounterApp</h1>

      {counterKeys.map((counter) => {
        return (
          <div key={counter} className={counter}>
            <h2>{counter} = {state[counter]}</h2>
           {CounterBtns.map(e => <button onClick={handleButton} className="btn btn-primary">{e}</button>
            )}
          </div>
        );
      })}
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
