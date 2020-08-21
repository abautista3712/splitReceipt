import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LineItem from "./LineItem";

const Receipt = () => {
  return (
    <Col>
      Receipt Component Here
      <LineItem />
      <LineItem />
      <LineItem />
      <Row>
        <Col style={{ borderStyle: "solid" }} lg={{ span: 4, offset: 8 }}>
          Test
        </Col>
      </Row>
    </Col>
  );
};

export default Receipt;
