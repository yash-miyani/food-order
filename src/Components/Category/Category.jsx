import React from "react";
import { Col, Container, Row } from "reactstrap";
import categoryImg01 from "../../Assets/images/category-01.png";
import categoryImg02 from "../../Assets/images/category-02.png";
import categoryImg03 from "../../Assets/images/category-03.png";
import categoryImg04 from "../../Assets/images/category-04.png";
const CategoryData = [
  {
    display: "Fastfood",
    imgUrl: categoryImg01,
  },
  {
    display: "Pizza",
    imgUrl: categoryImg02,
  },
  {
    display: "Asian Food",
    imgUrl: categoryImg03,
  },
  {
    display: "Row Meat",
    imgUrl: categoryImg04,
  },
];
export default function Category() {
  return (
    <Container>
      <Row>
        {CategoryData.map((item, index) => {
          return (
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
              <div className="category__item d-flex align-items-center gap-3 mt-2">
                <div className="category_img">
                  <img src={item.imgUrl} alt={item.display}></img>
                </div>
                <h6>{item.display}</h6>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
