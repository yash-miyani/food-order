import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../Store/CartSlice/CartSlice";
import { likeActions } from "../../Store/LikeSlice/LikeSlice";

export default function ProductCart(props) {
  const { id, title, image01, price } = props.item;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

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
    <div className="product__item mt-5 mt-lg-0">
      <div className="product__img">
        <Link to={`/foods/${id}`}>
          <img src={image01} alt="Product Img" className="w-50"></img>
        </Link>
      </div>
      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          <button className="addtocart__btn" onClick={addToCart}>
            Add to Cart
          </button>
          <div onClick={addToLike}>
            {findData?.isLike ? (
              <i className="ri-heart-fill fs-3 text-danger"></i>
            ) : (
              <i className="ri-heart-line fs-3"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
