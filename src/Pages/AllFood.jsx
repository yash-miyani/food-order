import React, { useState } from "react";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Pages/CommonSection/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../Assets/FakeData/fakeData";
import ProductCard from "../Components/Category/ProductCard";
import ReactPaginate from "react-paginate";
export default function Allfood() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = products.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(products.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="Allfoods">
      <CommonSection title="All Foods"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search__widget d-flex align-items-center justify-contentbetween w-50">
                <input
                  type="text"
                  placeholder="I'm looking for....."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                ></input>
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {displayPage
              .filter((item) => {
                if (searchTerm.value === "") {
                  return item;
                }
                if (
                  item.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <Col
                    lg="3"
                    md="4"
                    sm="6"
                    xs="6"
                    key={item.id}
                    className="mb-4"
                  >
                    <ProductCard item={item}></ProductCard>
                  </Col>
                );
              })}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns
"
              ></ReactPaginate>
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
