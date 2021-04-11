import React from "react";
import Receipt from "./Components/Receipt";
import Users from "./Components/Users";
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
        <Col style={{ borderStyle: "solid" }}>
          <Users />
        </Col>
        <Col style={{ borderStyle: "solid", height: "100%" }}>
          <Receipt />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
