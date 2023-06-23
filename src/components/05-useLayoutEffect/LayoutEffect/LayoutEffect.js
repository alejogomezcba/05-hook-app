import React, {useLayoutEffect, useRef, useState} from "react";

import { UseFetch } from "../../../hooks/useFetch";
import { useCounterBtn } from "../../../hooks/useCounterBtn";

//https://thronesapi.com/api/v2/Characters/7

import("./style.css");

export const Layout = () => {
  //const quoteNumber = 8;
  const { counter, increment, decrement } = useCounterBtn(1);
  const { data } = UseFetch(`https://dummyjson.com/quotes/${counter}`);

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
    
  }, [data?.quote])

  const noQuoteMessage = data?.message ? "No quotes to show" : null;

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquotes text-rigth">
        <p className="mb-10" ref={pTag} > {data?.quote || noQuoteMessage}</p>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      {noQuoteMessage ? (
        ""
      ) : (
        <button className="btn btn-primary mr-10 btn-black" onClick={decrement}>
          Previus Quote
        </button>
      )}
      <button className="btn btn-primary btn-black" onClick={increment}>
        {" "}
        New Quote
      </button>
    </div>
  );
};
