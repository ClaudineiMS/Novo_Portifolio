import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Grafico from "../../Assets/Projects/Grafico.png";
import Energia from "../../Assets/Projects/Energia.png";
import pacientes from "../../Assets/Projects/pacientes.png";
import CRUD from "../../Assets/Projects/CRUD.png";
import Memoria from "../../Assets/Projects/memoria.png";
import SIG from "../../Assets/Projects/SIG.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Meus projetos <strong className="purple">recentes </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Grafico}
              isBlog={false}
              title="Gráficos"
              description="Aplicação responsável por gerar dois tipos distintos de gráficos — um de barras e outro de pizza — utilizando a biblioteca Chart.js. O gráfico de barras apresenta a quantidade de municípios existentes em cada estado, enquanto o gráfico de pizza exibe o número de microregiões por estado."
              ghLink="https://github.com/ClaudineiMS/Graficos"
              demoLink="https://graficos-lake.vercel.app/"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Energia}
              isBlog={false}
              title="Energia"
              description="Aplicação responsável por listar um conjunto de fornecedores capazes de atender a um determinado consumo de energia informado pelo usuário. O desenvolvimento foi realizado com base em um desafio técnico que envolvia tanto o front-end quanto o back-end. O front-end consiste em um código React simples, enquanto o back-end foi implementado em Python, utilizando GraphQL para a disponibilização dos dados. A aplicação recebe o consumo total de energia informado pelo usuário e retorna a lista de fornecedores aptos a atendê-lo."              ghLink="https://github.com/ClaudineiMS/FrontEnd?tab=readme-ov-file"
              demoLink="https://front-end-dusky-iota.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pacientes}
              isBlog={false}
              title="Gerenciador de paciêntes"
              description="Aplicação destinada ao gerenciamento de cadastros de pacientes, contando com um sistema de autenticação simples e um CRUD para administrar os registros de pacientes no sistema."
              ghLink="https://github.com/ClaudineiMS/Gerenciador_de_pacientes"
              demoLink="https://gerenciador-de-pacientes-drab.vercel.app/listar"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CRUD}
              isBlog={false}
              title="CRUD"
              description="Um CRUD que permite a criação de usuários e grupos e a vinculação dos usuários aos grupos criados."
              ghLink="https://github.com/ClaudineiMS/CRUD-Django-Rest-Framework"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Memoria}
              isBlog={false}
              title="Jogo da memória"
              description="Jogo da memória envolvendo objetos, imagens e utensílios relacionados à cultura afro-brasileira. Este quebra-cabeça foi desenvolvido como parte de um trabalho acadêmico em uma disciplina de graduação. O objetivo era criar um jogo simples, que pudesse ser apresentado a crianças e, ao mesmo tempo, funcionasse como uma ferramenta educativa que valorizasse a cultura afro-brasileira."
              ghLink="https://github.com/ClaudineiMS/Jogo-da-mem-ria"
              demoLink="https://jogo-da-mem-ria-sandy.vercel.app/"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SIG}
              isBlog={false}
              title="SIG"
              description="Pequeno Sistema de Informação Geográfica com uma camada carregada, que implementa algumas funcionalidades básicas, tais como: recuperação de dados ao clicar em um ponto da camada, exibição de uma tabela de atributos para listar todos os dados da camada e sobreposição de um grid de coordenadas no mapa."
              ghLink="https://github.com/ClaudineiMS/SIG"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
