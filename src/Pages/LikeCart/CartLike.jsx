import React from "react";
import { ListGroup } from "reactstrap";

import CartLikeItem from "./CartLikeItem";
import { useDispatch, useSelector } from "react-redux";
import { likeUiActions } from "../../Store/LikeSlice/LikeSliceUi";

function CartLike() {
  const dispatch = useDispatch();
  const LikecartProducts = useSelector((state) => state.like.cartLike);

  const toggleLikeCart = () => {
    dispatch(likeUiActions.LikeToggle());
  };

  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close" onClick={toggleLikeCart}>
          <span>
            <i className="ri-close-fill"></i>
          </span>
        </div>
        <div className="cart__item-list">
          {LikecartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            LikecartProducts.map((item, index) => {
              return <CartLikeItem item={item} key={index}></CartLikeItem>;
            })
          )}
        </div>
      </ListGroup>
    </div>
  );
}

export default CartLike;
