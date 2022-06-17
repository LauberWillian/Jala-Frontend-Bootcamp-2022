import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/reducer/shopReducer";

function Store() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});

  return (
    <>
      <h1>Store</h1>
      <div style={{ display: "block" }}>
        <Link to="products">List of Products</Link>
      </div>
      <div>
        <h2>Add product</h2>
        <ul>
          <li>
            <input
              style={{
                marginTop: 8,
                backgroundColor: "black",
                color: "green",
                fontSize: 18,
                fontWeigth: "bold",
                borderRadius: 5,
                borderBlockWidth: 3,
              }}
              label="id"
              placeholder="id"
              type="text"
              value={product.id}
              onChange={(event) =>
                setProduct({ ...product, id: event.target.value })
              }
            />
          </li>
          <li>
            <input
              style={{
                marginTop: 8,
                backgroundColor: "black",
                color: "green",
                fontSize: 18,
                fontWeigth: "bold",
                borderRadius: 5,
                borderBlockWidth: 3,
              }}
              label="name"
              placeholder="name"
              type="text"
              value={product.name}
              onChange={(event) =>
                setProduct({ ...product, name: event.target.value })
              }
            />
          </li>
          <li>
            <input
              style={{
                marginTop: 8,
                backgroundColor: "black",
                color: "green",
                fontSize: 18,
                fontWeigth: "bold",
                borderRadius: 5,
                borderBlockWidth: 3,
              }}
              label="quantity"
              placeholder="quantity"
              type="text"
              value={product.quantity}
              onChange={(event) =>
                setProduct({ ...product, quantity: event.target.value })
              }
            />
          </li>
          <button
            style={{
              marginTop: 8,
              marginLeft: 50,
              backgroundColor: "black",
              color: "green",
              fontSize: 18,
              fontWeigth: "bold",
              borderRadius: 5,
              borderBlockWidth: 3,
            }}
            onClick={() => dispatch(addProduct(product))}
          >
            Add Product
          </button>
        </ul>
      </div>
      <h2>{JSON.stringify(product)}</h2>
      <Outlet />
    </>
  );
}

export default Store;
