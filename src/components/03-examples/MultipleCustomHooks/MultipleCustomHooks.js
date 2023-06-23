import React from "react";

import { UseFetch } from "../../../hooks/useFetch";
import { useCounterBtn } from "../../../hooks/useCounterBtn";

//https://thronesapi.com/api/v2/Characters/7

import ('./style.css');

export const MultipleCustomHooks = () => {
  //const quoteNumber = 8;
  const {counter, increment, decrement} = useCounterBtn(1)
  const { loading, data } = UseFetch(`https://dummyjson.com/quotes/${counter}`);

  const noQuoteMessage = data?.message ? 'No quotes to show' : null;

  return (
    <div>
      <h1>Dummy Quotes test</h1>
      <hr />

      { loading ? (<div className="alert alert-info text-center"> loading... </div>) : (
        <blockquote className="blockquotes text-rigth">
          <p className="mb-10"> {data.quote || noQuoteMessage}</p>
          <footer className="blockquote-footer">{data?.author || 'N/A'}</footer>
        </blockquote>
      )}
      { noQuoteMessage ? '' : <button
      className="btn btn-primary mr-10 btn-black"
      onClick={decrement}
      >Previus Quote
      </button>}
      <button
      className="btn btn-primary btn-black"
      onClick={increment}
      > New Quote
      </button>
    </div>
  );
};

