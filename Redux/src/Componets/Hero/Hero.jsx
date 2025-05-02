import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  multiply,
  reset,
} from "../../redux/counter/CounterSlice";

const Hero = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <button>{count}</button>
      <div>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        <button onClick={() => dispatch(multiply())}>*2</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  );
};

export default Hero;
