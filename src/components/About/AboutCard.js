import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Olá, pessoal! Eu sou <span className="purple">Claudinei Moreira</span> de <span className="purple">Lavras, MG</span>.
          <br />
          Atualmente, estou trabalhando como Desenvolvedor Full Stack na <span className="purple">Agência Zetta</span>.
          <br />
          Sou formado em <span className="purple">Ciências da Computação pela UFLA</span>, com experiência em desenvolvimento de aplicações web, atuando principalmente com <span className="purple">ReactJS</span>, <span className="purple">Django</span> e <span className="purple">Python</span>.
          <br />
          <br />
          Além de programar, também adoro explorar novas tecnologias e me manter atualizado com as últimas tendências em desenvolvimento web!
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight />  Desenvolvimento Web de Geo-Tecnologias
          </li>
          <li className="about-activity">
            <ImPointRight />  Contribuição para Projetos Open Source
          </li>
        </ul>
      </blockquote>
    </Card.Body>
  </Card>
  );
}

export default AboutCard;
