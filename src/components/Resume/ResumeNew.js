import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/Claudinei_Moreira.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [pag, setPag] = useState(1);
  const [totalPages, setTotalPages] = useState(null); // Armazenar o número total de páginas
  const [width, setWidth] = useState(1200);

  // Atualiza o tamanho da tela quando a largura mudar
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Função para ir para a próxima página
  const goToNextPage = () => {
    setPag(prevPage => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  // Função para voltar para a página anterior
  const goToPreviousPage = () => {
    setPag(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };

  // Função para configurar o total de páginas quando o PDF for carregado
  const onDocumentLoadSuccess = ({ numPages }) => {
    setTotalPages(numPages); // Armazena o número total de páginas
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ display: "flex", justifyContent: "center" }}>
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            onLoadSuccess={onDocumentLoadSuccess} // Chama a função ao carregar o PDF
          >
            <Page pageNumber={pag} scale={width > 786 ? 1.4 : 0.6} />
          </Document>
        </Row>

        {/* Botões para navegação */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
            variant="secondary"
            onClick={goToPreviousPage}
            disabled={pag === 1}
            style={{ width: "100%", maxWidth: "250px" }}
          >
            Página Anterior
          </Button>
          &nbsp;
          <Button
            variant="primary"
            onClick={goToNextPage}
            disabled={pag === totalPages}
            style={{ width: "100%", maxWidth: "250px" }}
          >
            Próxima Página
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
