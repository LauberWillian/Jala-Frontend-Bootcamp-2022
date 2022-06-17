<<<<<<< HEAD
import react, { useEffect, useReducer, useState } from "react";
import jaguar from "../assets/jaguar.jpeg";
import "./main.scss";
import { loadProductsThunk, removeProduct } from "../redux/reducer/shopReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// const Secret = () => <h1>This is a secret component</h1>;

// const Default = () => <h1>This is the default stuff</h1>;

// const Main = (props) => {
//   if (props.show) {
//     return <Secret />;
//   } else {
//     return <Default />;
//   }
// };

// const Main = ({ show }) => <>{show ? <Secret /> : <Default />}</>;

const Main = () => {
  const [checked, setChecked] = useReducer((checked) => !checked, true);
  // const [checked, setChecked] = useState(true);
  const [data, setData] = useState([]);
  const products = useSelector((state) => state.persistedReducer.product.value);
  useEffect(() => {
    console.log("%c%s", "color: #00b300", checked);
  }, [checked]);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(dispatch(loadProductsThunk()));
  }, []);

  return (
    <section>
      <input
        type="checkbox"
        checked={checked}
        value={checked}
        onChange={setChecked}
      />

      <ul className="flex-container">
        {products?.map((product) => {
          // Return the element. Also pass key
          return (
            <li key={product.id} className="flex-item">
              {product.name} {" R$" + product.price}
              <br />
              <button onClick={() => dispatch(removeProduct(product))}>
                {" "}
                [x]
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Main;
=======
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Stock from "../pages/stock";
import About from "../pages/about";
import ExMain from "../pages/exMain";
import Counter from "../pages/counter";
import Store from "../pages/store";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Main() {
  return (
    <div style={{ marginTop: 80 }}>
      <Container fixed>
        <Box
          sx={{
            maxHeight: { xs: 200, sm: 300, md: 300, lg: 700 },
            minHeight: { xs: 200, sm: 300, md: 300, lg: 535 },
            maxWidth: { xs: 150, sm: 300, md: 600, lg: 1250 },
            minWidth: { xs: 150, sm: 300, md: 900, lg: 1250 },
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/ex" element={<ExMain />} />
          </Routes>
        </Box>
      </Container>
    </div>
  );
}
>>>>>>> upstream/main
