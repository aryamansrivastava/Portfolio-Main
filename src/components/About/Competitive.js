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
        <a href="https://www.codechef.com/users/aryaman_sri" target="_blank" rel="noopener noreferrer">
          <SiCodechef style={{ color: "white" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://codeforces.com/profile/aryaman_sri" target="_blank" rel="noopener noreferrer">
          <SiCodeforces style={{ color: "white" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://leetcode.com/u/aryamansrivastava/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode style={{ color: "white" }} />
        </a>
      </Col>
    </Row>
  );
}

export default Competitive;
