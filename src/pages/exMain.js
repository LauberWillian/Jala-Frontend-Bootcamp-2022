import react, { useEffect, useReducer, useState } from "react";
import jaguar from "../assets/jaguar.jpeg";
import "./main.scss";
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

const ExMain = () => {
  const [checked, setChecked] = useReducer((checked) => !checked, true);
  // const [checked, setChecked] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("%c%s", "color: #00b300", checked);
  }, [checked]);

  useEffect(() => {
    fetch("http://localhost:5289/api/Products")
      .then((response) => response.json())
      .then(setData)
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("%c%s", "color: #1d5673", data);
  }, [data]);

  return (
    <section>
      <input
        type="checkbox"
        checked={checked}
        value={checked}
        onChange={setChecked}
      />

      {/*
          Create a component which receives
          the list of products and parse into a component 
          using loops to pass each object as props
      */}
      <ul class="flex-container">
        {data.map((product) => {
          console.log("Entered");
          // Return the element. Also pass key
          return (
            <li key={product.id} class="flex-item">
              {product.name} {" R$" + product.price}
              <br />
            </li>
          );
        })}
      </ul>

      <h3>This is an image</h3>
      <img src={jaguar} alt="This is a jaguar" />
    </section>
  );
};

export default ExMain;
