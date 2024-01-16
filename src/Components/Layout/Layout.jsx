import React from "react";
import Routers from "../../Routes/Routers";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Carts from "../../Pages/Cart/Carts";
import { useSelector } from "react-redux";
import CartLike from "../../Pages/LikeCart/CartLike";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  const showLikeCart = useSelector((state) => state.likeUi.LikeVisible);
  return (
    <div>
      <Header />
      {showCart ? <Carts /> : null}
      {showLikeCart ? <CartLike /> : null}
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
