import React, { useState } from "react";
import CommonSection from "./CommonSection/CommonSection";
import Helmet from "../Components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
function Checkout() {
  const [enterName, setEntername] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [enterpostalCode, setPostalCode] = useState("");
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const Shippingcost = 30;
  const totalAmount = cartTotalAmount + Number(Shippingcost);
  const shippingInfo = [];
  const submitHandler = (e) => {
    e.preventDefault();
    const userShipping = {
      name: enterName,
      email: enterEmail,
      number: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalcode: enterpostalCode,
    };
    shippingInfo.push(userShipping);
    console.log(shippingInfo);
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => setEntername(e.target.value)}
                  ></input>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    onChange={(e) => setEnterEmail(e.target.value)}
                  ></input>
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    onChange={(e) => setEnterNumber(e.target.value)}
                  ></input>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    onChange={(e) => setEnterCountry(e.target.value)}
                  ></input>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    onChange={(e) => setEnterCity(e.target.value)}
                  ></input>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Postal Code"
                    onChange={(e) => setPostalCode(e.target.value)}
                  ></input>
                </div>
                <button className="addtocart__btn">Payment</button>
              </form>
            </Col>
            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between">
                  Shipping: <span>${Shippingcost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>{totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
export default Checkout;
