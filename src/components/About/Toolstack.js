import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  SiLeetcode,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     <Col xs={4} md={2} className="tech-icons link-light bg-success" as="a" href={"https://leetcode.com/jk2002/"} target="_blank" rel="noopener noreferrer">
        <SiLeetcode />
      </Col>
      <Col xs={4} md={2} className="tech-icons link-light bg-success" as="a" href={"https://github.com/Washeem2002"} target="_blank" rel="noopener noreferrer">
        <SiGithub />
      </Col>
     
    </Row>
  );
}

export default Toolstack;
