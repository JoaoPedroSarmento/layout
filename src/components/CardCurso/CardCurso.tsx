import { CursoInterface } from "@/interface/interface";
import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import Link from "next/link";
import estilos from "./CardEstilos.module.css";
export default function CursoCard({ curso }: { curso: CursoInterface }) {
  const { id, titulo, instrutor, duracao } = curso;

  return (
    <Card className={estilos.card}>
      <CardBody
        style={{
          display: "grid",
        }}
      >
        <CardTitle className={estilos.cardTitle}>{titulo}</CardTitle>

        <CardText className={estilos.cardText}>
          <strong style={{ color: "#fff" }}>ID:</strong> {id}
        </CardText>
        <CardText className={estilos.cardText}>
          <strong style={{ color: "#fff" }}>Instrutor:</strong> {instrutor}
        </CardText>
        <CardText className={estilos.cardText}>
          <strong style={{ color: "#fff" }}>Duração:</strong> {duracao}
        </CardText>

        <button className={estilos.button}>
          <Link href={`/cursos/${curso.id}`} className={estilos.link}>
            Saiba Mais
          </Link>
        </button>
      </CardBody>
    </Card>
  );
}
