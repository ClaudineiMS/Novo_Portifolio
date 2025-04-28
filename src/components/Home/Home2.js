import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> APRESENTAÇÃO </span>
            </h1>
            <p className="home-about-body">
              Meu nome é Claudinei Moreira e sou apaixonado por tecnologia e
              desenvolvimento de software.
              <br />
              <br />
              Tenho domínio de linguagens e frameworks como
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, ReactJS, Python e Django.{" "}
                </b>
              </i>
              <br />
              <br />
              Tenho interesse especial no desenvolvimento de novas&nbsp;
              <i>
                <b className="purple">Tecnologias Web e Produtos Inovadores</b>
              </i>
              , além de soluções relacionadas à&nbsp;
              <i>
                <b className="purple">
                  integração de dados espaciais e APIs REST.
                </b>
              </i>
              <br />
              <br />
              Sempre que possível, aplico minha paixão por tecnologia
              desenvolvendo produtos com&nbsp;
              <b className="purple">Node.js</b> e utilizando&nbsp;
              <i>
                <b className="purple">Frameworks modernos de JavaScript</b>
              </i>
              &nbsp;como
              <i>
                <b className="purple"> React.js e Next.js.</b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTATO</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ClaudineiMS"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/claudinei-moreira-cm/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
