import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/reducer/counterReducer";
export default function Counter() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
