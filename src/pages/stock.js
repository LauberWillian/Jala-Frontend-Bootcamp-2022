import React, { useContext } from "react";
import { StockContext } from "../App";

const Stock = () => {
  const { stock } = useContext(StockContext);

  return (
    <div
      style={{
        overflowY: "scroll",
        overflowX: "scroll",
        height: 400,
        borderColor: "green",
        borderStyle: "dashed",
        marginTop: 100,
        marginRight: 250,
      }}
    >
      <ul>
        {stock?.map((iten) => {
          return (
            <div key={iten.id}>
              <li>id: {iten.id}</li>
              <li>product:{iten.product} </li>
              <li>productId: {iten.productId}</li>
              <li>amount: {iten.amount}</li>
              <li>isAvailable: {iten.isAvailable.toString()}</li>
              <div
                style={{
                  marginTop: 15,
                  marginBottom: 15,
                  height: 3,
                  width: 100,
                  backgroundColor: "black",
                }}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Stock;
