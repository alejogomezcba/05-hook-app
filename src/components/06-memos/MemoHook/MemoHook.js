import React, { useMemo, useState } from "react";
import { useCounterBtn } from "../../../hooks/useCounterBtn";

import { procesoPesado } from "../../../helpers/procesoPesado";

import "./style.css";

export const MemoHook = () => {
  const { counter, increment, decrement, resetValue } = useCounterBtn(0);
  const [show, setShow] = useState();

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <p>{memoProcesoPesado}</p>

      <button className="btn btn-primary" onClick={decrement}>
        -1
      </button>
      <button className="btn btn-primary" onClick={resetValue}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <br />
      <br />
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
