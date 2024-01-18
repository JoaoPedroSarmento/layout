import CardCurso from "@/components/CardCurso/CardCurso";
import { Container } from "reactstrap";
import { fetchCursos } from "@/services/services";
import { DadosCursoType } from "@/types/types";
import { NextPage } from "next";

const pageCursos: NextPage = async () => {
  const cursos: DadosCursoType = await fetchCursos();
  const estilosContainer: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Container style={estilosContainer}>
      {cursos.dados.map((curso) => (
        <CardCurso curso={curso} />
      ))}
    </Container>
  );
};

export default pageCursos;
