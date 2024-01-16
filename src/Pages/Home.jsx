import React, { useState, useEffect } from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import { Link } from "react-router-dom";

// components import
import Helmet from "../Components/Helmet/Helmet";
import Category from "../Components/Category/Category";
import products from "../Assets/FakeData/fakeData";
import TestimonialSlider from "./Slider/TestimonialSlider";

// img import
import heroImg from "../Assets/images/hero.png";
import serviceImg1 from "../Assets/images/service-01.png";
import serviceImg2 from "../Assets/images/service-02.png";
import serviceImg3 from "../Assets/images/service-03.png";
import foodCategoryImg01 from "../Assets/images/hamburger.png";
import foodCategoryImg02 from "../Assets/images/pizza.png";
import foodCategoryImg03 from "../Assets/images/bread.png";
import ProductCart from "../Components/Category/ProductCard";
import whyImg from "../Assets/images/location.png";
import NetworkImg from "../Assets/images/network.png";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: serviceImg1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,doloremque.",
  },
  {
    title: "Super Dine In",
    imgUrl: serviceImg2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: serviceImg3,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,doloremque.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allproducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filterProduct = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filterProduct);
    }
    if (category === "PIZZA") {
      const filterProduct = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filterProduct);
    }
    if (category === "BREAD") {
      const filterProduct = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filterProduct);
    }
  }, [category]);

  // ============ Hot Pizza Effect ================
  const [hotPizza, setHotpizza] = useState([]);
  useEffect(() => {
    const filterPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filterPizza.slice(0, 4);
    setHotpizza(slicePizza);
  }, []);

  return (
    <Helmet title={"Home"}>
      {/* =================== Section 1 =================== */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br></br> food at{" "}
                  <span>your door</span>
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                {/* =========== Buttons =========== */}
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/foods" className="text-decoration-none">
                      See all foods
                    </Link>
                  </button>
                </div>
                {/* ============ */}
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>
                    100% Secure Checkout
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="Hero" className="w-100"></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ======================== Section 2 ========================== */}
      <Category />
      {/* ========================== Section 3 ========================= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.
              </p>
            </Col>
            {featureData.map((item, index) => {
              return (
                <Col lg="4" md="4" key={index} className="mt-5">
                  <div className="feature__item text-center px-5 py-3">
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className="w-25 mb3"
                    ></img>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      {/* ================= Section 4 (Product Profile) ================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={` ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } all_btn`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="burger"></img> Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="Pizza"></img> Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="Bread"></img> Bread
                </button>
              </div>
            </Col>
          </Row>
          <Row>
            {allproducts.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-5">
                <ProductCart item={item}></ProductCart>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* ==================== Section 5 =================== */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="Loaction" className="w-100"></img>
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">Why Tasty Treat?</h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                </p>
                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>Fresh and tasty
                      foods
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>Quality support
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>Order from any
                      location
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ================================ Section 6 ============================= */}
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((item) => {
              return (
                <Col lg="3" md="4" key={item.id}>
                  <ProductCart item={item}></ProductCart>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* ==================== Section 7 ================== */}
      <section>
        <Container>
          <Row>
            <Container></Container>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span>
                  are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>
                <TestimonialSlider></TestimonialSlider>
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={NetworkImg} alt="NetworkImg" className="w-100"></img>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
