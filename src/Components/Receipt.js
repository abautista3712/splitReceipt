import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Receipt = () => {
  return (
    <Col>
      Receipt Component Here
      <Row>
        <Col
          style={{ borderStyle: "solid" }}
          xs={8}
          sm={8}
          md={8}
          lg={8}
          xl={8}
        >
          Line Item
        </Col>
        <Col style={{ borderStyle: "solid" }}>Price</Col>
      </Row>
      <Row>
        <Col style={{ borderStyle: "solid" }} lg={{ span: 4, offset: 8 }}>
          Test
        </Col>
      </Row>
    </Col>
  );
};

export default Receipt;
