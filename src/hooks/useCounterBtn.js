import { useState } from 'react';

export const useCounterBtn = (initialState = 1) => {
 const [counter, setCounter] = useState(initialState);

 const increment = () => {
    setCounter(counter + 1);
 };

 const decrement = () => {
    setCounter(counter - 1);
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

