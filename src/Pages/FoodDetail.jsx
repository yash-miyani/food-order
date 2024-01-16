import React, { useEffect, useState } from "react";
import products from "../Assets/FakeData/fakeData";
import { useParams } from "react-router-dom";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "./CommonSection/CommonSection";
import { Col, Container, Row } from "reactstrap";
import ProductCart from "../Components/Category/ProductCard";
import { cartActions } from "../Store/CartSlice/CartSlice";
import { useDispatch } from "react-redux";
// import ProductImg from '../assets/images/product_01.1.jpg'
export default function FoodDetail() {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;
  const relatedProduct = products.filter((item) => category === item.category);
  useEffect(() => {
    setPreviewImg(product.image01);
    window.scrollTo(0, 0);
  }, [product]);

  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };
  return (
    <Helmet title="Product Detail">
      <CommonSection title={title}></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50"></img>
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-50"></img>
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-50"></img>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100"></img>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title">{title}</h2>
                <p className="product__price">
                  Price:<span className="product__price">${price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>
                <button className="addtocart__btn">Add to Cart</button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-2">
                <h6
                  className={`${tab === "desc" ? "tab__active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "review" ? "tab__active" : ""}`}
                  onClick={() => setTab("review")}
                >
                  Review
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form">
                  <div className="review">
                    <p className="user__name mb-0">Dhruvi</p>
                    <p className="user__email">dhruvi@gmail.com</p>
                    <p className="feedback__text">Great Product</p>
                  </div>
                  <div className="review">
                    <p className="user__name mb-0">Dhruvi</p>
                    <p className="user__email">dhruvi@gmail.com</p>
                    <p className="feedback__text">Great Product</p>
                  </div>
                  <div className="review">
                    <p className="user__name mb-0">Dhruvi</p>
                    <p className="user__email">dhruvi@gmail.com</p>
                    <p className="feedback__text">Great Product</p>
                  </div>
                  <form className="form">
                    <div className="form__group">
                      <input type="text" placeholder="Enter Your Name"></input>
                    </div>
                    <div className="form__group">
                      <input type="text" placeholder="Enter Your Name"></input>
                    </div>
                    <div className="form__group">
                      <textarea
                        rows={5}
                        type="text"
                        placeholder="Enter Your Name"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="addtocart__btn"
                      onClick={addItem}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>
            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>
            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCart item={item}></ProductCart>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
