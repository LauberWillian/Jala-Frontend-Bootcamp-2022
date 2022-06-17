import "./App.css";
import Main from "./layout/main";
import Footer from "./layout/footer";
import Header from "./layout/header";
import React, { useState, createContext, useEffect } from "react";

export const StockContext = createContext();

function App() {
  const [stock, setStock] = useState();

  let fetchStock = async () => {
    try {
      let response = await fetch("http://localhost:5289/api/Stock");
      response = await response.json();
      setStock(response);
    } catch (error) {}
  };

  // useEffect(() => {
  //   fetchStock();
  // }, []);

  return (
    <div>
      <StockContext.Provider value={{ stock }}>
        <Header />
        <Main />
        <Footer />
      </StockContext.Provider>
    </div>
  );
}

export default App;
