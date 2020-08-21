import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LineItem = () => {
  return (
    <Row>
      <Col style={{ borderStyle: "solid" }} xs={8} sm={8} md={8} lg={8} xl={8}>
        Line Item
      </Col>
      <Col style={{ borderStyle: "solid" }}>Price</Col>
    </Row>
  );
};

export default LineItem;
