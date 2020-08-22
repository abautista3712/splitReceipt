import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const tempUser = [1, 2, 3];

const Split = () => {
  const addUser = () => {
    return tempUser.push(4), (<Col>Test</Col>);
  };
  return (
    <Col>
      <Col>
        Users Listed Here
        {tempUser.map((userRow, index) => {
          return <Col>User {userRow}</Col>;
        })}
        <Col onClick={addUser}>Add User (+)</Col>
      </Col>
    </Col>
  );
};

export default Split;
