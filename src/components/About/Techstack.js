import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJqueryLogo,
} from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { FaReact, FaRedoAlt } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus size={50} color="#00599C" />
        <p>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 size={50} color="#F7DF1E" />
        <p>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs size={50} color="#68A063" />
        <p>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb size={50} color="#4DB33D" />
        <p>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit size={50} color="#F1502F" />
        <p>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql size={50} color="#336791" />
        <p>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython size={50} color="#306998" />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo size={50} color="#0769AD" />
        <p>jQuery</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact size={50} color="#61dafb" />
        <p>React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRedoAlt size={50} color="#764abc" />
        <p>Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact size={50} color="#61dafb" />
        <p>Context API</p>
      </Col>
    </Row>
  );
}

export default Techstack;
