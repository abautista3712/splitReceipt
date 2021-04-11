import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const Line_Item = () => {
  return (
    <Row>
      <Col
        style={{ borderStyle: "solid" }}
        xs={8}
        sm={8}
        md={8}
        lg={8}
        xl={8}
      ></Col>
      <Col style={{ borderStyle: "solid" }}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Amount (to the nearest dollar)" />
          {/* <InputGroup.Append>
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup.Append> */}
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Line_Item;
