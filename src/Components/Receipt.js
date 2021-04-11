import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Line_Item from "./Line_Item";

const Receipt = () => {
  return (
    <Col>
      Receipt Component Here
      <Line_Item />
      <Line_Item />
      <Line_Item />
      <Row>
        <Col style={{ borderStyle: "solid" }} lg={{ span: 4, offset: 8 }}>
          Test
        </Col>
      </Row>
    </Col>
  );
};

export default Receipt;
