import React from "react";
import { Container } from "reactstrap";
import "./CommonSection.css";
export default function CommonSection(props) {
  return (
    <div>
      <section className="common__section">
        <Container>
          <h2 className="text-white">{props.title}</h2>
        </Container>
      </section>
    </div>
  );
}
