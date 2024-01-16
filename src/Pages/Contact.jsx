import React from "react";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "./CommonSection/CommonSection";
import { Col, Container, Row } from "reactstrap";

const Contact = () => {
  return (
    <Helmet title={"Contact"}>
      <CommonSection title="Contact"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <iFrame
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59504.403879292135!2d72.86160736953126!3d21.23084760000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be045252851606f%3A0x60ae3ac0e942a81f!2sLa%20Milano%20Pizzeria!5e0!3m2!1sen!2sin!4v1701407793123!5m2!1sen!2sin"
                height="450"
                style={{ border: "0", width: "100%" }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </Col>
          </Row>
          <Row className=" mt-5 text-center">
            <Col lg="12" className="text-center">
              <form className="form">
                <div className="form__group">
                  <input type="text" placeholder="Enter Your Name"></input>
                </div>
                <div className="form__group">
                  <input type="text" placeholder="Enter Your Mail"></input>
                </div>
                <div className="form__group">
                  <textarea
                    rows={5}
                    type="text"
                    placeholder="Subject"
                  ></textarea>
                </div>
                <button type="submit" className="addtocart__btn">
                  Submit
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
