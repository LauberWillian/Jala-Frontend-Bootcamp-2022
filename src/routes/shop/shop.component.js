import { Outlet, Link } from "react-router-dom";
import { ReactComponent as ShopLogo } from "../../assets/loja.svg";
import Main from "../../layout/main.js";
const Shop = () => {
  return (
    <div>
      <Link className="nav-link" to="/potatos">
        <div> Potatos</div>
      </Link>
      <Link className="nav-link" to="/grape">
        <div> Grapes</div>
      </Link>
    </div>
  );
};

export default Shop;
