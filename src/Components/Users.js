import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const tempUser = [1, 2, 3];

const User = () => {
  useEffect(() => {
    console.log("useEffect has been called");
  }, [tempUser]);

  const addUser = () => {
    return console.log(tempUser), tempUser.push(tempUser.length + 1);
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

export default User;
