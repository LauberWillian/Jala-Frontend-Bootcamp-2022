import "./App.css";
import Footer from "./layout/footer";
import Header from "./layout/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Grape from "./routes/grape/grape.component";
import Potatos from "./routes/potatos/potatos.component";
import Sign from "./routes/sign/sign.component";
import Counter from "./routes/counter/counter.component";
// import Banana from "./src/pages/fruits";
import Potato from "./pages/potato";
import Store from "./pages/store";
import ExMain from "./pages/store";
import About from "./pages/about";
import { NotFound } from "./pages/notFound";

function App() {
  const show = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<ExMain />} />
          <Route path="/ex" element={<ExMain />} />
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/grape" element={<Grape />} />
          <Route path="/potatos" element={<Potatos />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/counter" element={<Counter></Counter>} />
          <Route path="/store" element={<Store />}>
            {/* <Route path="fruits" element={<Banana />} /> */}
            <Route path="potato" element={<Potato />} />
          </Route>
          <Route path="/counter" element={<Counter />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/potatos" element={<Potatos />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
