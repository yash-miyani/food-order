import React from "react";
import { ListGroupItem } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";

import { likeActions } from "../../Store/LikeSlice/LikeSlice.js";

function CartLikeItem({ item }) {
  const { id, title, price, image01, quantity } = item;

  const dispatch = useDispatch();

  const likeArray = useSelector((state) => state.like.cartLike);
  const findData = likeArray.find((el) => el.id === id);

  const addToLike = () => {
    dispatch(
      likeActions.addLike({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="product_01.1.jpg"></img>
        <div className="cart__product-info w-100 d-flex align-items-center justify-content-between gap-4">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>${price}</span>
            </p>
          </div>

          <span
            className="cart_icon delete_btn"
            style={{ cursor: "pointer" }}
            onClick={addToLike}
          >
            {findData?.isLike ? (
              <i className="ri-heart-fill fs-4 text-danger"></i>
            ) : (
              <i className="ri-heart-line fs-4 "></i>
            )}
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
}

export default CartLikeItem;
