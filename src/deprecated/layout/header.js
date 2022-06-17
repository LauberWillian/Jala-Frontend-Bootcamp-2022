import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const products = useSelector((state) => state.persistedReducer.product.value);

  return (
    <>
      <div
        style={{
          display: "grid",
          columnGap: 25,
          backgroundColor: "lightgreen",
          boxShadow: "10px 10px 5px grey",
        }}
      >
        <div
          style={{ display: "inline-grid", gridRowStart: 1, marginLeft: 40 }}
        >
          <h1>Store</h1>
        </div>

        <div style={{ display: "inline-grid", gridRowStart: 1 }}>
          <h2>
            <Link to="">Home</Link>
          </h2>
        </div>

        <div style={{ display: "inline-grid", gridRowStart: 1 }}>
          <h2>
            <Link to="store">Store</Link>
          </h2>
        </div>

        <div style={{ display: "inline-grid", gridRowStart: 1 }}>
          <h2>
            <Link to="about">About</Link>
          </h2>
        </div>

        <div style={{ display: "inline-grid", gridRowStart: 1 }}>
          <h2>
            <Link to="ex">Ex</Link>
          </h2>
        </div>

        <div style={{ display: "inline-grid", gridRowStart: 1 }}>
          <h2>
            <Link to="counter">Counter</Link>
          </h2>
        </div>
      </div>
      {/* <div>
        <h4>Here's the counter: {JSON.stringify(products)}</h4>
      </div> */}
    </>
  );
};

export default Header;
