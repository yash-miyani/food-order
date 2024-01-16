import React from "react";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "./CommonSection/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/CartSlice/CartSlice";
import { Link } from "react-router-dom";
export default function Cart() {
  const cartItem = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItem.length === 0 ? (
                <h5 className="text-center">Your Cart is Empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItem.map((item) => (
                      <Tr item={item} key={item.id}></Tr>
                    ))}
                  </tbody>
                </table>
              )}
              <div>
                <h6>
                  Subtotal :
                  <span className="cart__subtotal">${totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="addtocart__btn me-4">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>
                  <button className="addtocart__btn">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center align-middle" style={{ width: "100px" }}>
        <img src={image01} alt="" style={{ width: "100%" }}></img>
      </td>
      <td className="text-center align-middle">{title}</td>
      <td className="text-center align-middle">${price}</td>
      <td className="text-center align-middle">{quantity}px</td>
      <td className="text-center align-middle cart__item-del">
        <i class="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};
