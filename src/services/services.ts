import { CursoInterface, DadosCursoType } from "@/types/types";

export const fetchCursos = async (): Promise<DadosCursoType> => {
  const dados = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/cursos`
  ).then((resp) => resp.json());
  return dados;
};

export const fetchCurso = async (
  id: string | number
): Promise<CursoInterface> => {
  const cursos: DadosCursoType = await fetchCursos();
  const curso = cursos.dados.find((elem) => elem.id == id)!;
  return curso;
};
