import { useState } from 'react';

export const useCounter = (initialState = 10) => {
 const [counter, setCounter] = useState(initialState);

 const increment = (mathValue) => {
    setCounter(counter + mathValue);
 };

 const decrement = (mathValue) => {
    setCounter(counter - mathValue);
 };

 const resetValue = () => {
    setCounter(initialState);
 };

return {
    counter,
    increment,
    decrement,
    resetValue,
}
};

