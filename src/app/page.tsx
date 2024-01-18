import { Container } from "reactstrap";
import Link from "next/link";
import React from "react";
import estilos from "./(styles-home)/Home.module.css";
export default async function Home() {
  return (
    <Container className={estilos.container}>
      <p className={estilos.texto}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id temporibus,
        adipisci dignissimos ad excepturi odio, eveniet reprehenderit ipsum odit
        blanditiis et, ipsa ut hic dicta expedita fugit nobis possimus quos.
      </p>
      <Link href="/cursos" className={estilos.link}>
        <button className={estilos.botao}>Ver cursos</button>
      </Link>
    </Container>
  );
}
