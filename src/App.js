import React from "react";
import Receipt from "./Components/Receipt";
import Split from "./Components/Split";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import logo from "./logo.svg";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Container>
      <Row>
        <Col style={{ borderStyle: "solid", height: "100px" }}>
          <Receipt />
        </Col>
        <Col style={{ borderStyle: "solid" }}>
          <Split />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
