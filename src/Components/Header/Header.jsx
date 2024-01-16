import React, { useRef } from "react";
import { Container } from "reactstrap";
import logo from "../../Assets/images/res-logo.png";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../Store/CartSliceUi/CartSliceUi";
import { likeUiActions } from "../../Store/LikeSlice/LikeSliceUi";

const nav__link = [
  { display: "Home", path: "/home" },
  { display: "Foods", path: "/foods" },
  { display: "Cart", path: "/cart" },
  { display: "Contact", path: "/contact" },
];

const Header = () => {
  const menuRef = useRef(null);

  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const toggleCartLike = () => {
    dispatch(likeUiActions.LikeToggle());
  };

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
  };

  const quantity = useSelector((state) => state.cart.totalQuantity);
  const likes = useSelector((state) => state.like.totalLikes);

  return (
    <header className="header">
      <Container>
        {/* =========== Logo ========= */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo"></img> <h5>Tasty Treat</h5>
          </div>
          {/* ============= MENU =========== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__link.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* ============= Nav Icon Right */}
          <div className="nav__right d-flex align-items-center gap-3">
            {/* Cart Icon */}
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{quantity}</span>
            </span>

            {/* Heart Icon */}
            <span className="cart__icon" onClick={toggleCartLike}>
              <i className="ri-heart-line"></i>
              <span className="cart__badge">{likes}</span>
            </span>

            {/* Login Icon */}
            <span className="user">
              <Link to="/login" className="text-decoration-none">
                <i className="ri-user-line"></i>
              </Link>
            </span>
            {/* Mobile Icon */}
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
