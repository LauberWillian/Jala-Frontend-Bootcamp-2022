import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadProductsThunk,
  removeProductThunk,
} from "../redux/reducer/shopReducer";

function Counter() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsThunk());
  });

  return (
    <div>
      <div>
        <h1>Counter</h1>
      </div>
      <div>
        <button
          style={{
            height: 150,
            width: 250,
            backgroundColor: "black",
            color: "green",
          }}
          onClick={() => dispatch(removeProductThunk({ id: 3 }))}
        >
          <h2>Click me!</h2>
        </button>
      </div>
    </div>
  );
}

export default Counter;
