import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCodechef,
  SiCodeforces,
  SiLeetcode,
} from "react-icons/si";

function Competitive() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodechef />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodeforces />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLeetcode />
      </Col>
    </Row>
  );
}

export default Competitive;
